import { useThemeStore } from "../store/themeStore";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="flex gap-2">
      {["dark", "neon", "cosmic"].map((t) => (
        <button
          key={t}
          onClick={() => setTheme(t)}
          className={`px-3 py-1 rounded text-sm border
            ${theme === t ? "border-[var(--accent)]" : "border-neutral-700"}`}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
