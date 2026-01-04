import { useUIStore } from "../store/uiStore";
import { motion } from "framer-motion";

const chats = [
  { id: "1", title: "Общий чат", last: "Последнее сообщение" },
  { id: "2", title: "Закрытая группа", last: "Приватный разговор" },
];

export default function ChatList() {
  const openChatInfo = useUIStore((s) => s.openChatInfo);

  return (
    <div className="flex-1 overflow-y-auto">
      {chats.map((chat) => (
        <motion.div
          key={chat.id}
          whileHover={{ backgroundColor: "#1f1f1f" }}
          whileTap={{ scale: 0.98 }}
          onClick={() => openChatInfo(chat.id)}
          className="cursor-pointer px-4 py-3 border-b border-neutral-800"
        >
          <div className="text-sm font-medium">{chat.title}</div>
          <div className="text-xs text-neutral-500 truncate">
            {chat.last}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

import { useChatsStore } from "@/store/chatsStore";
import { ChatListItem } from "./ChatListItem";

export default function ChatList() {
  const { chats } = useChatsStore();

  const pinned = chats.filter((c) => c.pinned);
  const others = chats.filter((c) => !c.pinned);

  return (
    <div className="flex flex-col h-full overflow-y-auto">
      {pinned.length > 0 && (
        <div className="text-xs uppercase px-4 py-2 text-neutral-500">
          Закреплённые
        </div>
      )}
      {pinned.map((chat) => (
        <ChatListItem key={chat.id} chat={chat} />
      ))}

      {others.length > 0 && (
        <div className="text-xs uppercase px-4 py-2 text-neutral-500">
          Чаты
        </div>
      )}
      {others.map((chat) => (
        <ChatListItem key={chat.id} chat={chat} />
      ))}
    </div>
  );
}