import { useUIStore } from "../store/uiStore";
import ChatInfo from "../panels/ChatInfo";
import ProfilePreview from "../panels/ProfilePreview";
import { AnimatePresence, motion } from "framer-motion";

export default function RightPanel() {
  const view = useUIStore((s) => s.rightPanelView);

  return (
    <AnimatePresence mode="wait">
      {view !== "none" && (
        <motion.aside
          initial={{ x: 320, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 320, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="border-l border-neutral-800 bg-neutral-900"
        >
          {view === "chat-info" && <ChatInfo />}
          {view === "profile-preview" && <ProfilePreview />}
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
