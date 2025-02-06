import { motion } from "motion/react"
const Statistics = () => {
    return (
        <div>
            <section className="bg-base-200 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">My Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Stat 1 */}
          <div className="stat flex flex-col items-center">
            <motion.div
              className="text-5xl font-bold text-primary"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="counter"
              >
                100+
              </motion.span>
            </motion.div>
            <p className="text-xl">Projects Completed</p>
          </div>

          {/* Stat 2 */}
          <div className="stat flex flex-col items-center">
            <motion.div
              className="text-5xl font-bold text-primary"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="counter"
              >
                2
              </motion.span>
            </motion.div>
            <p className="text-xl">Years of Experience</p>
          </div>

          {/* Stat 3 */}
          <div className="stat flex flex-col items-center">
            <motion.div
              className="text-5xl font-bold text-primary"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="counter"
              >
                200+
              </motion.span>
            </motion.div>
            <p className="text-xl">Happy Clients</p>
          </div>

          {/* Stat 4 */}
          <div className="stat flex flex-col items-center">
            <motion.div
              className="text-5xl font-bold text-primary"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="counter"
              >
                50+
              </motion.span>
            </motion.div>
            <p className="text-xl">Technologies Learned</p>
          </div>
        </div>
      </div>
    </section>            
        </div>
    );
};

export default Statistics;