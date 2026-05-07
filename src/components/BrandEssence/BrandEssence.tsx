export default function BrandEssence() {
  const personality = [
    "Sofisticada, pela atenção aos detalhes e padrão elevado",
    "Técnica, pela precisão e domínio da engenharia",
    "Confiável, pela consistência e responsabilidade em cada entrega",
    "Estratégica, pela visão inteligente aplicada a cada projeto",
    "Sólida, pela segurança que transmite em todas as suas soluções",
  ];

  return (
    <section className="w-full min-h-screen flex items-center justify-center px-2 py-10 pt-24 md:pt-0 md:-mt-8">
      <div className="w-full max-w-4xl px-1.5 py-10 text-[#26323f]">

        {/* ESSÊNCIA */}
        <div className="mb-14">
          <h2
            className="
              text-xl md:text-4xl
              font-semibold
              tracking-tight
              mb-10
            "
          >
            Essência da Marca
          </h2>

          <p
            className="
              max-w-3xl
              text-[17px] md:text-lg
              leading-relaxed
              tracking-wide
            "
          >
            A essência da Valora Engenharia está na busca constante
            pela excelência, na precisão dos detalhes e na capacidade
            de transformar ideias em projetos sólidos e valiosos.
          </p>
        </div>

        {/* PROPÓSITO */}
        <div className="mb-14">
          <h2
            className="
              text-xl md:text-4xl
              font-semibold
              tracking-tight
              mb-5
            "
          >
            Propósito
          </h2>

          <p
            className="
              max-w-3xl
              text-[17px] md:text-lg
              leading-relaxed
              tracking-wide
            "
          >
            Gerar valor por meio da engenharia, desenvolvendo projetos
            que unem qualidade, eficiência e visão estratégica,
            contribuindo para construções seguras, duradouras
            e de alto padrão.
          </p>
        </div>

        {/* PERSONALIDADE */}
        <div>
          <h2
            className="
              text-xl md:text-4xl
              font-semibold
              tracking-tight
              mb-5
            "
          >
            Personalidade da Marca
          </h2>

          <p
            className="
              text-[17px] md:text-lg
              leading-relaxed
              tracking-wide
              mb-8
            "
          >
            A Valora Engenharia se apresenta como uma marca:
          </p>

          <div className="space-y-5">
            {personality.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4"
              >
                <div className="w-2 h-2 rounded-full bg-[#2e3c48] mt-3 shrink-0" />

                <p className="text-[#2e3c48] text-[17px] md:text-lg leading-relaxed tracking-wide">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}