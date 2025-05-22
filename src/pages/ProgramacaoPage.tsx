import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProgramacaoPage = () => {
  // Array of days for the schedule
  const scheduleData = [
    {
      date: "04 de Junho de 2025",
      dayNumber: "01",
      title: "Cerimônia de Abertura",
      bgColor: "bg-gradient-to-r from-ifal-green to-ifal-green/80",
      events: [
        {
          time: "08:00 - 10:00",
          title: "Cerimônia de Abertura",
          location: "Ginásio Principal",
          description: "Apresentação das equipes, discursos oficiais e apresentações culturais para dar início aos Jogos IFAL 2025."
        },
        {
          time: "10:30 - 12:00",
          title: "Partida Inaugural - Futsal",
          location: "Quadra Poliesportiva",
          description: "Jogo de abertura entre as equipes finalistas do ano anterior."
        },
        {
          time: "14:00 - 17:00",
          title: "Competições de Atletismo",
          location: "Pista de Atletismo",
          description: "Provas de corrida, salto em distância e arremesso de peso."
        }
      ]
    },
    {
      date: "05 de Junho de 2025",
      dayNumber: "02",
      title: "Dia 2",
      bgColor: "bg-gradient-to-r from-ifal-red to-ifal-red/80",
      events: [
        {
          time: "08:00 - 10:00",
          title: "Voleibol Feminino",
          location: "Quadra Coberta",
          description: "Fase classificatória do torneio de voleibol feminino."
        },
        {
          time: "10:30 - 12:00",
          title: "Futsal Masculino",
          location: "Quadra Poliesportiva",
          description: "Segunda rodada do torneio de futsal masculino."
        },
        {
          time: "14:00 - 17:00",
          title: "Competição de Natação",
          location: "Piscina Olímpica",
          description: "Provas de velocidade, revezamento e estilo livre."
        }
      ]
    },
    {
      date: "06 de Junho de 2025",
      dayNumber: "03",
      title: "Dia 3",
      bgColor: "bg-gradient-to-r from-ifal-dark to-ifal-dark/80",
      events: [
        {
          time: "08:00 - 10:00",
          title: "Basquetebol Misto",
          location: "Quadra Coberta",
          description: "Competição de basquete com times mistos."
        },
        {
          time: "10:30 - 12:00",
          title: "Tênis de Mesa",
          location: "Salão de Jogos",
          description: "Torneio individual e em duplas de tênis de mesa."
        },
        {
          time: "14:00 - 17:00",
          title: "Xadrez",
          location: "Sala de Estudos",
          description: "Campeonato de xadrez em formato suíço."
        }
      ]
    },
    {
      date: "07 de Junho de 2025",
      dayNumber: "04",
      title: "Encerramento",
      bgColor: "bg-gradient-to-r from-ifal-green/80 to-ifal-red/80",
      events: [
        {
          time: "09:00 - 12:00",
          title: "Finais das Modalidades",
          location: "Diversos Locais",
          description: "Finais das competições de todas as modalidades esportivas."
        },
        {
          time: "14:00 - 16:00",
          title: "Premiação das Equipes",
          location: "Auditório Principal",
          description: "Entrega de troféus e medalhas para as equipes vencedoras de cada modalidade."
        },
        {
          time: "16:30 - 18:30",
          title: "Cerimônia de Encerramento",
          location: "Ginásio Principal",
          description: "Apresentações culturais, agradecimentos e encerramento oficial dos Jogos IFAL 2025."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="bg-ifal-green py-20 mb-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Programação</h1>
          <p className="text-xl mt-4 text-white/90">Confira a agenda completa dos Jogos IFAL 2025</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Schedule navigation */}
        <div className="flex justify-between items-center mb-10 overflow-x-auto pb-4 whitespace-nowrap">
          {scheduleData.map((day, index) => (
            <a 
              key={index}
              href={`#day-${index + 1}`}
              className="px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all flex items-center space-x-2 flex-shrink-0 mx-2"
            >
              <Calendar className="h-5 w-5 text-ifal-green" />
              <span>Dia {index + 1} - {day.date.split(' ')[0]}</span>
            </a>
          ))}
        </div>

        {/* Schedule content */}
        <div className="space-y-16">
          {scheduleData.map((day, dayIndex) => (
            <div key={dayIndex} id={`day-${dayIndex + 1}`} className="scroll-mt-24">
              <div className={`${day.bgColor} text-white p-6 rounded-t-xl shadow-md`}>
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className="flex items-center mb-4 md:mb-0">
                    <span className="text-5xl font-bold opacity-70 mr-4">{day.dayNumber}</span>
                    <div>
                      <h2 className="text-2xl font-bold text-white">{day.date}</h2>
                      <p className="text-white/80">{day.title}</p>
                    </div>
                  </div>
                  <Button variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                    Ver detalhes
                  </Button>
                </div>
              </div>
              
              <div className="bg-white rounded-b-xl shadow-md overflow-hidden">
                {day.events.map((event, eventIndex) => (
                  <div 
                    key={eventIndex}
                    className={`p-6 ${eventIndex < day.events.length - 1 ? 'border-b' : ''}`}
                  >
                    <div className="flex flex-col md:flex-row md:items-start">
                      <div className="md:w-1/5 mb-4 md:mb-0">
                        <div className="flex items-center text-gray-600">
                          <Clock className="h-4 w-4 mr-2" />
                          <span className="font-medium">{event.time}</span>
                        </div>
                      </div>
                      
                      <div className="md:w-4/5">
                        <h3 className="text-xl font-semibold mb-1">{event.title}</h3>
                        <div className="flex items-center text-gray-600 mb-3">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{event.location}</span>
                        </div>
                        <p className="text-gray-600">{event.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16 p-8 bg-gray-50 rounded-lg border border-gray-100">
          <h3 className="text-xl font-semibold mb-3">Fique atento às atualizações</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            A programação está sujeita a alterações conforme o andamento das competições. Acompanhe as notificações e avisos no quadro de avisos do campus.
          </p>
          <Button className="bg-ifal-green hover:bg-ifal-green/90">
            Baixar Programação Completa
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProgramacaoPage;
