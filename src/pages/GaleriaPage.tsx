import React, { useState } from 'react';

const GaleriaPage = () => {
  // Estado para controlar a categoria ativa
  const [categoriaAtiva, setCategoriaAtiva] = useState<'Todos' | '2024' | '2023' | '2022' | 'Anteriores'>('Todos');
  
  // Array of images (normally these would be real image paths)
  const images = [
    { id: 1, src: 'https://placehold.co/600x400/114B5F/FFFFFF/webp?text=Abertura+2024', alt: 'Cerimônia de Abertura 2024', categoria: '2024' },
    { id: 2, src: 'https://placehold.co/600x400/F3E9D2/1F1F1F/webp?text=Futsal+Feminino', alt: 'Final de Futsal Feminino', categoria: '2024' },
    { id: 3, src: 'https://placehold.co/600x400/88D498/1F1F1F/webp?text=Vôlei', alt: 'Partida de Vôlei', categoria: '2024' },
    { id: 4, src: 'https://placehold.co/600x400/114B5F/FFFFFF/webp?text=Natação', alt: 'Competição de Natação', categoria: '2023' },
    { id: 5, src: 'https://placehold.co/600x400/F3E9D2/1F1F1F/webp?text=Basquete', alt: 'Torneio de Basquete', categoria: '2023' },
    { id: 6, src: 'https://placehold.co/600x400/88D498/1F1F1F/webp?text=Atletismo', alt: 'Prova de Atletismo', categoria: '2023' },
    { id: 7, src: 'https://placehold.co/600x400/114B5F/FFFFFF/webp?text=Premiação+2023', alt: 'Cerimônia de Premiação', categoria: '2023' },
    { id: 8, src: 'https://placehold.co/600x400/F3E9D2/1F1F1F/webp?text=Tênis+de+Mesa', alt: 'Torneio de Tênis de Mesa', categoria: '2022' },
    { id: 9, src: 'https://placehold.co/600x400/88D498/1F1F1F/webp?text=Xadrez', alt: 'Competição de Xadrez', categoria: '2022' },
    { id: 10, src: 'https://placehold.co/600x400/114B5F/FFFFFF/webp?text=Handebol', alt: 'Partida de Handebol', categoria: '2022' },
    { id: 11, src: 'https://placehold.co/600x400/F3E9D2/1F1F1F/webp?text=Judô', alt: 'Competição de Judô', categoria: '2022' },
    { id: 12, src: 'https://placehold.co/600x400/88D498/1F1F1F/webp?text=Premiação+2022', alt: 'Entrega de Medalhas', categoria: '2022' },
  ];

  // Função para alternar a categoria ativa
  const alternarCategoria = (categoria: 'Todos' | '2024' | '2023' | '2022' | 'Anteriores') => {
    setCategoriaAtiva(categoria);
  };

  // Filtra as imagens com base na categoria selecionada
  const imagensFiltradas = images.filter(image => 
    categoriaAtiva === 'Todos' || image.categoria === categoriaAtiva
  );

  return (
    <div className="pt-20 min-h-screen">
      <div className="bg-ifal-dark/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-ifal-dark">Galeria</h1>
          <p className="text-lg mt-4 text-gray-600">
            Momentos memoráveis dos Jogos IFAL ao longo dos anos
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap gap-4 justify-center mb-10">
          <button 
            className={`px-6 py-2 rounded-full shadow-sm transition-all ${
              categoriaAtiva === 'Todos' 
                ? 'bg-ifal-green text-white' 
                : 'bg-white text-ifal-dark hover:bg-ifal-green/10'
            }`}
            onClick={() => alternarCategoria('Todos')}
          >
            Todos
          </button>
          <button 
            className={`px-6 py-2 rounded-full shadow-sm transition-all ${
              categoriaAtiva === '2024' 
                ? 'bg-ifal-green text-white' 
                : 'bg-white text-ifal-dark hover:bg-ifal-green/10'
            }`}
            onClick={() => alternarCategoria('2024')}
          >
            2024
          </button>
          <button 
            className={`px-6 py-2 rounded-full shadow-sm transition-all ${
              categoriaAtiva === '2023' 
                ? 'bg-ifal-green text-white' 
                : 'bg-white text-ifal-dark hover:bg-ifal-green/10'
            }`}
            onClick={() => alternarCategoria('2023')}
          >
            2023
          </button>
          <button 
            className={`px-6 py-2 rounded-full shadow-sm transition-all ${
              categoriaAtiva === '2022' 
                ? 'bg-ifal-green text-white' 
                : 'bg-white text-ifal-dark hover:bg-ifal-green/10'
            }`}
            onClick={() => alternarCategoria('2022')}
          >
            2022
          </button>
          <button 
            className={`px-6 py-2 rounded-full shadow-sm transition-all ${
              categoriaAtiva === 'Anteriores' 
                ? 'bg-ifal-green text-white' 
                : 'bg-white text-ifal-dark hover:bg-ifal-green/10'
            }`}
            onClick={() => alternarCategoria('Anteriores')}
          >
            Anteriores
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {imagensFiltradas.map((image) => (
            <div key={image.id} className="overflow-hidden rounded-lg shadow-md group">
              <div className="relative h-64">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-white text-ifal-dark px-4 py-2 rounded-md hover:bg-ifal-green hover:text-white transition-colors">
                    Ver detalhes
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <span className="text-white text-sm">{image.alt}</span>
                </div>
                <div className="absolute top-2 right-2">
                  <span className="bg-ifal-dark/80 text-white text-xs px-2 py-1 rounded">
                    {image.categoria}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {imagensFiltradas.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-600">Nenhuma imagem encontrada para esta categoria.</p>
          </div>
        )}

        <div className="text-center mt-12 flex flex-col items-center">
          <p className="text-gray-600 mb-6 max-w-2xl">
            Tem fotos dos Jogos IFAL para compartilhar? Envie para a Comissão Organizadora
            e ajude a construir essa memória coletiva!
          </p>
          <a href="/contato" className="inline-flex items-center bg-ifal-green text-white px-6 py-3 rounded-md hover:bg-ifal-green/90 transition-colors">
            Compartilhar Fotos
          </a>
        </div>
      </div>
    </div>
  );
};

export default GaleriaPage;
