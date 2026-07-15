"use client";

import { useState, type FormEvent } from "react";
import { useDemoNotice } from "./demo-notice";
import { ArrowRight, Check } from "./icons";
import { demoNotices } from "@/lib/demo-notices";

const serviceOptions = [
  "Neuropsychological assessment",
  "Psychotherapy",
  "Not sure yet",
] as const;

/**
 * Option A booking: consultation request form with phone/email follow-up.
 * No live calendar until a later integration.
 */
export function ConsultationForm() {
  const { showDemoNotice } = useDemoNotice();
  const [done, setDone] = useState(false);
  const [service, setService] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setDone(true);
    showDemoNotice(demoNotices.booking);
  }

  if (done) {
    return (
      <section
        id="request"
        className="contact-booking"
        aria-label="Free consultation request"
      >
        <div className="form-success" role="status" aria-live="polite">
          <span className="form-success__icon">
            <Check />
          </span>
          <p className="eyebrow">Preview only</p>
          <h2>Request not sent yet</h2>
          <p>
            This preview does not transmit or store your details. Once practice
            messaging is connected, this form will notify the clinic for a
            phone or email follow-up. For now, call or text 705-321-8146 or
            email the practice directly.
          </p>
          <button
            type="button"
            className="text-link"
            onClick={() => {
              setDone(false);
              setService("");
            }}
          >
            Start another request <ArrowRight />
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      id="request"
      className="contact-booking"
      aria-label="Free consultation request"
    >
      <header className="booking-header">
        <div>
          <p className="eyebrow">Free 15-minute consultation</p>
          <h2>Request a conversation.</h2>
        </div>
      </header>

      <form className="booking-step booking-details" onSubmit={handleSubmit}>
        <p className="lead" style={{ marginBottom: "1.5rem" }}>
          Share a short, non-sensitive note about what you are looking for. We
          will follow up by phone or email to discuss fit, availability, and
          next steps.
        </p>

        <fieldset>
          <legend>What are you hoping to discuss?</legend>
          <div className="choice-grid">
            {serviceOptions.map((title) => (
              <button
                key={title}
                type="button"
                className={`choice-card ${service === title ? "is-selected" : ""}`}
                aria-pressed={service === title}
                onClick={() => setService(title)}
              >
                <strong>{title}</strong>
              </button>
            ))}
          </div>
        </fieldset>

        <div className="field-row">
          <label>
            <span>Your name</span>
            <input aria-label="Your name" name="name" required />
          </label>
          <label>
            <span>Email address</span>
            <input
              aria-label="Email address"
              name="email"
              type="email"
              required
            />
          </label>
        </div>
        <label>
          <span>Phone number</span>
          <input aria-label="Phone number" name="phone" type="tel" required />
        </label>
        <label>
          <span>Brief note (optional)</span>
          <textarea
            aria-label="Brief note"
            name="note"
            rows={4}
            placeholder="Avoid detailed personal health information."
          />
        </label>
        <input type="hidden" name="service" value={service} />
        <p className="form-note">
          Please do not include sensitive health information. Submitting a
          request does not establish a clinician–client relationship.
        </p>
        <button
          type="submit"
          className="button button--wide"
          disabled={!service}
        >
          Submit consultation request <ArrowRight />
        </button>
      </form>
    </section>
  );
}
