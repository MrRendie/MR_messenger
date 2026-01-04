import { motion } from "framer-motion";
import { Chat, useChatsStore } from "@/store/chatsStore";
import { useUIStore } from "@/store/uiStore";
import clsx from "clsx";

type Props = {
  chat: Chat;
};

export function ChatListItem({ chat }: Props) {
  const { activeChatId, selectChat } = useChatsStore();
  const { openChatInfo } = useUIStore();

  const active = activeChatId === chat.id;

  function handleClick() {
    selectChat(chat.id);
    openChatInfo();
  }

  return (
    <motion.div
      whileTap={{ scale: 0.97 }}
      onClick={handleClick}
      className={clsx(
        "px-4 py-3 cursor-pointer flex gap-3 items-center transition",
        active
          ? "bg-neutral-800"
          : "hover:bg-neutral-800/70"
      )}
    >
      {/* Avatar */}
      <div className="relative">
        <div className="w-10 h-10 rounded-full bg-neutral-700" />
        {chat.online && (
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-neutral-900" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-hidden">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium truncate">
            {chat.title}
          </span>
          {chat.pinned && <span className="text-xs">📌</span>}
        </div>

        <div className="text-xs text-neutral-400 truncate">
          {chat.lastMessage}
        </div>
      </div>

      {/* Meta */}
      <div className="flex flex-col items-end gap-1">
        {chat.unread > 0 && (
          <span className="text-xs bg-blue-600 text-white rounded-full px-2">
            {chat.unread}
          </span>
        )}
        {chat.muted && <span className="text-xs">🔕</span>}
      </div>
    </motion.div>
  );
}
