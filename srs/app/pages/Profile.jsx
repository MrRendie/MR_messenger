export default function Profile() {
  return (
    <div className="h-full flex flex-col">

      <header className="h-14 px-4 flex items-center border-b border-neutral-800">
        <h1 className="text-sm font-medium">Профиль</h1>
      </header>

      <div className="flex-1 p-6 space-y-6">

        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-full bg-neutral-800" />
          <div>
            <div className="text-lg font-medium">Username</div>
            <div className="text-sm text-neutral-500">user@email.com</div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-xs text-neutral-500">О себе</div>
          <div className="p-4 rounded-lg bg-neutral-900 border border-neutral-800 text-sm">
            Здесь будет описание профиля пользователя.
          </div>
        </div>

      </div>

    </div>
  );
}
