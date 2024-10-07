import React from 'react';
import ProjectDetail from '../components/ProjectDetail';
import { useParams } from 'react-router-dom';

const ProjectDetailPage = () => {
  const { id } = useParams();

  const projects = [
    {
      id: 1,
      title: 'OCEANS 20',
      description: 'A Faculdade de Informática e Administração Paulista, mais conhecida como FIAP, tem um planejamento educacional que atribui grande importância aos projetos práticos, os quais representam 60% da média final dos alunos. No contexto da disciplina de front-end, desenvolvi uma Landing Page para a Global Solution, utilizando tecnologias modernas como HTML5 e CSS3. Este projeto não apenas me permitiu aplicar os conhecimentos adquiridos em sala de aula, mas também me desafiou a criar uma interface atraente e funcional, alinhada às melhores práticas de desenvolvimento web. ',
      link: 'https://github.com/matheusmarcelino1/OCEANS-20.git',
    },
    {
      id: 2,
      title: 'HENRIQUE TATTO',
      description: 'Desenvolvi um portfólio exclusivo para um tatuador, com o objetivo de destacar seu trabalho e atrair novos clientes. O projeto foi criado utilizando HTML5 e CSS3, proporcionando uma experiência visual atraente e responsiva. O design foi cuidadosamente elaborado para refletir o estilo único do tatuador, com uma galeria de imagens que exibe suas obras de forma impactante. Além disso, implementei uma navegação intuitiva, permitindo que os visitantes explorem facilmente as diferentes seções, como estilos de tatuagem, depoimentos de clientes e informações de contato. O resultado final é um portfólio que não apenas apresenta o talento do tatuador, mas também oferece uma plataforma envolvente para interagir com potenciais clientes.',
      link: 'https://github.com/matheusmarcelino1/Henri-Tatto',
    },

    {
      id: 3,
      title: 'LANDING PAGE - CHALLENGE',
      description: 'Este projeto foi desenvolvido como parte do Challenge 2024 da FIAP, onde tive a oportunidade de criar uma landing page utilizando as tecnologias HTML e CSS. O objetivo da landing page era apresentar de forma clara e atrativa informações sobre um determinado tema, destacando elementos visuais e de design que facilitassem a navegação do usuário.Durante o desenvolvimento, concentrei-me em aplicar práticas de design responsivo, garantindo que a página fosse acessível e funcional em diferentes dispositivos. A estrutura em HTML permitiu organizar o conteúdo de maneira lógica e semântica, enquanto o CSS foi utilizado para estilizar a página, proporcionando uma estética agradável e alinhada com os objetivos do projeto.Este desafio não apenas aprimorou minhas habilidades técnicas em web design, mas também me proporcionou uma visão mais ampla sobre a importância da experiência do usuário e do design visual na criação de páginas da web eficazes.',
      link: 'https://github.com/matheusmarcelino1/Challenge',
    },
  ];

  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return <div>Projeto não encontrado.</div>;
  }

  return (
    <div>
      <ProjectDetail project={project} />
    </div>
  );
};

export default ProjectDetailPage;