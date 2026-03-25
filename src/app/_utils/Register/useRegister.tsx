import { useState } from "react";
import { useToast } from "@/app/_components/Toast/ToastContext";
import { RegisterFormValues } from "@/app/api/register/schema";
 
export const useRegister = (onSuccess?: () => void) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showToast } = useToast();
  

  const Register = async (data: RegisterFormValues) => {
    setIsSubmitting(true);

    const formattedData = {
      ...data,
      first_name:
        data.first_name.trim().charAt(0).toUpperCase() +
        data.first_name.slice(1).toLowerCase(),
      last_name:
        data.last_name.trim().charAt(0).toUpperCase() +
        data.last_name.slice(1).toLowerCase(),
      email: data.email.trim().toLowerCase(),
      mobile_no: data.mobile_no.replace(/[^\d+]/g, ""),
    };
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

      showToast("Registration success.", "success");
      if (onSuccess) onSuccess();//to close the modal

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
