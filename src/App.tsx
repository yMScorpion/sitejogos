
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import ProgramacaoPage from "./pages/ProgramacaoPage";
import ModalidadesPage from "./pages/ModalidadesPage";
import EquipesPage from "./pages/EquipesPage";
import HistoricoPage from "./pages/HistoricoPage";
import GaleriaPage from "./pages/GaleriaPage";
import ContatoPage from "./pages/ContatoPage";
import React from "react";

const queryClient = new QueryClient();


const App = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="programacao" element={<ProgramacaoPage />} />
                <Route path="modalidades" element={<ModalidadesPage />} />
                <Route path="equipes" element={<EquipesPage />} />
                <Route path="historico" element={<HistoricoPage />} />
                <Route path="galeria" element={<GaleriaPage />} />
                <Route path="contato" element={<ContatoPage />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
