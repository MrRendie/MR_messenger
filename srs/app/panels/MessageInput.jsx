import { useState } from "react";
import { useMessageStore } from "../store/messageStore";

export default function MessageInput() {
  const [text, setText] = useState("");
  const { sendMessage, replyingTo, cancelReply } = useMessageStore();

  const submit = () => {
    sendMessage(text);
    setText("");
  };

  return (
    <div className="border-t border-neutral-800 p-3 space-y-2">
      {replyingTo && (
        <div className="text-xs bg-neutral-800 p-2 rounded flex justify-between">
          <span>Ответ: {replyingTo.text}</span>
          <button onClick={cancelReply}>✕</button>
        </div>
      )}

      <div className="flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && submit()}
          placeholder="Сообщение…"
          className="flex-1 bg-neutral-900 border border-neutral-800 rounded px-3 py-2 text-sm outline-none"
        />
        <button
          onClick={submit}
          className="px-4 rounded bg-blue-600 hover:bg-blue-500 text-sm"
        >
          ➤
        </button>
      </div>
    </div>
  );
}
