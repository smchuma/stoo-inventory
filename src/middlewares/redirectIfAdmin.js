import useAuth from "@/composables/useAuth";

export default function redirectIfAdmin({ next }) {
  const { user } = useAuth();

  console.log("User role:", user.value ? user.value.role : "undefined");

  if (user.value && user.value.role === "admin") {
    return next({ name: "users" });
  }

  return next();
}
