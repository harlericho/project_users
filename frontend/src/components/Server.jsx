import axios from "axios";
const URL = "http://localhost:9000/api/users/";

export const getAllUsers = async () => {
  const response = await axios.get(URL);
  return response.data;
};
export const getUserById = async (id) => {
  const response = await axios.get(URL + id);
  return response.data;
};
export const createUser = async (user) => {
  const response = await axios.post(URL, user);
  return response.data;
};
export const updateUser = async (user) => {
  const response = await axios.put(URL + user.id, user);
  return response.data;
};
export const deleteUser = async (id) => {
  const response = await axios.delete(URL + id);
  return response.data;
};
