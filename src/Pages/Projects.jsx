import React from 'react';
import ProjectList from '../Components/ProjectList';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Oceans 20',
      description: 'Projeto destinado a Global Solution da FIAP, utilizando HTML5 e CSS3',
      link: '#',
    },
    {
      id: 2,
      title: 'Henrique Tatto',
      description: 'Densenvolvi um portfólio profissional, afim de divulgar o trabalho de um tatuador.',
      link: '#',
    },
    {
      id: 3,
      title: 'Facebook',
      description: 'Ao perceber a crescente demanda por novas formas de conexão social na era digital, decidi criar uma plataforma que transformaria a maneira como as pessoas se relacionam e compartilham suas vidas online.',
      link: '#',
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-5xl font-bold mb-6 text-purple-800 text-center">Meus Projetos</h2>
      <ProjectList projects={projects} />
    </div>
  );
};

export default Projects;