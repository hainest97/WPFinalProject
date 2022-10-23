<script setup lang="ts">
import session, {
  Users,
  Workouts,
  Exercises,
  Workout,
  Exercise,
} from "../stores/session";
import { defineComponent } from "vue";
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
                <button class="button is-warning" @click="deleteWorkout">
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
                          v-model="exercise"
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
                          v-model="time"
                          @change="calculateCalories"
                        />
                      </div>
                    </div>
                    <p>Calories: {{ calories }}</p>
                  </div>
                </form>
              </section>
              <footer class="modal-card-foot">
                <button class="button is-warning" @click="addWorkout">
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
              <tr
                v-for="workout in session.user!.workouts"
                :key="workout.workout_id"
              >
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
<script lang="ts">
export default defineComponent({
  data() {
    return {
      workout_id: 0,
      exercise: Exercises[0],
      time: 0,
      calories: 0,
    };
  },
  methods: {
    openModal() {
      document.getElementById("workout-modal")!.classList.add("is-active");
    },
    closeModal() {
      document.getElementById("workout-modal")!.classList.remove("is-active");
      this.workout_id = 0;
      this.exercise = Exercises[0];
      this.time = 0;
      this.calories = 0;
    },
    calculateCalories() {
      this.calories = Math.round(
        (this.exercise.calorie_index * session.user!.weight * this.time) / 60
      );
    },
    addWorkout() {
      if (this.workout_id == 0) {
        let new_workout = new Workout(this.exercise, session.user!, this.time);
        Workouts.push(new_workout);
        session.user!.workouts.push(new_workout);
      } else {
        Workouts.forEach((item) => {
          if (item.workout_id === this.workout_id) {
            item.exercise = this.exercise;
            item.time = this.time;
            item.calories =
              (session.user!.weight * this.exercise.calorie_index * this.time) /
              60;
          }
        });
      }
      // this.workout_id = 0;
      // this.exercise = Exercises[0];
      // this.exercise_id = 0;
      // this.exercise = "";
      // this.time = 0;
      // this.calories = 0;

      this.closeModal();
      return;
    },
    openModalEdit(workout: Workout) {
      this.openModal();
      this.workout_id = workout.workout_id;
      this.exercise = workout.exercise;
      this.time = workout.time;
      this.calories = Math.round(workout.calories);
    },
    openConfirmDelete(workout: Workout) {
      this.workout_id = workout.workout_id;
      document.getElementById("delete-modal")!.classList.add("is-active");
    },
    closeConfirmDelete() {
      this.workout_id = 0;
      document.getElementById("delete-modal")!.classList.remove("is-active");
    },
    deleteWorkout() {
      for (let i = 0; i < Workouts.length; i++) {
        if (Workouts[i].workout_id === this.workout_id) {
          Workouts.splice(i, 1);
        }
      }
      for (let i = 0; i < session.user!.workouts.length; i++) {
        if (session.user!.workouts[i].workout_id === this.workout_id) {
          session.user!.workouts.splice(i, 1);
        }
      }
      this.closeConfirmDelete();
    },
  },
});
</script>
<style scoped>
.crud-action:hover {
  color: blue;
}
</style>
