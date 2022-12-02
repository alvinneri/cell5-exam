import apiService from "../apiService";

const getMe = () => apiService.get("v1/user/me");

const updateMe = (payload: any) => apiService.patch("v1/user/me", payload);

const usersService = {
  getMe,
  updateMe,
};

export default usersService;
