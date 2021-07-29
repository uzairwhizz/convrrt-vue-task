import FullScreenComponent from "./FullscreenButton.vue";

export default {
  title: "Example/FullScreenComponent",
  component: FullScreenComponent,
  argTypes: {}
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FullScreenComponent },
  template: '<fullscreen-component @onClick="onClick" v-bind="$props" />'
});


export const Clicked = Template.bind({});
Clicked.args = {
  isClicked: true
};

export const Normal = Template.bind({});
Normal.args = {};


