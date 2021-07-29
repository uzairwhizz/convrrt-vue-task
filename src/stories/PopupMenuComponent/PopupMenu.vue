<template>
  <div class="menu-container">
    <img class="arrow" :src="arrowIcon" alt="">
    <menu-wrapper>
      <menu-item
        icon="email"
        label="Link to Email"
        @onClick="$emit('onClick', $event)"
        :selectedType="selectedType"
      />
      <menu-item
        icon="url"
        label="Link to Page"
        @onClick="$emit('onClick', $event)"
        :selectedType="selectedType"
      />
      <menu-item
        icon="mobile"
        label="Link to Phone"
        @onClick="$emit('onClick', $event)"
        :selectedType="selectedType"
      />
    </menu-wrapper>
  </div>
</template>

<script>
  import MenuItem from "./PopupMenuItems.vue";
  import styleComp from "vue-styled-components";

const MenuWrapper = styleComp.div`
  width: 150px;
  height: 102px;
  left: 0px;
  top: 0px;
  border-radius: 8px;
  box-shadow: 0px 2px 12px rgb(23 6 34 / 10%);
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: -3em -0.21em;
`;

export default {
  name: "popup-menu",
  props: {
    selectedType: {
      type: String,
      default: ""
    }
  },
  components: {
    MenuWrapper,
    MenuItem
  },
  computed: {
    arrowIcon() {
      return require("../assets/popover-icon.svg");
    },

  }
};
</script>
<style>
  .menu-container{
    display: flex;
    margin-left: -1em;
    margin-top: -1em;
  }
  .menu-container li:hover{
    background: #F0F2F6;
  }
  .arrow{
    position: static;
    width: 12px;
    height: 10px;
    left: calc(50% - 12px/2 + 84px);
    top: calc(50% - 6px/2 - 3px);
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 0px;
  }
</style>
