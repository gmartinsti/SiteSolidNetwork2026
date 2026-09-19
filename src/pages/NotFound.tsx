
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <div className="text-7xl font-bold text-solidPurple-600">404</div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Página não encontrada</h1>
            <p className="max-w-[600px] text-gray-600 md:text-xl">
              Desculpe, a página que você está procurando não existe ou foi movida.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                to="/"
                className="inline-flex h-10 items-center justify-center rounded-md bg-solidPurple-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-solidPurple-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-solidPurple-400"
              >
                Voltar para Home
              </Link>
              <Link
                to="/contato"
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-400"
              >
                Contatar Suporte
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
