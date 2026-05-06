// import { motion, AnimatePresence } from "framer-motion";
// import type { Section } from "../../data/branding";
// import logo from "../../assets/logo.svg";
// import { Plus } from "lucide-react";
// import { useEffect, useState } from "react";

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
//   const [isDesktop, setIsDesktop] = useState(false);
//   const [openItem, setOpenItem] = useState<string | null>(null);

//   useEffect(() => {
//     const check = () => setIsDesktop(window.innerWidth >= 768);
//     check();
//     window.addEventListener("resize", check);
//     return () => window.removeEventListener("resize", check);
//   }, []);

//   const shouldShow = isDesktop || isOpen;

//   return (
//     <>
//       {/* OVERLAY */}
//       <AnimatePresence>
//         {!isDesktop && isOpen && (
//           <motion.div
//             key="overlay"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 0.4 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.2 }}
//             className="fixed inset-0 bg-[#22303E] z-40 backdrop-blur-sm"
//             onClick={() => setOpen(false)}
//           />
//         )}
//       </AnimatePresence>

//       {/* SIDEBAR */}
//       <AnimatePresence>
//         {shouldShow && (
//           <motion.aside
//             key="sidebar"
//             initial={{ x: "-120%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "-120%" }}
//             transition={{ type: "spring", stiffness: 260, damping: 28 }}
//             className="fixed md:static top-0 left-0 h-screen w-[75%] max-w-70 md:w-64 bg-[#22303ec7] md:bg-[#22303e] backdrop-blur-md md:backdrop-blur-none text-[#F2F9FC] p-6 z-50 md:px-2"
//           >
//             <img src={logo} alt="Valora" className="h-10 mb-10 mt-8 ml-2" />

//             <nav className="flex flex-col gap-2">
// {sections.map((item) => {
//   const isActive =
//     active === item.id ||
//     item.children?.some((child) => child.id === active);

//   const isOpenItem = openItem === item.id;

//   return (
//     <div key={item.id}>
//       {/* ITEM */}
//       <div
//         className={`
//           w-full flex items-center justify-between
//           md:px-6 px-4 py-3 rounded-md
//           transition-all duration-200
//           ${isActive ? "bg-[#ffffff23]" : "hover:bg-white/10"}
//         `}
//       >
//         {/* TEXTO (NAVEGAÇÃO) */}
//         <button
//           onClick={() => {
//             onChange(item.id);
//             if (!isDesktop) setOpen(false);
//           }}
//           className="flex-1 text-left font-medium"
//         >
//           {item.label}
//         </button>

//         {/* ÍCONE (EXPANSÃO) */}
//         {item.children && (
//           <motion.button
//             onClick={(e) => {
//               e.stopPropagation(); // 🔥 ESSENCIAL
//               setOpenItem(isOpenItem ? null : item.id);
//             }}
//             animate={{ rotate: isOpenItem ? 45 : 0 }}
//             transition={{ duration: 0.25 }}
//             className="ml-2 flex items-center justify-center"
//           >
//             <Plus size={18} />
//           </motion.button>
//         )}
//       </div>

//       {/* SUBITENS */}
//       <AnimatePresence>
//         {item.children && isOpenItem && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.25 }}
//             className="ml-6 mt-2 flex flex-col gap-1 overflow-hidden"
//           >
//             {item.children.map((child) => (
//               <button
//                 key={child.id}
//                 onClick={(e) => {
//                   e.stopPropagation();    
//                   onChange(child.id);       
//                   if (!isDesktop) setOpen(false);
//                 }}
//                 className={`text-sm text-left transition ${
//                   active === child.id
//                     ? "text-white"
//                     : "text-white/70 hover:text-white"
//                 }`}
//               >
//                 {child.label}
//               </button>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// })}
//             </nav>
//           </motion.aside>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

import { motion, AnimatePresence } from "framer-motion";
import type { Section } from "../../data/branding";
import logo from "../../assets/logo.svg";
import { Plus } from "lucide-react";
import { useEffect, useState, useMemo } from "react";

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
  const [openItem, setOpenItem] = useState<string | null>(null);

  // 📱 Detecta breakpoint
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();

    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const shouldShow = isDesktop || isOpen;

  // 🧠 Deriva qual item deve estar aberto baseado no active
  const derivedOpenItem = useMemo(() => {
    const parent = sections.find((section) =>
      section.children?.some((child) => child.id === active)
    );

    return parent?.id ?? openItem;
  }, [active, sections, openItem]);

  return (
    <>
      {/* OVERLAY */}
      <AnimatePresence>
        {!isDesktop && isOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#22303E] z-40 backdrop-blur-sm"
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
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
            className="
              fixed md:static
              top-0 left-0 h-screen
              w-[75%] max-w-70 md:w-64
              bg-[#22303ec7] md:bg-[#22303e]
              backdrop-blur-md md:backdrop-blur-none
              text-[#F2F9FC]
              p-6 z-50 md:px-2
            "
          >
            <img src={logo} alt="Valora" className="h-10 mb-10 mt-8 ml-2" />

            <nav className="flex flex-col gap-2">
              {sections.map((item) => {
                const isActive =
                  active === item.id ||
                  item.children?.some((child) => child.id === active);

                const isOpenItem = derivedOpenItem === item.id;

                return (
                  <div key={item.id}>
                    {/* ITEM */}
                    <div
                      className={`
                        flex items-center justify-between
                        md:px-6 px-4 py-3 rounded-md
                        transition-all duration-200
                        ${isActive ? "bg-[#ffffff23]" : "hover:bg-white/10"}
                      `}
                    >
                      {/* TEXTO */}
                      <button
                        onClick={() => {
                          if (item.children) {
                            setOpenItem(isOpenItem ? null : item.id);
                          } else {
                            onChange(item.id);
                            if (!isDesktop) setOpen(false);
                          }
                        }}
                        className="flex-1 text-left font-medium"
                      >
                        {item.label}
                      </button>

                      {/* ÍCONE */}
                      {item.children && (
                        <motion.button
                          onClick={(e) => {
                            e.stopPropagation();
                            setOpenItem(isOpenItem ? null : item.id);
                          }}
                          animate={{ rotate: isOpenItem ? 45 : 0 }}
                          transition={{ duration: 0.25 }}
                          className="ml-2 flex items-center justify-center"
                        >
                          <Plus size={18} />
                        </motion.button>
                      )}
                    </div>

                    {/* SUBITENS */}
                    <AnimatePresence>
                      {item.children && isOpenItem && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="ml-6 mt-2 flex flex-col gap-1 overflow-hidden"
                        >
                          {item.children.map((child) => (
                            <button
                              key={child.id}
                              onClick={(e) => {
                                e.stopPropagation();
                                onChange(child.id);
                                if (!isDesktop) setOpen(false);
                              }}
                              className={`
                                text-sm text-left transition
                                ${
                                  active === child.id
                                    ? "text-white font-medium"
                                    : "text-white/70 hover:text-white"
                                }
                              `}
                            >
                              {child.label}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}