import { useGroupStore } from "../store/groupStore";

export default function GroupsPage() {
  const groups = useGroupStore((s) => s.groups);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-lg font-semibold">Группы</h1>

      <div className="space-y-2">
        {groups.map((g) => (
          <div
            key={g.id}
            className="p-3 rounded border border-neutral-800 bg-neutral-900 flex justify-between"
          >
            <div>
              <div className="font-medium">{g.name}</div>
              <div className="text-xs text-neutral-500">
                {g.members} участников
              </div>
            </div>

            {g.closed && (
              <span className="text-xs text-red-400 self-center">
                Закрытая
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
