export default function Groups() {
  return (
    <div className="h-full flex flex-col">

      <header className="h-14 flex items-center px-4 border-b border-neutral-800">
        <h1 className="text-sm font-medium">Группы</h1>
      </header>

      <div className="flex-1 overflow-y-auto p-4 grid grid-cols-2 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="p-4 rounded-lg bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 cursor-pointer"
          >
            <div className="text-sm">Группа #{i + 1}</div>
            <div className="text-xs text-neutral-500">
              24 участника
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
