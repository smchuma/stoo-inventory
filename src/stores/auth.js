import axios from "axios";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authUser: null,
    token: sessionStorage.getItem("token") || null,
    userRole: null,
    isAuthenticated: false,
  }),

  actions: {
    async getToken() {
      await axios.get("/sanctum/csrf-cookie");
    },

    async handleSubmit(formData) {
      try {
        await this.getToken();
        const response = await axios.post("/api/login", formData);
        this.token = response.data.token;
        this.userRole = response.data.user.role;

        sessionStorage.setItem("token", this.token);
        axios.defaults.headers.common["Authorization"] = `Bearer ${this.token}`;

        if (this.userRole === "admin") {
          this.router.push("/admin/users");
        } else if (this.userRole === "salesperson") {
          this.router.push("/");
        }
      } catch (error) {
        console.error(error);
      }
    },
    async logout() {
      await axios
        .post("/api/logout", {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        })
        .then(() => {
          axios.defaults.headers.common["Authorization"] = null;
          this.token = null;
          this.authUser = null;
          this.userRole = null;
          sessionStorage.removeItem("token");
          this.router.push("/login");
        });
    },

    async getUser() {
      try {
        const response = await axios.get("/api/user", {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        });
        this.authUser = response.data;
      } catch (error) {
        console.error(
          "Failed to fetch the data".error.response?.data || error.message
        );
      }
    },

    async getAllUsers() {
      try {
        const response = await axios.get("/api/users", {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        });
        return response.data;

        return response;
      } catch (error) {
        console.log("error fetching users", error);
      }
    },
  },
});
