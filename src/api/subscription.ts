import axios from "axios";

export const addSubscription = async (email: string) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}subscribe`,
      { email }
    );

    if (response.status === 200) {
      return { success: true, message: "Thank you for subscribing!" };
    }

    return { success: false, message: "Subscription failed!" };
  } catch (error: any) {
    console.error("Subscription error:", error);

    if (error.response && error.response.status === 409) {
      // Duplicate subscription error
      return { success: false, message: "You are already subscribed!" };
    }

    return { success: false, message: "An unexpected error occurred!" };
  }
};
