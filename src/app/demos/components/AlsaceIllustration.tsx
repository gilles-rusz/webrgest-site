export default function AlsaceIllustration() {
  return (
    <svg
      viewBox="0 0 800 280"
      className="w-full max-w-2xl mx-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Illustration village alsacien"
    >
      {/* Mountains background */}
      <path
        d="M0 200 L80 140 L160 170 L240 120 L320 155 L400 100 L480 150 L560 115 L640 160 L720 130 L800 180 L800 280 L0 280 Z"
        fill="#2D5016"
        opacity="0.08"
      />

      {/* Ground line */}
      <path
        d="M0 230 Q200 225 400 230 Q600 235 800 228"
        stroke="#3C2415"
        strokeWidth="1.5"
        opacity="0.3"
      />

      {/* Stork left - flying */}
      <g transform="translate(80, 60) scale(0.9)">
        <path
          d="M0 15 Q8 5 20 0 Q15 8 18 15"
          stroke="#3C2415"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M20 0 Q32 5 40 15 Q35 8 22 2"
          stroke="#3C2415"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="20" cy="5" r="3" fill="#3C2415" opacity="0.6" />
        <line x1="18" y1="6" x2="12" y2="8" stroke="#3C2415" strokeWidth="1.2" />
        <path
          d="M18 8 L16 16 M22 8 L24 16"
          stroke="#3C2415"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </g>

      {/* Stork right - flying */}
      <g transform="translate(640, 45) scale(-0.8, 0.8)">
        <path
          d="M0 15 Q8 5 20 0 Q15 8 18 15"
          stroke="#3C2415"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M20 0 Q32 5 40 15 Q35 8 22 2"
          stroke="#3C2415"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="20" cy="5" r="3" fill="#3C2415" opacity="0.6" />
        <line x1="18" y1="6" x2="12" y2="8" stroke="#3C2415" strokeWidth="1.2" />
      </g>

      {/* Clouds */}
      <g opacity="0.25" fill="#3C2415">
        <ellipse cx="180" cy="50" rx="30" ry="10" />
        <ellipse cx="200" cy="45" rx="20" ry="8" />
        <ellipse cx="165" cy="47" rx="15" ry="7" />
      </g>
      <g opacity="0.2" fill="#3C2415">
        <ellipse cx="580" cy="70" rx="25" ry="8" />
        <ellipse cx="598" cy="65" rx="18" ry="7" />
      </g>

      {/* House 1 - left colombage */}
      <g transform="translate(160, 130)">
        <rect x="0" y="30" width="60" height="70" stroke="#3C2415" strokeWidth="1.8" fill="#FAF5EF" />
        {/* Roof */}
        <polygon points="-8,30 30,-5 68,30" stroke="#3C2415" strokeWidth="1.8" fill="#E8B84B" opacity="0.3" />
        {/* Colombage - horizontal */}
        <line x1="0" y1="55" x2="60" y2="55" stroke="#3C2415" strokeWidth="1.2" />
        <line x1="0" y1="75" x2="60" y2="75" stroke="#3C2415" strokeWidth="1.2" />
        {/* Colombage - vertical */}
        <line x1="20" y1="30" x2="20" y2="100" stroke="#3C2415" strokeWidth="1.2" />
        <line x1="40" y1="30" x2="40" y2="100" stroke="#3C2415" strokeWidth="1.2" />
        {/* Colombage - diagonal */}
        <line x1="0" y1="30" x2="20" y2="55" stroke="#3C2415" strokeWidth="1" />
        <line x1="20" y1="30" x2="0" y2="55" stroke="#3C2415" strokeWidth="1" />
        <line x1="40" y1="30" x2="60" y2="55" stroke="#3C2415" strokeWidth="1" />
        <line x1="60" y1="30" x2="40" y2="55" stroke="#3C2415" strokeWidth="1" />
        {/* Window */}
        <rect x="8" y="58" width="8" height="10" stroke="#3C2415" strokeWidth="1" fill="none" />
        <rect x="44" y="58" width="8" height="10" stroke="#3C2415" strokeWidth="1" fill="none" />
        {/* Door */}
        <rect x="22" y="78" width="16" height="22" rx="8" stroke="#3C2415" strokeWidth="1.2" fill="none" />
      </g>

      {/* House 2 - taller */}
      <g transform="translate(240, 105)">
        <rect x="0" y="40" width="55" height="85" stroke="#3C2415" strokeWidth="1.8" fill="#FAF5EF" />
        {/* Steep roof */}
        <polygon points="-6,40 27.5,-10 61,40" stroke="#3C2415" strokeWidth="1.8" fill="#E8B84B" opacity="0.25" />
        {/* Colombage */}
        <line x1="0" y1="65" x2="55" y2="65" stroke="#3C2415" strokeWidth="1.2" />
        <line x1="0" y1="90" x2="55" y2="90" stroke="#3C2415" strokeWidth="1.2" />
        <line x1="27.5" y1="40" x2="27.5" y2="125" stroke="#3C2415" strokeWidth="1.2" />
        {/* Diagonals */}
        <line x1="0" y1="40" x2="27.5" y2="65" stroke="#3C2415" strokeWidth="1" />
        <line x1="27.5" y1="40" x2="55" y2="65" stroke="#3C2415" strokeWidth="1" />
        {/* Windows */}
        <rect x="8" y="70" width="10" height="12" stroke="#3C2415" strokeWidth="1" fill="none" />
        <line x1="13" y1="70" x2="13" y2="82" stroke="#3C2415" strokeWidth="0.7" />
        <rect x="37" y="70" width="10" height="12" stroke="#3C2415" strokeWidth="1" fill="none" />
        <line x1="42" y1="70" x2="42" y2="82" stroke="#3C2415" strokeWidth="0.7" />
        {/* Attic window */}
        <circle cx="27.5" cy="18" r="6" stroke="#3C2415" strokeWidth="1" fill="none" />
        {/* Door */}
        <rect x="18" y="98" width="18" height="27" rx="9" stroke="#3C2415" strokeWidth="1.2" fill="none" />
      </g>

      {/* Church / Cathedral - center */}
      <g transform="translate(340, 50)">
        {/* Main tower */}
        <rect x="20" y="60" width="50" height="120" stroke="#3C2415" strokeWidth="1.8" fill="#FAF5EF" />
        {/* Spire */}
        <polygon points="25,60 45,0 65,60" stroke="#3C2415" strokeWidth="1.8" fill="#E8B84B" opacity="0.2" />
        {/* Cross */}
        <line x1="45" y1="-8" x2="45" y2="5" stroke="#3C2415" strokeWidth="1.5" />
        <line x1="40" y1="-2" x2="50" y2="-2" stroke="#3C2415" strokeWidth="1.5" />
        {/* Clock / rose window */}
        <circle cx="45" cy="85" r="12" stroke="#3C2415" strokeWidth="1.2" fill="none" />
        <circle cx="45" cy="85" r="8" stroke="#3C2415" strokeWidth="0.8" fill="none" />
        <line x1="45" y1="77" x2="45" y2="93" stroke="#3C2415" strokeWidth="0.6" />
        <line x1="37" y1="85" x2="53" y2="85" stroke="#3C2415" strokeWidth="0.6" />
        {/* Arched door */}
        <path d="M35 180 L35 150 Q45 135 55 150 L55 180" stroke="#3C2415" strokeWidth="1.5" fill="none" />
        {/* Windows */}
        <path d="M33 115 L33 105 Q38 98 43 105 L43 115" stroke="#3C2415" strokeWidth="1" fill="none" />
        <path d="M47 115 L47 105 Q52 98 57 105 L57 115" stroke="#3C2415" strokeWidth="1" fill="none" />
        {/* Side building left */}
        <rect x="0" y="120" width="20" height="60" stroke="#3C2415" strokeWidth="1.2" fill="#FAF5EF" />
        <polygon points="-3,120 10,100 23,120" stroke="#3C2415" strokeWidth="1.2" fill="#E8B84B" opacity="0.2" />
        {/* Side building right */}
        <rect x="70" y="120" width="20" height="60" stroke="#3C2415" strokeWidth="1.2" fill="#FAF5EF" />
        <polygon points="67,120 80,100 93,120" stroke="#3C2415" strokeWidth="1.2" fill="#E8B84B" opacity="0.2" />
      </g>

      {/* House 3 - right of church */}
      <g transform="translate(480, 118)">
        <rect x="0" y="35" width="55" height="77" stroke="#3C2415" strokeWidth="1.8" fill="#FAF5EF" />
        {/* Roof */}
        <polygon points="-6,35 27.5,0 61,35" stroke="#3C2415" strokeWidth="1.8" fill="#E8B84B" opacity="0.3" />
        {/* Colombage */}
        <line x1="0" y1="58" x2="55" y2="58" stroke="#3C2415" strokeWidth="1.2" />
        <line x1="0" y1="80" x2="55" y2="80" stroke="#3C2415" strokeWidth="1.2" />
        <line x1="18" y1="35" x2="18" y2="112" stroke="#3C2415" strokeWidth="1.2" />
        <line x1="37" y1="35" x2="37" y2="112" stroke="#3C2415" strokeWidth="1.2" />
        {/* Diagonals */}
        <line x1="18" y1="35" x2="37" y2="58" stroke="#3C2415" strokeWidth="1" />
        <line x1="37" y1="35" x2="18" y2="58" stroke="#3C2415" strokeWidth="1" />
        {/* Windows */}
        <rect x="5" y="62" width="9" height="11" stroke="#3C2415" strokeWidth="1" fill="none" />
        <rect x="41" y="62" width="9" height="11" stroke="#3C2415" strokeWidth="1" fill="none" />
        {/* Door */}
        <rect x="20" y="86" width="15" height="26" rx="7.5" stroke="#3C2415" strokeWidth="1.2" fill="none" />
      </g>

      {/* House 4 - far right, smaller */}
      <g transform="translate(555, 145)">
        <rect x="0" y="25" width="45" height="60" stroke="#3C2415" strokeWidth="1.5" fill="#FAF5EF" />
        <polygon points="-5,25 22.5,-5 50,25" stroke="#3C2415" strokeWidth="1.5" fill="#E8B84B" opacity="0.25" />
        {/* Colombage */}
        <line x1="0" y1="48" x2="45" y2="48" stroke="#3C2415" strokeWidth="1" />
        <line x1="22.5" y1="25" x2="22.5" y2="85" stroke="#3C2415" strokeWidth="1" />
        {/* Window */}
        <rect x="6" y="52" width="8" height="10" stroke="#3C2415" strokeWidth="0.8" fill="none" />
        <rect x="31" y="52" width="8" height="10" stroke="#3C2415" strokeWidth="0.8" fill="none" />
        {/* Door */}
        <rect x="15" y="65" width="14" height="20" rx="7" stroke="#3C2415" strokeWidth="1" fill="none" />
      </g>

      {/* Trees/vines left */}
      <g transform="translate(100, 180)" opacity="0.4">
        <line x1="10" y1="50" x2="10" y2="20" stroke="#2D5016" strokeWidth="1.5" />
        <circle cx="10" cy="15" r="12" fill="#2D5016" opacity="0.3" />
      </g>
      <g transform="translate(130, 190)" opacity="0.3">
        <line x1="8" y1="40" x2="8" y2="18" stroke="#2D5016" strokeWidth="1.2" />
        <circle cx="8" cy="14" r="9" fill="#2D5016" opacity="0.3" />
      </g>

      {/* Trees/vines right */}
      <g transform="translate(630, 185)" opacity="0.4">
        <line x1="10" y1="45" x2="10" y2="18" stroke="#2D5016" strokeWidth="1.5" />
        <circle cx="10" cy="13" r="11" fill="#2D5016" opacity="0.3" />
      </g>
      <g transform="translate(660, 192)" opacity="0.3">
        <line x1="8" y1="38" x2="8" y2="16" stroke="#2D5016" strokeWidth="1.2" />
        <circle cx="8" cy="12" r="9" fill="#2D5016" opacity="0.3" />
      </g>

      {/* Vine rows - foreground */}
      <g opacity="0.15" stroke="#2D5016" strokeWidth="1">
        <path d="M20 250 Q100 245 180 250 Q260 255 340 248" />
        <path d="M360 252 Q440 247 520 252 Q600 257 700 250" />
        <path d="M50 265 Q150 260 250 265 Q350 270 450 263" />
        <path d="M460 267 Q540 262 620 267 Q700 272 780 265" />
      </g>
    </svg>
  );
}
