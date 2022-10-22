<script setup lang="ts">
import { ref } from "vue";
import image from "../assets/logo.png"
import { RouterLink } from "vue-router";
import LoginBadge from "./loginBadge.vue";


</script>
<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item" @click="isActive=false">
          <img :src="image" />
        </router-link>

        <a
          :class="{ 'is-active': isActive }"
          @click="isActive = !isActive"
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu"
        :class="{ 'is-active': isActive }"
      >
        <div class="navbar-start">
          <router-link to="/" class="navbar-item" @click="isActive=false"> Home </router-link>

          <router-link to="/workouts" class="navbar-item" @click="isActive=false"> Workouts </router-link>
          <router-link to="/nutrition" class="navbar-item"  @click="isActive=false"> Nutrition </router-link>
          
          <router-link to="/friends" class="navbar-item" @click="isActive=false"> Friends </router-link>
          <!-- <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            More
          </a>

          <div class="navbar-dropdown">
            <a class="navbar-item">
              Nutrition
            </a>
            <a class="navbar-item">
              Friends
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item">
              Report an issue
            </a>
          </div>
        </div> -->
        </div>

        <LoginBadge @click="isActive=false">
        </LoginBadge>
      </div>
    </div>
  </nav>
</template>
<script lang="ts">
export const isActive = ref(true);
isActive.value = false;
</script>
<style scoped></style>
