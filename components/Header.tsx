import Button from "./ui/Button"

const Header = () => {
  return (
    <div className="w-full h-20 flex items-center bg-black text-white shadow-lg border-b-2 border-white ">
      <nav className="w-full px-10 flex justify-between items-center">
      <h3 className="text-2xl text-white font-black">Tatto<span className="font-serif font-medium">Star</span></h3>
      <ul className="list-none flex gap-5 text-white text-base font-medium">
        <li>Home</li>
        <li>Our Services</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>

      <Button>Book Appointment</Button>
      </nav>
    </div>
  )
}

export default Header
