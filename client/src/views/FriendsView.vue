<script setup lang="ts">
import session from '../stores/session';
import LoginForm from '../components/LoginForm.vue';
import FriendsActivity from '../components/FriendsActivity.vue';</script>

<template>
  <div v-if="session.user != null">
    <FriendsActivity></FriendsActivity>
  </div>
  <div v-else>
    <LoginForm></LoginForm>
  </div>
</template>

<style scoped></style>
