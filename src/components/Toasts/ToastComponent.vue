<script setup lang="ts">
import useToastComposable from "@/composables/useToastComposable";
import type { ToastPosition, ToastType } from "@/types/toast";

const props = withDefaults(
  defineProps<{
    id?: string;
    type?: ToastType;
    position?: ToastPosition;
  }>(),
  {
    type: "success",
    position: "bottomRight",
  },
);

const { $dismiss } = useToastComposable();
</script>

<template>
  <div
    :id="props.id"
    :class="{
      'fixed top-5 left-5 z-50': props.position === 'topLeft',
      'fixed top-5 right-5 z-50': props.position === 'topRight',
      'fixed bottom-5 left-5 z-50': props.position === 'bottomLeft',
      'fixed bottom-5 right-5 z-50': props.position === 'bottomRight',

      'bg-blue-100': props.type === 'primary',
      'bg-gray-100': props.type === 'secondary',
      'bg-green-100': props.type === 'success',
      'bg-yellow-100': props.type === 'warning',
      'bg-red-100': props.type === 'danger',
    }"
    class="flex items-center w-full max-w-xs p-4 mb-4 text-black rounded-lg shadow-sm"
    role="alert"
  >
    <div
      :class="{
        'text-blue-500': props.type === 'primary',
        'bg-gray-400': props.type === 'secondary',
        'text-green-500': props.type === 'success',
        'text-yellow-500': props.type === 'warning',
        'text-red-500': props.type === 'danger',
      }"
      class="inline-flex items-center justify-center shrink-0 w-8 h-8 rounded-lg"
    >
      <i
        :class="{
          'fa-solid fa-circle-info fa-beat-fade': props.type === 'primary',
          'fa-solid fa-circle-info fa-beat': props.type === 'secondary',
          'fa-solid fa-circle-check fa-bounce': props.type === 'success',
          'fa-solid fa-circle-exclamation fa-beat': props.type === 'warning',
          'fa-solid fa-circle-xmark fa-fade': props.type === 'danger',
        }"
      ></i>
      <span class="sr-only">icon</span>
    </div>
    <div class="ms-3 text-sm font-normal">
      <slot />
    </div>
    <button
      type="button"
      @click="props.id && $dismiss(props.id)"
      class="ms-auto cursor-pointer -mx-1.5 -my-1.5 bg-white text-black hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8"
      aria-label="Close"
    >
      <span class="sr-only">Close</span>
      <i class="fa-solid fa-xmark"></i>
    </button>
  </div>
</template>
