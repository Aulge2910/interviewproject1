interface DrawerProps {
  isOpen: boolean;
 
  onClose: () => void;
  children: React.ReactNode;
}

const Drawer = ({ isOpen, onClose, children }: DrawerProps) => {
  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? "visible" : "invisible"}`}>
      {/* overlay part */}
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity ${isOpen ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
      />

      {/* content of drawer */}
      <div
        className={`fixed right-0 top-0 h-full w-64 bg-[#3a53ba] transform transition-transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {children} {/* put the content here */}
      </div>
    </div>
  );
};

export default Drawer;