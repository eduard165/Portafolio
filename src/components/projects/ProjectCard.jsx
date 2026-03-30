import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({title, fecha, description, technologies, repo, demo}) {
  return (
    <div className="bg-[#4A4A4A] p-6 rounded-lg shadow-md text-white">
      
      <h3 className="text-xl font-bold text-center mb-2"> {title} </h3>
      <p className="text-sm font-semibold text-center text-gray-300 mb-4"> {fecha} </p>
      <p className="text-sm text-gray-300 mb-4"> {description} </p>

      {/* Tech */}
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span key={index} className="bg-gray-700 px-2 py-1 rounded text-xs text-center">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex justify-center space-x-4">
  {repo && (
    <a
      href={repo}
      target="_blank"
      className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 px-3 py-2 rounded"
    >
      <FaGithub /> Repo
    </a>
  )}

  {demo && (
    <a
      href={demo}
      target="_blank"
      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded"
    >
      <FaExternalLinkAlt /> Demo
    </a>
  )}
</div>

    </div>
  );
}