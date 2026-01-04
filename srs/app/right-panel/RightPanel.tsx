import { useUIStore } from "@/store/uiStore";
import { ProfilePreview } from "./ProfilePreview";
import { ChatInfo } from "./ChatInfo";
import { SettingsPreview } from "./SettingsPreview";

export default function RightPanel() {
  const { rightPanel } = useUIStore();

  if (rightPanel === "none") return null;

  return (
    <aside className="w-[320px] border-l border-neutral-800 bg-neutral-900">
      {rightPanel === "chat" && <ChatInfo />}
      {rightPanel === "profile" && <ProfilePreview />}
      {rightPanel === "settings" && <SettingsPreview />}
    </aside>
  );
}

import { motion, AnimatePresence } from "framer-motion";
import { useUIStore } from "@/store/uiStore";
import { ProfilePreview } from "./ProfilePreview";
import { ChatInfo } from "./ChatInfo";
import { SettingsPreview } from "./SettingsPreview";

export default function RightPanel() {
  const { rightPanel } = useUIStore();

  return (
    <AnimatePresence>
      {rightPanel !== "none" && (
        <motion.aside
          key="right-panel"
          initial={{ x: 320, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 320, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="w-[320px] h-full border-l border-neutral-800 bg-neutral-900"
        >
          {rightPanel === "chat" && <ChatInfo />}
          {rightPanel === "profile" && <ProfilePreview />}
          {rightPanel === "settings" && <SettingsPreview />}
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
