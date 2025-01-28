import { useAuthStore } from "@/store/auth";

export default function redirectIfGuest({ next }) {
  const authStore = useAuthStore();

  if (!authStore.isAuthenticated) {
    return next({
      name: "login",
    });
  }

  return next();
}
