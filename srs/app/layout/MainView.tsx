import React from "react";

const MainView: React.FC = () => {
  return (
    <div className="h-full flex flex-col bg-neutral-950">

      {/* Верхняя панель */}
      <header className="h-14 flex items-center justify-between px-4 border-b border-neutral-800">
        <span className="text-sm font-medium text-neutral-100">
          Чаты
        </span>

        <input
          type="text"
          placeholder="Поиск..."
          className="ml-4 flex-1 max-w-sm px-3 py-1.5 text-sm rounded-md
                     bg-neutral-900 border border-neutral-800
                     placeholder:text-neutral-500 focus:outline-none"
        />
      </header>

      {/* Контент */}
      <section className="flex-1 overflow-y-auto">

        {/* Заглушка списка */}
        <div className="divide-y divide-neutral-800">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="px-4 py-3 hover:bg-neutral-900 cursor-pointer"
            >
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Чат #{i + 1}</span>
                <span className="text-xs text-neutral-500">12:45</span>
              </div>
              <div className="text-xs text-neutral-500 truncate">
                Последнее сообщение в этом чате…
              </div>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
};

export default MainView;
