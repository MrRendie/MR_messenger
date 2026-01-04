import { useMessageStore } from "../store/messageStore";
import { format } from "date-fns";

export default function MessageList() {
  const { messages, activeChatId, startReply, addReaction } =
    useMessageStore();

  const list = messages[activeChatId] || [];

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-3">
      {list.map((m) => (
        <div
          key={m.id}
          className={`max-w-[70%] p-3 rounded-lg text-sm relative ${
            m.sender === "me"
              ? "ml-auto bg-blue-600 text-white"
              : "mr-auto bg-neutral-800"
          }`}
        >
          {m.replyTo && (
            <div className="text-xs opacity-70 border-l pl-2 mb-1">
              {m.replyTo.text}
            </div>
          )}

          <div>{m.text}</div>

          <div className="flex items-center justify-between mt-1 text-xs opacity-60">
            <span>{format(m.time, "HH:mm")}</span>
            {m.sender === "me" && (
              <span>
                {m.status === "sent" && "✓"}
                {m.status === "delivered" && "✓✓"}
                {m.status === "read" && "✓✓"}
              </span>
            )}
          </div>

          {m.reactions.length > 0 && (
            <div className="flex gap-1 mt-1">
              {m.reactions.map((r, i) => (
                <span key={i}>{r}</span>
              ))}
            </div>
          )}

          <div className="absolute -right-2 top-1 opacity-0 hover:opacity-100 flex gap-1">
            <button onClick={() => startReply(m)}>↩</button>
            <button onClick={() => addReaction(m.id, "❤️")}>❤️</button>
          </div>
        </div>
      ))}
    </div>
  );
}
