import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Portfolio',
  description: 'My personal portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        {}
        <div className="fixed inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('/Fondo.jpg')" }}></div>
        {}
        <div className="relative z-10 max-w-5xl mx-auto bg-[#483a3a] text-black p-4 text-white">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
