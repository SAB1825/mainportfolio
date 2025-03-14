import { motion } from "framer-motion";
import { Mail } from 'lucide-react';
import Link from "next/link";

interface EmailShowcaseProps {
  email?: string;
  className?: string;
  variant?: "default" | "minimal" | "card";
}

export default function EmailShowcase({ 
  email = "sabarisekar777@gmail.com", 
  className = "",
  variant = "default"
}: EmailShowcaseProps) {
  if (variant === "minimal") {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className={`flex items-center gap-2 ${className}`}
      >
        <Mail className="h-4 w-4 text-textGreen" />
        <Link 
          href={`mailto:${email}`}
          className="text-sm text-textLight hover:text-textGreen transition-colors duration-300"
        >
          {email}
        </Link>
      </motion.div>
    );
  }
  
  if (variant === "card") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`bg-[#112240] p-4 rounded-md border border-[#233554] hover:border-textGreen transition-all duration-300 ${className}`}
      >
        <div className="flex items-center justify-between">
          <span className="text-textLight font-medium">Contact Me</span>
          <Mail className="h-5 w-5 text-textGreen" />
        </div>
        <Link 
          href={`mailto:${email}`}
          className="block mt-2 text-textGreen hover:underline font-mono tracking-wide"
        >
          {email}
        </Link>
      </motion.div>
    );
  }
  
  // Default variant
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      className={`group relative ${className}`}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-textGreen to-[#233554] rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <Link href={`mailto:${email}`}>
        <div className="relative flex items-center gap-3 px-4 py-3 bg-bodyColor rounded-lg">
          <div className="p-1.5 rounded-full bg-[#112240] border border-[#233554] group-hover:border-textGreen transition-colors duration-300">
            <Mail className="h-4 w-4 text-textGreen" />
          </div>
          <span className="font-mono text-sm tracking-wider text-textLight group-hover:text-textGreen transition-colors duration-300">
            {email}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
