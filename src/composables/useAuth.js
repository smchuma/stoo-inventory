import axios from "axios";
import { computed, reactive } from "vue";

const state = reactive({
  authenticated: false,
  user: {},
});

export default function useAuth() {
  const authenticated = computed(() => state.authenticated);
  const user = computed(() => state.user);

  const setAuthenticate = (authenticated) => {
    state.authenticated = authenticated;
  };

  const setUser = (user) => {
    state.user = user;
  };

  const attempt = async () => {
    try {
      const response = await axios.get("api/user");
      setAuthenticate(true);
      setUser(response.data);
    } catch (error) {
      setAuthenticate(false);
      setUser({});
      console.log(error);
    }
  };

  const login = async (formData) => {
    await axios.get("/sanctum/csrf-cookie");
    try {
      await axios.post("/login", formData, { withCredentials: true });
      await attempt();

      // axios.defaults.headers.common["Authorization"] = `Bearer ${this.token}`;

      // if (this.userRole === "admin") {
      //   this.router.push("/admin/users");
      // } else if (this.userRole === "salesperson") {
      //   this.router.push("/");
      // }
    } catch (error) {
      console.error(error.message);
    }
  };

  return {
    login,
    authenticated,
    user,
    attempt,
  };
}
