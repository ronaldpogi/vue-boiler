<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    loading?: boolean;
    disabled?: boolean;
  }>(),
  {
    loading: false,
    disabled: false,
  },
);
</script>

<template>
  <button
    v-bind="$attrs"
    :disabled="props.disabled || props.loading"
    :class="[
      'w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-4 focus:outline-none',
      props.loading || props.disabled
        ? 'bg-gray-300 hover:bg-gray-400 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 cursor-not-allowed'
        : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
    ]"
  >
    <template v-if="props.loading">
      <i class="fa-solid fa-gear fa-spin"></i> Loading
    </template>
    <template v-else>
      <slot />
    </template>
  </button>
</template>
