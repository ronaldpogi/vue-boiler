<script lang="ts" setup>
import TabsComponent from "@/components/Tabs/TabsComponent.vue";
import { tabItems } from "@/data/tabsItems";

// Step 1: Accept modelValue
const props = defineProps<{
  modelValue?: string | number;
}>();

// Step 2: Emit when value changes
const emit = defineEmits<{
  (e: "update:modelValue", value: string | number): void;
}>();
</script>

<template>
  <TabsComponent
    :tabs="tabItems"
    :active="props.modelValue"
    @update:active="emit('update:modelValue', $event)"
  />
</template>
