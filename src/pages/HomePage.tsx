import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CountdownTimer from '../components/CountdownTimer';
import ScrollIndicator from '../components/ScrollIndicator';
import { soccerImage, basketballImage, volleyballImage, athleteImage, runnerImage } from '../assets/images';
import { aboutImage } from '../assets';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const HomePage = () => {
  // Set the target date for the event (June 4, 2025)
  const targetDate = new Date(2025, 5, 4); // Month is 0-indexed, so 5 is June

  return (
    <div className="w-full">
      {/* Hero Section - Fixed to respect margins and constrain image size */}
      <section className="relative min-h-screen bg-gradient-to-br from-ifal-green/20 via-transparent to-ifal-red/20 overflow-hidden">
        {/* Green accent square - reduced size */}
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-ifal-green/70 rounded-tr-[80px] z-10"></div>
        
        {/* Red accent square - reduced size */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-ifal-red/70 rounded-bl-[80px] z-10"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex flex-col justify-center relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-4 items-center h-full">
            <div className="pt-20 lg:pt-0 flex flex-col">
              <div className="mb-4 text-ifal-red font-medium text-sm tracking-wider uppercase">
                INSTITUTO FEDERAL DE ALAGOAS
                <hr className="w-20 h-1 bg-ifal-red mt-2" />
              </div>
              <h1 className="font-title uppercase text-4xl sm:text-5xl md:text-6xl mb-4 leading-tight">
                Jogos <span className="text-ifal-green">Internos</span> <br />
                <span className="text-ifal-red">IFAL</span> <span className="text-ifal-dark">2025</span>
              </h1>
              <p className="text-lg mb-6 max-w-xl">
                Competição, espírito esportivo e integração: celebrando o talento e
                a dedicação dos nossos estudantes!
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Link to="/programacao" className="bg-ifal-green text-white font-medium py-2 px-6 rounded-md hover:bg-ifal-green/90 transition-colors flex items-center gap-2">
                  VER PROGRAMAÇÃO
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <Link to="/modalidades" className="bg-ifal-red text-white font-medium py-2 px-6 rounded-md hover:bg-ifal-red/90 transition-colors flex items-center gap-2">
                  MODALIDADES
                  <svg className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              
              {/* Date Range Card - Optimized */}
              <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden max-w-md">
                <div className="flex justify-center items-center p-4">
                  <div className="text-center px-4 py-2 border-r border-gray-200">
                    <span className="block text-4xl font-bold text-ifal-green">04</span>
                    <span className="text-gray-600">JUN</span>
                  </div>
                  <div className="text-xl font-medium px-4 py-2">ATÉ</div>
                  <div className="text-center px-4 py-2 border-l border-gray-200">
                    <span className="block text-4xl font-bold text-ifal-green">07</span>
                    <span className="text-gray-600">JUN</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex justify-center lg:justify-end items-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-ifal-green/20 rounded-br-[80px] rounded-tl-[80px] blur-lg opacity-60 group-hover:opacity-100 transition duration-500"></div>
                <div 
                  className="relative w-[400px] h-[400px] overflow-hidden rounded-br-[80px] rounded-tl-[80px] transform rotate-3 group-hover:rotate-0 transition-transform duration-500"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1547941126-3d5322b218b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Atleta IFAL" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <ScrollIndicator />
      </section>

      {/* About Section - Updated to match the image reference */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block py-1 px-3 mb-2 bg-ifal-green text-white rounded-md text-sm font-medium">
              SOBRE
            </div>
            <h2 className="section-title mx-auto text-center">
              Os Jogos <span className="text-ifal-red">Internos</span>
            </h2>
            <div className="title-decorator"></div>
            <p className="section-subtitle max-w-2xl mx-auto">
              Um evento anual que reúne estudantes de todas as turmas em uma competição
              saudável e integrativa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-600 mb-8">
                Os Jogos Internos do IFAL são um evento anual que reúne estudantes de todas
                as turmas em uma competição saudável e integrativa. O evento visa promover o
                espírito esportivo, o trabalho em equipe e a amizade entre os alunos, além de
                incentivar a prática de atividades físicas.
              </p>
              <p className="text-gray-600 mb-8">
                Durante o período dos jogos, as aulas regulares são substituídas por atividades
                esportivas, permitindo que os alunos demonstrem seus talentos em diversas
                modalidades, enquanto fortalecem os laços comunitários dentro da instituição.
              </p>
              
              {/* Updated feature boxes - stacked vertically */}
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-ifal-green/10 p-3 rounded-lg mr-4">
                    <svg className="h-6 w-6 text-ifal-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Competição Saudável</h3>
                    <p className="text-sm text-gray-500">Promovemos uma competição respeitosa, focada no desenvolvimento atlético e na camaradagem.</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-ifal-green/10 p-3 rounded-lg mr-4">
                    <svg className="h-6 w-6 text-ifal-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Integração entre Turmas</h3>
                    <p className="text-sm text-gray-500">Os jogos criam oportunidades para interação entre estudantes de diferentes cursos e períodos.</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-ifal-green/10 p-3 rounded-lg mr-4">
                    <svg className="h-6 w-6 text-ifal-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Promoção da Saúde</h3>
                    <p className="text-sm text-gray-500">Incentivamos a prática esportiva e a adoção de hábitos saudáveis entre os estudantes.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:pl-8">
              <img 
                src={runnerImage} 
                alt="Atleta IFAL" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sports - Updated with multiple carousel items */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block py-1 px-3 mb-2 bg-ifal-green text-white rounded-md text-sm font-medium">
              ESPORTES
            </div>
            <h2 className="section-title mx-auto text-center">
              Modalidades <span className="text-ifal-red">Esportivas</span>
            </h2>
            <div className="title-decorator"></div>
            <p className="section-subtitle max-w-2xl mx-auto">
              Descubra todas as modalidades disponíveis nos Jogos Internos de 2025.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <Carousel
              opts={{ align: "start" }}
              className="w-full"
            >
              <CarouselContent>
                <CarouselItem className="basis-full">
                  <div className="relative rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src={soccerImage} 
                      alt="Futebol" 
                      className="w-full h-96 object-cover" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-3">Futebol</h3>
                        <p className="text-white/80 mb-6 text-lg max-w-2xl">
                          Equipes de 11 jogadores competindo no campo principal do campus,
                          com partidas emocionantes e disputadas.
                        </p>
                        <Link 
                          to="/modalidades/futebol" 
                          className="bg-ifal-green text-white px-6 py-2 rounded inline-flex items-center font-medium"
                        >
                          SAIBA MAIS
                          <svg className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 text-white bg-black/50 px-2 py-1 rounded text-sm">
                      01 / 03
                    </div>
                  </div>
                </CarouselItem>

                <CarouselItem className="basis-full">
                  <div className="relative rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src={basketballImage} 
                      alt="Basquete" 
                      className="w-full h-96 object-cover" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-3">Basquete</h3>
                        <p className="text-white/80 mb-6 text-lg max-w-2xl">
                          Disputa de cestas no ginásio com equipes de 5 jogadores,
                          demonstrando habilidade, estratégia e trabalho em equipe.
                        </p>
                        <Link 
                          to="/modalidades/basquete" 
                          className="bg-ifal-green text-white px-6 py-2 rounded inline-flex items-center font-medium"
                        >
                          SAIBA MAIS
                          <svg className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 text-white bg-black/50 px-2 py-1 rounded text-sm">
                      02 / 03
                    </div>
                  </div>
                </CarouselItem>

                <CarouselItem className="basis-full">
                  <div className="relative rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src={volleyballImage} 
                      alt="Vôlei" 
                      className="w-full h-96 object-cover" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-3">Vôlei</h3>
                        <p className="text-white/80 mb-6 text-lg max-w-2xl">
                          Times de 6 jogadores se enfrentam em partidas dinâmicas que exigem
                          reflexos rápidos e coordenação perfeita entre os membros da equipe.
                        </p>
                        <Link 
                          to="/modalidades/volei" 
                          className="bg-ifal-green text-white px-6 py-2 rounded inline-flex items-center font-medium"
                        >
                          SAIBA MAIS
                          <svg className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 text-white bg-black/50 px-2 py-1 rounded text-sm">
                      03 / 03
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="absolute left-4 top-1/2" />
              <CarouselNext className="absolute right-4 top-1/2" />
            </Carousel>
          </div>

          <div className="text-center mt-10">
            <Link 
              to="/modalidades" 
              className="bg-ifal-green text-white font-medium py-2.5 px-6 rounded inline-flex items-center mx-auto"
            >
              VER TODAS AS MODALIDADES
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block py-1 px-3 mb-2 bg-ifal-green text-white rounded-md text-sm font-medium">
              NOVIDADES
            </div>
            <h2 className="section-title mx-auto text-center">
              Destaques de <span className="text-ifal-red">2025</span>
            </h2>
            <div className="title-decorator"></div>
            <p className="section-subtitle max-w-2xl mx-auto">
              Conheça as principais novidades desta edição dos Jogos Internos do IFAL.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-ifal-green/10 p-4 rounded-lg inline-block mb-4">
                <svg className="h-8 w-8 text-ifal-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Novas<br />Modalidades
              </h3>
              <p className="text-gray-600 mb-4">
                Esse ano adicionamos xadrez e tênis de mesa como novas modalidades competitivas, ampliando as opções para diferentes talentos!
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-ifal-red/10 p-4 rounded-lg inline-block mb-4">
                <svg className="h-8 w-8 text-ifal-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Recorde de<br />Participação
              </h3>
              <p className="text-gray-600 mb-4">
                Mais de 20 equipes confirmadas, representando todas as turmas do campus em uma competição sem precedentes!
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-ifal-green/10 p-4 rounded-lg inline-block mb-4">
                <svg className="h-8 w-8 text-ifal-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Premiação<br />Especial
              </h3>
              <p className="text-gray-600 mb-4">
                Este ano, as equipes vencedoras receberão troféus personalizados e medalhas comemorativas de alta qualidade.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-ifal-red/10 p-4 rounded-lg inline-block mb-4">
                <svg className="h-8 w-8 text-ifal-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Período<br />dos Jogos
              </h3>
              <p className="text-gray-600 mb-4">
                De 04 a 07 de Junho de 2025, com cerimônia de abertura especial no ginásio principal do campus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Section - Updated with green theme and white text */}
      <section className="py-16 bg-ifal-green/95 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
                Contagem Regressiva
              </h2>
              <p className="text-lg text-green-50 mb-8">
                Prepare-se para a maior edição dos Jogos Internos do IFAL! Fique
                atento ao cronômetro e não perca nenhum detalhe.
              </p>
            </div>

            <CountdownTimer targetDate={targetDate} />

            <div className="text-center mt-12">
              <Link to="/inscrever" className="bg-white text-ifal-green hover:bg-green-50 font-medium py-3 px-8 rounded-md transition-colors inline-flex items-center">
                INSCREVA-SE AGORA
                <svg className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Modified to have solid black background and white text */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
              Participe dos Jogos Internos 2025
            </h2>
            <p className="text-lg mb-8">
              Venha fazer parte deste evento que já é tradição no IFAL. Inscreva sua equipe,
              participe como voluntário ou apenas venha torcer!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/inscrever" className="btn-primary text-lg">
                INSCREVER MINHA EQUIPE
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </Link>
              <Link to="/programacao" className="btn-outline bg-transparent border-white/20 hover:bg-white/10 text-white text-lg">
                VER PROGRAMAÇÃO
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
