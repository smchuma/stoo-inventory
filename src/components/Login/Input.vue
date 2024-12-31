<script setup>
import { useField } from "vee-validate";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  type: String,
  placeholder: String,
  label: String,
});

const { value, errorMessage, meta } = useField(() => props.name);
</script>

<template>
  <div class="flex flex-col gap-3">
    <label v-if="label" :for="name" class="text-gray-700 font-medium">
      {{ label }}
    </label>
    <input
      :id="name"
      :class="[
        'w-full h-10 px-4 border rounded-md focus:ring-2 focus:ring-blue-500',
        errorMessage ? 'border-red-500 focus:ring-red-500' : 'border-gray-300',
        meta.valid && !errorMessage ? 'border-green-500' : '',
      ]"
      v-model="value"
      :placeholder="placeholder"
      :type="type || 'text'"
    />

    <small v-if="errorMessage" class="text-red-500 text-sm">{{
      errorMessage
    }}</small>
  </div>
</template>
