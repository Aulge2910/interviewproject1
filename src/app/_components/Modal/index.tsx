interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  closeOnOverlayClick?: boolean;
}

const Modal = ({ isOpen, onClose, children, title }: ModalProps) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* overlay of modal) */}
      <div
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-md"
        onClick={onClose}
      />

      {/*  modal container*/}
      <div className="relative bg-white w-full max-w-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* part of title, header */}
        <div className="w-full p-6 flex flex-col items-center gap-4 border-b border-gray-100">
          <img src="/images/blackwelllogo3-1.png" alt="logo" className="h-8 bg-black" />
          <span className="font-semibold text-2xl">{title}</span>

          {/* close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
          >
            ✕
          </button>
        </div>

        {/* main body or content */}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};
export default Modal;
