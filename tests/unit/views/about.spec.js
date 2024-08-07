import { mount } from "@vue/test-utils";
import AboutView from "@/views/AboutView.vue";

describe("Test de vista aboutView.vue", () => {
  it("Match de snapshot con AboutView.vue", () => {
    const wrapper = mount(AboutView);
    expect(wrapper.html()).toMatchSnapshot();
  });
});