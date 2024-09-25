import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <div className="flex-grow flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-extrabold mb-4 text-white">
          Bem-vindo ao Meu Portfólio
        </h1>
        <p className="text-lg text-white mb-8 text-center">
          Oi, eu sou o Matheus! Estou no segundo semestre de Engenharia de Software na FIAP e, no momento, estou estagiando na PDA Soluções. Lá, tenho a chance de trabalhar em projetos reais e ganhar uma experiência prática incrível.

          No estágio, estou lidando com C# e SQL Server, duas ferramentas que me ajudam a enfrentar desafios e a criar soluções inovadoras. É muito gratificante aplicar o que aprendo na faculdade e ver o impacto disso em um ambiente profissional. Além disso, tenho aprendido muito com a equipe que trabalha comigo.

          Sou apaixonado por tecnologia e adoro encontrar maneiras eficientes e criativas de resolver problemas. Gosto de trabalhar em equipe e acho que uma boa comunicação é chave para o sucesso de qualquer projeto e para manter um ambiente de trabalho positivo.

          Estou sempre procurando aprender e crescer como profissional, e estou aberto a novas oportunidades que me desafiem e me permitam contribuir para o sucesso das equipes e projetos. 
        </p>
        <a href="/projects" className="bg-purple-800 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-purple-500 transition duration-300">
          Veja meus projetos
        </a>
      </div>
    </div>
  );
};

export default Home;