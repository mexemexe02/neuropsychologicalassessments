/* Shared messages for unfinished features — shown as popups in the live preview. */

export const demoNotices = {
  booking: {
    title: "Online booking isn’t connected yet",
    body: "This calendar is a working preview of the consultation flow. Your details were not sent or stored. Once a booking system is set up, this step will confirm real appointments and send calendar details.",
  },
  resources: {
    title: "Resource guides aren’t published yet",
    body: "These topic cards show where education and leaflets will live. Full clinician-reviewed guides and downloadable PDFs will be added once the practice materials are ready.",
  },
  portraits: {
    title: "Professional photos aren’t uploaded yet",
    body: "Clinician portraits are placeholders until approved headshots are provided. Bios and credentials on this page already reflect the practice information on file.",
  },
} as const;
