import { RegisterFormValues } from "./useRegisterSchema";

export const useRegister = async (data: RegisterFormValues) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Submitted Login Data : ", data);
    localStorage.setItem("userEmail", data.email);

    // toast.success("Login Successful!");
    // toast.onClose();
  } catch (error) {
    console.error("Login failed", error);
  }
}; 
