import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#3C2415] text-amber-200/70 py-10 mt-auto border-t border-amber-900/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">🌿</span>
            <span className="font-bold text-amber-100">Terroir d&apos;Alsace</span>
          </div>
          <p className="text-sm text-center sm:text-right">
            &copy; {new Date().getFullYear()} Terroir d&apos;Alsace &mdash; Démo
            réalisée par{" "}
            <Link
              href="/"
              className="text-amber-400 hover:text-amber-300 transition-colors font-medium"
            >
              Web RG Est
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
