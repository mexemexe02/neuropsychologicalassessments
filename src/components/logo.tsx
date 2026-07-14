import Link from "next/link";
import { site } from "@/lib/site";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className={`brand-lockup ${light ? "brand-lockup--light" : ""}`}
      aria-label={`${site.name} home`}
    >
      {/* TEMP wordmark — replace when Sebastian sends the practice logo. */}
      <svg
        className="brand-mark"
        viewBox="0 0 44 44"
        role="img"
        aria-label=""
      >
        <circle cx="22" cy="22" r="20.75" />
        <path d="M14 26.3c2.8-7.5 8.1-11.5 16-12.1" />
        <path d="M14.2 28.6c5.6.9 10.8-.7 15.6-4.7" />
        <circle cx="17" cy="19" r="1.2" className="brand-mark__dot" />
      </svg>
      <span>
        <strong>Neuropsychological</strong>
        <small>Assessments</small>
      </span>
    </Link>
  );
}
