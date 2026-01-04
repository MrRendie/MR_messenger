import { useAuthStore } from "@/store/authStore";

export function ProfilePreview() {
  const { user } = useAuthStore();

  if (!user) return null;

  return (
    <div className="p-4 border-l border-neutral-800">
      <div className="text-sm font-medium">{user.username}</div>
      <div className="text-xs text-neutral-400">{user.role}</div>
    </div>
  );
}

import { useAuthStore } from "@/store/authStore";
import { useUIStore } from "@/store/uiStore";

export function ProfilePreview() {
  const { user } = useAuthStore();
  const { closeRightPanel } = useUIStore();

  if (!user) return null;

  return (
    <div className="p-4 h-full flex flex-col">
      <header className="flex justify-between items-center mb-4">
        <span className="text-sm font-medium">Профиль</span>
        <button
          onClick={closeRightPanel}
          className="text-neutral-400 hover:text-white"
        >
          ✕
        </button>
      </header>

      <div className="space-y-2 text-sm">
        <div>{user.username}</div>
        <div className="text-neutral-400">{user.role}</div>
      </div>
    </div>
  );
}
