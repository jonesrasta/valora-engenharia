import { motion } from "framer-motion";
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  ArrowUpRight,
} from "lucide-react";

const posts = [
  {
    id: 1,
    image: "/images/post-1.webp",
    title: "Precisão em cada detalhe",
    description:
      "Projetos desenvolvidos com excelência técnica e visão estratégica.",
  },
  {
    id: 2,
    image: "/images/post-2.webp",
    title: "Estrutura que gera valor",
    description:
      "Soluções inteligentes que unem sofisticação, segurança e performance.",
  },
  {
    id: 3,
    image: "/images/post-3.webp",
    title: "Construindo confiança",
    description: "Cada entrega reflete compromisso, qualidade e alto padrão.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const card = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function InstagramPosts() {
  return (
    <section
      className="
        w-full
        bg-[#f5f7f9]
        py-30 md:py-8
        px-4
        overflow-hidden
      "
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
        className="
          max-w-8xl
          mx-auto
        "
      >
        {/* HEADER */}
        {/* <motion.div
          variants={card}
          className="mb-14 text-center"
        >
          <span
            className="
              text-sm
              uppercase
              tracking-[0.25em]
              text-[#F98058]
            "
          >
            Social Media
          </span>

          <h2
            className="
              mt-4
              text-3xl md:text-5xl
              font-semibold
              tracking-tight
              text-[#22303E]
            "
          >
            Posts da Marca
          </h2>

          <p
            className="
              mt-5
              max-w-2xl
              mx-auto
              text-[17px] md:text-lg
              leading-relaxed
              tracking-wide
              text-[#41505e]
            "
          >
            Uma comunicação visual sofisticada, moderna e estratégica
            para fortalecer o posicionamento da Valora Engenharia.
          </p>
        </motion.div> */}

        {/* POSTS */}
        <motion.div
          variants={container}
          className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-4
          "
        >
          {posts.map((post) => (
            <motion.article
              key={post.id}
              variants={card}
              whileHover={{
                y: -6,
                transition: { duration: 0.3 },
              }}
              className="
                bg-white
                rounded-4xl
                overflow-hidden
                border border-[#22303e]/8
                shadow-[0_10px_40px_rgba(0,0,0,0.04)]
              "
            >
              {/* TOP */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                  px-5
                  py-4
                  border-b border-[#22303e]/6
                "
              >
                <div className="flex items-center gap-3">
                  <div
                    className="
                      w-11 h-11
                      rounded-full
                      bg-[#22303E]
                      flex items-center justify-center
                    "
                  >
                    <img
                      src="/logo-color.svg"
                      alt="Valora"
                      className="w-7 h-7 ml-0.5"
                    />
                  </div>

                  <div className="leading-tight">
                    <h3
                      className="
      text-[11px] md:text-xs
      font-semibold
      text-[#22303E]
      leading-none
    "
                    >
                      valoraengenharia
                    </h3>

                    <span
                      className="
      text-[9px] md:text-[10px]
      text-[#22303E]/55
      leading-none
      block mt-0.5
    "
                    >
                      Engenharia & Construção
                    </span>
                  </div>
                </div>

                <ArrowUpRight size={18} className="text-[#22303E]/50" />
              </div>

              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.03 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  src={post.image}
                  alt={post.title}
                  className="
                    w-full
                    h-120
                    object-cover
                  "
                />
              </div>

              {/* ACTIONS */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                  px-5
                  pt-4
                "
              >
                <div className="flex items-center gap-3.5">
                  <Heart size={24} className="text-red-600 fill-red-600" />

                  <MessageCircle size={24} className="text-[#22303E]" />

                  <Send size={24} className="text-[#22303E]" />
                </div>

                <Bookmark size={24} className="text-[#22303E]" />
              </div>

              {/* CONTENT */}
              <div className="px-5 pt-4 pb-6 ">
                <h4
                  className="
                    text-sm
                    font-semibold
                    text-[#22303E]
                    mb-1.5
                  "
                >
                  {post.title}
                </h4>

                <p
                  className="
                    text-[12px]
                    leading-relaxed
                    tracking-wide
                    text-[#41505e]
                  "
                >
                  {post.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
