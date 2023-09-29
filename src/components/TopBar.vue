<script setup>
import { ref } from "vue";
import { useMainListStore } from "../stores/mainList";
import DeleteModal from "./DeleteModal.vue";

const store = useMainListStore();

const isModalOpen = ref(false);

const saveState = () => {
  const dataStr =
    "data:text/json;charset=utf-8," +
    encodeURIComponent(JSON.stringify(store.getMainList));
  var downloadAnchorNode = document.createElement("a");
  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", "EZ-Copy.json");
  document.body.appendChild(downloadAnchorNode); // required for firefox
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
};

const loadState = () => {
  const fileInput = document.getElementById("import-file");
  fileInput.click();
};

const onFileLoad = (event) => {
  const file = event.target.files[0];

  const reader = new FileReader();

  reader.onload = () => {
    const fileList = JSON.parse(reader.result);
    store.setMainList(fileList);
  };

  reader.onerror = (error) => console.log(error);
  reader.readAsText(file);
};

const resetState = () => {
  localStorage.removeItem("fileList");
  store.setMainList([]);
  isModalOpen.value = false;
};
</script>

<template>
  <DeleteModal
    :is-open="isModalOpen"
    @closeModal="isModalOpen = false"
    @resetState="resetState"
  />
  <header>
    <h1>EZ Copy</h1>
    <div class="actions-container">
      <input
        type="file"
        accept="application/JSON"
        id="import-file"
        style="display: none"
        @change="onFileLoad"
      />

      <font-awesome-icon
        icon="fa-solid fa-trash"
        class="ficon"
        size="2x"
        @click="isModalOpen = true"
      />

      <font-awesome-icon
        class="ficon"
        icon="fa-solid fa-upload"
        size="2x"
        @click="loadState"
      />
      <font-awesome-icon
        class="ficon"
        icon="fa-solid fa-floppy-disk"
        size="2x"
        @click="saveState"
      />
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  border-radius: 8px;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  height: 80px;

  h1 {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-size: 42px;
  }

  .actions-container {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: 24px;

    .ficon {
      cursor: pointer;
      transition: all 0.2s ease;
      &:hover {
        transform: scale(110%);
      }
    }
  }
}
</style>
