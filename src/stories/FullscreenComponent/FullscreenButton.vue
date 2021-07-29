<template>
  <link-wrapper @click="onClick" :isSelected="isClicked">
    <img :src="tabIcon" />
  </link-wrapper>
</template>

<script>
import styleComp from "vue-styled-components";
const bgProps = { isSelected: Boolean };

const LinkWrapper = styleComp("div", bgProps)`
  width: 32px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 7px 7px 0;
  background: ${props => (props.isSelected ? "#494C53" : "#f0f2f6")};
  &:hover {
    background: ${props => (props.isSelected ? "#494C53" : "#bcc2cb")};
  }
`;

export default {
  name: "fullscreen-component",
  props: {
    isClicked: {
      type: Boolean,
      default: false
    }
  },
  components: {
    LinkWrapper
  },
  computed: {
    tabIcon() {
      return this.isClicked ? require("../assets/clicked-tab.svg") : require("../assets/new-tab.svg");
    }
  },

  methods: {
    onClick() {
      this.$emit("onClick");
    }
  }
};
</script>
