import React from "react";
import { Outlet } from "react-router-dom";

import LeftNav from "./LeftNav";
import MainView from "./MainView";
import RightPanel from "./RightPanel";

const RootLayout: React.FC = () => {
  return (
    <div className="h-screen w-screen bg-neutral-950 text-neutral-100 overflow-hidden">
      <div className="grid h-full grid-cols-[260px_1fr_320px]">

        {/* Левая колонка — навигация */}
        <aside className="border-r border-neutral-800">
          <LeftNav />
        </aside>

        {/* Центр — основной контент */}
        <main className="flex flex-col overflow-hidden">
          <MainView />
          <Outlet />
        </main>

        {/* Правая колонка — инфо / профиль / настройки */}
        <aside className="border-l border-neutral-800">
          <RightPanel />
        </aside>

      </div>
    </div>
  );
};

export default RootLayout;

import CallOverlay from "../overlays/CallOverlay";
...

<CallOverlay />

useCallStore.getState().incomingCall("chat-1", "video");

export default function RootLayout({ children }) {
  return (
    <div className="w-screen h-screen bg-[var(--bg)] text-[var(--text)]">
      {children}
    </div>
  );
}

import RightPanel from "@/app/components/RightPanel/RightPanel";

<div className="grid h-full grid-cols-[260px_1fr_auto]">
  {/* LeftNav */}
  {/* Main */}
  <RightPanel />
</div>
