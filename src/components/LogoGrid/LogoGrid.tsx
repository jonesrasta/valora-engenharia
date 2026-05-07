export default function LogoGrid() {
  return (
    <section className="w-full bg-[#f5f4f2]">
      <div className="grid grid-cols-1 md:grid-cols-2">
        
        {/* TOP */}
        <div className="md:col-span-2 bg-[#f5f4f2] flex items-center justify-center px-6 py-40 md:py-20">
          <img
            src="/logo-grid.webp"
            alt="Valora Grid"
            className="w-125 md:w-180 max-w-4xl object-contain mt-8"
          />
        </div>

        {/* LEFT IMAGE */}
        <div className="relative h-80 md:h-125 overflow-hidden">
          <img
            src="/images/logo-img.webp"
            alt="Building"
            className="w-full h-full object-cover"
          />

          {/* LOGO */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="/logo-orange.svg"
              alt="Valora Symbol"
              className="w-28 md:w-44 md:-mt-16"
            />
          </div>
        </div>

        {/* RIGHT BLOCK */}
        <div className="bg-[#22303e] h-80 md:h-125 flex items-center justify-center relative ">
          <div className="relative">
            {/* ICON */}
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-4xl bg-[#f48157] md:-mt-16 flex items-center justify-center">
              <img
                src="/white-logo.svg"
                alt="Valora App"
                className="w-14 md:w-20"
              />
            </div>

            {/* NOTIFICATION */}
            <div className="absolute -top-2 -right-2 w-9 h-9 rounded-full md:-mt-16 bg-red-500 flex items-center justify-center text-white text-sm font-semibold shadow-lg">
              6
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}