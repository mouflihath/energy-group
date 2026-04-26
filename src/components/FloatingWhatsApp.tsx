import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/2290197038615"
      target="_blank"
      rel="noreferrer"
      aria-label="Contacter sur WhatsApp"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-elegant animate-pulse-glow hover:scale-110 transition-smooth"
    >
      <MessageCircle className="w-7 h-7 fill-white" strokeWidth={0} />
    </motion.a>
  );
}
