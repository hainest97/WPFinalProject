<script setup lang="ts"></script>

<template>
  <main>
    <!-- <h1 class="title">Home</h1> -->
    <div class="card m-5">
      <router-link to="/workouts">
        <div class="card-content">
          <p class="title">Track Your Workouts</p>
          <p class="subtitle">
            Keep track of your workouts and how many calories you burned!
          </p>
        </div>
      </router-link>
    </div>
    <div class="card m-5">
      <router-link to="/nutrition">
        <div class="card-content">
          <p class="title">Food Log</p>
          <p class="subtitle">Keep track of what you're eating!</p>
        </div>
      </router-link>
    </div>
    <div class="card m-5">
      <router-link to="/friends">
        <div class="card-content">
          <p class="title">My Friends</p>
          <p class="subtitle">
            Share your progress with you friends and see how they are doing as
            well!
          </p>
        </div>
      </router-link>
    </div>
  </main>
</template>
<style>
.card-content:hover {
  background-color: #f0f0f0;
}
</style>
