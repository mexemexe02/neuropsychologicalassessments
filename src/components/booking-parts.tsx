import { ArrowRight, Calendar } from "./icons";

type SummaryProps = {
  service: string;
  method: string;
  date?: string;
  time: string;
};

export function BookingSummary({ service, method, date, time }: SummaryProps) {
  return (
    <div className="booking-summary">
      <Calendar />
      <p>
        <strong>{date} at {time}</strong>
        <span>{service} · {method} · 15 minutes</span>
      </p>
    </div>
  );
}

type ActionsProps = {
  back: () => void;
  next?: () => void;
  disabled?: boolean;
  label: string;
  submit?: boolean;
};

export function BookingActions({
  back,
  next,
  disabled,
  label,
  submit,
}: ActionsProps) {
  return (
    <div className="booking-actions">
      <button type="button" className="text-link" onClick={back}>Back</button>
      <button
        type={submit ? "submit" : "button"}
        className="button"
        disabled={disabled}
        onClick={next}
      >
        {label} <ArrowRight />
      </button>
    </div>
  );
}
