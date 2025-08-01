import { LoginUserDto, RegisterUserDto } from "@/types";
import { instance } from "./api.service";
import { removeAccessToken, setAccessToken } from "./token.service";

export const login = async (dto: LoginUserDto) => {
  const res = await instance.post("/auth/login", dto);
  const { accessToken, user } = res.data;

  await setAccessToken(accessToken);
  return user;
};

export const register = async (dto: RegisterUserDto) => {
  const res = await instance.post("/auth/register", dto);
  const { accessToken, user } = res.data;

  await setAccessToken(accessToken);
  return user;
};

export const refreshToken = async () => {
  try {
    const res = await instance.post("/auth/refresh");
    const { accessToken } = res.data;

    await setAccessToken(accessToken);
    return accessToken;
  } catch (err) {
    console.log("Refresh failed", err);
    return null;
  }
};

export const logout = async () => {
  await removeAccessToken();
};
