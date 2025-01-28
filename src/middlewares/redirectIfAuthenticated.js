import useAuth from "@/composables/useAuth";
import { useAuthStore } from "@/store/auth";

export default function redirectIfAuthenticated({ next }) {
  const authStore = useAuthStore();

  if (authStore.isAuthenticated) {
    return next({
      name: "users",
    });
  }

  return next();
}
