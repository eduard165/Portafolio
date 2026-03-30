import ProjectCard from "./ProjectCard";
import { FaLaptopCode } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Internal Records Management System",
      fecha: "Secretaria de Desarrollo Institucional - 2024",
      description: "I developed a document management system for audit records, aimed at improving the organization, storage, and management of audit-related files within a SharePoint-based platform. The system allows users to register documents associated with audits, upload files, and organize them in a structured folder system on SharePoint, improving access and storage efficiency.",
      technologies: ["React", "SharePoint", "Graph API", "Azure Functions", "Node.js"],
      repo: "https://github.com/eduard165/Internal-Records-Management-System-for-SDI",
      demo: "https://internal-records-management-system-for-sdi-unxe.vercel.app/"
    },
    {
      title: "Note Taking App",
      fecha: "Personal project - 2024",
      description: "I developed a note-taking application using React that allows users to create, edit, delete, archive, and unarchive notes, as well as filter them by categories. The application persists notes in the browser s localStorage and requires no backend. I also deployed the application using Heroku.",
      technologies: ["React", "Bootstrap", "LocalStorage", "Heroku"],
      repo: "https://github.com/eduard165/notes-app",
      demo: "https://notes-app-red-sigma.vercel.app/login"
    },
    {
      title: "Auth System FastAPI",
      fecha: "Personal project - 2024",
      description: "I developed a user authentication system that securely manages user registration and login processes, utilizing FastAPI and JSON Web Tokens (JWT). The system allows users to register, log in, and obtain secure access tokens to interact with protected API endpoints. MongoDB is used to store user credentials, with encrypted passwords for added security. The project also includes automated testing to ensure the functionality of key authentication features.",
      technologies: ["FastAPI", "MongoDB", "JWT", "Docker", "Pytest", "Python", "Pydantic", "Uvicorn"],
      repo: "https://github.com/eduard165/Sistema-de-Autenticacion-de-Usuarios-con-FastAPI-y-JWT"
    },
    {
      title: "Movies API",
      fecha: "Personal project - 2025",
      description: "I designed and implemented a RESTful API for managing a movie database, featuring CRUD operations with MongoDB, user authentication using JWT, and robust input validation. This project emphasizes modular architecture, scalability, and secure data handling, suitable for real-world applications.",
      technologies: ["FastAPI", "MongoDB", "Docker", "JWT", "Python", "Pytest", "Pydantic", "Uvicorn"],
      repo: "https://github.com/eduard165/movies-api-fastapi"
    },
     {
      title: "Gestion de envios API",
      fecha: "Personal project - 2026",
      description: "Developed a REST API for managing shipments, clients, and delivery tracking using Java, Spring Boot, and PostgreSQL. The API allows managing clients, creating shipments, and tracking deliveries efficiently. JPA/Hibernate was used for database mapping and data management, ensuring clean and reliable operations.",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "JPA/Hibernate"],
      repo: "https://github.com/eduard165/gestion-envios-api"
    }
  ];

  return (
    <div>
       <h2 className="text-2xl font-bold mb-6 flex justify-center items-center gap-2">
          <FaLaptopCode className="text-blue-500" />
          Projects
       </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}