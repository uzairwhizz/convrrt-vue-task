<template>
  <input-wrapper :isValid="isDataValid">
    <input-field :type="selectedType" v-model="validData" />
    <submit-button @click="submitData" :isValid="isDataValid">
      <img :src="tickWhiteIcon" />
    </submit-button>
    <cancel-button @click="closeIt">
      <img :src="closeIcon" />
    </cancel-button>
  </input-wrapper>
</template>

<script>
import styleComp from "vue-styled-components";

const propValidation = { isValid: Boolean };

const CancelButton = styleComp.div`
  width: 32px;
  height: 38px;
  background: #f0f2f6;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 7px 7px 0;
  cursor: pointer;

`;

const SubmitButton = styleComp("div", propValidation)`
  border: 0;
  width: 32px;
  height: 38px;
  background: ${props => (props.isValid ? "#F0F2F6" : "#e74f30")};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const InputWrapper = styleComp("div", propValidation)`
  display: flex;
  flex-direction: row;
  text-align: left;
  justify-content: flex-end;
  padding: 0px;
  width: 251px;
  height: 40px;
  background: #ffffff;
  border: 1px solid ${props => (props.isValid ? "#bcc2cb" : "#e74f30")};
  box-sizing: border-box;
  border-radius: 8px;
  margin-left: 15em;
    margin-top: 0em;
    position:absolute;
`;

const InputField = styleComp.input`
  border: 0;
  width: calc(100% - 75px);
  &:focus {
    outline: none;
  }
`;

export default {
  name: "input-data",
  props: {
    selectedType: {
      type: String,
      validator: function(value) {
        return ["url", "email", "mobile"].indexOf(value) !== -1;
      }
    },
    linkValue: {
      type: String,
      default: ""
    }
  },
  components: {
    InputWrapper,
    InputField,
    SubmitButton,
    CancelButton
  },
  data() {
    return {
      validData: "",
      isDataValid: false
    };
  },
  mounted() {
    this.validData = this.linkValue;
  },
  watch: {
    validData() {
      this.isDataValid = this.checkValidation();
    }
  },
  computed: {
    tickWhiteIcon() {
      return this.isDataValid
        ? require("../assets/tick-grey.svg")
        : require("../assets/tick-white.svg");
    },
    closeIcon() {
      return require("../assets/close.svg");
    }
  },
  methods: {
    submitData() {
      if (this.checkValidation()) {
        this.$emit("onChange", this.validData);
      }
    },
    closeIt() {
      this.$emit("onClose", false);
      this.isDataValid = true;
      this.validData = "";
    },
    checkValidation() {

      if (this.validData === "") {
        return true
      }

      let validationRegex = "";
      if(this.selectedType == 'email'){
        validationRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      }
      if(this.selectedType == 'url'){
        validationRegex = /^((https?|http?):\/\/)?([w|W]{3}\.)+[a-zA-Z0-9\-\.]{3,}\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/;
      }
      if(this.selectedType == 'mobile'){
        validationRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
      }
      if (validationRegex) {
        return this.validData.match(validationRegex) !== null;
      }
      return false;
    }
  }
};
</script>
