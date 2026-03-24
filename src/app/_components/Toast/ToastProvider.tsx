"use client";

import { ToastContext } from "./ToastContext";
import Toast, { ToastProps, ToastType } from ".";
import { useState, useCallback, useEffect } from "react";
import { nanoid } from "nanoid";
import { createPortal } from "react-dom";
export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);  
  }, []);

  
  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const showToast = useCallback(
    (message: string, type: ToastType) => {
      const id = nanoid();
      setToasts((prev) => [
        ...prev,
        { id, message, type, onClose: removeToast },
      ]);

      setTimeout(() => {
        removeToast(id);
      }, 4000);
    },
    [removeToast],
  );

  const ToastUI = (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-9999 flex flex-col gap-3 pointer-events-none">
      {toasts.map((toast) => (
        <div key={toast.id} className="pointer-events-auto">
          <Toast {...toast} onClose={removeToast} />
        </div>
      ))}
    </div>
  );

  return (
    <ToastContext.Provider value={{ showToast, removeToast }}>
      {children}
      {mounted && createPortal(ToastUI, document.body)}
    </ToastContext.Provider>
  );
};
