import { useUIStore } from "../store/uiStore";

export default function ChatInfo() {
  const close = useUIStore((s) => s.closeRightPanel);

  return (
    <div className="h-full flex flex-col">

      <header className="h-14 px-4 flex items-center justify-between border-b border-neutral-800">
        <span className="text-sm font-medium">Информация о чате</span>
        <button
          onClick={close}
          className="text-neutral-500 hover:text-neutral-200"
        >
          ✕
        </button>
      </header>

      <div className="flex-1 p-4 space-y-4">
        <div className="text-sm">Название чата</div>

        <div className="text-xs text-neutral-500">
          Участники, описание, настройки чата
        </div>

        <div className="mt-4 p-3 rounded-lg bg-neutral-800 text-xs">
          В будущем здесь:
          <ul className="list-disc ml-4 mt-2 space-y-1">
            <li>участники</li>
            <li>права</li>
            <li>медиа</li>
            <li>mute / block</li>
          </ul>
        </div>
      </div>

    </div>
  );
}

import { useUIStore } from "../store/uiStore";
import { useChatStore } from "../store/chatStore";

export default function ChatInfo() {
  const chatId = useUIStore((s) => s.activeChatId);
  const chat = useChatStore((s) => s.getChatById(chatId));

  if (!chat) return null;

  return (
    <div className="p-4 space-y-2">
      <h2 className="text-sm font-medium">{chat.title}</h2>
      <p className="text-xs text-neutral-500">
        Тип: {chat.type}
      </p>
      {chat.closed && (
        <span className="text-xs text-red-400">
          Закрытая группа
        </span>
      )}
    </div>
  );
}
