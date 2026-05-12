export default function LogoStructure() {
  return (
    <section
      className="
        relative
        w-full
        h-screen
        md:h-200
        bg-[#22303e]
        flex items-center justify-center
        overflow-hidden
      "
    >
      <picture>
        {/* MOBILE */}
        <source
          media="(max-width: 768px)"
          srcSet="/images/grid-orange-mobile.webp"
        />

        {/* DESKTOP */}
        <img
          src="/images/grid-orange.webp"
          alt="Valora Grid"
          className="
            w-200
            md:w-200
            h-auto p-4
            object-contain
            select-none
            pointer-events-none
          "
        />
      </picture>
    </section>
  );
}