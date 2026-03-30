import './globals.css';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Portfolio',
  description: 'My personal portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        
        {/* Fondo */}
        <div
          className="fixed inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/Fondo.jpg')" }}
        ></div>

        {/* Contenido */}
        <div className="relative z-10 max-w-5xl mx-auto bg-[#483a3a] text-white p-4">
          <main>{children}</main>
          <Footer />
        </div>

      </body>
    </html>
  );
}