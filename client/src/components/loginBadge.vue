<script setup lang="ts">
import session, { login, logout } from "../stores/session";
</script>
<template>
  <div>
    <div class="navbar-end" v-if="session.user == null">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-warning">
            <strong>Sign up</strong>
          </a>
          <router-link to="/login" class="button is-light">
            Log in
          </router-link>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="navbar-end">
        <router-link to="/account" class="navbar-item"> My Account </router-link>
        <div class="navbar-item">
          <a class="button is-light" @click="logout()"> Log out </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
