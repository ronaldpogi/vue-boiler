import type { Ref } from "vue";

function useTabs(
  activeTab: Ref<string | number>,
  emit: (event: "update:active", id: string | number) => void,
) {
  function selectTab(id: string | number) {
    activeTab.value = id;
    emit("update:active", id);
  }

  return { selectTab };
}

export { useTabs };
