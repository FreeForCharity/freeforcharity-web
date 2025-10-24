"use client";

import { usePopups } from "./PopupProvider";

export default function VolunteerButton({
  children = "Volunteer",
  className = "inline-flex items-center justify-center rounded-full bg-white text-primary hover:bg-white/90 px-8 py-3.5 text-lg font-[var(--font-lato)] font-medium cursor-pointer transition-colors",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const { openVolunteer } = usePopups();
  return (
    <button onClick={openVolunteer} className={className}>
      {children}
    </button>
  );
}


