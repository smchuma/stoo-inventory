import useAuth from "@/composables/useAuth";

export default function redirectIfGuest({ next }) {
  const { authenticated } = useAuth();

  console.log(authenticated);

  if (!authenticated.value) {
    return next({
      name: "login",
    });
  }

  return next();
}
