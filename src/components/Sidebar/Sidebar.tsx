// import type { Section } from "../../data/branding";
// import logo from "../../assets/logo.svg";

// interface Props {
//   sections: Section[];
//   active: string;
//   onChange: (id: string) => void;
//   isOpen: boolean;
//   setOpen: (open: boolean) => void;
// }

// export default function Sidebar({
//   sections,
//   active,
//   onChange,
//   isOpen,
//   setOpen,
// }: Props) {
//   return (
//     <>
//       {/* OVERLAY MOBILE */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black/50 z-40 md:hidden"
//           onClick={() => setOpen(false)}
//         />
//       )}

//       <aside
//         className={`
//           fixed md:static
//           top-0 left-0 h-full w-64
//           bg-[#22303e] text-white p-6
//           z-50 transform transition-transform duration-300
//           ${isOpen ? "translate-x-0" : "-translate-x-full"}
//           md:translate-x-0
//         `}
//       >
//         <img src={logo} alt="Valora" className="h-10 mb-10 mt-8" />

//         <nav className="flex flex-col gap-2">
//           {sections.map((item) => (
//             <button
//               key={item.id}
//               onClick={() => {
//                 onChange(item.id);
//                 setOpen(false); // fecha no mobile
//               }}
//               className={`
//                 text-left font-medium px-3 py-2 rounded-md transition
//                 ${
//                   active === item.id
//                     ? "bg-white/20"
//                     : "hover:bg-white/10"
//                 }
//               `}
//             >
//               {item.label}
//             </button>
//           ))}
//         </nav>
//       </aside>
//     </>
//   );
// }

// import { motion, AnimatePresence } from "framer-motion";
// import type { Section } from "../../data/branding";
// import logo from "../../assets/logo.svg";

// interface Props {
//   sections: Section[];
//   active: string;
//   onChange: (id: string) => void;
//   isOpen: boolean;
//   setOpen: (open: boolean) => void;
// }

// export default function Sidebar({
//   sections,
//   active,
//   onChange,
//   isOpen,
//   setOpen,
// }: Props) {
//   return (
//     <>
//       {/* OVERLAY */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 0.4 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.25 }}
//             className="fixed inset-0 bg-black backdrop-blur-sm z-40 md:hidden"
//             onClick={() => setOpen(false)}
//           />
//         )}
//       </AnimatePresence>

//       {/* SIDEBAR */}
// <motion.aside
//   initial={false}
//   animate={{
//     x: isOpen ? 0 : -280,
//   }}
//   transition={{
//     type: "spring",
//     stiffness: 260,
//     damping: 28,
//   }}
//   className="
//     fixed md:static
//     top-0 left-0 h-full w-64
//     bg-[#22303e9a] backdrop-blur-md text-white p-6
//     z-50
// md:translate-x-0
//   "
// >
//         <img src={logo} alt="Valora" className="h-10 mb-10 mt-8" />

//         <nav className="flex flex-col gap-2">
//           {sections.map((item) => (
//             <button
//               key={item.id}
//               onClick={() => {
//                 onChange(item.id);
//                 setOpen(false);
//               }}
//               className={`
//                 text-left font-medium px-3 py-2 rounded-md transition-all duration-300
//                 ${
//                   active === item.id
//                     ? "bg-white/20"
//                     : "hover:bg-white/10 hover:translate-x-1"
//                 }
//               `}
//             >
//               {item.label}
//             </button>
//           ))}
//         </nav>
//       </motion.aside>
//     </>
//   );
// }

import { motion, AnimatePresence } from "framer-motion";
import type { Section } from "../../data/branding";
import logo from "../../assets/logo.svg";
import { useEffect, useState } from "react";

interface Props {
  sections: Section[];
  active: string;
  onChange: (id: string) => void;
  isOpen: boolean;
  setOpen: (open: boolean) => void;
}

export default function Sidebar({
  sections,
  active,
  onChange,
  isOpen,
  setOpen,
}: Props) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const shouldShow = isDesktop || isOpen;

  return (
    <>
      {/* OVERLAY (mobile only) */}
      <AnimatePresence>
        {!isDesktop && isOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black z-40"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* SIDEBAR */}
      <AnimatePresence>
        {shouldShow && (
          <motion.aside
            key="sidebar"
            initial={{ x: "-120%" }}
            animate={{ x: 0 }}
            exit={{ x: "-120%" }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 28,
            }}
            className="
    fixed md:static
    top-0 left-0 h-full
    w-[75%] max-w-70 md:w-64
    bg-[#22303ec7] md:bg-[#22303e]
    backdrop-blur-md md:backdrop-blur-none
    text-white p-6 z-50
  "
          >
            <img src={logo} alt="Valora" className="h-10 mb-10 mt-8" />

            <nav className="flex flex-col gap-2">
              {sections.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onChange(item.id);
                    if (!isDesktop) setOpen(false);
                  }}
                  className={`
                    text-left font-medium px-3 py-2 rounded-md
                    transition-all duration-200
                    ${
                      active === item.id
                        ? "bg-white/20"
                        : "hover:bg-white/10 hover:translate-x-1"
                    }
                  `}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
