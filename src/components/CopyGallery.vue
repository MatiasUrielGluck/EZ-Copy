<script setup>
import CopyElement from "../components/CopyElement.vue";
import { useMainListStore } from "../stores/mainList";

const store = useMainListStore();

const addElement = () => {
  const buttonName = window.prompt("Ingresá el nombre del botón");
  if (!buttonName) return;
  store.addElement(buttonName);
};

const modifyElement = (id) => {
  const buttonName = window.prompt("Ingresá el nombre del botón");
  store.modifyElementName(id, buttonName);
};

const deleteElement = (id) => {
  store.deleteElement(id);
};
</script>

<template>
  <div class="copy-gallery">
    <div class="gallery">
      <CopyElement
        v-for="(element, index) in store.getMainList"
        :key="index"
        :element="element"
        @edit="modifyElement"
        @delete="deleteElement"
      />
    </div>
    <div class="add-btn" @click="addElement">
      <font-awesome-icon icon="fa-solid fa-square-plus" size="xl" />
      <p>Agregar un campo</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.copy-gallery {
  .add-btn {
    cursor: pointer;
    margin-bottom: 16px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    gap: 12px;
    border: 1px solid #56cc5e;
    background: #71ff7a;
    width: 100%;
    height: 40px;
    transition: all 0.3s ease;

    &:hover {
      background: #62e06a;
    }

    p {
      font-size: 18px;
      font-weight: 700;
      line-height: 0;
    }
  }
}
</style>
