// project/components/your-auth-logic.ts
export const isAuthenticated = () => {
  // Check if the environment is development and allow access
  if (process.env.NODE_ENV === 'development') {
    return true;  // Allow access without sign-in
  }

  // Add your normal authentication logic here (e.g., check if the user is logged in)
  // For example, check for a valid session or JWT token
  return Boolean(localStorage.getItem('user_token')) || false;  // Example check for auth token
};
