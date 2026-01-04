import { useUIStore } from "../store/uiStore";
import { motion } from "framer-motion";

export default function DialogHeader() {
  const openProfilePreview = useUIStore((s) => s.openProfilePreview);

  return (
    <header className="h-14 px-4 flex items-center gap-3 border-b border-neutral-800">
      <motion.div
        whileTap={{ scale: 0.9 }}
        onClick={() => openProfilePreview("user-1")}
        className="w-8 h-8 rounded-full bg-neutral-700 cursor-pointer"
      />

      <div className="flex flex-col">
        <span className="text-sm font-medium">Имя пользователя</span>
        <span className="text-xs text-neutral-500">в сети</span>
      </div>
    </header>
  );
}
