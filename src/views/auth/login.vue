<template>
  <div class="background d-flex justify-center align-center">
    <v-card
      class="fadeInUp rounded-xl cardwithoutAnimation"
      color="#080a23"
      id="card1"
    >
      <div class="InsideCard">
        <v-row>
          <div class="avatarLogin">
            <vs-avatar size="70">
              <v-icon size="40">mdi-account</v-icon>
            </vs-avatar>
          </div>
        </v-row>
        <v-row justify="center">
          <v-col cols="6" class="pb-0">
            <v-text-field
              dark
              v-model="emailLogin"
              outlined
              filled
              placeholder="Email"
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="6" class="pb-0">
            <v-text-field
              dark
              v-model="passwordLogin"
              outlined
              filled
              placeholder="Password"
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <div class="d-flex justify-space-around">
              <vs-checkbox v-model="remember"
                ><span class="white--text">Remember me</span></vs-checkbox
              >
              <a href="" class="mt-1">Forgot Password?</a>
            </div>
          </v-col>
        </v-row>
      </div>
      <v-row class="pa-2">
        <v-col cols="6">
          <div class="d-flex justify-center mt-2">
            <vs-button
              :animate-inactive="successLogin"
              @click="handleClickLogin, login()"
              :loading="loadingLogin"
              class="d-flex justify-center btn1"
            >
              <i class="bx bx-user"
                ><v-icon size="30px" color="white">mdi-login</v-icon></i
              >
              {{ successLogin ? "Welcome!" : "" }}
              <template #animate>
                <i class="bx bx-user"></i>
                Login
              </template>
            </vs-button>
          </div>
        </v-col>
        <v-col cols="6" class="">
          <div class="d-flex justify-center mt-2">
            <vs-button
              :animate-inactive="successLoginRegister"
              @click="handleClickRegister, registerScreen()"
              :loading="loadingLoginRegister"
              class="d-flex justify-center btn2"
            >
              <i class="bx bx-user"
                ><v-icon size="30px" class="" color="white"
                  >mdi-account-plus</v-icon
                ></i
              >
              <template #animate>
                <i class="bx bx-user"></i>
                Register
              </template>
            </vs-button>
          </div>
        </v-col>
      </v-row>
    </v-card>

    <!-- ============================================================================================ -->

    <v-card class="ObjHidden rounded-xl" id="card2" color="#080a23">
      <div class="white--text">
        <div class="InsideCard">
          <v-row>
            <div class="avatarLoginRegis">
              <vs-avatar size="70">
                <v-icon size="40">mdi-account-plus</v-icon>
              </vs-avatar>
            </div>
          </v-row>
          <v-row>
            <v-col cols="12" class="d-flex justify-center">
              <div class="pa-2">
                <vs-input
                  v-model="nameRegis"
                  placeholder="User Password"
                  class="pb-5"
                >
                  <template #icon>
                    <i class="bx bx-user black--text">@</i>
                  </template>
                </vs-input>
                <vs-input v-model="emailRegis" class="pb-5">
                  <template #icon>
                    <i class="bx bx-user"
                      ><v-icon size="20">mdi-lock</v-icon></i
                    >
                  </template>
                </vs-input>
                <vs-input v-model="passRegis">
                  <template #icon>
                    <i class="bx bx-user"
                      ><v-icon size="20">mdi-lock</v-icon></i
                    >
                  </template>
                </vs-input>
              </div>
            </v-col>
          </v-row>
        </div>
        <v-row class="pa-10">
          <v-col cols="6" class="">
            <div class="d-flex justify-center mt-2">
              <vs-button
                :animate-inactive="successLogin"
                @click="handleClickFace, backToLogin()"
                :loading="loadingLogin"
                class="d-flex justify-center btn1"
              >
                <i class="bx bx-user"
                  ><v-icon size="30px" color="white">mdi-login</v-icon></i
                >
                {{ successLogin ? "Welcome" : "" }}
                <template #animate>
                  <i class="bx bx-user"></i>
                  Login
                </template>
              </vs-button>
            </div>
          </v-col>
          <v-col cols="6" class="">
            <div class="d-flex justify-center mt-2">
              <vs-button
                :animate-inactive="successLogin"
                @click="handleClickFace, register()"
                :loading="loadingLogin"
                class="d-flex justify-center btn2"
              >
                <i class="bx bx-user"
                  ><v-icon size="30px" class="" color="white"
                    >mdi-account-plus</v-icon
                  ></i
                >
                {{ successLogin ? "Bem-Vindo(a)" : "" }}
                <template #animate>
                  <i class="bx bx-user"></i>
                  Register
                </template>
              </vs-button>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-card>
  </div>
</template>

<script src="./login"></script>
