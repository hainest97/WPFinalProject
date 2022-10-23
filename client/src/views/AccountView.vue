<script setup lang="ts">
import session from "../stores/session";
import UserInfo from "../components/UserInfo.vue";
import LoginForm from "../components/LoginForm.vue";
import AllUsers from "../components/AllUsers.vue";
</script>

<template>
  <div>
    <div v-if="session.user != null">
      <h2 class="subtitle">
        Welcome {{ session.user.firstName }} {{ session.user.lastName }}!
      </h2>
      <div v-if="session.user.isAdmin">
        <AllUsers></AllUsers>
      </div>
      <div v-else>
        <UserInfo></UserInfo>
      </div>
    </div>
    <div v-else>
      <LoginForm></LoginForm>
    </div>
  </div>
</template>

<style scoped></style>
