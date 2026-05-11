import { motion, AnimatePresence } from "framer-motion";
import type { Section } from "../../../data/branding";
import { Minus, Plus } from "lucide-react";

import {
  useEffect,
  useState,
  useMemo,
  useRef,
  type RefObject,
} from "react";

interface Props {
  sections: Section[];
  active: string;
  onChange: (id: string) => void;
  isOpen: boolean;
  setOpen: (open: boolean) => void;

  // REF DO BOTÃO HAMBURGER
  menuButtonRef: RefObject<HTMLDivElement | null>;
}

export default function Sidebar({
  sections,
  active,
  onChange,
  isOpen,
  setOpen,
  menuButtonRef,
}: Props) {
  const [isDesktop, setIsDesktop] = useState(false);

  const [openItem, setOpenItem] = useState<string | null>(
    null
  );

  // REF SIDEBAR
  const sidebarRef = useRef<HTMLElement | null>(null);

  // RESPONSIVO
  useEffect(() => {
    const check = () =>
      setIsDesktop(window.innerWidth >= 768);

    check();

    window.addEventListener("resize", check);

    return () =>
      window.removeEventListener("resize", check);
  }, []);

  // FECHAR AO CLICAR FORA
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;

      const clickedOutsideSidebar =
        sidebarRef.current &&
        !sidebarRef.current.contains(target);

      const clickedHamburger =
        menuButtonRef.current &&
        menuButtonRef.current.contains(target);

      if (clickedOutsideSidebar && !clickedHamburger) {
        setOpen(false);
      }
    }

    if (isOpen && !isDesktop) {
      document.addEventListener(
        "click",
        handleClickOutside
      );
    }

    return () => {
      document.removeEventListener(
        "click",
        handleClickOutside
      );
    };
  }, [isOpen, isDesktop, setOpen, menuButtonRef]);

  const shouldShow = isDesktop || isOpen;

  // ABRE PARENT AUTOMATICAMENTE
  const derivedOpenItem = useMemo(() => {
    const parent = sections.find((section) =>
      section.children?.some(
        (child) => child.id === active
      )
    );

    return parent?.id ?? null;
  }, [active, sections]);

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
            className="
              fixed inset-0
              bg-[#22303E]
              backdrop-blur-sm
              z-30
            "
          />
        )}
      </AnimatePresence>

      {/* SIDEBAR */}
      <AnimatePresence>
        {shouldShow && (
          <motion.aside
            ref={sidebarRef}
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
              top-0 left-0
              h-screen

              w-[67%]
              md:max-w-80
              md:w-70
              2xl:w-80

              bg-[#22303ec7]
              md:bg-[#22303e]

              backdrop-blur-md
              md:backdrop-blur-none

              text-[#F2F9FC]

              overflow-y-auto

              p-4 md:p-6
              md:px-2

              z-40
            "
          >
            <img
              src="/logo.svg"
              alt="Valora"
              className="
                h-10
                mb-8
                mt-10
                ml-2 md:ml-4
              "
            />

            <nav className="flex flex-col gap-2">
              {sections.map((item) => {
                const isActive =
                  active === item.id ||
                  item.children?.some(
                    (child) => child.id === active
                  );

                const isOpenItem =
                  openItem === item.id ||
                  (openItem === null &&
                    derivedOpenItem === item.id);

                return (
                  <div key={item.id}>
                    <div
                      className={`
                        flex items-center justify-between

                        md:px-6
                        px-4

                        py-2.5 md:py-3

                        rounded-md

                        transition-all duration-200

                        ${
                          isActive
                            ? "bg-[#ffffff0e]"
                            : "hover:bg-white/10"
                        }
                      `}
                    >
                      {/* TEXTO */}
                      <button
                        onClick={() => {
                          if (item.children) {
                            setOpenItem(
                              isOpenItem
                                ? null
                                : item.id
                            );
                          } else {
                            onChange(item.id);

                            if (!isDesktop) {
                              setOpen(false);
                            }
                          }
                        }}
                        className="
                          flex-1
                          text-left
                          font-medium
                        "
                      >
                        {item.label}
                      </button>

                      {/* ÍCONE */}
                      {item.children && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();

                            setOpenItem(
                              isOpenItem
                                ? null
                                : item.id
                            );
                          }}
                          className="
                            ml-2

                            flex items-center justify-center

                            w-6 h-6

                            rounded-full

                            bg-[#7979791f]

                            shrink-0
                          "
                        >
                          <motion.div
                            animate={{
                              rotate: isOpenItem
                                ? 180
                                : 0,
                            }}
                            transition={{
                              duration: 0.2,
                            }}
                            className="
                              flex items-center justify-center
                            "
                          >
                            {isOpenItem ? (
                              <Minus
                                size={18}
                                color="#F2F9FC"
                              />
                            ) : (
                              <Plus
                                size={18}
                                color="#F2F9FC"
                              />
                            )}
                          </motion.div>
                        </button>
                      )}
                    </div>

                    {/* SUBITENS */}
                    <AnimatePresence>
                      {item.children &&
                        isOpenItem && (
                          <motion.div
                            initial={{
                              opacity: 0,
                              height: 0,
                            }}
                            animate={{
                              opacity: 1,
                              height: "auto",
                            }}
                            exit={{
                              opacity: 0,
                              height: 0,
                            }}
                            transition={{
                              duration: 0.25,
                            }}
                            className="
                              ml-6 mt-2

                              flex flex-col gap-1

                              overflow-hidden
                            "
                          >
                            {item.children.map(
                              (child) => (
                                <button
                                  key={child.id}
                                  onClick={(e) => {
                                    e.stopPropagation();

                                    onChange(
                                      child.id
                                    );

                                    if (
                                      !isDesktop
                                    ) {
                                      setOpen(
                                        false
                                      );
                                    }
                                  }}
                                  className={`
                                    text-sm
                                    text-left

                                    transition

                                    ${
                                      active ===
                                      child.id
                                        ? "text-[#F98058]/80 font-medium"
                                        : "text-[#F2F9FC]/70 hover:text-[#F98058]/80"
                                    }
                                  `}
                                >
                                  {child.label}
                                </button>
                              )
                            )}
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

// import { motion, AnimatePresence } from "framer-motion";
// import type { Section } from "../../../data/branding";
// import { Minus, Plus } from "lucide-react";
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

//   const [openItem, setOpenItem] = useState<string | null>(() => {
//     const parent = sections.find((section) =>
//       section.children?.some((child) => child.id === active),
//     );

//     return parent?.id ?? null;
//   });

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
//             className="fixed inset-0 bg-[#22303E] z-30 backdrop-blur-sm"
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
//             transition={{
//               type: "spring",
//               stiffness: 260,
//               damping: 28,
//             }}
//             className="
//               fixed md:static
//               top-0 left-0 h-screen
//               w-[75%] max-w-70 md:w-64
//               bg-[#22303ec7] md:bg-[#22303e]
//               backdrop-blur-md md:backdrop-blur-none
//               text-[#F2F9FC]
//               p-4 md:p-6 z-50 md:z-40 md:px-2
//             "
//           >
//             <img
//               src="/logo.svg"
//               alt="Valora"
//               className="h-10 mb-10 mt-8 ml-2"
//             />

//             <nav className="flex flex-col gap-2">
//               {sections.map((item) => {
//                 const isActive =
//                   active === item.id ||
//                   item.children?.some((child) => child.id === active);

//                 const isOpenItem = openItem === item.id;

//                 return (
//                   <div key={item.id}>
//                     {/* ITEM */}
//                     <div
//                       className={`
//                         flex items-center justify-between
//                         md:px-6 px-4 py-3 rounded-md
//                         transition-all duration-200
//                         ${isActive ? "bg-[#ffffff0e]" : "hover:bg-white/10"}
//                       `}
//                     >
//                       {/* TEXTO */}
//                       <button
//                         onClick={() => {
//                           if (item.children) {
//                             setOpenItem(isOpenItem ? null : item.id);
//                           } else {
//                             onChange(item.id);

//                             if (!isDesktop) {
//                               setOpen(false);
//                             }
//                           }
//                         }}
//                         className="flex-1 text-left font-medium"
//                       >
//                         {item.label}
//                       </button>

//                       {/* ÍCONE */}
//                       {item.children && (
//                         <motion.button
//                           type="button"
//                           onClick={(e) => {
//                             e.stopPropagation();

//                             setOpenItem(isOpenItem ? null : item.id);
//                           }}
//                           className="
//       ml-2
//       flex items-center justify-center
//       bg-[#7979791f]
//       rounded-full
//       w-6 h-6
//       shrink-0
//       relative
//     "
//                         >
//                           <motion.div
//                             animate={{
//                               rotate: isOpenItem ? 180 : 0,
//                             }}
//                             transition={{
//                               duration: 0.25,
//                               ease: [0.22, 1, 0.36, 1],
//                             }}
//                             className="flex items-center justify-center"
//                           >
//                             <AnimatePresence mode="wait" initial={false}>
//                               {isOpenItem ? (
//                                 <motion.div
//                                   key="minus"
//                                   initial={{ opacity: 0 }}
//                                   animate={{ opacity: 1 }}
//                                   exit={{ opacity: 0 }}
//                                   transition={{ duration: 0.15 }}
//                                   className="absolute"
//                                 >
//                                   <Minus size={18} color="#F2F9FC" />
//                                 </motion.div>
//                               ) : (
//                                 <motion.div
//                                   key="plus"
//                                   initial={{ opacity: 0 }}
//                                   animate={{ opacity: 1 }}
//                                   exit={{ opacity: 0 }}
//                                   transition={{ duration: 0.15 }}
//                                   className="absolute"
//                                 >
//                                   <Plus size={18} color="#F2F9FC" />
//                                 </motion.div>
//                               )}
//                             </AnimatePresence>
//                           </motion.div>
//                         </motion.button>
//                       )}
//                     </div>

//                     {/* SUBMENU */}
//                     <AnimatePresence initial={false}>
//                       {item.children && isOpenItem && (
//                         <motion.div
//                           initial={{
//                             opacity: 0,
//                             height: 0,
//                           }}
//                           animate={{
//                             opacity: 1,
//                             height: "auto",
//                           }}
//                           exit={{
//                             opacity: 0,
//                             height: 0,
//                           }}
//                           transition={{
//                             duration: 0.22,
//                           }}
//                           className="
//                             overflow-hidden
//                             ml-6 mt-2
//                             flex flex-col gap-2
//                           "
//                         >
//                           {item.children.map((child) => (
//                             <button
//                               key={child.id}
//                               onClick={(e) => {
//                                 e.stopPropagation();

//                                 onChange(child.id);

//                                 if (!isDesktop) {
//                                   setOpen(false);
//                                 }
//                               }}
//                               className={`
//                                 text-sm
//                                 text-left
//                                 transition-colors
//                                 duration-200
//                                 ${
//                                   active === child.id
//                                     ? "text-white font-medium"
//                                     : "text-white/70 hover:text-white"
//                                 }
//                               `}
//                             >
//                               {child.label}
//                             </button>
//                           ))}
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 );
//               })}
//             </nav>
//           </motion.aside>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }
