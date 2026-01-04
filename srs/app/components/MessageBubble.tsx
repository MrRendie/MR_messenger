import clsx from "clsx";

export default function MessageBubble({
  text,
  fromMe,
}: {
  text: string;
  fromMe: boolean;
}) {
  return (
    <div
      className={clsx(
        "max-w-[65%] px-3 py-2 rounded-xl text-sm leading-relaxed",
        fromMe
          ? "ml-auto bg-blue-600 text-white rounded-br-none"
          : "mr-auto bg-neutral-800 text-neutral-100 rounded-bl-none"
      )}
    >
      {text}
    </div>
  );
}
