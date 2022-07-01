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
        <v-form ref="login">
          <v-row justify="center">
            <v-col cols="6" class="pb-0">
              <v-text-field
                dark
                v-model="emailLogin"
                outlined
                filled
                placeholder="Email"
                :rules="rulesFrom"
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
                :rules="rulesFrom"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                @click:append="show1 = !show1"
              >
              </v-text-field>
            </v-col>
          </v-row>
        </v-form>

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
              :animate-inactive="successLogin1"
              @click="handleClickLogin1, login()"
              :loading="loadingLogin1"
              class="d-flex justify-center btn1"
            >
              <i class="bx bx-user"
                ><v-icon size="30px" color="white">mdi-login</v-icon></i
              >
              {{ successLogin1 ? "Welcome!" : "" }}
              <template #animate>
                <i class="bx bx-user"></i>
                Confirm Login
              </template>
            </vs-button>
          </div>
        </v-col>
        <v-col cols="6" class="">
          <div class="d-flex justify-center mt-2">
            <vs-button
              :animate-inactive="successLogin2"
              @click="handleClickLogin2, registerScreen()"
              :loading="loadingLogin2"
              class="d-flex justify-center btn2"
            >
              <i class="bx bx-user"
                ><v-icon size="30px" class="" color="white"
                  >mdi-account-plus</v-icon
                ></i
              >
              <template #animate>
                <i class="bx bx-user"></i>
                Go to Register
              </template>
            </vs-button>
          </div>
        </v-col>
      </v-row>
    </v-card>
    <div v-show="this.error">
      <BaseAlert
        color="red"
        :text="this.error"
        class="alertError"
        @AlertMethod="errorAlert"
      ></BaseAlert>
    </div>

    <div v-show="this.success">
      <BaseAlert
        color="green"
        :text="this.success"
        class="AlertSucces"
        @AlertMethod="errorSuccess"
      ></BaseAlert>
    </div>
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
          <span class="d-flex justify-center mt-n8 mb-5"
            >Create a user account to use the system. It's free!</span
          >
          <v-form ref="register">
            <v-row justify="center">
              <v-col cols="6" class="pb-0">
                <v-text-field
                  dark
                  v-model="emailRegister"
                  :rules="rulesFrom"
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
                  v-model="passwordRegister"
                  outlined
                  :rules="rulesFrom"
                  :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show2 ? 'text' : 'password'"
                  @click:append="show2 = !show2"
                  filled
                  placeholder="Password"
                >
                </v-text-field>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="6" class="pb-0">
                <v-text-field
                  dark
                  v-model="passwordRegisterConfirm"
                  :rules="rulesFrom"
                  :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show3 ? 'text' : 'password'"
                  @click:append="show3 = !show3"
                  outlined
                  filled
                  placeholder="Confirm the password"
                >
                </v-text-field>
              </v-col>
            </v-row>
          </v-form>
        </div>
        <v-row>
          <v-col cols="6" class="">
            <div class="d-flex justify-center mt-2">
              <vs-button
                :animate-inactive="successRegister1"
                @click="handleRegister1, backToLogin()"
                :loading="loadingRegister1"
                class="d-flex justify-center btn1"
              >
                <i class="bx bx-user"
                  ><v-icon size="30px" color="white">mdi-login</v-icon></i
                >
                <template #animate>
                  <i class="bx bx-user"></i>
                  Back to Login
                </template>
              </vs-button>
            </div>
          </v-col>
          <v-col cols="6" class="">
            <div class="d-flex justify-center mt-2">
              <vs-button
                :animate-inactive="successRegister2"
                @click="handleRegister2, register()"
                :loading="loadingRegister2"
                class="d-flex justify-center btn2"
              >
                <i class="bx bx-user"
                  ><v-icon size="30px" class="" color="white"
                    >mdi-account-plus</v-icon
                  ></i
                >
                {{ successRegister2 ? "Bem-Vindo(a)" : "" }}
                <template #animate>
                  <i class="bx bx-user"></i>
                  Confirm Register
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
