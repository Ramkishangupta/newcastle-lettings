import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Card = ({ backgroundImage, icon:Icon, title, description, link }) => {
  return (
    <Link to={link}>
      <motion.div
        whileHover="hover"
        initial="initial"
        className="relative rounded-[5px] overflow-hidden shadow-lg cursor-pointer group w-80 h-96"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

        {/* Blue overlay sliding down */}
        <motion.div
          variants={{
            initial: { y: "-100%" },
            hover: { y: "0%" },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute inset-0 bg-[#0B1D5A] opacity-40 z-20"
        />

        {/* Animated content container */}
        <motion.div
          variants={{
            initial: { y: 0 },
            hover: { y: -30 },
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute bottom-1 left-6 right-6 z-30 text-white"
        >
          <div className="flex items-center gap-3 text-xl mb-2">
            <span><Icon/></span>
            <h2 className="text-2xl font-bold font-playfair">{title}</h2>
          </div>

          <motion.p
            variants={{
              initial: { opacity: 0, y: 10 },
              hover: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-sm font-plusJakarta"
          >
            {description}
          </motion.p>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default Card;
