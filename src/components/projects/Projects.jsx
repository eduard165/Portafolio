import ProjectCard from "./ProjectCard";
import { FaLaptopCode } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Internal Records Management System",
      fecha: "Secretaria de Desarrollo Institucional - 2024",
      description: "I developed a document management system for audit records, aimed at improving the organization, storage, and management of audit-related files within a SharePoint-based platform. The system allows users to register documents associated with audits, upload files, and organize them in a structured folder system on SharePoint, improving access and storage efficiency.",
      technologies: ["React", "SharePoint", "Graph API", "Azure Functions", "Node.js", "Tailwind CSS","MSAL", "flowbite"],
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
      title: "Time-Fast – RESTful API for Shipment Management",
      fecha: "Personal project - 2024",
      description: "Developed the RESTful API for Time-Fast, a fictitious shipping and logistics company. The solution manages shipments, employees, clients, drivers, and packages in real time across multiple platforms, ensuring efficient information flow and delivery tracking. Features include modules for creation, editing, deletion, and advanced search for each entity, as well as driver assignment and shipment status management.",
      technologies: ["Java","MyBatis", "gson", "MySQL",  ],
      repo: "https://github.com/eduard165/time-fast.git"
    },
    {
      title: "Time-Fast Mobile App",
      fecha: "Personal project - 2024",
      description: "Time-Fast Mobile is a cross-platform application that consumes the Time-Fast RESTful API to manage shipments, employees, clients, drivers, and packages in real time. The app allows users to interact with the logistics system from their mobile devices, providing seamless access to shipment tracking, driver assignments, and package management.",
      technologies: ["kotlin"],
      repo: "https://github.com/eduard165/ClienteMovil.git"
    },
    {
      title: "Time-Fast Desktop App",
      fecha: "Personal project - 2024",
      description: "Developed a JavaFX desktop application consuming the Time-Fast RESTful API, designed for administrators and authorized personnel. The application provides full access to all modules: employees, clients, vehicles, shipments, and packages, with functionalities for creating, editing, deleting, advanced search, and real-time updates.",
      technologies: ["Java", "javafx"],
      repo: "https://github.com/eduard165/fast-time-escritorio.git"
    },
    {
      title: "Time-Fast Web App",
      fecha: "Personal project - 2024",
      description: "Developed a web application for Time-Fast that allows customers to track shipments in real time. Users can search shipments by tracking number, view package details, and monitor status changes (pending, in transit, stopped, delivered, canceled) through a responsive and user-friendly interface. The web client integrates with the Time-Fast RESTful API, providing a seamless experience for end users.",
      technologies: ["html", "css", "javascript"],
      repo: "https://github.com/eduard165/fast-time-escritorio.git"
    },
    {
      title: "Movies API",
      fecha: "Personal project - 2025",
      description: "I designed and implemented a RESTful API for managing a movie database, featuring CRUD operations with MongoDB, user authentication using JWT, and robust input validation. This project emphasizes modular architecture, scalability, and secure data handling, suitable for real-world applications.",
      technologies: ["Kotlin"],
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