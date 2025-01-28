import axios from "axios";

export const addSubscription = async (email: string) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}subscribe`,
      {
        email,
      }
    );

    if (response.status === 200) return true;
    else return false;
  } catch (error: any) {
    console.error("Subscription error:", error);

    return false;
  }
};
