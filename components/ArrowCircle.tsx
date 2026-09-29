type Props = {
  direction?: "diag" | "right";
  size?: number;
  className?: string;
};

export default function ArrowCircle({
  direction = "diag",
  size = 56,
  className = "",
}: Props) {
  return (
    <svg
      className={`shrink-0 ${className}`}
      width={size}
      height={size}
      viewBox="0 0 56 56"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="28" cy="28" r="27" />
      {direction === "right" ? (
        <path d="M14 28H42M35 21L42 28L35 35" />
      ) : (
        <path d="M19 37L37 19M26 19H37V30" />
      )}
    </svg>
  );
}