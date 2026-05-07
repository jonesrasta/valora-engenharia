import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#22303e] z-40 -mt-3 backdrop-blur-md text-white shadow-lg">
      <hr className="sm:mx-auto h-px border-t-0 bg-transparent bg-linear-to-r from-transparent via-[#f98058ce] to-transparent opacity-25" />
      <div className="max-w-7xl mx-auto px-6 py-3.5 flex flex-col md:flex-row items-center justify-between gap-2 mt-2">
        
        {/* Left */}
        <p className="text-xs md:text-sm text-white">
          © {new Date().getFullYear()} Todos os direitos reservados.
        </p>

        {/* Right */}
        <p className="text-xs md:text-sm text-white">
          Desenvolvido por {" "}
          <a
            href="https://www.livitycreative.com.br"
            target="_blank"
            className="text-white font-bold hover:text-[#F98058] transition-colors"
          >
            Livity Creative
          </a>
        </p>

      </div>
    </footer>
  );
};

export default Footer;