import Link from "next/link";
import { assessmentTopicLinks } from "@/lib/content-sebastian-july18";

/** Secondary tabs under Assessments — TBI and Medico-Legal as separate pages. */
export function AssessmentTopicNav({
  active,
}: {
  active: (typeof assessmentTopicLinks)[number]["id"];
}) {
  return (
    <nav className="topic-nav" aria-label="Assessment topics">
      <div className="shell topic-nav__inner">
        {assessmentTopicLinks.map((item) => (
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
