import { useState } from "react";
import { useMessageStore } from "@/store/messageStore";
import { useChatsStore } from "@/store/chatsStore";

export default function MessageInput() {
  const [text, setText] = useState("");
  const { activeChatId } = useChatsStore();
  const { sendMessage } = useMessageStore();

  const handleSend = () => {
    if (!text.trim() || !activeChatId) return;
    sendMessage(activeChatId, text.trim());
    setText("");
  };

  return (
    <div className="h-14 border-t border-neutral-800 px-3 flex items-center gap-3">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        placeholder="Написать сообщение…"
        className="flex-1 bg-neutral-800 rounded-lg px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-blue-500"
      />

      <button
        onClick={handleSend}
        className="px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition text-sm"
      >
        ➤
      </button>
    </div>
  );
}
