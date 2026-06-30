import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="bg-[#171717] min-h-screen py-20">
    <main className="flex flex-col gap-3 px-20 max-w-4xl">
      <h1 className="text-5xl text-white font-black leading-tight">From Fine Line To Full Sleeves, <br/>We Create Tattoos That Are <br/> Uniquely Yours.</h1>
      <p className="text-gray-300">Transform your ideas into timeless works of art. Our experienced tattoo artists specialize in creating custom designs that reflect your personality, style, and story—all in a safe, professional, and welcoming environment.</p>
      <div className="flex gap-5"><Button size="md" className="bg-[#F97316] hover:bg-[#FB923C]">Book Appointment</Button> <Button size="md" className="border">Explore Tatto</Button></div>
    </main>
    </div>
  );
}
