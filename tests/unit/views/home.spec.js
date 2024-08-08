import { mount } from "@vue/test-utils";
import HomeView from "@/views/HomeView.vue";

describe("Test de vista Home", () => {
  it("Match de snapshot con HomeView.vue", () => {
    const wrapper = mount(HomeView);
    expect(wrapper.html()).toMatchSnapshot();
  });
});