import { useUIStore } from "../store/uiStore";

export default function ProfilePreview() {
  const close = useUIStore((s) => s.closeRightPanel);

  return (
    <div className="h-full flex flex-col">

      <header className="h-14 px-4 flex items-center justify-between border-b border-neutral-800">
        <span className="text-sm font-medium">Профиль</span>
        <button
          onClick={close}
          className="text-neutral-500 hover:text-neutral-200"
        >
          ✕
        </button>
      </header>

      <div className="flex-1 p-4 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-full bg-neutral-800" />
          <div>
            <div className="text-sm font-medium">Username</div>
            <div className="text-xs text-neutral-500">@user</div>
          </div>
        </div>

        <div className="text-xs text-neutral-500">
          Быстрый просмотр профиля
        </div>

        <div className="p-3 rounded-lg bg-neutral-800 text-xs">
          Действия:
          <ul className="list-disc ml-4 mt-2 space-y-1">
            <li>Открыть профиль</li>
            <li>Написать</li>
            <li>Заблокировать</li>
          </ul>
        </div>
      </div>

    </div>
  );
}
