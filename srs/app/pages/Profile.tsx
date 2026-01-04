import { useAuthStore } from "@/store/authStore";

export default function ProfilePage() {
  const { user } = useAuthStore();

  if (!user) return null;

  return (
    <div className="h-full p-6">
      <h1 className="text-xl font-semibold mb-4">Профиль</h1>

      <div className="space-y-2 text-sm">
        <div>Username: {user.username}</div>
        <div>Role: {user.role}</div>
        <div>ID: {user.id}</div>
      </div>
    </div>
  );
}
