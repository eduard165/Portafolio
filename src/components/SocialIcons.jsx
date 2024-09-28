"use client";

import { FaInstagram, FaTiktok, FaGithub, FaLinkedin, FaYoutube, FaTwitter, FaFacebook } from 'react-icons/fa';

export default function SocialIcons() {
  const icons = [
    { icon: <FaInstagram />, link: 'https://www.instagram.com/eduard165' },
    { icon: <FaGithub />, link: 'https://github.com/eduard165' },
    { icon: <FaLinkedin />, link: 'https://www.linkedin.com/eduardo-rodriguez-99497832b/' },
  ];

  return (
    <div className="flex justify-center space-x-4 py-4 bg-[#333333]">
      {icons.map((item, index) => (
        <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
          {item.icon}
        </a>
      ))}
    </div>
  )
}
