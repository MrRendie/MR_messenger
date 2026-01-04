import ChatHeader from "@/app/components/Chat/ChatHeader";

export default function CenterPanel() {
  return (
    <main className="flex flex-col h-full bg-neutral-950">
      <ChatHeader />

      <div className="flex-1 flex items-center justify-center text-neutral-500">
        Сообщения появятся здесь
      </div>
    </main>
  );
}

import ChatHeader from "@/app/components/Chat/ChatHeader";
import MessageList from "@/app/components/Message/MessageList";
import MessageInput from "@/app/components/Message/MessageInput";

export default function CenterPanel() {
  return (
    <main className="flex flex-col h-full bg-neutral-950">
      <ChatHeader />
      <MessageList />
      <MessageInput />
    </main>
  );
}
