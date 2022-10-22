<script setup lang="ts">
import { defineComponent } from "vue";
import session from "../stores/session";
</script>
<template>
  <div class="columns is-mobile is-centered mt-5">
    <h1 class="title">Your Friends Activity</h1>
  </div>
  <div v-for="friend in session.user!.friends">
    <div v-for="workout in friend.workouts">
      <section>
        <div class="columns is-mobile is-centered mb-3">
          <div
            class="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop"
          >
            <div class="card my-5">
              <div class="card-content">
                <p class="subtitle">
                  {{ friend.firstName }} {{ friend.lastName }} did
                  {{ workout.exercise.exercise }} for
                  {{ workout.time }} minutes!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped></style>
