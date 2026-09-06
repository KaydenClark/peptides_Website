export type IconName = "browse" | "discuss" | "review" | "research" | "contact";

/**
 * Inline stroke icons drawn in currentColor. Kept local rather than pulled from
 * an icon package so the catalog ships no extra dependency and the shapes stay
 * neutral and descriptive: nothing here should read as a badge, seal, or any
 * other mark that implies certification, guarantee, or fulfillment.
 */
const paths: Record<IconName, React.ReactNode> = {
  // Document with text lines - reading a catalog record.
  browse: (
    <>
      <path d="M5.5 3.5h8l5 5v12h-13z" />
      <path d="M13.5 3.5v5h5" />
      <path d="M8.5 12.5h7M8.5 16.5h7" />
    </>
  ),
  // Speech bubble - choosing what to raise with the owner.
  discuss: (
    <>
      <path d="M3.5 5.5h17v11h-9l-5 4v-4h-3z" />
      <path d="M8 10.5h8" />
    </>
  ),
  // Clipboard - the owner's separate review step.
  review: (
    <>
      <path d="M6.5 4.5h11v16h-11z" />
      <path d="M9.5 4.5a2.5 2.5 0 0 1 5 0" />
      <path d="M9.5 11.5h5M9.5 15.5h5" />
    </>
  ),
  // Laboratory flask - factual research information.
  research: (
    <>
      <path d="M10 3.5v6l-5 9a1.6 1.6 0 0 0 1.4 2.4h11.2a1.6 1.6 0 0 0 1.4-2.4l-5-9v-6" />
      <path d="M8.5 3.5h7" />
      <path d="M7.4 14.5h9.2" />
    </>
  ),
  // Envelope - the message form.
  contact: (
    <>
      <path d="M3.5 5.5h17v13h-17z" />
      <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
    </>
  ),
};

export function Icon({ name }: { name: IconName }) {
  return (
    <svg
      aria-hidden="true"
      className="icon"
      fill="none"
      focusable="false"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.6"
      viewBox="0 0 24 24"
    >
      {paths[name]}
    </svg>
  );
}
