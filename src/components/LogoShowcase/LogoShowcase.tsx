interface LogoVariation {
  bg: string;
  src: string;
  alt: string;
}

const logos: LogoVariation[] = [
  {
    bg: "bg-[#22303E]",
    src: "/logo.svg",
    alt: "Valora Logo Dark",
  },
  {
    bg: "bg-[#F5825A]",
    src: "/logo-white.svg",
    alt: "Valora Logo Orange",
  },
  {
    bg: "bg-[#020817]",
    src: "/logo.svg",
    alt: "Valora Logo Black",
  },
];

export default function LogoShowcase() {
  return (
    <section className="w-full overflow-hidden md:rounded-3xl">
      <div className="flex flex-col mt-18 md:mt-0">
        {logos.map((logo, index) => (
          <div
            key={index}
            className={`
              ${logo.bg}
              w-full h-68
              flex items-center justify-center
              py-14 md:py-20
              px-6
            `}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="
                w-60 md:w-100
                object-contain
                select-none
                pointer-events-none
              "
            />
          </div>
        ))}
      </div>
    </section>
  );
}