<script setup></script>

<template>
  <main class="">
    <h1 class="mt-4 text-center">stoo</h1>

    <div class="mt-8">
      <div
        class="flex gap-x-2 w-full px-5 py-2 items-center mb-2"
        :class="{
          'bg-gray-500 border-b-2 border-b-gray-400':
            $route.path == '/admin/users',
        }"
      >
        <v-icon name="hi-solid-users" class="w-6 h-6 mr-2" />
        <RouterLink to="/admin/users">Users</RouterLink>
      </div>

      <div
        class="flex gap-x-2 w-full px-5 py-2 items-center mb-3"
        :class="{
          'bg-gray-500 border-b-2 border-b-gray-400':
            $route.path == '/admin/category',
        }"
      >
        <v-icon name="md-category-round" class="text-2xl mr-2 w-6 h-6" />
        <RouterLink to="/admin/category">Category</RouterLink>
      </div>
      <div
        class="flex gap-x-2 w-full px-5 py-2 items-center mb-3"
        :class="{
          'bg-gray-500 border-b-2 border-b-gray-400':
            $route.path == '/admin/products',
        }"
      >
        <v-icon
          name="md-productionquantitylimits"
          class="text-2xl mr-2 w-6 h-6"
        />
        <RouterLink to="/admin/products">Products</RouterLink>
      </div>
      <div
        class="flex gap-x-2 w-full px-5 py-2 items-center"
        :class="{
          'bg-gray-500 border-b-2 border-b-gray-400':
            $route.path == '/admin/suppliers',
        }"
      >
        <v-icon name="fa-users" class="text-2xl mr-2 w-6 h-6" />
        <RouterLink to="/admin/suppliers">Suppliers</RouterLink>
      </div>
    </div>
  </main>
</template>
