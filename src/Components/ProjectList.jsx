import { Link } from 'react-router-dom';

const ProjectList = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-black border border-gray-200 rounded-lg shadow-lg p-6 flex flex-col justify-between h-64" // Define uma altura fixa
        >
          <div>
            <h3 className="text-2xl font-semibold text-purple-700 mb-3">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
          </div>
          <Link
            to={`/projects/${project.id}`}
            className="text-purple-500 hover:text-purple-200 transition duration-300 mt-auto"
          >
            Ver detalhes
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
