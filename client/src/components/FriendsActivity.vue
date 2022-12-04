<script setup lang="ts">
import session from "../stores/session";
import { getFriends } from "@/stores/users";
import { getFriendsWorkouts } from "../stores/workouts"
import { reactive } from "vue";

const Friends = reactive(getFriends(session.user!.friends));
const Workouts = reactive(getFriendsWorkouts(session.user!.friends));
</script>
<template>
  <div class="columns is-mobile is-centered mt-5">
    <h1 class="title">Your Friends Activity</h1>
  </div>
  <div v-for="friend in Friends">
    <div v-for="workout in Workouts.filter((workout) => workout.user_id === friend.user_id)">
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
