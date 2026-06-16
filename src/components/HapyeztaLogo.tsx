import type { SVGProps } from "react";

interface LogoProps {
  className?: string;
  size?: number;
  showShadow?: boolean;
}

export function HapyeztaEmblem({ className = "", size = 120, showShadow = true }: LogoProps) {
  return (
    <svg
      width={size}
      height={size * 1.2}
      viewBox="0 0 200 240"
      className={`select-none ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* HAPYEZTA gradient from brand book (Yellow -> Orange -> Coral) */}
        <linearGradient id="hapyezta-grad" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fcb11b" />
          <stop offset="50%" stopColor="#f47523" />
          <stop offset="100%" stopColor="#f26c58" />
        </linearGradient>

        {/* Mask to cut out the negative space teardrop/eye shape */}
        <mask id="hapyezta-mask">
          <rect width="200" height="240" fill="white" />
          {/* Tilted teardrop cutout: rotated at 32 degrees */}
          <path
            d="M 125 100 C 115 110 115 125 125 135 C 135 145 150 145 155 130 C 160 115 145 90 125 100 Z"
            fill="black"
            transform="rotate(32, 135, 120)"
          />
        </mask>
      </defs>

      {/* Shadow path (Solid black, offset to bottom left by -8px, +8px) */}
      {showShadow && (
        <path
          d="M 45 200 C 35 215 20 215 15 200 C 8 180 22 150 42 130 C 48 124 51 114 49 105 C 44 85 46 65 62 50 C 78 35 102 45 110 65 C 118 50 138 37 158 50 C 178 63 182 90 174 115 C 162 150 137 175 115 175 C 98 175 92 160 92 140 C 92 120 78 110 68 120 C 58 130 55 180 45 200 Z"
          fill="#000000"
          transform="translate(-8, 8)"
          mask="url(#hapyezta-mask)"
        />
      )}

      {/* Main emblem path with brand gradient */}
      <path
        d="M 45 200 C 35 215 20 215 15 200 C 8 180 22 150 42 130 C 48 124 51 114 49 105 C 44 85 46 65 62 50 C 78 35 102 45 110 65 C 118 50 138 37 158 50 C 178 63 182 90 174 115 C 162 150 137 175 115 175 C 98 175 92 160 92 140 C 92 120 78 110 68 120 C 58 130 55 180 45 200 Z"
        fill="url(#hapyezta-grad)"
        mask="url(#hapyezta-mask)"
      />
    </svg>
  );
}

export function HapyeztaWordmark({ className = "", height = 32 }: { className?: string; height?: number }) {
  // Letters sequence: H (orange), A (yellow, inverted), P (teal), Y (purple), E (coral, rounded), Z (purple), T (teal), A (yellow, inverted)
  // The viewport is scaled and padded to contain all letters. 
  // Let's use a nice font-display style styled elements with colored spans for the wordmark inside HTML/CSS as it's fully responsive,
  // OR use clean SVG. SVG provides the exact custom curves for letters (e.g. inverted A).
  return (
    <svg
      height={height}
      viewBox="0 0 530 80"
      className={`select-none ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* H */}
      <path
        d="M 20 15 C 20 9 26 5 32 5 C 38 5 44 9 44 15 L 44 35 L 68 35 L 68 15 C 68 9 74 5 80 5 C 86 5 92 9 92 15 L 92 65 C 92 71 86 75 80 75 C 74 75 68 71 68 65 L 68 49 L 44 49 L 44 65 C 44 71 38 75 32 75 C 26 75 20 71 20 65 Z"
        fill="#f47523"
      />
      {/* A (Inverted V shape with heavy rounded base) */}
      <path
        d="M 124 5 C 130 5 136 10 140 18 L 158 58 C 162 67 155 75 146 75 C 140 75 134 71 131 65 L 124 48 L 117 65 C 114 71 108 75 102 75 C 93 75 86 67 90 58 L 108 18 C 112 10 118 5 124 5 Z"
        fill="#fcb11b"
      />
      {/* P */}
      <path
        d="M 170 15 C 170 9 176 5 182 5 L 202 5 C 218 5 230 17 230 32 C 230 47 218 59 202 59 L 194 59 L 194 65 C 194 71 188 75 182 75 C 176 75 170 71 170 65 Z M 194 21 L 194 43 L 202 43 C 208 43 213 38 213 32 C 213 26 208 21 202 21 Z"
        fill="#1c978f"
      />
      {/* Y */}
      <path
        d="M 238 15 C 238 9 244 5 250 5 C 256 5 261 9 264 15 L 274 35 L 284 15 C 287 9 292 5 298 5 C 304 5 310 9 310 15 L 286 54 L 286 65 C 286 71 280 75 274 75 C 268 75 262 71 262 65 L 262 54 Z"
        fill="#7f58a5"
      />
      {/* E */}
      <path
        d="M 358 18 C 358 9 350 5 342 5 L 320 5 C 314 5 308 9 308 15 L 308 65 C 308 71 314 75 320 75 L 342 75 C 350 75 358 71 358 62 C 358 56 353 51 346 49 C 352 47 356 42 356 36 C 356 30 351 25 344 23 C 352 21 358 18 358 18 Z M 328 21 L 340 21 C 343 21 345 23 345 25 C 345 27 343 29 340 29 L 328 29 Z M 328 41 L 338 41 C 341 41 343 43 343 45 C 343 47 341 49 338 49 L 328 49 Z M 328 61 L 340 61 C 343 61 345 63 345 65 C 345 67 343 69 340 69 L 328 69 Z"
        fill="#f26c58"
      />
      {/* Z */}
      <path
        d="M 364 15 C 364 9 370 5 376 5 L 398 5 C 404 5 410 9 410 15 C 410 21 404 25 398 25 L 386 25 L 398 55 L 398 65 C 398 71 392 75 386 75 L 364 75 C 358 75 352 71 352 65 C 352 59 358 55 364 55 L 376 55 L 364 25 Z"
        fill="#7f58a5"
      />
      {/* T */}
      <path
        d="M 412 15 C 412 9 418 5 424 5 L 448 5 C 454 5 460 9 460 15 C 460 21 454 25 448 25 L 442 25 L 442 65 C 442 71 436 75 430 75 C 424 75 418 71 418 65 L 418 25 L 412 25 Z"
        fill="#1c978f"
      />
      {/* A (Inverted V shape with heavy rounded base) */}
      <path
        d="M 478 5 C 484 5 490 10 494 18 L 512 58 C 516 67 509 75 500 75 C 494 75 488 71 485 65 L 478 48 L 471 65 C 468 71 462 75 456 75 C 447 75 440 67 444 58 L 462 18 C 466 10 472 5 478 5 Z"
        fill="#fcb11b"
      />
    </svg>
  );
}

export function HapyeztaLogo({
  className = "",
  orientation = "horizontal",
  emblemSize = 48,
  wordmarkHeight = 24,
  showShadow = false,
}: {
  className?: string;
  orientation?: "horizontal" | "vertical" | "icon";
  emblemSize?: number;
  wordmarkHeight?: number;
  showShadow?: boolean;
}) {
  if (orientation === "icon") {
    return <HapyeztaEmblem size={emblemSize} showShadow={showShadow} className={className} />;
  }

  if (orientation === "vertical") {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <HapyeztaEmblem size={emblemSize * 1.5} showShadow={showShadow} className="mb-2" />
        <HapyeztaWordmark height={wordmarkHeight * 1.5} className="w-full max-w-[280px]" />
        <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.2em] text-[#f47523] mt-2 block uppercase font-display">
          Where Happy Creation Begin
        </span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <HapyeztaEmblem size={emblemSize} showShadow={showShadow} />
      <div className="flex flex-col">
        <HapyeztaWordmark height={wordmarkHeight} className="w-full max-w-[220px]" />
        <span className="text-[8px] sm:text-[9px] font-bold tracking-[0.18em] text-[#f47523] mt-0.5 uppercase font-display">
          Where Happy Creation Begin
        </span>
      </div>
    </div>
  );
}
