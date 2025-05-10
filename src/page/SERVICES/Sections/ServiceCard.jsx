import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Card = ({ backgroundImage, icon, title, description, link }) => {
  return (
    <Link to={link}>
      <motion.div
        whileHover="hover"
        initial="initial"
        className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group w-80 h-96"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

        {/* Blue sliding overlay */}
        <motion.div
          variants={{
            initial: { x: "-100%" },
            hover: { x: "0%" },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute inset-0 bg-indigo-600 opacity-60 z-20"
        />

        {/* Content */}
        <div className="relative z-30 p-6 flex flex-col justify-end h-full text-white">
          <div className="text-3xl mb-4">{icon}</div>
          <h2 className="text-2xl font-bold">{title}</h2>

          {/* Animate description */}
          <motion.p
            variants={{
              initial: { opacity: 0, y: 10 },
              hover: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-2 text-sm"
          >
            {description}
          </motion.p>
        </div>
      </motion.div>
    </Link>
  );
};

export default Card;
