<script lang="ts" setup>
import UserForm from "./UserForm.vue";
import UserTabs from "./UserTabs.vue";
import { ref } from "vue";

// This is the real "currentTab" state (source of truth)
const currentTab = ref(1);
</script>

<template>
  <div class="flex flex-col gap-4">
    <div>
      <h1 class="text-2xl font-bold">USERS</h1>
    </div>

    <!-- UserTabs just updates this currentTab -->
    <UserTabs v-model="currentTab" />
    {{ currentTab }}

    <!-- And UserForm can read the same currentTab -->
    <UserForm :active-tab="currentTab" />
  </div>
</template>
