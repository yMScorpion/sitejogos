
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8">
        <h1 className="text-7xl font-black text-ifal-red mb-2">404</h1>
        <p className="text-2xl font-bold text-ifal-dark mb-6">Página não encontrada</p>
        <p className="text-lg text-gray-600 mb-8">
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>
        <Link to="/" className="btn-primary inline-flex">
          <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          VOLTAR PARA INÍCIO
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
