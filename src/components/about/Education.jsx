import { FaGraduationCap, FaLanguage } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';

export default function Education() {
  return (
    <div className="mt-8 text-center">
      
      <h2 className="text-2xl font-bold mb-6 border-b border-gray-500 flex justify-center space-x-2">
        <FaGraduationCap />
        <span>Education</span>
      </h2>

      {/* Cambié space-y-6 por flex row y space-x-6 */}
      <div className="flex justify-center space-x-8">

        {/* Universidad */}
        <div>
          <p className="flex justify-center items-center space-x-2 font-semibold">
            <MdSchool className="text-blue-400" />
            <span>Computer Technology</span>
          </p>
          <p className="text-sm text-gray-300">
            Universidad Veracruzana | 2020 - Present
          </p>
        </div>

        {/* Bachillerato técnico */}
        <div>
          <p className="flex justify-center items-center space-x-2 font-semibold">
            <MdSchool className="text-blue-400" />
            <span>Computer Support & Maintenance Technician</span>
          </p>
          <p className="text-sm text-gray-300">
            CBTis No. 35 | 2014 - 2017
          </p>
        </div>

        {/* Idioma */}
        <div>
          <p className="flex justify-center items-center space-x-2">
            <FaLanguage className="text-green-400" />
            <span><em>English B2 (Intermediate-Advanced)</em></span>
          </p>
        </div>

      </div>

    </div>
  );
}