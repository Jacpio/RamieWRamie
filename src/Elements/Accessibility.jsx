import "../main.css";
import {IoAccessibilitySharp} from "react-icons/io5";
import {useState} from "react";
import {motion} from "framer-motion";

const itemVariants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};
export default function Accessibility() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.nav
                initial={false}
                animate={isOpen ? "open" : "closed"}
                className=" fixed left-1 top-56 z-50"
            >
                <motion.button
                    className="bg-blue-500 flex justify-center rounded-md items-center text-white"
                    whileTap={{scale: 0.97}}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <IoAccessibilitySharp className="size-14 p-2" />
                    <motion.div
                        variants={{
                            open: {rotate: 180},
                            closed: {rotate: 0}
                        }}
                        transition={{duration: 0.2}}
                        style={{originY: 0.55}}
                    >
                    </motion.div>
                </motion.button>
                <motion.ul
                    className="bg-white w-52 rounded-none p-2 cursor-pointer"
                    variants={{
                        open: {
                            clipPath: "inset(0% 0% 0% 0% round 5px)",
                            transition: {
                                type: "spring",
                                bounce: 0,
                                duration: 0.7,
                                delayChildren: 0.3,
                                staggerChildren: 0.05
                            }
                        },
                        closed: {
                            clipPath: "inset(0% 100% 100% 12.5% round 5px)",
                            transition: {
                                type: "spring",
                                bounce: 0,
                                duration: 0.3
                            }
                        }
                    }}
                    style={{pointerEvents: isOpen ? "auto" : "none"}}
                >
                    <motion.li variants={itemVariants}>Powiększ</motion.li>
                    <motion.li variants={itemVariants}>Pomniejsz</motion.li>
                    <motion.li variants={itemVariants}>Nigger</motion.li>
                    <motion.li variants={itemVariants}>Baller</motion.li>
                </motion.ul>
            </motion.nav>
        </>
    )
}

