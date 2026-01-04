export default function Feed() {
  return (
    <div className="h-full flex flex-col">

      <header className="h-14 flex items-center px-4 border-b border-neutral-800">
        <h1 className="text-sm font-medium">Лента</h1>
      </header>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="p-4 rounded-lg bg-neutral-900 border border-neutral-800"
          >
            <div className="text-sm mb-2">
              Обновление #{i + 1}
            </div>
            <div className="text-xs text-neutral-500">
              Краткое описание события или новости.
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
