<script setup>
defineProps({
  onToggleSidebar: {
    type: Function,
    required: true,
  },
});
</script>

<template>
  <div class="flex justify-between">
    <div class="flex gap-x-5">
      <button class="block lg:hidden" @click="onToggleSidebar">
        <v-icon name="gi-hamburger-menu" />
      </button>
      <h1>title</h1>
    </div>
    <h1>two</h1>
  </div>
</template>
