export default function SectionDivider() {
  return (
    <div className="relative h-px">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-400/15 to-transparent blur-sm" />
    </div>
  );
}
