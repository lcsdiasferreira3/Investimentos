<template>
  <div>
    <v-alert
      :color="color"
      class="alert white--text text-center"
      :width="width"
      :height="height"
      rounded="lg"
      >{{ text }}
    </v-alert>
    <v-btn icon class="d-flex justify-start ml-n1" @click="method()"
      ><v-icon color="white" class="marginBtn">mdi-close</v-icon></v-btn
    >
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: "450px",
    },
    height: {
      type: String,
      default: "130px",
    },
    color: {
      type: String,
      default: "grey",
    },
    text: {
      type: String,
      default: "",
    },
  },

  methods: {
    method() {
      this.$emit("AlertMethod");
    },
  },
};
</script>

<style scoped>
.alert {
  position: absolute;
  margin-top: 40%;
}
.marginBtn {
  margin-left: 6px;
  margin-top: 10px;
}
</style>
