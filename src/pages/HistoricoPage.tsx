
import React, { useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const HistoricoPage = () => {
  const [activeYear, setActiveYear] = useState<string>("todos");
  const [activeType, setActiveType] = useState<string>("todas");
  
  // Equipes do sistema - as mesmas da EquipesPage
  const equipes = [
    {
      id: '911',
      nome: 'Informática - Matutino - 1º Ano',
      curso: 'Informática'
    },
    {
      id: '912',
      nome: 'Informática - Matutino - 2º Ano',
      curso: 'Informática'
    },
    {
      id: '913',
      nome: 'Informática - Matutino - 3º Ano',
      curso: 'Informática'
    },
    {
      id: '921',
      nome: 'Informática - Vespertino - 1º Ano',
      curso: 'Informática'
    },
    {
      id: '922',
      nome: 'Informática - Vespertino - 2º Ano',
      curso: 'Informática'
    },
    {
      id: '923',
      nome: 'Informática - Vespertino - 3º Ano',
      curso: 'Informática'
    },
    {
      id: '411',
      nome: 'Eletroeletrônica - Matutino - 1º Ano',
      curso: 'Eletroeletrônica'
    },
    {
      id: '412',
      nome: 'Eletroeletrônica - Matutino - 2º Ano',
      curso: 'Eletroeletrônica'
    },
    {
      id: '413',
      nome: 'Eletroeletrônica - Matutino - 3º Ano',
      curso: 'Eletroeletrônica'
    },
    {
      id: '421',
      nome: 'Eletroeletrônica - Vespertino - 1º Ano',
      curso: 'Eletroeletrônica'
    },
    {
      id: '422',
      nome: 'Eletroeletrônica - Vespertino - 2º Ano',
      curso: 'Eletroeletrônica'
    },
    {
      id: '423',
      nome: 'Eletroeletrônica - Vespertino - 3º Ano',
      curso: 'Eletroeletrônica'
    }
  ];

  // Procurar o nome da equipe pelo ID
  const getEquipeNome = (id: string) => {
    const equipe = equipes.find(eq => eq.id === id);
    return equipe ? equipe.curso : id;
  };

  const campeoes = [
    { ano: 2024, campeao: '913', viceCampeao: '423', terceiroLugar: '412' },
    { ano: 2023, campeao: '923', viceCampeao: '413', terceiroLugar: '911' },
    { ano: 2022, campeao: '422', viceCampeao: '912', terceiroLugar: '921' },
    { ano: 2021, campeao: '413', viceCampeao: '922', terceiroLugar: '421' },
    { ano: 2019, campeao: '923', viceCampeao: '412', terceiroLugar: '911' }
  ];

  const memorias = [
    {
      ano: 2024,
      titulo: 'Edição da Superação',
      descricao: 'Com o retorno completo das atividades presenciais, os Jogos IFAL 2024 contaram com recorde de participação e muita energia.',
      destaque: `A equipe ${getEquipeNome('913')} conquistou seu primeiro título geral.`
    },
    {
      ano: 2023,
      titulo: 'Renovação e Talentos',
      descricao: 'Uma edição marcada pela renovação das equipes e descoberta de novos talentos esportivos no instituto.',
      destaque: 'A natação teve o maior número de recordes quebrados em uma única edição.'
    },
    {
      ano: 2022,
      titulo: 'O Retorno Presencial',
      descricao: 'Após o período de pandemia, os jogos retornaram com formato adaptado e grande energia dos participantes.',
      destaque: 'A cerimônia de abertura contou com apresentações culturais de todos os cursos.'
    },
    {
      ano: 2021,
      titulo: 'Edição Híbrida',
      descricao: 'Com alguns eventos online e outros em formato presencial reduzido, os jogos mantiveram a tradição mesmo em tempos difíceis.',
      destaque: 'As competições de xadrez online bateram recorde de participação.'
    },
    {
      ano: 2019,
      titulo: 'Celebração dos 10 anos',
      descricao: 'Edição comemorativa que celebrou uma década dos Jogos Internos no formato atual.',
      destaque: 'Ex-alunos retornaram para partidas especiais de exibição.'
    }
  ];

  // Filtrar por ano se necessário
  const filteredCampeoes = activeYear !== "todos" ? 
    campeoes.filter(item => item.ano.toString() === activeYear) : 
    campeoes;
  
  // Filtrar memórias por ano
  const filteredMemorias = activeYear !== "todos" ? 
    memorias.filter(item => item.ano.toString() === activeYear) : 
    memorias;

  return (
    <div className="pt-20 min-h-screen">
      <div className="bg-ifal-dark py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Histórico</h1>
          <p className="text-lg mt-4 text-gray-300">A trajetória dos Jogos IFAL ao longo dos anos</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Filtros */}
        <div className="mb-8 flex flex-wrap justify-center gap-6">
          {/* Filtro de Ano */}
          <div className="bg-white rounded-full shadow-md inline-flex p-1">
            <ToggleGroup type="single" value={activeYear} onValueChange={(value) => value && setActiveYear(value)}>
              <ToggleGroupItem value="todos" className="rounded-full px-6 py-2 data-[state=on]:bg-ifal-green data-[state=on]:text-white">
                Todos
              </ToggleGroupItem>
              <ToggleGroupItem value="2024" className="rounded-full px-6 py-2 data-[state=on]:bg-ifal-green data-[state=on]:text-white">
                2024
              </ToggleGroupItem>
              <ToggleGroupItem value="2023" className="rounded-full px-6 py-2 data-[state=on]:bg-ifal-green data-[state=on]:text-white">
                2023
              </ToggleGroupItem>
              <ToggleGroupItem value="2022" className="rounded-full px-6 py-2 data-[state=on]:bg-ifal-green data-[state=on]:text-white">
                2022
              </ToggleGroupItem>
              <ToggleGroupItem value="anteriores" className="rounded-full px-6 py-2 data-[state=on]:bg-ifal-green data-[state=on]:text-white">
                Anteriores
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          
          {/* Filtro de Tipo de Competição */}
          <div className="bg-white rounded-full shadow-md inline-flex p-1">
            <ToggleGroup type="single" value={activeType} onValueChange={(value) => value && setActiveType(value)}>
              <ToggleGroupItem value="todas" className="rounded-full px-6 py-2 data-[state=on]:bg-ifal-green data-[state=on]:text-white">
                Todas
              </ToggleGroupItem>
              <ToggleGroupItem value="coletivas" className="rounded-full px-6 py-2 data-[state=on]:bg-ifal-green data-[state=on]:text-white">
                Coletivas
              </ToggleGroupItem>
              <ToggleGroupItem value="individuais" className="rounded-full px-6 py-2 data-[state=on]:bg-ifal-green data-[state=on]:text-white">
                Individuais
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>

        {/* Campeões */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Quadro de Campeões</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-md overflow-hidden">
              <thead>
                <tr className="bg-ifal-green text-white">
                  <th className="py-4 px-6 text-left">Ano</th>
                  <th className="py-4 px-6 text-left">Campeão</th>
                  <th className="py-4 px-6 text-left">Vice-Campeão</th>
                  <th className="py-4 px-6 text-left">Terceiro Lugar</th>
                </tr>
              </thead>
              <tbody>
                {filteredCampeoes.map((item, index) => {
                  const campeao = equipes.find(eq => eq.id === item.campeao);
                  const viceCampeao = equipes.find(eq => eq.id === item.viceCampeao);
                  const terceiroLugar = equipes.find(eq => eq.id === item.terceiroLugar);
                  
                  return (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                      <td className="py-4 px-6 font-medium">{item.ano}</td>
                      <td className="py-4 px-6">
                        <div className="flex items-center">
                          <span className="h-4 w-4 bg-yellow-400 rounded-full mr-2"></span>
                          {campeao?.nome || item.campeao}
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center">
                          <span className="h-4 w-4 bg-gray-300 rounded-full mr-2"></span>
                          {viceCampeao?.nome || item.viceCampeao}
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center">
                          <span className="h-4 w-4 bg-amber-700 rounded-full mr-2"></span>
                          {terceiroLugar?.nome || item.terceiroLugar}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-sm mt-4 text-center">
            Obs.: Em 2020, os jogos não foram realizados devido à pandemia de COVID-19.
          </p>
        </div>

        {/* Timeline de memórias */}
        <h2 className="text-3xl font-bold mb-8 text-center">Memórias</h2>
        <div className="relative border-l-4 border-ifal-green ml-6 md:ml-0 md:mx-auto md:max-w-3xl mb-12 pl-6">
          {filteredMemorias.map((memoria, index) => (
            <div key={index} className="mb-12 relative">
              <div className="absolute -left-10 bg-white border-4 border-ifal-green rounded-full h-6 w-6"></div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{memoria.titulo}</h3>
                  <span className="bg-ifal-green text-white px-3 py-1 rounded-full text-sm">
                    {memoria.ano}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{memoria.descricao}</p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <p className="text-sm italic">{memoria.destaque}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Depoimentos */}
        <div className="bg-ifal-dark/5 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Depoimentos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="italic text-gray-600 mb-4">
                "Os Jogos IFAL foram uma experiência transformadora na minha vida acadêmica. 
                Além das amizades que fiz, descobri meu talento para o esporte que pratico até hoje."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 bg-ifal-green/20 rounded-full flex items-center justify-center text-ifal-green">
                  LP
                </div>
                <div className="ml-4">
                  <p className="font-medium">Lucas Pereira</p>
                  <p className="text-sm text-gray-500">Aluno 2015-2018</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="italic text-gray-600 mb-4">
                "Como professora de Educação Física, vejo nos Jogos IFAL uma oportunidade única de integração 
                e desenvolvimento de valores importantes para os alunos."
              </p>
              <div className="flex items-center">
                <div className="h-10 w-10 bg-ifal-red/20 rounded-full flex items-center justify-center text-ifal-red">
                  CS
                </div>
                <div className="ml-4">
                  <p className="font-medium">Carla Santos</p>
                  <p className="text-sm text-gray-500">Professora desde 2010</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoricoPage;
