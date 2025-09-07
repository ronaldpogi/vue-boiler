<script setup lang="ts">
import useAlertComposable from "@/composables/useAlertComposable";
import type { AlertType } from "@/types/alert";

const props = withDefaults(
  defineProps<{
    id?: string;
    type?: AlertType;
  }>(),
  {
    type: "success",
  },
);

const { $dismiss } = useAlertComposable();

const styleMap: Record<
  AlertType,
  { container: string; icon: string; button: string }
> = {
  primary: {
    container: "bg-blue-50 text-blue-800",
    icon: "fa-solid fa-circle-info fa-beat-fade",
    button: "bg-blue-50 text-blue-500 focus:ring-blue-400 hover:bg-blue-200",
  },
  secondary: {
    container: "bg-gray-50 text-gray-800",
    icon: "fa-solid fa-circle-info fa-beat",
    button: "bg-gray-50 text-gray-500 focus:ring-gray-400 hover:bg-gray-200",
  },
  success: {
    container: "bg-green-50 text-green-800",
    icon: "fa-solid fa-circle-check fa-bounce",
    button:
      "bg-green-50 text-green-500 focus:ring-green-400 hover:bg-green-200",
  },
  warning: {
    container: "bg-yellow-50 text-yellow-800",
    icon: "fa-solid fa-circle-exclamation fa-beat",
    button:
      "bg-yellow-50 text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200",
  },
  danger: {
    container: "bg-red-50 text-red-800",
    icon: "fa-solid fa-circle-xmark fa-fade",
    button: "bg-red-50 text-red-500 focus:ring-red-400 hover:bg-red-200",
  },
};
</script>

<template>
  <div
    :id="props.id"
    :class="[
      styleMap[props.type].container,
      'flex items-center p-4 rounded-lg',
    ]"
    role="alert"
  >
    <i :class="styleMap[props.type].icon"></i>
    <span class="sr-only">Info</span>

    <div class="ms-3 text-sm font-medium">
      <slot />
    </div>

    <button
      type="button"
      @click="props.id && $dismiss(props.id)"
      :class="[
        styleMap[props.type].button,
        'cursor-pointer ms-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 p-1.5 inline-flex items-center justify-center h-8 w-8',
      ]"
      aria-label="Close"
    >
      <span class="sr-only">Close</span>
      <i class="fa-solid fa-xmark"></i>
    </button>
  </div>
</template>
