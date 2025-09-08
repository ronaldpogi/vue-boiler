import UserForm from "./UserForm.vue";
import UserTable from "./UserTable.vue";

const $showThisTab = (tab: string) => {
  switch (tab) {
    case "list":
      return UserTable;
    case "create":
      return UserForm;
    default:
      return null;
  }
};

export { $showThisTab };
