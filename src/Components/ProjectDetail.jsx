const ProjectDetail = ({ project }) => {
  if (!project) {
    return <div className="container mx-auto p-6 text-center">Projeto não encontrado.</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-5xl font-bold mb-6 text-purple-800 text-center">Detalhes do Projeto</h2>
      <div className=" border border-gray-200 rounded-lg shadow-lg p-6 mt-6">
        <h3 className="text-4xl font-bold mb-4 text-purple-500">{project.title}</h3>
        <p className="text-gray-300 mb-6">{project.description}</p>
        <a 
          href={project.link} 
          className="text-purple-400 hover:text-purple-200 transition duration-300 text-lg"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Ver mais
        </a>
      </div>
    </div>
  );
};

export default ProjectDetail;
