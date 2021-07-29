<template>
    <div>
        <custom-input-validation
                v-if="showCustomInput"
                @onClose="removeInput"
                @onChange="onChange"
                :selectedType="newSelectedType"
                :linkValue="newLinkValue"
        />
        <wrapper @show="!showCustomInput">
            <div class="row inputContainer">
                <link-component :isClicked="linkUrlClicked" id="linkTypeSelection"/>
                <custom-title>{{ showText }}</custom-title>
                <delete-icon v-if="showDeleteButton" :src="deleteIcon" @click="clearAll"/>
                <fullscreen-button :isClicked="fullscreenClicked" @onClick="openFullscreen"/>
            </div>
            <b-popover target="linkTypeSelection" triggers="click" placement="left">
                <popup-menu :selectedType="selectedType"/>
            </b-popover>
        </wrapper>
    </div>
</template>

<script>
  import CustomInputValidation from '../CustomInputValidation/CustomInputValidation.vue';
  import FullscreenButton from '../FullscreenComponent/FullscreenButton.vue';
  import PopupMenu from '../PopupMenuComponent/PopupMenu.vue';
  import linkComponent from '../LinkComponent/LinkComponent.vue';
  import { mapGetters } from 'vuex';
  import { BPopover } from 'bootstrap-vue';
  import styleComp from 'vue-styled-components';

  const Wrapper = styleComp.div`
  padding: 0px;
  width: 251px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #bcc2cb;
  box-sizing: border-box;
  border-radius: 8px;
  margin-left:15em;
  margin-top: 4.5em;
`;

  const InputFieldWrapper = styleComp.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: left;
`;

  const CustomTitle = styleComp.span`
  width: 65%;
  padding: 0 11px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #494C53;
`;

  const DeleteIcon = styleComp.img`
  padding-right: 12px;
  cursor: pointer;
`;

  export default {
    name: 'custom-input',
    props: {
      tabClicked: {
        type: Boolean,
        default: false
      },
      linkClicked: {
        type: Boolean,
        default: false
      }
    },
    components: {
      Wrapper,
      InputFieldWrapper,
      DeleteIcon,
      CustomTitle,
      linkComponent,
      FullscreenButton,
      PopupMenu,
      BPopover,
      CustomInputValidation
    },
    data() {
      return {
        newLinkValue: '',
        newSelectedType: '',
        fullscreenClicked: false,
        linkUrlClicked: false,
        linkValue: '',
        showCustomInput: false,
        selectedType: '',
        showMenu: false
      };
    },
    watch: {
      tabClicked() {
        this.fullscreenClicked = this.tabClicked;
      },
      linkClicked() {
        this.linkUrlClicked = this.linkClicked;
        if (this.linkClicked) {
          this.$root.$emit('bv::show::popover', 'linkTypeSelection');
        } else {
          this.$root.$emit('bv::hide::popover', 'linkTypeSelection');
        }
      },
      getSelectedType() {
        this.changeSelectedType(this.getSelectedType);
      }
    },
    computed: {
      ...mapGetters({ getSelectedType: 'getSelectedType' }),
      showText() {
        return this.linkValue || 'URL';
      },
      showDeleteButton() {
        return this.linkValue !== '';
      },
      deleteIcon() {
        return require('../assets/delete.svg');
      }
    },
    methods: {
      changeSelectedType(type) {
        this.newLinkValue = this.selectedType === type ? this.linkValue : '';
        this.linkUrlClicked = !this.linkUrlClicked;
        this.newSelectedType = type;
        this.linkUrlClicked = false;
        this.showCustomInput = true;
      },
      onChange(data) {
        this.linkUrlClicked = true;
        this.selectedType = this.newSelectedType;
        this.linkValue = data;
        this.removeInput();
        this.$emit('onChange', data);
        this.$emit('onSelectType', this.selectedType);
        this.$emit('onLinkClick', this.linkUrlClicked);
      },
      openFullscreen() {
        this.fullscreenClicked = !this.fullscreenClicked;
        this.$emit('onTabClick', this.fullscreenClicked);
      },
      openMenu() {

        this.linkUrlClicked = !this.linkUrlClicked;
        // this.$emit("onLinkClick", this.fullscreenClicked);
      },

      removeInput() {
        this.showCustomInput = false;
      },
      clearAll() {
        this.linkValue = '';
        this.linkUrlClicked = false;
        this.selectedType = '';
      }
    }
  };
</script>
<style>
    body {
        background: #E3E3E3 !Important;
    }

    .inputContainer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-align: left;
    }

</style>
