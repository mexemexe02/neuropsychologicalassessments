"use client";

import type { ReactNode } from "react";
import { useDemoNotice } from "@/components/demo-notice";
import { demoNotices } from "@/lib/demo-notices";

export function PortraitPlaceholder({
  initials,
  children,
}: {
  initials: string;
  children?: ReactNode;
}) {
  const { showDemoNotice } = useDemoNotice();

  return (
    <button
      type="button"
      className="portrait-placeholder"
      onClick={() => showDemoNotice(demoNotices.portraits)}
      aria-label={`Preview notice: photo forthcoming for ${initials}`}
    >
      <strong>{initials}</strong>
      <small>{children ?? "Professional photograph forthcoming"}</small>
    </button>
  );
}
