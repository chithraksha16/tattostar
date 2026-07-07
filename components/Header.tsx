"use client"
import { useState } from "react";
import Button from "./ui/Button";
import {MenuIcon} from "lucide-react"
const Header = () => {
  const [isMenu, setIsMenu] = useState(false)
  const handleMenu = () => {
    setIsMenu((prev) => !prev)
    
  }
  console.log(isMenu)
  return (
    <header className="w-full bg-[#171717] text-white shadow-lg">
      <nav className="h-20 sm:px-20 px-5 flex items-center justify-between">
        <h3 className="text-2xl font-black">
          Tatto<span className="font-serif font-medium">Star</span>
        </h3>
        
        <ul className=" sm:flex hidden  gap-5 text-base font-medium">
          <li>Home</li>
          <li>Our Services</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>

        <Button size="sm" className="bg-[#F97316] hover:bg-[#FB923C] sm:flex hidden">Book Appointment</Button>

        <button onClick={()=>handleMenu} className="font-medium sm:hidden"><MenuIcon size={30}/></button>
      </nav>

      <div className="w-[90%] mx-auto border-b border-gray-300/25" />
    </header>
  );
};

export default Header;