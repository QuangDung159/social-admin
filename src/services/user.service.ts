import env from "react-dotenv";

const login = async (email: string, password: string) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  };

  const response = await fetch(`${env.API_URL}/api/v1/auth`, requestOptions);
  const data = await handleResponse(response);
  sessionStorage.setItem("user", JSON.stringify(data));
  return data;
};

const handleResponse = (response: any) => {
  return response.text().then((text: string) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        logout();
        return { error: "401" };
      }

      const error = data ? data.message : response.statusText;
      return { error };
    }

    return data;
  });
};

const logout = () => {
  sessionStorage.removeItem("user");
};

export const userService = { login };
