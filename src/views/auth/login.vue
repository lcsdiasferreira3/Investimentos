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
        <v-row>
          <v-col cols="12">
            <div class="d-flex justify-center">
              <vs-input v-model="value1" placeholder="User Email">
                <template #icon>
                  <i class="bx bx-user">@</i>
                </template>
              </vs-input>
            </div>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12">
            <div class="d-flex justify-center">
              <vs-input v-model="value1" placeholder="User Password">
                <template #icon>
                  <i class="bx bx-user"><v-icon size="20">mdi-lock</v-icon></i>
                </template>
              </vs-input>
            </div>
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
      <v-row class="pa-10">
        <v-col cols="6" class="">
          <div class="d-flex justify-center mt-2">
            <vs-button
              :animate-inactive="successLogin"
              @click="handleClickFace"
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
              @click="handleClickFace, registerScreen()"
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
            <v-col cols="12">
              <div class="d-flex justify-space-around">
                <vs-input v-model="value2" placeholder="User Email">
                  <template #icon>
                    <i class="bx bx-user black--text">@</i>
                  </template>
                </vs-input>
                <vs-input v-model="value3" placeholder="User Password">
                  <template #icon>
                    <i class="bx bx-user"
                      ><v-icon size="20">mdi-lock</v-icon></i
                    >
                  </template>
                </vs-input>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <div class="d-flex justify-space-around">
                <vs-input v-model="value2" placeholder="User Email">
                  <template #icon>
                    <i class="bx bx-user black--text">@</i>
                  </template>
                </vs-input>
                <vs-input v-model="value3" placeholder="User Password">
                  <template #icon>
                    <i class="bx bx-user"
                      ><v-icon size="20">mdi-lock</v-icon></i
                    >
                  </template>
                </vs-input>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <div class="d-flex justify-space-around">
                <vs-input v-model="value2" placeholder="User Email">
                  <template #icon>
                    <i class="bx bx-user black--text">@</i>
                  </template>
                </vs-input>
                <vs-input v-model="value3" placeholder="User Password">
                  <template #icon>
                    <i class="bx bx-user"
                      ><v-icon size="20">mdi-lock</v-icon></i
                    >
                  </template>
                </vs-input>
              </div>
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
        <v-row class="pa-10">
          <v-col cols="6" class="">
            <div class="d-flex justify-center mt-2">
              <vs-button
                :animate-inactive="successLogin"
                @click="handleClickFace"
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
                @click="handleClickFace, registerScreen()"
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

<style scoped>
/* General */
.background {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-image: url("https://trademap.com.br/wp-content/uploads/2022/02/shutterstock_1688430043.png");
}
/* Buttons */
.btn1 {
  width: 110px;
  height: 50px;
}
.btn2 {
  width: 110px;
  height: 50px;
}
/* Animation Card Login */
.cardwithoutAnimation {
  width: 20%;
  height: 50%;
}

.cardLogin {
  animation: cardLogin 1s forwards;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 25px;
  width: 20%;
  height: 50%;
}

@keyframes cardLogin {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(180deg);
  }
}

.fadeInUp {
  opacity: 50;
  animation-name: fadeinUpKey;
  animation-duration: 1s;
  animation-fill-mode: both;
  -webkit-animation-duration: 1s;
  -webkit-animation-fill-mode: both;
}

@keyframes fadeinUpKey {
  from {
    transform: translate3d(0, 200px, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

/* Animation card Register */

.cardregister {
  width: 28%;
  height: 50%;
  animation: regis 1s forwards;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  position: absolute;
  border-radius: 25px;
}

@keyframes regis {
  from {
    transform: rotateY(180deg);
  }
  to {
    transform: rotateY(0deg);
  }
}

.ObjHidden {
  display: none;
}

/* others */

.InsideCard {
  margin-top: 115px;
  justify-content: space-around;
}
.avatarLogin {
  margin-top: -40%;
  position: absolute;
  margin-left: 45%;
}
.avatarLoginRegis {
  margin-top: -29%;
  position: absolute;
  margin-left: 45%;
}
</style>
