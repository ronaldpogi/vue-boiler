<script lang="ts" setup>
import { computed, ref } from "vue";
import UserTabs from "./UserTabs.vue";
import { $showThisTab } from "./functions";

const currentTab = ref<string>("list");

// dynamically resolve component by calling the function
const currentComponent = computed(() => $showThisTab(currentTab.value));
</script>

<template>
  <div class="flex flex-col gap-4">
    <div>
      <h1 class="text-2xl font-bold">USERS</h1>
    </div>

    <div>
      <UserTabs v-model="currentTab" />
    </div>

    <div>
      <!-- Dynamically render component -->
      <component :is="currentComponent" :active-tab="currentTab" />
    </div>
  </div>
</template>
