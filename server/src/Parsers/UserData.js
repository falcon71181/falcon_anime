const retrieveLoggedInUserData = async (req, res) => {
  try {
    const userProfileData = {
      id: req.user.id,
      email: req.user.email,
      date: req.user.date,
    };

    res.json(userProfileData);
  } catch (error) {
    console.error('Error retrieving user data:', error.message);
    throw error;
  }
};

export { retrieveLoggedInUserData };
