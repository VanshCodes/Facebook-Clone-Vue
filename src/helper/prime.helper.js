import Toast from "primevue/toast";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Card from "primevue/card";
import Avatar from "primevue/avatar";


import Menubar from "primevue/menubar";
import TabMenu from "primevue/tabmenu";

import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";
import "primevue/resources/themes/vela-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
const iterateOverAnObject = (object, func) => {
  for (const key in object) {
    func(key, object[key]);
  }
};
const iterateOverAnArray = (array, func) => {
  for (const key of array) {
    func(key);
  }
};
const components = { InputText, Button, Toast, TabMenu, Menubar , Card, Avatar };
const services = [PrimeVue, ToastService];
const primeVueInit = (app) => {
  iterateOverAnObject(components, app.component);
  iterateOverAnArray(services, app.use);
};
export default primeVueInit;
