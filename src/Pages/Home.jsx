import React from 'react';
import minhaImagem from '../assets/matheus.jpg';

const Home = () => {
  return (
    <div className="flex flex-col h-screen bg-black"> 
      <div className="flex-grow flex flex-col items-center justify-center p-4 overflow-auto">
        <div className="flex flex-col items-center mb-8">
          <img 
            src={minhaImagem} 
            alt="Matheus" 
            className="rounded-full w-64 h-64 object-cover shadow-lg border-4 border-purple-800 mb-8 transition-transform transform hover:scale-105 hover:shadow-2xl" 
          />
          <h1 className="text-5xl font-extrabold text-white mb-4">
            Bem-vindo ao Meu Portfólio
          </h1>
        </div>
        
        <div className="text-center max-w-xl mx-auto">
          <p className="text-lg text-white mb-4">
            Oi, eu sou o Matheus! Estou no segundo semestre de Engenharia de Software na FIAP e, no momento, estou estagiando na PDA Soluções.
          </p>
          <p className="text-lg text-white mb-4">
            No estágio, estou lidando com C# e SQL Server, duas ferramentas que me ajudam a enfrentar desafios e a criar soluções inovadoras. É gratificante aplicar o que aprendo na faculdade e ver o impacto em um ambiente profissional.
          </p>
          <p className="text-lg text-white mb-4">
            Sou apaixonado por tecnologia e adoro encontrar maneiras eficientes e criativas de resolver problemas. Gosto de trabalhar em equipe e acho que uma boa comunicação é chave para o sucesso de qualquer projeto.
          </p>
          <div className="flex justify-center mt-4">
            <a 
              href="/projects" 
              className="bg-purple-800 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-purple-500 transition duration-300"
            >
              Veja meus projetos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
