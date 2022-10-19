<script setup lang="ts">
import session from "../stores/session"
</script>

<template>
  <div>
    <h1 class="title">My Account</h1>
    <div v-if="session.user!=null">
      <h2 class="subtitle">
        Welcome {{session.user.firstName}} {{session.user.lastName}}!
      </h2>
    </div>
  </div>
</template>

<style scoped></style>
