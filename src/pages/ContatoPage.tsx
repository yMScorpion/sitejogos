
import React from 'react';
import { Button } from '@/components/ui/button';

const ContatoPage = () => {
  return (
    <div className="pt-20 min-h-screen">
      <div className="bg-ifal-red/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-ifal-dark">Contato</h1>
          <p className="text-lg mt-4 text-gray-600">
            Entre em contato com a Comissão Organizadora dos Jogos IFAL 2025
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulário de Contato */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6">Envie sua mensagem</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-ifal-green"
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-ifal-green"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">
                  Assunto
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-ifal-green"
                  required
                >
                  <option value="" disabled selected>Selecione uma opção</option>
                  <option value="inscricao">Inscrições</option>
                  <option value="duvidas">Dúvidas sobre os jogos</option>
                  <option value="sugestoes">Sugestões</option>
                  <option value="reclamacoes">Reclamações</option>
                  <option value="outros">Outros assuntos</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-ifal-green"
                  placeholder="Digite sua mensagem aqui..."
                  required
                ></textarea>
              </div>
              
              <div className="flex items-center">
                <input
                  id="policy"
                  type="checkbox"
                  className="h-4 w-4 text-ifal-green focus:ring-ifal-green rounded"
                  required
                />
                <label htmlFor="policy" className="ml-2 block text-sm text-gray-700">
                  Concordo com a política de privacidade
                </label>
              </div>

              <div>
                <Button type="submit" className="w-full md:w-auto bg-ifal-red hover:bg-ifal-red/90">
                  Enviar mensagem
                </Button>
              </div>
            </form>
          </div>

          {/* Informações de Contato */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
              <div className="space-y-4">
                <div className="flex">
                  <svg className="h-6 w-6 text-ifal-green mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h3 className="font-medium text-ifal-dark">Endereço</h3>
                    <p className="text-gray-600">
                      Rua Lourival Alfredo, 176 - Poço <br />
                      Maceió - AL, 57025-390 <br />
                      IFAL - Campus Maceió
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <svg className="h-6 w-6 text-ifal-green mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h3 className="font-medium text-ifal-dark">Telefone</h3>
                    <p className="text-gray-600">(82) 9999-9999</p>
                  </div>
                </div>

                <div className="flex">
                  <svg className="h-6 w-6 text-ifal-green mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h3 className="font-medium text-ifal-dark">Email</h3>
                    <p className="text-gray-600">jogos.internos@ifal.edu.br</p>
                  </div>
                </div>

                <div className="flex">
                  <svg className="h-6 w-6 text-ifal-green mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-medium text-ifal-dark">Horário de Atendimento</h3>
                    <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">Comissão Organizadora</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-ifal-green/20 rounded-full flex items-center justify-center text-ifal-green">
                    CS
                  </div>
                  <div className="ml-4">
                    <p className="font-medium">Carla Santos</p>
                    <p className="text-sm text-gray-500">Coordenadora Geral</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-ifal-green/20 rounded-full flex items-center justify-center text-ifal-green">
                    MS
                  </div>
                  <div className="ml-4">
                    <p className="font-medium">Marcos Silva</p>
                    <p className="text-sm text-gray-500">Coordenador de Modalidades Coletivas</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-ifal-green/20 rounded-full flex items-center justify-center text-ifal-green">
                    PA
                  </div>
                  <div className="ml-4">
                    <p className="font-medium">Paula Almeida</p>
                    <p className="text-sm text-gray-500">Coordenadora de Logística</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContatoPage;
