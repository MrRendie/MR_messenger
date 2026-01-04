import { useUIStore } from "@/store/uiStore";

export function SettingsPreview() {
  const { closeRightPanel } = useUIStore();

  return (
    <div className="p-4 h-full flex flex-col">
      <header className="flex justify-between items-center mb-4">
        <span className="text-sm font-medium">Настройки</span>
        <button
          onClick={closeRightPanel}
          className="text-neutral-400 hover:text-white"
        >
          ✕
        </button>
      </header>

      <div className="text-sm text-neutral-400">
        Быстрые настройки профиля и UI
      </div>
    </div>
  );
}
