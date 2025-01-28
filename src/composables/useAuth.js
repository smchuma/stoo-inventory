import axiosClient from "@/axios";
import router from "@/router";
import { useAuthStore } from "@/store/auth";
import { useMutation, useQuery } from "@tanstack/vue-query";

export const useAuth = () => {
  const authstore = useAuthStore();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["user_data"],
    queryFn: async () => {
      const response = await axiosClient.get("/auth/user");
      return response.data.user;
    },
  });

  const loginMutation = useMutation({
    mutationFn: async (credentials) => {
      const response = await axiosClient.post("/auth/login", credentials);
      return response.data.user;
    },
    onSuccess: (data) => {
      authstore.setAuthenticated(true);
      if (data.role === "admin") {
        router.push({ name: "users" });
      } else {
        router.push({ name: "home" });
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const logoutMutation = useMutation({
    mutationFn: async () => {
      const response = await axiosClient.post("/auth/logout");
      return response.data;
    },
    onSuccess: () => {
      authstore.setAuthenticated(false);
      router.push({ name: "login" });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return {
    data,
    isLoading,
    isError,
    login: loginMutation.mutate,
    logout: logoutMutation.mutate,
  };
};

export default useAuth;
