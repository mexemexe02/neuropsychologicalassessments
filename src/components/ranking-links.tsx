import Link from "next/link";

/** Internal links Google and people can follow to the local landing and FAQ. */
export function RankingLinks() {
  return (
    <p className="ranking-links">
      <Link href="/neuropsychology-in-tiny">Neuropsychology in Tiny</Link>
      <Link href="/faq">Common questions</Link>
    </p>
  );
}
