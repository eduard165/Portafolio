"use client";
import SocialIcons from "@/components/layout/SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 bg-[#333333]">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </div>
      <SocialIcons />
    </footer>
  );
}
