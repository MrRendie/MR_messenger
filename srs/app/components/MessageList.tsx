import { useMessageStore } from "@/store/messageStore";
import { useChatsStore } from "@/store/chatsStore";
import MessageBubble from "./MessageBubble";

export default function MessageList() {
  const { activeChatId } = useChatsStore();
  const { messages } = useMessageStore();

  if (!activeChatId) {
    return (
      <div className="flex-1 flex items-center justify-center text-neutral-500">
        Выберите чат
      </div>
    );
  }

  const chatMessages = messages.filter(
    (m) => m.chatId === activeChatId
  );

  return (
    <div className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-2">
      {chatMessages.map((m) => (
        <MessageBubble
          key={m.id}
          text={m.text}
          fromMe={m.fromMe}
        />
      ))}
    </div>
  );
}
