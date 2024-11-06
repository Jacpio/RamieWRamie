import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
                style={{
                    padding: "10px 20px",
                    borderRadius: "5px",
                    border: "none",
                    cursor: "pointer",
                    background: "#6200ea",
                    color: "#fff",
                }}
            >
                Toggle Dropdown
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={containerVariants}
                        transition={{ duration: 0.3 }}
                        style={{
                            position: "absolute",
                            top: "100%",
                            left: 0,
                            marginTop: "8px",
                            background: "#fff",
                            borderRadius: "8px",
                            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                            overflow: "hidden",
                            zIndex: 100,
                        }}
                    >
                        {["Profile", "Settings", "Logout"].map((item, index) => (
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