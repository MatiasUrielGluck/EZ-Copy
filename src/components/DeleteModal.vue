<script setup>
const emit = defineEmits(["closeModal", "resetState"]);

defineProps({
  isOpen: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<template>
  <div :class="`outer-modal ${isOpen ? 'open' : ''}`">
    <div :class="`inner-modal ${isOpen ? 'open' : ''}`">
      <h1>¡Cuidado!</h1>
      <p>¿Deseás eliminar <span>todo</span> el portapapeles?</p>

      <div class="actions-container">
        <div class="btn no" @click="emit('closeModal')"><p>Cancelar</p></div>
        <div class="btn yes" @click="emit('resetState')"><p>Si</p></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.outer-modal {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  display: grid;
  place-items: center;

  transition: all 0.3s ease;

  &.open {
    z-index: 10;
    background: rgba($color: #000000, $alpha: 0.7);
  }

  .inner-modal {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-evenly;

    background: rgba($color: #ffffff, $alpha: 1);
    height: 300px;
    width: 300px;
    border-radius: 12px;
    padding: 8px;
    transition: all 0.3s ease;

    &.open {
      background: rgba($color: #ffffff, $alpha: 1);
    }

    h1,
    p {
      text-align: center;
    }

    p {
      font-size: 18px;

      span {
        font-weight: 700;
        text-decoration: underline;
      }
    }

    .actions-container {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: center;
      gap: 16px;

      .btn {
        cursor: pointer;
        padding: 8px 0;
        width: 100px;
        color: #ffffff;
        font-weight: 700;

        p {
          margin: 0;
        }

        &.yes {
          background: #f2000f;
        }

        &.no {
          background: #56cc5e;
        }
      }
    }
  }
}
</style>
