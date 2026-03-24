
import { useState } from "react";
import { useToast } from "@/app/_components/Toast/ToastContext";
 import {RegisterFormValues } from "@/app/api/register/schema";
export const useRegister = (onSuccess?: () => void) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showToast } = useToast();

  const Register = async (data: RegisterFormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Registration failed");
      }

      showToast("Welcome! Registration success.", "success");
      if (onSuccess) onSuccess();
      return result;
    } catch (error: any) {
      showToast(error.message || "Something went wrong", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    Register,
    isSubmitting,
  };
};
