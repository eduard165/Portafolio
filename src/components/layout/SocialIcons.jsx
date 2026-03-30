"use client";

import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function SocialIcons() {
  const icons = [
    {
      icon: <FaGithub />,
      link: "https://github.com/eduard165",
      color: "hover:text-white"
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/eduardo-rodriguez-99497832b/",
      color: "hover:text-blue-500"
    }
  ];

  return (
    <div className="flex justify-center space-x-6 py-4 bg-[#333333]">
      {icons.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-gray-300 text-2xl transition duration-300 ${item.color} hover:scale-110`}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}