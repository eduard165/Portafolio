import { FaUserTie, FaComments, FaBolt, FaHeartbeat, FaLightbulb, FaSearch, FaUsers, FaReact, FaGit, FaJava, FaPython, FaJsSquare, FaDatabase, FaDocker } from 'react-icons/fa';
import { FaTools } from "react-icons/fa";
import { SiFirebase, SiC, SiCplusplus, SiMysql, SiMongodb, SiSpringboot, SiPostgresql, SiTailwindcss, SiHtml5, SiCss3, SiKotlin } from 'react-icons/si';

export default function Skills() {
  return (
    <div className="grid grid-cols-2 gap-8 p-6 bg-[#4A4A4A] text-white">
      
      {/* Soft Skills */}
      <div>
          <h2 className="text-2xl font-bold mb-4 border-b border-gray-500 flex justify-center items-center gap-2">
             <FaTools className="text-green-500" />
             Skills
          </h2>        
          <ul className="space-y-2">
          <li className="flex items-center space-x-2">
            <FaUserTie className="text-blue-400" /> <span>Leadership</span>
          </li>
          <li className="flex items-center space-x-2">
            <FaComments className="text-green-400" /> <span>Social Skills</span>
          </li>
          <li className="flex items-center space-x-2">
            <FaBolt className="text-yellow-400" /> <span>Fast Learner</span>
          </li>
          <li className="flex items-center space-x-2">
            <FaHeartbeat className="text-red-400" /> <span>Stress Management</span>
          </li>
          <li className="flex items-center space-x-2">
            <FaLightbulb className="text-orange-400" /> <span>Creative Thinking</span>
          </li>
          <li className="flex items-center space-x-2">
            <FaSearch className="text-purple-400" /> <span>Curiosity</span>
          </li>
          <li className="flex items-center space-x-2">
            <FaUsers className="text-cyan-400" /> <span>Teamwork</span>
          </li>
        </ul>
      </div>

      {/* Technical Skills */}
      <div>
        <h2 className="text-2xl font-bold mb-4 border-b border-gray-500 flex justify-center items-center gap-2">
            <FaTools className="text-green-500" />
            Technical Skills
        </h2>
        <div className="flex flex-wrap gap-4">

          <div className="flex items-center space-x-2">
            <SiFirebase className="text-orange-500" />
            <span>Firebase</span>
          </div>

          <div className="flex items-center space-x-2">
            <FaJsSquare className="text-yellow-400" />
            <span>JavaScript</span>
          </div>

          <div className="flex items-center space-x-2">
            <FaReact className="text-cyan-400" />
            <span>React</span>
          </div>

          <div className="flex items-center space-x-2">
            <FaJava className="text-red-500" />
            <span>Java</span>
          </div>

          <div className="flex items-center space-x-2">
            <SiKotlin className="text-purple-500" />
            <span>Kotlin</span>
          </div>

          <div className="flex items-center space-x-2">
            <SiSpringboot className="text-green-600" />
            <span>Spring Boot</span>
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
            <SiCplusplus className="text-purple-500" />
            <span>C++</span>
          </div>

          <div className="flex items-center space-x-2">
            <SiHtml5 className="text-orange-500" />
            <span>HTML</span>
          </div>

          <div className="flex items-center space-x-2">
            <SiCss3 className="text-blue-500" />
            <span>CSS</span>
          </div>

          <div className="flex items-center space-x-2">
            <SiTailwindcss className="text-blue-400" />
            <span>Tailwind CSS</span>
          </div>

          <div className="flex items-center space-x-2">
            <SiMysql className="text-blue-500" />
            <span>MySQL</span>
          </div>

          <div className="flex items-center space-x-2">
            <SiPostgresql className="text-blue-700" />
            <span>PostgreSQL</span>
          </div>

          <div className="flex items-center space-x-2">
            <SiMongodb className="text-green-500" />
            <span>MongoDB</span>
          </div>

          <div className="flex items-center space-x-2">
            <FaDatabase className="text-blue-400" />
            <span>MySQL Server</span>
          </div>

          <div className="flex items-center space-x-2">
            <FaGit className="text-orange-500" />
            <span>Git</span>
          </div>

          <div className="flex items-center space-x-2">
            <FaDocker className="text-blue-400" />
            <span>Docker</span>
          </div>

        </div>
      </div>

    </div>
  );
}