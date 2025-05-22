
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const EquipesPage = () => {
  const equipes = [
    {
      id: '911',
      nome: 'Informática - Matutino - 1º Ano',
      cor: 'bg-blue-500',
      textColor: 'text-blue-500',
      logo: '🖥️',
      integrantes: 36,
      conquistas: ['Vice-Campeão Futsal 2024', '3º Lugar Geral 2024']
    },
    {
      id: '912',
      nome: 'Informática - Matutino - 2º Ano',
      cor: 'bg-blue-600',
      textColor: 'text-blue-600',
      logo: '🖥️',
      integrantes: 32,
      conquistas: ['Campeão Xadrez 2024', '2º Lugar Atletismo 2024']
    },
    {
      id: '913',
      nome: 'Informática - Matutino - 3º Ano',
      cor: 'bg-blue-700',
      textColor: 'text-blue-700',
      logo: '🖥️',
      integrantes: 30,
      conquistas: ['Campeão Futsal 2024', '1º Lugar Geral 2024']
    },
    {
      id: '921',
      nome: 'Informática - Vespertino - 1º Ano',
      cor: 'bg-cyan-500',
      textColor: 'text-cyan-500',
      logo: '🖥️',
      integrantes: 34,
      conquistas: ['3º Lugar Vôlei 2024', 'Destaque em Tênis de Mesa']
    },
    {
      id: '922',
      nome: 'Informática - Vespertino - 2º Ano',
      cor: 'bg-cyan-600',
      textColor: 'text-cyan-600',
      logo: '🖥️',
      integrantes: 31,
      conquistas: ['2º Lugar Basquete 2024', 'Destaque em Natação']
    },
    {
      id: '923',
      nome: 'Informática - Vespertino - 3º Ano',
      cor: 'bg-cyan-700',
      textColor: 'text-cyan-700',
      logo: '🖥️',
      integrantes: 28,
      conquistas: ['Campeão Vôlei 2024', '2º Lugar Geral 2024']
    },
    {
      id: '411',
      nome: 'Eletroeletrônica - Matutino - 1º Ano',
      cor: 'bg-yellow-500',
      textColor: 'text-yellow-500',
      logo: '⚡',
      integrantes: 32,
      conquistas: ['3º Lugar Futsal 2024', 'Destaque em Atletismo']
    },
    {
      id: '412',
      nome: 'Eletroeletrônica - Matutino - 2º Ano',
      cor: 'bg-yellow-600',
      textColor: 'text-yellow-600',
      logo: '⚡',
      integrantes: 30,
      conquistas: ['2º Lugar Vôlei 2024', 'Campeão Tênis de Mesa 2024']
    },
    {
      id: '413',
      nome: 'Eletroeletrônica - Matutino - 3º Ano',
      cor: 'bg-yellow-700',
      textColor: 'text-yellow-700',
      logo: '⚡',
      integrantes: 28,
      conquistas: ['Campeão Atletismo 2024', '3º Lugar Geral 2024']
    },
    {
      id: '421',
      nome: 'Eletroeletrônica - Vespertino - 1º Ano',
      cor: 'bg-orange-500',
      textColor: 'text-orange-500',
      logo: '⚡',
      integrantes: 30,
      conquistas: ['Destaque em Xadrez', '3º Lugar Natação 2024']
    },
    {
      id: '422',
      nome: 'Eletroeletrônica - Vespertino - 2º Ano',
      cor: 'bg-orange-600',
      textColor: 'text-orange-600',
      logo: '⚡',
      integrantes: 28,
      conquistas: ['2º Lugar Xadrez 2024', 'Destaque em Futsal']
    },
    {
      id: '423',
      nome: 'Eletroeletrônica - Vespertino - 3º Ano',
      cor: 'bg-orange-700',
      textColor: 'text-orange-700',
      logo: '⚡',
      integrantes: 26,
      conquistas: ['Campeão Basquete 2024', 'Destaque em Vôlei']
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="bg-ifal-dark/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-ifal-dark">Equipes</h1>
          <p className="text-lg mt-4 text-gray-600">Conheça as equipes que participarão dos Jogos IFAL 2025</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipes.map(equipe => (
            <div key={equipe.id} className="bg-white rounded-lg shadow-md overflow-hidden border-t-4" style={{ borderColor: equipe.cor.replace('bg-', '') }}>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <span className={`text-4xl mb-4 inline-block`}>{equipe.logo}</span>
                    <h3 className="text-2xl font-bold mb-1">{equipe.id}</h3>
                    <p className="text-gray-700 mb-2">{equipe.nome}</p>
                  </div>
                  <span className="text-sm font-semibold bg-gray-100 px-3 py-1 rounded-full text-gray-600">
                    {equipe.integrantes} atletas
                  </span>
                </div>
              
                <div className="mt-6">
                  <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2">Conquistas Recentes</h4>
                  <ul className="space-y-2">
                    {equipe.conquistas.map((conquista, index) => (
                      <li key={index} className="flex items-center">
                        <svg className={`h-4 w-4 ${equipe.textColor} mr-2`} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                        {conquista}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={`${equipe.cor} text-white p-4 text-center`}>
                <button className="font-medium">
                  Ver Detalhes
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-ifal-red/10 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Quer participar dos Jogos IFAL 2025?</h3>
          <p className="mb-4">
            Entre em contato com o representante da sua turma ou com a Comissão Organizadora dos Jogos para saber como fazer parte da sua equipe.
          </p>
          <a href="/contato" className="inline-flex items-center text-ifal-red hover:underline">
            Saiba como participar
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EquipesPage;
