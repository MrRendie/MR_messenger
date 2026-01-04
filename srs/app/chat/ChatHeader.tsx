import { useChatsStore } from "@/store/chatsStore";
import { useUIStore } from "@/store/uiStore";
import { motion } from "framer-motion";

export default function ChatHeader() {
  const { chats, activeChatId } = useChatsStore();
  const { openChatInfo } = useUIStore();

  const chat = chats.find((c) => c.id === activeChatId);

  if (!chat) {
    return (
      <div className="h-12 border-b border-neutral-800 flex items-center px-4 text-neutral-500">
        Выберите чат
      </div>
    );
  }

  return (
    <div className="h-12 border-b border-neutral-800 px-4 flex items-center justify-between bg-neutral-900">
      {/* LEFT */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-neutral-700 relative">
          {chat.online && (
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-neutral-900" />
          )}
        </div>

        <div className="leading-tight">
          <div className="text-sm font-medium">{chat.title}</div>
          <div className="text-xs text-neutral-400">
            {chat.muted ? "Уведомления отключены" : chat.online ? "online" : "offline"}
          </div>
        </div>
      </div>

      {/* RIGHT ACTIONS */}
      <div className="flex items-center gap-3">
        <HeaderButton label="Аудиозвонок">📞</HeaderButton>
        <HeaderButton label="Видеозвонок">🎥</HeaderButton>
        <HeaderButton label="Инфо" onClick={openChatInfo}>
          ℹ️
        </HeaderButton>
      </div>
    </div>
  );
}

function HeaderButton({
  children,
  onClick,
  label,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  label: string;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={label}
      onClick={onClick}
      className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-neutral-800 transition"
    >
      {children}
    </motion.button>
  );
}
