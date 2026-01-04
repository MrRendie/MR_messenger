import { useUserStore } from "../store/userStore";

export default function ProfilePage() {
  const user = useUserStore((s) => s.currentUser);

  return (
    <div className="p-6 space-y-6 max-w-xl">
      <h1 className="text-lg font-semibold">Профиль</h1>

      <div className="flex items-center gap-4">
        <div className="w-20 h-20 rounded-full bg-neutral-800 flex items-center justify-center">
          <span className="text-xl">👤</span>
        </div>

        <div>
          <div className="font-medium">{user.name}</div>
          <div className="text-sm text-neutral-500">{user.username}</div>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs text-neutral-400">О себе</label>
        <textarea
          defaultValue={user.bio}
          className="w-full rounded bg-neutral-900 border border-neutral-800 p-2 text-sm"
        />
      </div>

      <button className="px-4 py-2 bg-blue-600 rounded text-sm hover:bg-blue-500">
        Сохранить
      </button>
    </div>
  );
}
