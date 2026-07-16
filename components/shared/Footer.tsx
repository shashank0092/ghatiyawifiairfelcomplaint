import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full border-t border-[#2D2D2D] bg-[#0B0B0B] py-12 mt-20">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        <h3 className="text-xl font-bold mb-4">Ghatiya<span className="text-destructive">WiFi</span></h3>
        <p className="text-muted-foreground max-w-lg mb-6">
          <strong>Disclaimer:</strong> This website is an independent public feedback platform. 
          It is not affiliated, associated, authorized, endorsed by, or in any way officially connected with Airtel. 
          All opinions displayed belong solely to the users who submitted them.
        </p>
        <p className="text-sm text-muted-foreground/60">
          Built with frustration and Next.js.
        </p>
      </div>
    </footer>
  );
}
