import { useCallStore } from "../store/callStore";

export default function CallOverlay() {
  const {
    call,
    acceptCall,
    endCall,
    toggleMute,
    toggleCamera,
  } = useCallStore();

  if (!call) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
      <div className="w-80 bg-neutral-900 rounded-xl p-6 text-center space-y-4">
        <div className="text-lg">
          {call.type === "video" ? "🎥 Видео" : "📞 Аудио"} звонок
        </div>

        <div className="text-sm opacity-70">
          {call.status === "calling" && "Вызов..."}
          {call.status === "incoming" && "Входящий звонок"}
          {call.status === "active" && "Соединено"}
        </div>

        {call.type === "video" && (
          <div className="h-40 bg-black rounded flex items-center justify-center text-xs opacity-60">
            {call.cameraOff ? "Камера выключена" : "Видео поток"}
          </div>
        )}

        <div className="flex justify-center gap-4 pt-2">
          {call.status === "incoming" && (
            <button
              onClick={acceptCall}
              className="bg-green-600 px-4 py-2 rounded"
            >
              Принять
            </button>
          )}

          {call.status === "active" && (
            <>
              <button onClick={toggleMute}>
                {call.muted ? "🔇" : "🎤"}
              </button>

              {call.type === "video" && (
                <button onClick={toggleCamera}>
                  {call.cameraOff ? "📷❌" : "📷"}
                </button>
              )}
            </>
          )}

          <button
            onClick={endCall}
            className="bg-red-600 px-4 py-2 rounded"
          >
            Завершить
          </button>
        </div>
      </div>
    </div>
  );
}
