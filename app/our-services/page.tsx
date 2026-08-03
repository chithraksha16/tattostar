const Page = () => {
  const services = [
    {
      id: 1,
      title: "Custom Tattooing",
      image: "https://images.unsplash.com/photo-1597852075234-fd721ac361d3?q=80&w=1170&auto=format&fit=crop",
      description:
        "Bring your ideas to life with custom tattoos designed to reflect your personality and style.",
      cta: "Read More",
    },
    {
      id: 2,
      title: "Professional Body Piercing",
      image: "https://images.unsplash.com/photo-1560577938-a5ed9b19fe12?w=600&auto=format&fit=crop&q=60",
      description:
        "Safe and hygienic body piercings with premium jewelry and professional aftercare.",
      cta: "Read More",
    },
    {
      id: 3,
      title: "Tattoo Cover-Up",
      image: "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=600&auto=format&fit=crop&q=60",
      description:
        "Transform old tattoos into beautiful artwork with creative cover-up designs.",
      cta: "Read More",
    },
    {
      id: 4,
      title: "Tattoo Touch-Up",
      image: "https://images.unsplash.com/photo-1482329033286-79a3d24413b4?w=600&auto=format&fit=crop&q=60",
      description:
        "Refresh faded tattoos by restoring colors and sharpening fine details.",
      cta: "Read More",
    },
    {
      id: 5,
      title: "Permanent Makeup",
      image: "https://images.unsplash.com/photo-1654403868650-b67027f3627f?w=600&auto=format&fit=crop&q=60",
      description:
        "Enhance your natural beauty with brows, eyeliner, and lip blush services.",
      cta: "Read More",
    },
    {
      id: 6,
      title: "Creative Nail Art",
      image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600&auto=format&fit=crop&q=60",
      description:
        "Unique nail designs ranging from elegant minimalism to bold artistic styles.",
      cta: "Read More",
    },
    {
      id: 7,
      title: "Henna Art",
      image: "https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?w=600&auto=format&fit=crop&q=60",
      description:
        "Beautiful traditional and modern henna designs for weddings and celebrations.",
      cta: "Read More",
    },
  ];

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-orange-500 uppercase tracking-widest text-sm font-semibold">
            Our Services
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Crafted for Every Style.
            <span className="text-orange-500"> Designed to Last.</span>
          </h2>

          <p className="text-gray-400 mt-5 leading-7">
            From custom tattoos to professional piercings and artistic beauty
            services, our experienced artists create designs that reflect your
            personality with precision, creativity, and care.
          </p>
        </div>

        {/* Services */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="group overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-orange-500 transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-orange-500 transition">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-sm leading-6 mb-5">
                  {service.description}
                </p>

                <button className="text-orange-500 font-medium hover:translate-x-1 transition">
                  {service.cta} →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;