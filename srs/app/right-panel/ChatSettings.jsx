import { useChatSettingsStore } from "../store/chatSettingsStore";

export default function ChatSettings() {
  const {
    activeChatId,
    pinned,
    muted,
    encrypted,
    togglePin,
    toggleMute,
    toggleEncryption,
  } = useChatSettingsStore();

  if (!activeChatId) {
    return (
      <div className="p-4 text-neutral-500">
        Выберите чат
      </div>
    );
  }

  return (
    <div className="p-4 space-y-4 animate-fade">
      <h3 className="text-lg font-semibold">Настройки чата</h3>

      <button
        onClick={() => togglePin(activeChatId)}
        className="ui-panel ui-hover w-full p-3 rounded"
      >
        📌 Закрепить: {pinned[activeChatId] ? "Вкл" : "Выкл"}
      </button>

      <button
        onClick={() => toggleMute(activeChatId)}
        className="ui-panel ui-hover w-full p-3 rounded"
      >
        🔕 Уведомления: {muted[activeChatId] ? "Выкл" : "Вкл"}
      </button>

      <button
        onClick={() => toggleEncryption(activeChatId)}
        className="ui-panel ui-hover w-full p-3 rounded"
      >
        🔐 Шифрование: {encrypted[activeChatId] ? "Вкл" : "Выкл"}
      </button>
    </div>
  );
}
