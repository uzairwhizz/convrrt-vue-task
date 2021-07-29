import LinkComponent from "./LinkComponent.vue";

export default {
  title: "Example/LinkComponent",
  component: LinkComponent,
  argTypes: {}
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LinkComponent },
  template: '<link-component @onClick="onClick" v-bind="$props" />'
});

export const Clicked = Template.bind({});
Clicked.args = {
  isClicked: true
};

export const Normal = Template.bind({});
Normal.args = {};


