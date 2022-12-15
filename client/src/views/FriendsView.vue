<script setup lang="ts">
import session from "../stores/session";
import LoginForm from "../components/LoginForm.vue";
import FriendsActivity from "../components/FriendsActivity.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <div v-if="session.user != null">
    <div class="container">
      <router-link to="/friendsearch" class="button is-warning">
        Find Friends
      </router-link>
    </div>
    <FriendsActivity></FriendsActivity>
  </div>
  <div v-else>
    <LoginForm></LoginForm>
  </div>
</template>

<style scoped></style>
