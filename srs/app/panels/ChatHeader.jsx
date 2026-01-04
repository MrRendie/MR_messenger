import { useCallStore } from "../store/callStore";
import { useMessageStore } from "../store/messageStore";

export default function ChatHeader() {
  const { activeChatId } = useMessageStore();
  const { startCall } = useCallStore();

  return (
    <div className="h-14 flex items-center justify-between px-4 border-b border-neutral-800">
      <span className="font-medium">Чат</span>

      <div className="flex gap-3">
        <button onClick={() => startCall(activeChatId, "audio")}>📞</button>
        <button onClick={() => startCall(activeChatId, "video")}>🎥</button>
      </div>
    </div>
  );
}

import { useChatSettingsStore } from "../store/chatSettingsStore";

export default function ChatHeader({ chatId }) {
  const { openChatSettings } = useChatSettingsStore();

  return (
    <header className="flex items-center justify-between p-4 border-b border-neutral-800">
      <div className="font-medium">Чат #{chatId}</div>

      <button
        onClick={() => openChatSettings(chatId)}
        className="ui-hover px-2 py-1 rounded"
      >
        ⚙
      </button>
    </header>
  );
}
