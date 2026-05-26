export default function SectionDivider() {
  return (
    <div
      className="gold-sep-v7"
      style={{
        height: "1px",
        position: "relative",
        overflow: "hidden",
        background: "rgba(201,137,58,0.12)",
      }}
    >
      <div
        className="gold-sep-beam-v7"
        style={{
          position: "absolute",
          top: 0,
          left: "-30%",
          width: "30%",
          height: "100%",
          background:
            "linear-gradient(to right, transparent, #c9893a, #f5d07a, #c9893a, transparent)",
          animation: "beamSweepV7 2.8s ease-in-out infinite",
        }}
      />
    </div>
  );
}
