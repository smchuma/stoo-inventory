import axiosClient from "@/axios";
import router from "@/router";

import { reactive, computed } from "vue";

const state = reactive({
  user: {},
  isAuthenticated: false,
  isLoading: false,
  error: null,
});

export default function useAuth() {
  const authenticated = computed(() => state.isAuthenticated);
  const user = computed(() => state.user);
  const loading = computed(() => state.isLoading);

  const setUser = (user) => {
    state.user = user;
  };

  const setAuthenticated = (isAuthenticated) => {
    state.isAuthenticated = isAuthenticated;
  };

  const loginUser = async (credentials) => {
    state.isLoading = true;
    try {
      const response = await axiosClient.post("/auth/login", credentials);
      setAuthenticated(true);
      console.log(response);

      if (response.data.user.userRole === "admin") {
        router.push({ name: "users" });
      } else {
        router.push({ name: "home" });
      }

      state.isLoading = false;

      return response;
    } catch (error) {
      state.isLoading = false;
      console.log(error);
    }
  };

  const fetchUser = async () => {
    state.isLoading = true;
    try {
      const response = await axiosClient.get("/auth/user");
      setAuthenticated(true);
      setUser(response.data.user);
      state.isLoading = false;

      return response;
    } catch (error) {
      state.isLoading = false;
      state.error = error.response.data.message;
      setAuthenticated(false);
      setUser({});
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      await axiosClient.post("/auth/logout");
      setAuthenticated(false);
      router.push({ name: "login" });
      setUser({});
    } catch (error) {
      console.log(error);
    }
  };

  return {
    authenticated,
    user,
    loading,
    setUser,
    loginUser,
    fetchUser,
    logout,
  };
}
