import PopupMenu from "./PopupMenu.vue";

export default {
  title: "Example/PopoverMenuComponent",
  component: PopupMenu,
  argTypes: {}
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { PopupMenu },
  template: '<popup-menu @onClick="onClick" v-bind="$props" />'
});

export const TabNotClicked = Template.bind({});
TabNotClicked.args = {};

export const TabClicked = Template.bind({});
TabClicked.args = {
  tabClicked: true
};
