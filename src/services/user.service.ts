import { api } from "../helpers";

const login = async (email: string, password: string) => {
  try {
    const body = { email, password };
    const response = await api.post("/v1/auth", body);
    sessionStorage.setItem("user", JSON.stringify(response.data));
    return response.data;
  } catch (error: any) {
    logout();
    return { error: error.response.data.message };
  }
};

const logout = () => {
  sessionStorage.removeItem("user");
};

export const userService = { login };
