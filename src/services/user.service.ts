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

const getCurrentLoginUser = async (): Promise<any> => {
  try {
    const res = await api.get<any>("/v1/auth");
    if (res && res.status === 200) {
      return res.data;
    } else {
      return {
        error: "Load current user fail",
      };
    }
  } catch (error) {
    console.log("getCurrentLoginUser error :>> ", error);
    return {
      error: "Load current user fail",
    };
  }
};

export const userService = { login, getCurrentLoginUser };
