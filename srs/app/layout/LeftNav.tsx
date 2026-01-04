import React from "react";
import { NavLink } from "react-router-dom";

const LeftNav: React.FC = () => {
  return (
    <div className="h-full flex flex-col bg-neutral-900">

      {/* Профиль */}
      <div className="flex items-center gap-3 p-4 border-b border-neutral-800">
        <div className="w-10 h-10 rounded-full bg-neutral-700" />
        <div className="flex flex-col">
          <span className="text-sm font-medium">Алексей</span>
          <span className="text-xs text-green-400">онлайн</span>
        </div>
      </div>

      {/* Навигация */}
      <nav className="flex-1 px-2 py-4 space-y-1 text-sm">
        <NavItem to="/chats" label="Чаты" />
        <NavItem to="/feed" label="Лента" />
        <NavItem to="/groups" label="Группы" />
        <NavItem to="/private" label="Приватное" />
        <NavItem to="/contacts" label="Контакты" />
      </nav>

      {/* Создать чат */}
      <div className="px-4 py-2">
        <button className="w-full py-2 rounded-md bg-blue-600 hover:bg-blue-500 text-sm font-medium">
          Создать чат
        </button>
      </div>

      {/* Настройки */}
      <div className="p-4 border-t border-neutral-800 text-sm text-neutral-400 hover:text-neutral-100 cursor-pointer">
        Настройки
      </div>

    </div>
  );
};

export default LeftNav;

/* ---------------- helpers ---------------- */

interface NavItemProps {
  to: string;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center px-3 py-2 rounded-md transition
        ${
          isActive
            ? "bg-neutral-800 text-white"
            : "text-neutral-400 hover:bg-neutral-800 hover:text-neutral-100"
        }`
      }
    >
      {label}
    </NavLink>
  );
};

import { useUIStore } from "@/store/uiStore";

export function ProfileButton() {
  const { openProfile } = useUIStore();

  return (
    <button
      onClick={openProfile}
      className="flex items-center gap-2 px-4 py-3 hover:bg-neutral-800"
    >
      <div className="w-8 h-8 rounded-full bg-neutral-700" />
      <span className="text-sm">Профиль</span>
    </button>
  );
}

import ChatList from "@/app/components/ChatList/ChatList";

export default function LeftNav() {
  return (
    <aside className="w-[260px] h-full border-r border-neutral-800 bg-neutral-900">
      <div className="h-12 px-4 flex items-center font-medium">
        Чаты
      </div>
      <ChatList />
    </aside>
  );
}
