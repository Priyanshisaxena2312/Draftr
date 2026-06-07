/**
 * Draftr logo — purple rounded square with white crown/tulip icon.
 * Matches the official brand mark shown on draftr-wbs.framer.website
 */
export default function Logo({ size = 28 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Purple rounded background */}
      <rect width="32" height="32" rx="7" fill="#6c47ff" />

      {/* Left wing — semi-transparent */}
      <path
        d="M10 22C9 19 9 16 11 13C12 11.5 13.5 11 15 12C13 14 12.5 17 13 20L10 22Z"
        fill="white"
        fillOpacity="0.45"
      />

      {/* Right wing — semi-transparent */}
      <path
        d="M22 22C23 19 23 16 21 13C20 11.5 18.5 11 17 12C19 14 19.5 17 19 20L22 22Z"
        fill="white"
        fillOpacity="0.45"
      />

      {/* Center nib — fully white */}
      <path
        d="M16 9C14.5 11.5 14 14.5 14.5 17.5C15 20 15.5 22 16 24C16.5 22 17 20 17.5 17.5C18 14.5 17.5 11.5 16 9Z"
        fill="white"
      />
    </svg>
  )
}
