import api from "../apis";
class UserService {
  async getAll() {
    const res = await api.get();
    return res.data;
  }

  async login(data) {
    const res = await api.post("/login", JSON.stringify(data));
    return res;
  }

  async signup(data) {
    const res = await api.post("/signup", JSON.stringify(data));
    return res;
  }
}

const userApi = new UserService();

export { userApi };
