interface ToastProps {
    id:string;
    message:string;
    type: ToastType;
    duration?:number;
    onClose:(id:string)=>void;

}

type ToastType = "success" | "error" | "info";

const toastStyles: Record<ToastType, string> = {
  success:
    "bg-emerald-50 border-emerald-200 text-emerald-700 border border-emerald-200",
  error: "bg-rose-50 border-rose-200 text-rose-700 border border-rose-200",
  info: "bg-blue-50 border-blue-200 text-blue-700 border border-blue-200",
};

const toastTitles: Record<ToastType, string> = {
  success: "Success",
  error: "Error",
  info: "You receive info",
};

const Toast = ({id,type,message, duration=500,onClose}:ToastProps) => {
    const title = toastTitles[type];
    return (
      <div
        className={`relative min-w-100 p-4 flex gap-4 min-h-20 flex-col items-center justify-start rounded-xl shadow-2xl ${toastStyles[type]}`}
      >
        <span>{title}</span>
        <span>{message}</span>
        <button
          onClick={() => onClose(id)}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
        >
          ✕
        </button>
      </div>
    );
}

export default Toast;