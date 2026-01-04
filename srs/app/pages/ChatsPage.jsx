export default function ChatsPage() {
  return (
    <div className="flex h-full items-center justify-center text-neutral-500">
      Выберите чат
    </div>
  );
}

import MessageList from "../panels/MessageList";
import MessageInput from "../panels/MessageInput";

export default function ChatsPage() {
  return (
    <div className="flex flex-col h-full">
      <MessageList />
      <MessageInput />
    </div>
  );
}
