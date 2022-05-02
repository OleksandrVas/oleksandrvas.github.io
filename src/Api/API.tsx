import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const userApi = {
  getUser() {
    return instance.get("/users");
  },
};
export const todoIpi = {
  getTodo() {
    return instance.get("/todos?_page=1");
  },
};
