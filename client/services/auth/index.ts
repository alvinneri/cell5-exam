import apiService from "../apiService";

const signUp = (payload: any) => apiService.post("v1/auth/signup", payload);

const login = (payload: any) => apiService.post("v1/auth/login", payload);

const authService = {
  signUp,
  login,
};

export default authService;
