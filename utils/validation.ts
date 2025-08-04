import { REG_EXP_EMAIL } from "@/constants/reg-exp";

export const isEmailValid = (email: string) => REG_EXP_EMAIL.test(email);
