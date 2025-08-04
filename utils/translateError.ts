import { AxiosError } from "axios";

const messageDict: Record<string, string> = {
  "User already exists": "Пользователь с таким логином уже существует",
  "User not found": "Не верный логин или пароль",
};

export function translateError(error: unknown): string {
  if (error instanceof AxiosError) {
    const data = error.response?.data;

    if (!data) {
      return "Произошла ошибка при подключении к серверу";
    }

    const status = error.response?.status;

    // 500 Internal Server Error
    if (status === 500) {
      return "Внутренняя ошибка сервера. Попробуйте позже.";
    }

    // 400 Bad Request
    if (Array.isArray(data.message)) {
      return data.message.join("\n"); // сообщение валидации
    }

    if (typeof data.message === "string") {
      return messageDict[data.message] ?? data.message;
    }

    // Другие коды
    return `Ошибка ${status}: ${data.message ?? "Неизвестная ошибка"}`;
  }

  return "Произошла непредвиденная ошибка";
}
