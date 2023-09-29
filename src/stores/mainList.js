import { defineStore } from "pinia";
import { computed, ref, watch } from "vue";
import { v4 as uuidv4 } from "uuid";

export const useMainListStore = defineStore("mainList", () => {
  const mainList = ref(
    localStorage.getItem("savedList")
      ? JSON.parse(localStorage.getItem("savedList"))
      : []
  );

  watch(mainList, () => {
    localStorage.setItem("savedList", JSON.stringify(mainList.value));
  });

  const getMainList = computed(() => mainList.value);

  const setMainList = (list) => {
    mainList.value = list;
  };

  const addElement = (buttonName) => {
    const newList = [
      ...mainList.value,
      {
        id: uuidv4(),
        name: buttonName,
        content: "",
      },
    ];

    mainList.value = newList;
  };

  const modifyElementName = (id, buttonName) => {
    const index = mainList.value.findIndex((element) => element.id === id);
    const newList = [...mainList.value];
    newList[index] = {
      ...mainList.value[index],
      name: buttonName,
    };
    mainList.value = newList;
  };

  const modifyElementContent = (id, content) => {
    const index = mainList.value.findIndex((element) => element.id === id);
    const newList = [...mainList.value];
    newList[index] = {
      ...mainList.value[index],
      content: content,
    };
    mainList.value = newList;
  };

  const deleteElement = (id) => {
    mainList.value = mainList.value.filter((element) => element.id !== id);
  };

  return {
    mainList,
    getMainList,
    setMainList,
    addElement,
    modifyElementName,
    modifyElementContent,
    deleteElement,
  };
});
