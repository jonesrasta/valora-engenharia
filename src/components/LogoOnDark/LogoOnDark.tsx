export default function LogoOnDark() {
  return (
    <section
      className="
        relative
        w-full
        h-screen
        md:h-200
        bg-[#0D1014]
        flex items-center justify-center
        overflow-hidden
      "
    >
      {/* GLOW */}
      {/* <div
        className="
          absolute
          w-lg h-128
          rounded-full
          bg-[#F98058]/10
          blur-3xl
        "
      /> */}

      <picture className="relative z-10">
        {/* MOBILE */}
        <source
          media="(max-width: 768px)"
          srcSet="/logo.svg"
        />

        {/* DESKTOP */}
        <img
          src="/logo.svg"
          alt="Valora Logo Dark"
          className="
            w-72
            md:w-136
            h-auto
            object-contain
            select-none
            pointer-events-none
          "
        />
      </picture>
    </section>
  );
}