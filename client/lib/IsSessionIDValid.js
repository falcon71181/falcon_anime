const isSessionIDValid = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/valid`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          // Add any additional headers if needed
        },
        // Any other options...
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch user profile');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching user profile:', error.message);
      throw error;
    }
  };

  export { isSessionIDValid };