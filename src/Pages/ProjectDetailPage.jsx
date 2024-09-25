import React from 'react';
import ProjectDetail from '../components/ProjectDetail';
import { useParams } from 'react-router-dom';

const ProjectDetailPage = () => {
  const { id } = useParams();

  const projects = [
    {
      id: 1,
      title: 'INSTAGRAM',
      description: 'O Instagram começou como um simples aplicativo móvel, focado em oferecer uma maneira rápida e elegante de tirar fotos, aplicar filtros criativos e compartilhar essas imagens com um público global. Com uma interface intuitiva e um design centrado no usuário, permitimos que qualquer pessoa, em qualquer lugar, pudesse capturar e compartilhar suas experiências diárias de forma estilizada e atraente.Desde o início, nossa missão foi criar uma plataforma onde a beleza e a simplicidade se encontrassem. Implementamos recursos inovadores como os filtros de fotos, que permitem transformar imagens comuns em obras de arte, e o feed de fotos infinitamente rolável, garantindo que os usuários sempre tenham algo novo para ver e se inspirar.O sucesso do Instagram foi impulsionado pela sua capacidade de conectar pessoas através de imagens, promovendo um senso de comunidade e criatividade. As funcionalidades como Stories, IGTV e Reels foram adicionadas para atender às demandas dos usuários e acompanhar as tendências em constante evolução da mídia social.Hoje, o Instagram não é apenas uma plataforma para compartilhar fotos, mas um espaço vibrante e dinâmico onde marcas, criadores e usuários podem interagir, criar e se inspirar mutuamente. Com milhões de usuários em todo o mundo, o Instagram continua a liderar o caminho na forma como vivenciamos e compartilhamos nossas vidas visuais.',
      link: 'https://www.instagram.com/',
    },
    {
      id: 2,
      title: 'YOUTUBE',
      description: 'O conceito inicial do YouTube era simples: permitir que qualquer pessoa carregasse seus vídeos na internet e os compartilhasse com uma audiência global. Desde o primeiro upload, entendemos que o vídeo era uma forma poderosa de expressão e comunicação, e queríamos tornar essa capacidade acessível a todos.Lançamos o YouTube com uma interface amigável, onde os usuários poderiam facilmente fazer upload de vídeos, criar canais e interagir com o conteúdo de outras pessoas através de comentários e avaliações. O sistema de recomendações, baseado em algoritmos de aprendizado de máquina, foi projetado para personalizar a experiência de visualização, ajudando os usuários a descobrir novos conteúdos relevantes para seus interesses.Com o tempo, o YouTube evoluiu para se tornar muito mais do que uma plataforma de compartilhamento de vídeos. Introduzimos recursos como playlists, transmissões ao vivo e monetização para criadores, permitindo que eles transformassem sua paixão em carreira e alcançassem audiências globais. O YouTube também se tornou uma ferramenta essencial para educação, entretenimento, e notícias, oferecendo uma vasta gama de conteúdos para todos os gostos e necessidades.Hoje, o YouTube é uma das maiores plataformas de vídeo do mundo, com bilhões de usuários e uma infinidade de vídeos sobre praticamente qualquer assunto imaginável.',
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