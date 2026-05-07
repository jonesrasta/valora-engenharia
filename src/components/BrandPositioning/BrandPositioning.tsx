import { motion } from "framer-motion";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const audience = [
  "Clientes de alto padrão que valorizam acabamento, detalhe e exclusividade",
  "Empresas e projetos corporativos, que exigem eficiência, organização e confiabilidade",
  "Parceiros que buscam uma engenharia estratégica e bem executada",
];

export default function BrandPositioning() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-2 py-10 pt-24 md:pt-0 md:-mt-8">
      <div className="w-full max-w-4xl px-1.5 py-10 text-[#26323f]">
        <div className="space-y-20">
          
          {/* POSICIONAMENTO */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
          >
            <h2 className="text-[#22303e] text-xl md:text-4xl font-semibold tracking-tight mb-8">
              Posicionamento
            </h2>

            <p className="max-w-4xl text-[#2e3c48] text-[17px] md:text-lg leading-relaxed tracking-wide">
              A Valora Engenharia se posiciona como uma marca de
              engenharia de alto padrão, orientada pela excelência
              técnica, precisão nos processos e compromisso com
              resultados sólidos e duradouros.
            </p>
          </motion.div>

          {/* PÚBLICO-ALVO */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.15}
            variants={fadeUp}
          >
            <h2 className="text-[#22303e] text-xl md:text-4xl font-semibold tracking-tight mb-8">
              Público-Alvo
            </h2>

            <p className="max-w-4xl text-[#2e3c48] text-[17px] md:text-lg leading-relaxed tracking-wide mb-10">
              A Valora atende clientes que buscam qualidade superior,
              segurança e profissionalismo em cada etapa do projeto.
              Seu público é composto por:
            </p>

            <div className="space-y-5">
              {audience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex items-start gap-4"
                >
                  <div className="w-2 h-2 rounded-full bg-[#2e3c48]  mt-3 shrink-0" />

                  <p className="text-[#2e3c48] text-[17px] md:text-lg leading-relaxed tracking-wide">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}