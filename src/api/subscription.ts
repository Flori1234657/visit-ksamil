export const addSubscription = async (email: string) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}subscribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      return { success: true, message: "Thank you for subscribing!" };
    }

    if (response.status === 409) {
      // Duplicate subscription error
      return { success: false, message: "You are already subscribed!" };
    }

    return { success: false, message: "Subscription failed!" };
  } catch (error) {
    console.error("Subscription error:", error);
    return { success: false, message: "An unexpected error occurred!" };
  }
};
