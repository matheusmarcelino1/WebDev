const ProjectDetail = ({ project }) => {
  if (!project) {
    return <div className="container mx-auto p-6 text-center">Projeto não encontrado.</div>;
  }

  return (
    <div className="container mx-auto p-6 bg-black border border-gray-200 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-purple-700">{project.title}</h2>
      <p className="text-white mb-6">{project.description}</p>
      <a href={project.link} className="text-purple-600 hover:text-purple-200 transition duration-300" target="_blank" rel="noopener noreferrer">
        Ver mais
      </a>
    </div>
  );
};

export default ProjectDetail;
