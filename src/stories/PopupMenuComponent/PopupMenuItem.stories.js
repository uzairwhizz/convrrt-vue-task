import PopoverItem from "./PopupMenuItems.vue";

export default {
  title: "Example/PopoverMenuItemComponent",
  component: PopoverItem,
  argTypes: {
    selectedType: { control: { type: "select", options: ["", "url", "email", "mobile"] } },
    icon: { control: { type: "select", options: ["url", "email", "mobile"] } }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { PopoverItem },
  template: '<propup-menu-item @onClick="onClick" v-bind="$props" />'
});

export const emailIcon = Template.bind({});
emailIcon.args = {
  icon: "email"
};

export const mobileIcon = Template.bind({});
mobileIcon.args = {
  icon: "mobile"
};

export const No = Template.bind({});
No.args = {};

export const Yes = Template.bind({});
Yes.args = {
  isSelected: true
};

export const pageIcon = Template.bind({});
pageIcon.args = {
  icon: "url"
};


