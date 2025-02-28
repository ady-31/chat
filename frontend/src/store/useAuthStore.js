import { useState, useEffect } from "react";

export const useAuthStore = () => {
  const [authUser, setAuthUser] = useState(null);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  const checkAuth = async () => {
    // Simulate an API call to check authentication
    setIsCheckingAuth(true);
    const user = await fakeAuthCheck();
    setAuthUser(user);
    setIsCheckingAuth(false);
  };

  const signup = async (formData) => {
    // Simulate an API call to sign up the user
    const user = await fakeSignup(formData);
    setAuthUser(user);
  };

  return {
    authUser,
    isCheckingAuth,
    checkAuth,
    signup,
  };
};

// Simulated API calls
const fakeAuthCheck = () => new Promise((resolve) => setTimeout(() => resolve(null), 1000));
const fakeSignup = (formData) => new Promise((resolve) => setTimeout(() => resolve(formData), 1000));