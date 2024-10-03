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
      link: 'https://www.youtube.com/?app=desktop&hl=pt',
    },

    {
      id: 3,
      title: 'FACEBOOK',
      description: 'O Facebook começou como um projeto universitário com a ideia de oferecer aos estudantes uma plataforma exclusiva para se conectar e interagir. Mas a visão era maior: criar um espaço onde as pessoas pudessem manter contato, compartilhar atualizações de suas vidas e interagir com os outros de forma significativa.Desde o início, o Facebook introduziu uma série de inovações que mudaram o panorama das redes sociais. A funcionalidade de “Notícias” permitiu que os usuários vissem atualizações em tempo real sobre seus amigos e as páginas que seguiam, enquanto o sistema de “amizades” ajudou a criar uma rede de conexões pessoais e profissionais. O “Feed de Notícias” foi um conceito revolucionário que tornou o compartilhamento de informações e a interação social mais dinâmicos e envolventes.À medida que o Facebook cresceu, expandimos suas funcionalidades para incluir fotos, vídeos, eventos e grupos, permitindo que os usuários compartilhassem mais do que apenas status e mensagens. A introdução de recursos como Messenger, Marketplace e a capacidade de criar e gerenciar páginas de negócios tornou a plataforma ainda mais versátil e útil para diversas finalidades, desde comunicação pessoal até estratégias de marketing e e-commerce.Hoje, o Facebook é uma das maiores e mais influentes redes sociais do mundo, com bilhões de usuários ativos que utilizam a plataforma para se conectar, compartilhar e interagir. Nosso compromisso é continuar inovando e adaptando a plataforma para atender às necessidades de uma comunidade global diversificada, promovendo conexões autênticas e facilitando o compartilhamento de experiências e informações.',
      link: 'https://www.facebook.com/?locale=pt_BR',
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