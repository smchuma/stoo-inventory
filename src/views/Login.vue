<script setup>
import Input from "@/components/Login/Input.vue";
import useAuth from "@/composables/useAuth";
import { Form } from "vee-validate";
import { ref } from "vue";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const { login, loginLoading } = useAuth();

const formData = ref({
  email: "",
  password: "",
});

const handleFormSubmit = (values) => {
  login(values);
};
</script>

<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="absolute top-0 left-0 h-1/2 bg-gray-600 w-full"></div>
    <div class="absolute bottom-0 left-0 h-1/2 bg-white w-full"></div>
    <div class="bg-white relative shadow-md rounded-xl p-8 w-full max-w-md">
      <h1 class="lobster text-4xl text-center text-gray-700 my-8">stoo</h1>

      <Form
        ref="form"
        :validation-schema="schema"
        @submit="handleFormSubmit"
        :initial-values="formData"
        class="space-y-4 mb-10"
      >
        <Input
          placeholder="Enter Email"
          label="Email"
          name="email"
          type="email"
        />
        <Input
          placeholder="Enter Password"
          label="Password"
          name="password"
          type="password"
          class="pb-3"
        />
        <button
          type="submit"
          class="w-full bg-gray-600 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md"
        >
          <span v-if="loginLoading">Loging....</span>
          <span v-else="loginLoading">Login</span>
        </button>
      </Form>
    </div>
  </div>
</template>
