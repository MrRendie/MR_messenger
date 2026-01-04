export default function Chats() {
  return (
    <div className="h-full flex flex-col">

      <header className="h-14 flex items-center px-4 border-b border-neutral-800">
        <h1 className="text-sm font-medium">Чаты</h1>
      </header>

      <div className="flex-1 overflow-y-auto">
        <div className="divide-y divide-neutral-900">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-4 py-3 hover:bg-neutral-900 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-neutral-800" />
              <div className="flex-1">
                <div className="text-sm">Чат #{i + 1}</div>
                <div className="text-xs text-neutral-500 truncate">
                  Последнее сообщение…
                </div>
              </div>
              <div className="text-xs text-neutral-500">12:45</div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
