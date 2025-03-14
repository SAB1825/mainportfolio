import { motion } from "framer-motion";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
        className="relative group"
      >
        <div className="flex items-center">
          <div className="font-bold text-xl md:text-2xl tracking-wider relative">
            <span className="text-textGreen">S</span>
            <span className="text-white">ABARI</span>
            <motion.div 
              className="absolute -bottom-1 left-0 w-0 h-[2px] bg-textGreen group-hover:w-full transition-all duration-300"
              initial={{ width: 0 }}
              animate={{ width: 0 }}
              whileHover={{ width: "100%" }}
            />
          </div>
          <div className="ml-1 w-2 h-2 rounded-full bg-textGreen animate-pulse" />
        </div>
      </motion.div>
    </Link>
  );
}
