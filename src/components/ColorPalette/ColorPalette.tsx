import { motion } from "framer-motion";

interface Color {
  name: string;
  hex: string;
  rgb: string;
  cmyk: string;
  bg: string;
  text?: string;
  span?: number; // pra controlar largura
}

const colors: Color[] = [
  {
    name: "Orange Earth",
    hex: "F98058",
    rgb: "249,128,88",
    cmyk: "0,49,65,2",
    bg: "#F98058",
    text: "text-white",
    span: 2,
  },
  {
    name: "French Gray",
    hex: "ACB9BF",
    rgb: "172,185,190",
    cmyk: "9,3,0,25",
    bg: "#ACB9BF",
  },
  {
    name: "Gunmetal",
    hex: "22303E",
    rgb: "172,185,190",
    cmyk: "9,3,0,25",
    bg: "#22303E",
    text: "text-white",
  },
  {
    name: "Alice Blue",
    hex: "F2F9FC",
    rgb: "242,249,252",
    cmyk: "4,1,0,1",
    bg: "#F2F9FC",
  },
  {
    name: "Off-Black",
    hex: "0D1014",
    rgb: "13,16,20",
    cmyk: "35,20,0,92",
    bg: "#0D1014",
    text: "text-white",
    span: 4,
  },
];

export default function ColorPalette() {
  return (
    <div className="w-full p-4 md:p-10 bg-zinc-200 min-h-screen">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        
        {colors.map((color, index) => (
          <motion.div
            key={color.name}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`
              rounded-3xl p-6 flex flex-col justify-between
              ${color.text || "text-zinc-900"}
              ${color.span === 2 ? "md:col-span-2" : ""}
              ${color.span === 4 ? "md:col-span-4" : ""}
            `}
            style={{ backgroundColor: color.bg, minHeight: 200 }}
          >
            {/* Top */}
            <span className="text-sm md:text-base font-medium">
              {color.name}
            </span>

            {/* Bottom */}
            <div className="text-xs md:text-sm leading-relaxed">
              <p>{color.hex}</p>
              <p>{color.rgb}</p>
              <p>{color.cmyk}</p>
            </div>
          </motion.div>
        ))}

      </div>
    </div>
  );
}