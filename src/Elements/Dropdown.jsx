import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCaretDown } from "react-icons/fa6";
const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Variants for the dropdown container
    const containerVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.8 },
    };

    // Variants for each menu item
    const itemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div style={{ position: "relative", display: "inline-block" }}>
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="border-primary text-primary-dark flex items-center gap-x-1 cursor-pointer border-[1px] rounded-md p-2"
            >
                Kategorie pomocy <FaCaretDown/>
            </button>

            <AnimatePresence>
            {isOpen && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={containerVariants}
                        transition={{ duration: 0.3 }}
                        className="absolute top-[100%] left-0 w-full bg-white mt-2 rounded-lg shadow-xl overflow-hidden z-50"
                    >
                        {["Jedzenie", "Ubrania", "Wolontariat"].map((item, index) => (
                            <motion.div
                                key={item}
                                variants={itemVariants}
                                transition={{ duration: 0.2, delay: index * 0.1 }}
                                style={{
                                    padding: "10px 20px",
                                    borderBottom: index < 2 ? "1px solid #eee" : "none",
                                    cursor: "pointer",
                                }}
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Dropdown;