

const page = () => {
  const services = [
    {
      id: 1,
      title: "Custom Tattooing",
      image: "https://images.unsplash.com/photo-1597852075234-fd721ac361d3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Bring your ideas to life with custom tattoos designed to reflect your personality and style. From minimal designs to full sleeves, our artists create timeless pieces with precision and care.",
      cta: "Read More",
    },
    {
      id: 2,
      title: "Professional Body Piercing",
      image: "https://images.unsplash.com/photo-1560577938-a5ed9b19fe12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGllcmNpbmd8ZW58MHx8MHx8fDA%3D",
      description:
        "Experience safe and hygienic body piercings performed with premium jewelry and sterilized equipment. We prioritize comfort, precision, and proper aftercare for every client.",
      cta: "Read More",
    },
    {
      id: 3,
      title: "Tattoo Cover-Up",
      image: "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VGF0dG9vJTIwQ292ZXItVXB8ZW58MHx8MHx8fDA%3D",
      description:
        "Turn an old or unwanted tattoo into artwork you'll be proud to wear. Our artists specialize in creative cover-up designs that blend seamlessly with your skin.",
      cta: "Read More",
    },
    {
      id: 4,
      title: "Tattoo Touch-Up",
      image: "https://images.unsplash.com/photo-1482329033286-79a3d24413b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFRhdHRvbyUyMFRvdWNoLVVwfGVufDB8fDB8fHww",
      description:
        "Restore the beauty of your existing tattoo with professional touch-up services. We enhance faded ink, sharpen details, and revive colors for a fresh new look.",
      cta: "Read More",
    },
    {
      id: 5,
      title: "Permanent Makeup",
      image: "https://images.unsplash.com/photo-1654403868650-b67027f3627f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFBlcm1hbmVudCUyME1ha2V1cHxlbnwwfHwwfHx8MA%3D%3D",
      description:
        "Enhance your natural beauty with long-lasting cosmetic tattooing, including brows, eyeliner, and lip blush, performed with precision and artistic expertise.",
      cta: "Read More",
    },
    {
      id: 6,
      title: "Creative Nail Art",
      image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q3JlYXRpdmUlMjBOYWlsJTIwQXJ0fGVufDB8fDB8fHww",
      description:
        "Express your style with custom nail designs crafted to suit every occasion. From minimalist elegance to bold artistic creations, we deliver flawless results.",
      cta: "Read More",
    },
    {
      id: 7,
      title: "Henna Art",
      image: "https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVubmElMjBhcnR8ZW58MHx8MHx8fDA%3D",
      description:
        "Celebrate special occasions with beautifully handcrafted henna designs. We create traditional and modern patterns perfect for weddings, festivals, and celebrations.",
      cta: "Read More",
    }
  ];

  return (
    <div className="w-full h-screen bg-black">
    <div>
      <h2>Crafted for Every Style. Designed to Last.</h2>
      <p>From custom tattoos to professional piercings and artistic beauty services, our skilled artists deliver exceptional craftsmanship tailored to your unique style.</p>
    </div>


    </div>
  )
}

export default page
