import { useUIStore } from "@/store/uiStore";

export function ChatInfo() {
  const { closeRightPanel } = useUIStore();

  return (
    <div className="p-4 h-full flex flex-col">
      <header className="flex justify-between items-center mb-4">
        <span className="text-sm font-medium">Информация о чате</span>
        <button
          onClick={closeRightPanel}
          className="text-neutral-400 hover:text-white"
        >
          ✕
        </button>
      </header>

      <div className="text-sm text-neutral-400">
        Участники, медиа, настройки чата
      </div>
    </div>
  );
}
