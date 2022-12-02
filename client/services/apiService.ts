import Axios from "axios";

const apiService = Axios.create();

import Cookies from "js-cookie";

const withToken = (config: any) => {
  const token = Cookies.get("token");

  return {
    ...config,
    headers: {
      ...config.headers,
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  };
};

apiService.interceptors.request.use(withToken);
apiService.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (401 === error.response.status) {
      Cookies.remove("token");
      if (window.location.pathname !== "/") {
        window.location.href = "/";
      }
    } else {
      return Promise.reject(error);
    }
  }
);
apiService.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

export default apiService;
