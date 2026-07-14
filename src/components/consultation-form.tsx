"use client";

import { useState, type FormEvent } from "react";
import { useDemoNotice } from "./demo-notice";
import { ArrowRight, Calendar, Check, Phone } from "./icons";
import { BookingActions, BookingSummary } from "./booking-parts";
import { demoNotices } from "@/lib/demo-notices";

type BookingStep = "service" | "schedule" | "details" | "done";

const services = [
  ["Assessment questions", "Learn whether a neuropsychological assessment may fit."],
  ["Psychotherapy", "Discuss therapy needs, goals, and clinician fit."],
  ["Not sure yet", "Share what brings you here and we’ll help clarify."],
] as const;

const meetingMethods = [
  ["Phone call", "We’ll call the number you provide."],
  ["Video call", "A secure link will be provided after booking."],
] as const;

const times = ["9:00 AM", "10:30 AM", "1:00 PM", "2:30 PM", "4:00 PM"];

function createPreviewDates() {
  const dates = [];
  const cursor = new Date();
  cursor.setHours(12, 0, 0, 0); // noon avoids DST / UTC day-boundary quirks
  cursor.setDate(cursor.getDate() + 1);
  while (dates.length < 5) {
    if (cursor.getDay() !== 0 && cursor.getDay() !== 6) {
      // Use local calendar fields — toISOString() is UTC and can shift the day.
      const year = cursor.getFullYear();
      const month = String(cursor.getMonth() + 1).padStart(2, "0");
      const day = String(cursor.getDate()).padStart(2, "0");
      dates.push({
        value: `${year}-${month}-${day}`,
        weekday: cursor.toLocaleDateString("en-CA", { weekday: "short" }),
        month: cursor.toLocaleDateString("en-CA", { month: "short" }),
        day: cursor.getDate(),
        full: cursor.toLocaleDateString("en-CA", {
          weekday: "long",
          month: "long",
          day: "numeric",
        }),
      });
    }
    cursor.setDate(cursor.getDate() + 1);
  }
  return dates;
}

export function ConsultationForm() {
  const { showDemoNotice } = useDemoNotice();
  const [step, setStep] = useState<BookingStep>("service");
  const [service, setService] = useState("");
  const [method, setMethod] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [dates] = useState(createPreviewDates);
  const selectedDate = dates.find((item) => item.value === date);
  const stepNumber = step === "service" ? 1 : step === "schedule" ? 2 : 3;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStep("done");
    // Popup explains this step still needs a live booking platform.
    showDemoNotice(demoNotices.booking);
  }

  function reset() {
    setStep("service");
    setService("");
    setMethod("");
    setDate("");
    setTime("");
  }

  return (
    <section
      className="contact-booking"
      aria-label="Free consultation booking"
    >
      {/* BOOKING_ADAPTER: Connect this UI to Jane App or Schedulo after selection. */}
      {step !== "done" && (
        <header className="booking-header">
          <div>
            <p className="eyebrow">Free 15-minute consultation</p>
            <h2>Choose a time that works.</h2>
          </div>
          <span>Step {stepNumber} of 3</span>
        </header>
      )}

      {step === "service" && (
        <div className="booking-step">
          <fieldset>
            <legend>What would you like to discuss?</legend>
            <div className="choice-grid">
              {services.map(([title, text]) => (
                <button
                  key={title}
                  type="button"
                  className={`choice-card ${service === title ? "is-selected" : ""}`}
                  aria-pressed={service === title}
                  onClick={() => setService(title)}
                >
                  <strong>{title}</strong><small>{text}</small>
                </button>
              ))}
            </div>
          </fieldset>
          <fieldset>
            <legend>How would you like to connect?</legend>
            <div className="method-grid">
              {meetingMethods.map(([title, text]) => (
                <button
                  key={title}
                  type="button"
                  className={`method-card ${method === title ? "is-selected" : ""}`}
                  aria-pressed={method === title}
                  onClick={() => setMethod(title)}
                >
                  {title === "Phone call" ? <Phone /> : <Calendar />}
                  <span><strong>{title}</strong><small>{text}</small></span>
                </button>
              ))}
            </div>
          </fieldset>
          <button
            type="button"
            className="button button--wide"
            disabled={!service || !method}
            onClick={() => setStep("schedule")}
          >
            Continue to date and time <ArrowRight />
          </button>
        </div>
      )}

      {step === "schedule" && (
        <div className="booking-step">
          <fieldset>
            <legend>Choose a date</legend>
            <div className="date-grid">
              {dates.map((item) => (
                <button
                  key={item.value}
                  type="button"
                  className={`booking-date ${date === item.value ? "is-selected" : ""}`}
                  aria-pressed={date === item.value}
                  onClick={() => { setDate(item.value); setTime(""); }}
                >
                  <small>{item.weekday}</small><strong>{item.day}</strong><small>{item.month}</small>
                </button>
              ))}
            </div>
          </fieldset>
          <fieldset>
            <legend>Choose a time <small>Eastern Time</small></legend>
            <div className="time-grid">
              {times.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={time === item ? "is-selected" : ""}
                  aria-pressed={time === item}
                  onClick={() => setTime(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </fieldset>
          <BookingActions
            back={() => setStep("service")}
            next={() => setStep("details")}
            disabled={!date || !time}
            label="Continue to your details"
          />
        </div>
      )}

      {step === "details" && (
        <form className="booking-step booking-details" onSubmit={handleSubmit}>
          <BookingSummary service={service} method={method} date={selectedDate?.full} time={time} />
          <div className="field-row">
            <label><span>Your name</span><input aria-label="Your name" required /></label>
            <label><span>Email address</span><input aria-label="Email address" type="email" required /></label>
          </div>
          <label><span>Phone number</span><input aria-label="Phone number" type="tel" required /></label>
          <p className="form-note">Please do not include sensitive health information. Preview only.</p>
          <BookingActions back={() => setStep("schedule")} label="Preview booking confirmation" submit />
        </form>
      )}

      {step === "done" && (
        <div className="form-success" role="status" aria-live="polite">
          <span className="form-success__icon"><Check /></span>
          <p className="eyebrow">Consultation selected</p>
          <h2>Your consultation time is ready.</h2>
          <BookingSummary service={service} method={method} date={selectedDate?.full} time={time} />
          <p>No information was sent or stored. The live integration will confirm the booking and send calendar details.</p>
          <button type="button" className="text-link" onClick={reset}>
            Start again <ArrowRight />
          </button>
        </div>
      )}
    </section>
  );
}
