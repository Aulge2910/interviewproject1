import { useState } from "react";
import { useToast } from "@/app/_components/Toast/ToastContext";
import { LoginFormValues } from "@/app/api/login/schema";
import { useAuth } from "@/app/auth";
export const useLogin = (onSuccess?: () => void) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showToast } = useToast();
  const {login} = useAuth();

  const Login = async (data: LoginFormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Login failed");
      }

      const name = result.user?.name || "User";
      login({
        name: result.user.name,
        email: result.user.email,
      });
      
      showToast(`Welcome back, ${name}!`, "success");
      if (onSuccess) onSuccess(); //to close the modal

      const userData = {
        email: result.user.email,
        name: `${result.user.first_name} ${result.user.last_name}`,
        country: result.user.country,
        mobile_no: result.user.mobile_no,
      };

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("user", JSON.stringify(userData));
      return result;
    } catch (error: any) {
      showToast(error.message || "Something went wrong", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    Login,
    isSubmitting,
  };
};
