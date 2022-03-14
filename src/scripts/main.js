import { createApp } from "vue/dist/vue.esm-bundler.js";

import '../styles/my-reset.scss';
import '../styles/style.scss';


const app = createApp({
    data() {
        return {
            raw: '',
            command: ''
        }
    },
    computed: {
        result() {
            return this.command + this.raw.replace(/\n/g, '\n' + this.command);
        }
    }
});
const mountedApp = app.mount('#app');
