import { mount } from "@vue/test-utils";
import AboutView from "@/views/AboutView.vue";
import ContacView from "@/views/ContactView.vue";
import { createRouter, createWebHistory } from "vue-router";
import ContactView from "@/views/ContactView.vue";

//Ruta about
describe("Tests de vista About", () => {
  it("Test2 - Probar la existencia del componente en la ruta", async () => {
    const routes = [
      {
        path: "/about",
        name: "about",
        component: () => AboutView,
      },
    ];
    const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes,
    });

    router.push("/about");
    await router.isReady();

    const wrapper = mount(AboutView, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.findComponent(AboutView).exists()).toBe(true);
  });
});

//Ruta contacto

describe("Tests de vista Contacto", () => {
    it("Test2 - Probar la existencia del componente en la ruta", async () => {
      const routes = [
        {
          path: "/contact",
          name: "contacto",
          component: () => ContactView,
        },
      ];
      const router = createRouter({
        history: createWebHistory(process.env.BASE_URL),
        routes,
      });
  
      router.push("/contact");
      await router.isReady();
  
      const wrapper = mount(ContactView, {
        global: {
          plugins: [router],
        },
      });
  
      expect(wrapper.findComponent(ContactView).exists()).toBe(true);
    });
  });