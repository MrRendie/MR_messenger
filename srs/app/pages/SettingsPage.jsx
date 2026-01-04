export default function SettingsPage() {
  return (
    <div className="p-6 space-y-6 max-w-xl">
      <h1 className="text-lg font-semibold">Настройки</h1>

      <section className="space-y-2">
        <h2 className="text-sm font-medium">Аккаунт</h2>
        <div className="text-sm text-neutral-400">Email, пароль</div>
      </section>

      <section className="space-y-2">
        <h2 className="text-sm font-medium">Приватность</h2>
        <div className="text-sm text-neutral-400">
          Последний онлайн, блокировки
        </div>
      </section>

      <section className="space-y-2">
        <h2 className="text-sm font-medium">Уведомления</h2>
        <div className="text-sm text-neutral-400">
          Звук, вибрация, исключения
        </div>
      </section>

      <section className="space-y-2">
        <h2 className="text-sm font-medium">Темы</h2>
        <div className="text-sm text-neutral-400">
          Тёмная, неон, космос (дальше)
        </div>
      </section>
    </div>
  );
}
