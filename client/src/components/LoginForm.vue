<script setup lang="ts">
import router from "@/router";
import { ref } from "vue";
import { login } from "../stores/session";

let username = ref("");
let password = ref("");
let errMessage = ref("");

function onSubmit(e: any) {
  e.preventDefault();
  if (username.value==="") {
    errMessage.value = "Please enter a username";
    return;
  }
  if (password.value ==="") {
    errMessage.value = "Please enter a password";
    return;
  }
  errMessage.value = login(username.value, password.value);
  password.value = "";
  if (errMessage.value === "") {
    username.value = "";
    password.value = "";
    router.push("/account");
  }
}
</script>

<template>
  <div class="columns is-mobile is-centered my-2">
    <div
      class="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd"
    >
      <h1 class="title">Login</h1>
      <div class="box">
        <div class="container">
          <form>
            <div class="field">
              <label class="label">Username</label>
              <div class="control">
                <input class="input" v-model="username" type="text" />
              </div>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input class="input" v-model="password" type="password" />
              </div>
            </div>
            <p class="help is-danger">{{ errMessage }}</p>
            <div class="field is-grouped">
              <div class="control">
                <button @click="onSubmit" class="button is-warning">
                  <strong>Submit</strong>
                </button>
              </div>
              <div class="control">
                <button class="button is-link is-light">Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
