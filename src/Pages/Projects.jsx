import React from 'react';
import ProjectList from '../Components/ProjectList';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Instagram',
      description: 'Decidi transformar minha visão de um novo tipo de plataforma social em realidade. A ideia surgiu da crescente popularidade das redes sociais e do desejo das pessoas de compartilhar momentos visuais com seus amigos e familiares de maneira rápida e acessível.',
      link: '#',
    },
    {
      id: 2,
      title: 'Youtube',
      description: 'Quando a internet estava se tornando uma parte integral das nossas vidas, decidi que era hora de revolucionar o modo como consumimos e compartilhamos vídeos online.',
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
      <h2 className="text-3xl font-bold mb-6 text-purple-800 text-center">Meus Projetos</h2>
      <ProjectList projects={projects} />
    </div>
  );
};

export default Projects;