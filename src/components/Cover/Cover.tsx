import logo from "../../../public/logo.svg";

export default function Cover() {
  return (
<div className="w-full h-screen bg-[#22303e] flex items-center justify-center shadow-xl overflow-hidden">
  <img
    src={logo}
    alt="Valora"
    className="w-68 h-auto md:w-120 md:-mt-16"
    // opacity-80 hover:scale-105 transition
  />
</div>
  );
}



// import { motion } from "framer-motion";
// import logo from "../../../public/logo.svg";

// export default function Cover() {
//   return (
//     <div className="relative w-full h-screen bg-[#22303e] flex items-center justify-center overflow-hidden">
      
//       {/* LOGO */}
//       <motion.img
//         src={logo}
//         alt="Valora"
//         className="w-68 md:w-100 h-auto md:-mt-16 relative z-10"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{
//           duration: 0.2,
//           delay: 0.2,
//         }}
//       />

//       {/* REVEAL */}
//       <motion.div
//         initial={{ scaleX: 1 }}
//         animate={{ scaleX: 0 }}
//         transition={{
//           duration: 1.3,
//           ease: [0.77, 0, 0.175, 1],
//         }}
//         className="
//           absolute
//           inset-0
//           bg-[#22303e]
//           origin-left
//           z-20
//         "
//       />

//       {/* BARRA VERTICAL */}
//       <motion.div
//         initial={{
//           x: "-220px",
//           opacity: 1,
//         }}
//         animate={{
//           x: "220px",
//           opacity: [1, 1, 0],
//         }}
//         transition={{
//           duration: 1.3,
//           ease: [0.77, 0, 0.175, 1],
//           times: [0, 0.8, 1],
//         }}
//         className="
//           absolute
//           z-30
//           w-[4px]
//           h-28 md:h-40
//           bg-[#F98058]
//           md:-mt-16
//         "
//       />
//     </div>
//   );
// }