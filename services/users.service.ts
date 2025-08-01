import { User } from "@/types";
import { instance } from "./api.service";

export const getUsersList = async (): Promise<User[]> => {
  const res = await instance.get("/users");
  return res.data;
};
