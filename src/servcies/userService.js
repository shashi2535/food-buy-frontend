import { API_ROUTES } from "../constant";
import { agent } from "./api.service";
class UserService {
  async getAll() {
    const res = await agent.get();
    return res.data;
  }

  async login(data) {
    const res = await agent.post(API_ROUTES.OWNER_LOGIN, data);
    return res;
  }

  async signup(payload) {
    console.log("🚀 ~ file: userService.js:15 ~ UserService ~ signup ~ data:", payload)
    const { data } = await agent.post(API_ROUTES.OWNER_SIGNUP, payload);
    return data;
  }
}

const userApi = new UserService();

export { userApi };
