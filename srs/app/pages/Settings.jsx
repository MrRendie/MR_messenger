export default function Settings() {
  return (
    <div className="h-full flex flex-col">

      <header className="h-14 px-4 flex items-center border-b border-neutral-800">
        <h1 className="text-sm font-medium">Настройки</h1>
      </header>

      <div className="flex-1 p-6 space-y-4">

        <div className="p-4 rounded-lg bg-neutral-900 border border-neutral-800">
          <div className="text-sm mb-1">Тема</div>
          <div className="text-xs text-neutral-500">Тёмная / Светлая</div>
        </div>

        <div className="p-4 rounded-lg bg-neutral-900 border border-neutral-800">
          <div className="text-sm mb-1">Уведомления</div>
          <div className="text-xs text-neutral-500">
            Настройки уведомлений чатов и групп
          </div>
        </div>

        <div className="p-4 rounded-lg bg-neutral-900 border border-neutral-800">
          <div className="text-sm mb-1">Приватность</div>
          <div className="text-xs text-neutral-500">
            Контроль видимости профиля
          </div>
        </div>

      </div>

    </div>
  );
}

