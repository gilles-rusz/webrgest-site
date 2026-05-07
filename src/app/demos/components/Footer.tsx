export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Terroir d&apos;Alsace &mdash; Démo réalisée par Web RG Est</p>
      </div>
    </footer>
  );
}
