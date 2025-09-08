<script lang="ts" setup>
import type { Tab } from "@/types/tab";
import { ref, defineProps, defineEmits } from "vue";
import { useTabs } from "./functions";

const props = defineProps<{
  tabs: Tab[];
  initialActive?: number | string;
}>();

const emit = defineEmits<{
  (e: "update:active", id: string | number): void;
}>();

const activeTab = ref(props.initialActive ?? props.tabs[0]?.slug);

const { selectTab } = useTabs(activeTab, emit);
</script>

<template>
  <div
    class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700"
  >
    <ul class="flex flex-wrap -mb-px">
      <li v-for="tab in props.tabs" :key="tab.id" class="me-2">
        <a
          href="#"
          @click.prevent="selectTab(tab.slug)"
          :class="[
            'inline-block p-4 border-b-2 rounded-t-lg',
            activeTab === tab.slug
              ? 'border-blue-500 text-blue-600 dark:text-blue-500'
              : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300',
          ]"
        >
          {{ tab.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
