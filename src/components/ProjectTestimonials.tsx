const testimonials = [
  {
    name: "Dr. Ader Macar",
    role: "Consultant Physician, MediTest Clinic",
    text: "Simon delivered a seamless digital experience for our clinic. The appointment system is intuitive and we patients love the new site!",
    project: "MediTest Clinic",
    image: "/Dr. Ader Macar.jpg.webp",
  },
  {
    name: "Deng Atem Deng",
    role: "Sales Manager, DadaTech Electronics",
    text: "Our new website is fast, modern, and easy to manage. Simon's attention to detail and design sense are top-notch!",
    project: "DadaTech Showcase Website",
    image: "/Deng Atem.jpg.webp",
  },
];

export function ProjectTestimonials() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-12">
      <div className="flex flex-col md:flex-row gap-8 items-stretch animate-fade-in cursor-pointer">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="flex flex-row items-start gap-4 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6 border-l-4 border-primary/60 shadow-none hover:scale-105 transition-transform duration-300"
          >
            <img
              src={t.image}
              alt={t.project}
              className="w-20 h-20 rounded-full object-cover border-4 border-primary/60 shadow-md bg-white"
            />
            <div>
              <blockquote className="text-base md:text-lg italic text-foreground mb-2 leading-relaxed">
                “{t.text}”
              </blockquote>
              <div className="font-semibold text-primary">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
