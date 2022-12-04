<script setup lang="ts">
import { session } from "../stores/session";
import Workouts, {
  addWorkout,
  editWorkout,
  deleteWorkout,
  type Workout,
} from "../stores/workouts";
import Exercises from "../stores/exercises";
import { ref } from "vue";

let defaultWorkout = {
  workout_id: 0,
  exercise: Exercises[0],
  user_id: session.user!.user_id,
  time: 0,
  calories: 0,
};
let currentWorkout = ref(defaultWorkout);

function openModal() {
  document.getElementById("workout-modal")!.classList.add("is-active");
}
function closeModal() {
  document.getElementById("workout-modal")!.classList.remove("is-active");
  currentWorkout.value = defaultWorkout;
}
function calculateCalories() {
  currentWorkout.value!.calories = Math.round(
    (currentWorkout.value!.exercise.calorie_index *
      session.user!.weight *
      currentWorkout.value!.time) /
      60
  );
}
function callAddWorkout() {
  if (currentWorkout.value.workout_id == 0) {
    addWorkout(currentWorkout.value);
  } else {
    editWorkout(currentWorkout.value);
  }
  closeModal();
  return;
}
function openModalEdit(workout: Workout) {
  currentWorkout.value = workout;
  document.getElementById("workout-modal")!.classList.add("is-active");
}
function openConfirmDelete(workout: Workout) {
  currentWorkout.value = workout;
  document.getElementById("delete-modal")!.classList.add("is-active");
}
function closeConfirmDelete() {
  currentWorkout.value = defaultWorkout;
  document.getElementById("delete-modal")!.classList.remove("is-active");
}
function callDeleteWorkout() {
  deleteWorkout(currentWorkout.value);
  closeConfirmDelete();
}
</script>
<template>
  <div>
    <section>
      <div class="columns is-mobile is-centered my-5">
        <div
          class="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop"
        >
          <button class="button is-warning" @click="openModal">
            Add Workout
          </button>
          <div id="delete-modal" class="modal">
            <div class="modal-background"></div>
            <div class="modal-card">
              <header class="modal-card-head">
                <p class="modal-card-title">Are you sure?</p>
                <button
                  class="delete"
                  aria-label="close"
                  @click="closeConfirmDelete"
                ></button>
              </header>
              <section class="modal-card-body">
                <p>
                  Are you sure you want to delete this workout? This cannot be
                  undone
                </p>
              </section>
              <footer class="modal-card-foot">
                <button class="button is-warning" @click="callDeleteWorkout">
                  Yes
                </button>
                <button class="button" @click="closeConfirmDelete">
                  Cancel
                </button>
              </footer>
            </div>
          </div>
          <div id="workout-modal" class="modal">
            <div class="modal-background"></div>
            <div class="modal-card">
              <header class="modal-card-head">
                <p class="modal-card-title">Add/Edit Workout</p>
                <button
                  class="delete"
                  aria-label="close"
                  @click="closeModal"
                ></button>
              </header>
              <section class="modal-card-body">
                <form action="">
                  <div class="field">
                    <label class="label">Exercise</label>
                    <div class="control">
                      <div class="select">
                        <select
                          id="exercise"
                          v-model="currentWorkout.exercise"
                          @change="calculateCalories"
                        >
                          <option
                            v-for="exercise_item in Exercises"
                            :key="exercise_item.exercise_id"
                            :value="exercise_item"
                            :id="'' + exercise_item.exercise_id"
                          >
                            {{ exercise_item.exercise }}
                          </option>
                        </select>
                      </div>
                    </div>
                    <div class="field">
                      <label class="label">Time (min)</label>
                      <div class="control">
                        <input
                          class="input"
                          type="number"
                          step="1"
                          v-model="currentWorkout.time"
                          @change="calculateCalories"
                        />
                      </div>
                    </div>
                    <p>Calories: {{ currentWorkout.calories }}</p>
                  </div>
                </form>
              </section>
              <footer class="modal-card-foot">
                <button class="button is-warning" @click="callAddWorkout">
                  Save changes
                </button>
                <button class="button" @click="closeModal">Cancel</button>
              </footer>
            </div>
          </div>
          <table class="table is-striped is-fullwidth is-hoverable">
            <caption class="title">
              My Workouts
            </caption>
            <thead>
              <tr>
                <td>Exercise</td>
                <td>Time (min)</td>
                <td>Calories Burned</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="workout in Workouts" :key="workout.workout_id">
                <td>{{ workout.exercise.exercise }}</td>
                <td>{{ workout.time }}</td>
                <td>{{ Math.round(workout.calories) }}</td>
                <td>
                  <i
                    class="crud-action fa-solid fa-pen-to-square mx-1"
                    @click="openModalEdit(workout)"
                  ></i>
                  <i
                    class="crud-action fa-solid fa-trash mx-1"
                    @click="openConfirmDelete(workout)"
                  ></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
.crud-action:hover {
  color: blue;
}
</style>
