import React from "react";

type AchievementVisualProps = {
  imageSrc: string;
  position: string
};

const AchievementVisual: React.FC<AchievementVisualProps> = ({ imageSrc, position }) => {
  return (
    <div className="relative h-[300px] w-[140px]">

      {/* Rounded Hexagon Clip Path */}
      <svg width="0" height="0">
        <defs>
          <clipPath
            id="roundedVerticalHexagon"
            clipPathUnits="objectBoundingBox"
          >
            <path
              d="
                M0.5,0.04
                Q0.55,0.04 0.58,0.08
                L0.92,0.28
                Q0.96,0.31 0.96,0.36
                L0.96,0.64
                Q0.96,0.69 0.92,0.72
                L0.58,0.92
                Q0.55,0.96 0.5,0.96
                Q0.45,0.96 0.42,0.92
                L0.08,0.72
                Q0.04,0.69 0.04,0.64
                L0.04,0.36
                Q0.04,0.31 0.08,0.28
                L0.42,0.08
                Q0.45,0.04 0.5,0.04
                Z
              "
            />
          </clipPath>
        </defs>
      </svg>

      <svg
        width="360"
        height="120"
        viewBox="0 0 360 120"
        className="absolute bottom-12 -translate-x-1/2"
      >
        <ellipse cx="180" cy="70" rx="175" ry="36" fill="#FEF3C7" />
        <ellipse cx="180" cy="70" rx="130" ry="28" fill="#FDE68A" />
        <ellipse cx="180" cy="70" rx="90" ry="20" fill="#FACC15" />
      </svg>

      <div
        className="absolute z-10 w-[240px] h-[280px] bg-[#FDE68A] p-1 shadow-2xl"
        style={{
          clipPath: "url(#roundedVerticalHexagon)",
          bottom: "100px",
          transform: "translateX(-50%)",
        }}
      >
        <div
          className="w-full h-full overflow-hidden bg-gray-200"
          style={{ clipPath: "url(#roundedVerticalHexagon)" }}
        >
          <img
            src={imageSrc}
            alt="Achievement"
            className="w-full h-full object-cover scale-110"
            style={{ objectPosition: `${position}` }}
          />
        </div>
      </div>
    </div>
  );
};

export default AchievementVisual;
