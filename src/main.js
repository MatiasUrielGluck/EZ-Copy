import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from 'pinia'
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faFloppyDisk, faUpload, faSquarePlus, faPen, faTrash);

const pinia = createPinia()
createApp(App).use(pinia).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
