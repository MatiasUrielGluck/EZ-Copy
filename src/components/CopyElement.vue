<script setup>
import { ref } from "vue";
import { useMainListStore } from "../stores/mainList";

const store = useMainListStore();

const emit = defineEmits(["edit", "delete"]);

const props = defineProps({
  element: {
    type: Object,
    required: true,
  },
});

const content = ref(props.element.content);

const copyToClipboard = () => {
  navigator.clipboard.writeText(content.value);
};

const updateContent = () => {
  store.modifyElementContent(props.element.id, content);
};
</script>

<template>
  <div class="copy-element">
    <button @click="copyToClipboard">{{ element.name }}</button>
    <div class="actions-container">
      <font-awesome-icon
        class="ficon"
        icon="fa-solid fa-pen"
        @click="emit('edit', element.id)"
      />
      <font-awesome-icon
        class="ficon"
        icon="fa-solid fa-trash"
        @click="emit('delete', element.id)"
      />
    </div>
    <div class="input-container">
      <textarea
        v-model="content"
        placeholder="Ingresá lo que querés copiar"
        @focusout="updateContent"
      ></textarea>
    </div>
  </div>
</template>

<style scoped lang="scss">
.copy-element {
  margin-bottom: 24px;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 24px;

  button {
    cursor: pointer;
    padding: 24px 0;
    white-space: normal;
    word-wrap: break-word;
    width: 300px;
    min-height: 80px;
    border: 1px solid #56cc5e;
    border-radius: 8px;
    background: #ffffff;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    font-weight: 700;
    font-size: 16px;

    @media (min-width: 1024px) {
    }
  }

  .actions-container {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    padding: 12px 0;

    .ficon {
      cursor: pointer;
    }
  }

  .input-container {
    width: 100%;
    height: 100%;

    textarea {
      width: 100%;
      height: 80px;
      padding: 8px;
      border: 1px solid #56cc5e;
      color: #000000ad;
      resize: none;
      transition: all 0.2s ease;

      &:focus {
        outline: none;
        color: #000000;
      }
    }
  }
}
</style>
