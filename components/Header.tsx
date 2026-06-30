import Button from "./ui/Button";

const Header = () => {
  return (
    <header className="w-full bg-[#171717] text-white shadow-lg">
      <nav className="h-20 sm:px-20 px-5 flex items-center justify-between">
        <h3 className="text-2xl font-black">
          Tatto<span className="font-serif font-medium">Star</span>
        </h3>

        <ul className="flex gap-5 text-base font-medium">
          <li>Home</li>
          <li>Our Services</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>

        <Button size="sm" className="bg-[#F97316] hover:bg-[#FB923C]">Book Appointment</Button>
      </nav>

      <div className="w-[90%] mx-auto border-b border-gray-300/25" />
    </header>
  );
};

export default Header;