export default function BrandConcept() {
  const personalityItems = [
    "Valor, como resultado de um trabalho bem executado e pensado estrategicamente",
    "Solidez, representando segurança, estabilidade e confiança em cada entrega",
    "Crescimento, traduzindo evolução contínua, inovação e visão de futuro",
  ];

  return (
    <section className="w-full min-h-screen flex items-center justify-center px-2 py-10 pt-24 md:pt-0 md:-mt-8">
      <div className="w-full max-w-4xl px-1.5 py-10 text-[#26323f]">

        {/* CONCEITO */}
        <div className="mb-16">
          <h2
            className="
              text-xl md:text-4xl
              font-semibold
              tracking-tight
              mb-6
              text-[#22303e]
            "
          >
            Conceito da Marca
          </h2>

          <p
            className="
              max-w-4xl
              text-[17px] md:text-lg
              leading-relaxed
              tracking-wide
              text-[#2e3c48]
            "
          >
            A Valora Engenharia foi concebida a partir de um princípio
            central: gerar valor em cada projeto. Seu conceito vai além
            da construção física, refletindo uma visão estratégica onde
            cada detalhe contribui para resultados sólidos, funcionais
            e duradouros.
          </p>
        </div>

        {/* ORIGEM */}
        <div className="mb-16">
          <h2
            className="
              text-xl md:text-4xl
              font-semibold
              tracking-tight
              mb-6
              text-[#22303e]
            "
          >
            Origem do Nome “Valora”
          </h2>

          <p
            className="
              max-w-4xl
              text-[17px] md:text-lg
              leading-relaxed
              tracking-wide
              text-[#2e3c48]
            "
          >
            O nome “Valora” deriva diretamente da ideia de valor,
            não apenas no sentido financeiro, mas como um conjunto
            de atributos que envolvem qualidade, confiança,
            solidez e relevância.
          </p>
        </div>

        {/* PERSONALIDADE */}
        <div>
          <h2
            className="
              text-xl md:text-4xl
              font-semibold
              tracking-tight
              mb-6
              text-[#22303e]
            "
          >
            Personalidade da Marca
          </h2>

          <p
            className="
              max-w-4xl
              text-[17px] md:text-lg
              leading-relaxed
              tracking-wide
              text-[#2e3c48]
              mb-6
            "
          >
            Ele expressa a essência da marca: entregar mais do
            que estruturas, entregar projetos que agregam
            significado, segurança e reconhecimento.
          </p>

          <p
            className="
              text-[17px] md:text-lg
              leading-relaxed
              tracking-wide
              text-[#2e3c48]
              mb-8
            "
          >
            A Valora Engenharia se apresenta como uma marca:
          </p>

          <div className="space-y-5">
            {personalityItems.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4"
              >
                <div className="w-2 h-2 rounded-full bg-[#2e3c48] mt-3 shrink-0" />

                <p
                  className="
                    text-[#2e3c48]
                    text-[17px] md:text-lg
                    leading-relaxed
                    tracking-wide
                  "
                >
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