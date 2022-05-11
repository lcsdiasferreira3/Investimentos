<template>
  <div class="background d-flex justify-center align-center">
    <v-card class="card">
      <vs-input
        color="#7d33ff"
        shadow
        type="password"
        v-model="value2"
        placeholder="Password"
      >
        <template #icon>
          <i class="bx bx-lock-open-alt"></i>
        </template>
      </vs-input>
      <vs-input v-model="value" placeholder="Name" class="pa-15 pt-0" />

      <vs-button gradient :active="active == 0" @click="active = 0">
        Active
      </vs-button>
    </v-card>
  </div>
</template>

<style scoped>
.background {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-image: url("https://trademap.com.br/wp-content/uploads/2022/02/shutterstock_1688430043.png");
}
.card {
  width: 20%;
  height: 40%;
}
</style>
