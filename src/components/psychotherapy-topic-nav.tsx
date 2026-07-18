import Link from "next/link";
import { psychotherapyTopicLinks } from "@/lib/content-sebastian-july18";

/** Secondary tabs under Psychotherapy — featured focus pages Sebastian requested. */
export function PsychotherapyTopicNav({
  active,
}: {
  active: (typeof psychotherapyTopicLinks)[number]["id"];
}) {
  return (
    <nav className="topic-nav" aria-label="Psychotherapy topics">
      <div className="shell topic-nav__inner">
        {psychotherapyTopicLinks.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={active === item.id ? "is-active" : undefined}
            aria-current={active === item.id ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
