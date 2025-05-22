import React, { useState } from 'react';

const ModalidadesPage = () => {
  // Estado para armazenar a categoria selecionada
  const [categoriaAtiva, setCategoriaAtiva] = useState<'Todas' | 'Coletivo' | 'Individual'>('Todas');
  
  const modalidades = [
    {
      id: 1,
      nome: 'Futsal',
      descricao: 'Competição em categorias masculina e feminina, com equipes representando cada curso.',
      imagem: 'https://placehold.co/600x400/114B5F/FFFFFF/webp?text=Futsal',
      categoria: 'Coletivo'
    },
    {
      id: 2,
      nome: 'Voleibol',
      descricao: 'Partidas emocionantes divididas em categorias masculina e feminina.',
      imagem: 'https://placehold.co/600x400/114B5F/FFFFFF/webp?text=Voleibol',
      categoria: 'Coletivo'
    },
    {
      id: 3,
      nome: 'Basquete',
      descricao: 'Competição em formato misto, incentivando a integração entre os alunos.',
      imagem: 'https://placehold.co/600x400/114B5F/FFFFFF/webp?text=Basquete',
      categoria: 'Coletivo'
    },
    {
      id: 4,
      nome: 'Atletismo',
      descricao: 'Provas de corrida, salto e arremesso divididas por categorias.',
      imagem: 'https://placehold.co/600x400/88D498/1F1F1F/webp?text=Atletismo',
      categoria: 'Individual'
    },
    {
      id: 5,
      nome: 'Natação',
      descricao: 'Diversas provas de natação nas modalidades livre, costas, peito e borboleta.',
      imagem: 'https://placehold.co/600x400/88D498/1F1F1F/webp?text=Natação',
      categoria: 'Individual'
    },
    {
      id: 6,
      nome: 'Xadrez',
      descricao: 'Torneio no formato suíço com partidas individuais.',
      imagem: 'https://placehold.co/600x400/F3E9D2/1F1F1F/webp?text=Xadrez',
      categoria: 'Individual'
    },
    {
      id: 7,
      nome: 'Tênis de Mesa',
      descricao: 'Competição individual e em duplas em formato de chaves eliminatórias.',
      imagem: 'https://placehold.co/600x400/F3E9D2/1F1F1F/webp?text=Tênis+de+Mesa',
      categoria: 'Individual'
    },
    {
      id: 8,
      nome: 'Handebol',
      descricao: 'Competição em categorias masculina e feminina.',
      imagem: 'https://placehold.co/600x400/114B5F/FFFFFF/webp?text=Handebol',
      categoria: 'Coletivo'
    },
    {
      id: 9,
      nome: 'Judô',
      descricao: 'Competição dividida por categorias de peso e faixas.',
      imagem: 'https://placehold.co/600x400/88D498/1F1F1F/webp?text=Judô',
      categoria: 'Individual'
    }
  ];

  // Função para alternar a categoria ativa
  const alternarCategoria = (categoria: 'Todas' | 'Coletivo' | 'Individual') => {
    setCategoriaAtiva(categoria);
  };

  // Filtra as modalidades com base na categoria selecionada
  const modalidadesFiltradas = modalidades.filter(modalidade => 
    categoriaAtiva === 'Todas' || modalidade.categoria === categoriaAtiva
  );

  return (
    <div className="pt-20 min-h-screen">
      <div className="bg-ifal-dark/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-ifal-dark">Modalidades</h1>
          <p className="text-lg mt-4 text-gray-600">Confira as modalidades disponíveis nos Jogos IFAL 2025</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <button 
              className={`px-6 py-2 rounded-full shadow-sm transition-all ${
                categoriaAtiva === 'Todas' 
                  ? 'bg-ifal-green text-white' 
                  : 'bg-white text-ifal-dark hover:bg-ifal-green/10'
              }`}
              onClick={() => alternarCategoria('Todas')}
            >
              Todas
            </button>
            <button 
              className={`px-6 py-2 rounded-full shadow-sm transition-all ${
                categoriaAtiva === 'Coletivo' 
                  ? 'bg-ifal-green text-white' 
                  : 'bg-white text-ifal-dark hover:bg-ifal-green/10'
              }`}
              onClick={() => alternarCategoria('Coletivo')}
            >
              Coletivas
            </button>
            <button 
              className={`px-6 py-2 rounded-full shadow-sm transition-all ${
                categoriaAtiva === 'Individual' 
                  ? 'bg-ifal-green text-white' 
                  : 'bg-white text-ifal-dark hover:bg-ifal-green/10'
              }`}
              onClick={() => alternarCategoria('Individual')}
            >
              Individuais
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modalidadesFiltradas.map(modalidade => (
            <div key={modalidade.id} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <img 
                  src={modalidade.imagem} 
                  alt={modalidade.nome} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full ${
                  modalidade.categoria === 'Coletivo' ? 'bg-ifal-green/20 text-ifal-green' : 'bg-ifal-red/20 text-ifal-red'
                } mb-2`}>
                  {modalidade.categoria}
                </span>
                <h3 className="text-xl font-bold mb-2">{modalidade.nome}</h3>
                <p className="text-gray-600">{modalidade.descricao}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-ifal-green/10 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Inscrições para as Modalidades</h3>
          <p className="mb-4">As inscrições para as modalidades devem ser feitas através dos representantes de cada curso até o dia 30 de outubro de 2025.</p>
          <p className="mb-4">Para mais informações sobre as regras de cada modalidade, consulte o regulamento completo dos Jogos IFAL 2025.</p>
          <a href="/contato" className="inline-flex items-center text-ifal-green hover:underline">
            Fale com a Comissão Organizadora
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ModalidadesPage;
