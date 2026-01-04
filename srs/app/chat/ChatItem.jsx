import { useChatSettingsStore } from "../store/chatSettingsStore";

export default function ChatItem({ chat }) {
  const { pinned, muted } = useChatSettingsStore();

  return (
    <div className="ui-hover p-3 flex justify-between">
      <span>{chat.title}</span>

      <span className="text-xs opacity-70">
        {pinned[chat.id] && "📌"}
        {muted[chat.id] && " 🔕"}
      </span>
    </div>
  );
}

import { useUIStore } from "@/store/uiStore";

type Props = {
  title: string;
};

export function ChatItem({ title }: Props) {
  const { openChatInfo } = useUIStore();

  return (
    <div
      onClick={openChatInfo}
      className="px-4 py-3 cursor-pointer hover:bg-neutral-800 transition"
    >
      <div className="text-sm">{title}</div>
    </div>
  );
}