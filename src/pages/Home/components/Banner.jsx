import { motion } from "motion/react"

const Banner = () => {
    // Function to split text into individual letters and preserve spaces
    const splitText = (text) => {
        return text.split("").map((char, index) => {
            // If the character is a space, render a non-breaking space.
            return (
                <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}  // Sequential delay for each character
                    className="inline-block"
                >
                    {char === " " ? "\u00A0" : char}  {/* Non-breaking space for proper spacing */}
                </motion.span>
            );
        });
    };

    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <motion.img
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        className="max-w-sm rounded-lg shadow-2xl"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    />
                    <div>
                        {/* Animated Heading 1 */}
                        <motion.h1
                            className="text-5xl font-bold"
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            {splitText("I am Eamran!")}
                        </motion.h1>

                        {/* Animated Heading 2 */}
                        <motion.h1
                            className="text-5xl font-bold"
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                        >
                            {splitText("Next Level Web Developer")}
                        </motion.h1>

                        {/* Animated Paragraph */}
                        <motion.p
                            className="py-6"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.6 }}
                        >
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </motion.p>

                        {/* Animated Button */}
                        <motion.button
                            className="btn btn-primary"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            Get Started
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
