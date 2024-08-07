import { mount } from "@vue/test-utils";
import ContactView from "@/views/ContactView.vue";

describe("Test de vista ContacView.vue", () => {
  it("Match de snapshot con ContacView.vue", () => {
    const wrapper = mount(ContactView);
    expect(wrapper.html()).toMatchSnapshot();
  });
});