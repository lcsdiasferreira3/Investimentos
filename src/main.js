import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
import vuesax from "./plugins/vuesax";
import firebase from "firebase/app";

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyDeUYwqyFTOAyIY-2BGTIs7aijeNQoCoiQ",
  authDomain: "investimentos-ec15d.firebaseapp.com",
  projectId: "investimentos-ec15d",
  storageBucket: "investimentos-ec15d.appspot.com",
  messagingSenderId: "150694708642",
  appId: "1:150694708642:web:43723319ea058f639adefb",
  measurementId: "G-28MCSGBWQ7",
};

firebase.initializeApp(firebaseConfig);

const requireComponent = require.context(
  // O caminho relativo da pasta de componentes
  "./components",
  // Se deve ou não olhar subpastas
  false,
  // Expressão regular para localizar nomes de componentes base
  /Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach((fileName) => {
  // Pega a configuração do componente
  const componentConfig = requireComponent(fileName);

  // Obtém nome em PascalCase do componente
  const componentName = upperFirst(
    camelCase(
      // Obtém o nome do arquivo, independentemente da profundidade da pasta
      fileName
        .split("/")
        .pop()
        .replace(/\.\w+$/, "")
    )
  );

  // Registra o componente globalmente
  Vue.component(
    componentName,
    // Olha para as opções em `.default`, existentes
    // se o componente foi exportado com `export default`,
    // caso contrário usa o módulo raiz.
    componentConfig.default || componentConfig
  );
});

new Vue({
  router,
  store,
  vuetify,
  vuesax,
  render: (h) => h(App),
}).$mount("#app");
