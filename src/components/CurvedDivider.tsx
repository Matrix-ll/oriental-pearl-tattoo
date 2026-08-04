export default function CurvedDivider() {
  return (
    <div
      data-component="src/components/CurvedDivider.tsx"
      className="relative h-24 sm:h-32 bg-background overflow-hidden"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 w-full h-full"
        fill="none"
      >
        <path
          d="M0 120 Q360 0 720 30 Q1080 60 1440 0 L1440 120 Z"
          fill="#F5F0E8"
        />
      </svg>
    </div>
  )
}
