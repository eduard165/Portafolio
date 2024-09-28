"use client";
import { useState } from "react";
import { FaGraduationCap, FaLanguage, FaUserTie, FaComments, FaBolt, FaHeartbeat, FaLightbulb, FaSearch, FaUsers, FaReact, FaGit, FaJava, FaPython, FaJsSquare, FaDatabase, FaDocker, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { SiFirebase, SiC, SiCplusplus, SiMysql, SiMongodb } from 'react-icons/si';
import { MdSchool } from 'react-icons/md';
export default function TabsContentComponent() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div>
      <div className="flex justify-center items-center border-b-2 space-x-4 bg-[#333333]">
        <button
          className={`px-4 py-2 ${activeTab === "about" ? "border-b-2 border-blue-500" : ""}`}
          onClick={() => setActiveTab("about")}
        >
          About
        </button>
        <button
          className={`px-4 py-2 ${activeTab === "projects" ? "border-b-2 border-blue-500" : ""}`}
          onClick={() => setActiveTab("projects")}
        >
          Projects
        </button>
      </div>
      <div className="mt-4 p-4">
        {activeTab === "about" && (
          <div>
            <div>
              <h3 className="text-xl font-bold mb-2">About me</h3>
              <p>I am Eduardo, a passionate developer.</p>
              <p>
                I am a final-year Computer Technology undergraduate with a strong interest in software development. I have hands-on experience with languages such as Java, JavaScript, and SQL. I enjoy learning and exploring new technologies, and I have built simple APIs as part of my learning journey.
              </p>
            </div>
            <div className="mt-6">
              <div className="grid grid-cols-2 gap-8 p-6 bg-[#4A4A4A] text-white">
                {/* Skills */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 border-b border-gray-500">Skills</h2>
                  <ul className="list-none space-y-2">
                    <li className="flex items-center space-x-2">
                      <FaUserTie className="text-blue-500" /> {/* Ícono de liderazgo */}
                      <span>Leadership</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <FaComments className="text-green-500" /> {/* Ícono de habilidades sociales */}
                      <span>Social Skills</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <FaBolt className="text-yellow-500" /> {/* Ícono de rapidez */}
                      <span>Fast Learner</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <FaHeartbeat className="text-red-500" /> {/* Ícono de manejo del estrés */}
                      <span>Stress Management</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <FaLightbulb className="text-orange-500" /> {/* Ícono de pensamiento creativo */}
                      <span>Creative Thinking</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <FaSearch className="text-purple-500" /> {/* Ícono de curiosidad */}
                      <span>Curiosity</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <FaUsers className="text-cyan-500" /> {/* Ícono de trabajo en equipo */}
                      <span>Teamwork</span>
                    </li>
                  </ul>
                </div>

                {/* Technical Skills */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 border-b border-gray-500">Technical Skills</h2>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center space-x-2">
                      <SiFirebase className="text-orange-500" />
                      <span>Firebase</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaJsSquare className="text-yellow-500" />
                      <span>JavaScript</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaJava className="text-red-600" />
                      <span>Java</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaPython className="text-blue-400" />
                      <span>Python</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <SiC className="text-blue-600" />
                      <span>C</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <SiCplusplus className="text-purple-600" />
                      <span>C++</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <SiMysql className="text-blue-500" />
                      <span>MySQL</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaDatabase className="text-blue-500" />
                      <span>MySQL Server</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaGit className="text-orange-500" />
                      <span>Git</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaReact className="text-blue-500" />
                      <span>React</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaDocker className="text-blue-600" />
                      <span>Docker</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <SiMongodb className="text-green-500" />
                      <span>MongoDB</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="col-span-2 mt-8 text-center"> {/* Se añade text-center para centrar el contenido */}
                <h2 className="text-2xl font-bold mb-4 border-b border-gray-500 flex items-center justify-center space-x-2">
                  <FaGraduationCap /> {/* Ícono de título académico */}
                  <span>Education</span>
                </h2>
                <p className="text-lg flex items-center justify-center space-x-2">
                  <MdSchool className="text-blue-500" /> {/* Ícono de escuela */}
                  <span> Computer Technology</span>
                </p>
                <p>Universidad Veracruzana 2020 - Present</p>
                <p className="flex items-center justify-center space-x-2">
                  <FaLanguage className="text-green-500" /> {/* Ícono de idiomas */}
                  <span><em>Inglés B2 (Intermediate-Advanced)</em></span>
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "projects" && (
          <div>
            <div>
              <h3 className="text-xl font-bold mb-2">Experience Project: Internal Records Management System for SDI</h3>
              <p><strong>Secretaria de Desarrollo Institucional - 2024</strong></p>
              <p className="mb-4">
                I developed a document management system for audit records, aimed at improving the organization, storage, and management of audit-related files within a SharePoint-based platform. The system allows users to register documents associated with audits, upload files, and organize them in a structured folder system on SharePoint, improving access and storage efficiency.
              </p>
              <h4 className="font-semibold mb-2">Technologies used:</h4>
              <ul className="list-disc list-inside mb-4">
                <li>React.js</li>
                <li>Microsoft SharePoint</li>
                <li>Microsoft Graph API</li>
                <li>MSAL (Microsoft Authentication Library)</li>
                <li>Flowbite</li>
              </ul>

              {/* Botones para redirigir al proyecto desplegado y al repositorio con íconos */}
              <div className="flex space-x-4">
                <a
                  href="https://github.com/eduard165/Internal-Records-Management-System-for-SDI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded inline-flex items-center"
                >
                  <FaGithub className="mr-2" /> View Repository
                </a>
              </div>
            </div>

            {/* Aquí agregamos el margen vertical */}
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-2">Experience Project: User Authentication System with FastAPI and JWT</h3>
              <p><strong>2024 - Personal Project</strong></p>
              <p className="mb-4">
                I developed a user authentication system that securely manages user registration and login processes, utilizing FastAPI and JSON Web Tokens (JWT). The system allows users to register, log in, and obtain secure access tokens to interact with protected API endpoints. MongoDB is used to store user credentials, with encrypted passwords for added security. The project also includes automated testing to ensure the functionality of key authentication features.</p>
              <h4 className="font-semibold mb-2">Technologies used:</h4>
              <ul className="list-disc list-inside mb-4">
                <li>FastAPI</li>
                <li>MongoDB</li>
                <li>JWT (JSON Web Tokens)</li>
                <li>Motor (Async MongoDB driver)</li>
                <li>Pytest (for automated testing)</li>
                <li>Uvicorn (ASGI server)</li>
              </ul>

              {/* Botones para redirigir al proyecto desplegado y al repositorio con íconos */}
              <div className="flex space-x-4">
                <a
                  href="https://github.com/eduard165/Sistema-de-Autenticacion-de-Usuarios-con-FastAPI-y-JWT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded inline-flex items-center"
                >
                  <FaGithub className="mr-2" /> View Repository
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </div >
  );
}
