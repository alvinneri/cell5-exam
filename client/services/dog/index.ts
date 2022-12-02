import apiService from "../apiService";

const getDog = () => apiService.get("v1/dogs/search");

const addDog = (payload: any) => apiService.post("v1/dogs/", payload);

const getDogs = (payload: any) => {
  if (payload?.queryKey[1]) {
    return apiService.get(`v1/dogs?search=${payload.queryKey[1]}`);
  }

  return apiService.get(`v1/dogs?search=`);
};

const deleteDog = (id: any) => apiService.delete(`v1/dogs/${id}`);

const updateDog = (payload: any) =>
  apiService.put(`v1/dogs/${payload.id}`, payload.body);

const dogService = {
  getDog,
  addDog,
  getDogs,
  deleteDog,
  updateDog,
};

export default dogService;
