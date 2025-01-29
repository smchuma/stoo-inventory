import axiosClient from "@/axios";
import { useQuery } from "@tanstack/vue-query";

export const useUser = () => {
  const {
    data: users,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await axiosClient.get("/admin/users");
      return response.data.users;
    },
  });

  return { users, isLoading, isError };
};

export default useUser;
