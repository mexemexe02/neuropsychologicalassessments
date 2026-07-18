import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
// Static import so GitHub Pages basePath/assetPrefix is applied automatically.
import logoMark from "@/assets/logo-brain-tree.png";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className={`brand-lockup ${light ? "brand-lockup--light" : ""}`}
      aria-label={`${site.name} home`}
    >
      {/* Practice mark only — brain-tree icon from Sebastian’s logo (no CETSM wordmark). */}
      <Image
        src={logoMark}
        alt=""
        className="brand-mark"
        width={44}
        height={50}
        priority
      />
      <span>
        <strong>Centre for Neuropsychology</strong>
        <small>and Psychotherapy</small>
      </span>
    </Link>
  );
}
