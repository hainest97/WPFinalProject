<script setup lang="ts">
import Users, { deleteUser, editUser, type User } from "../stores/users";
import { ref, reactive } from "vue";

let currentUser = ref(Users[0]);

function openUserEdit(user: User) {
  currentUser.value = user;
  document.getElementById("user-modal")!.classList.add("is-active");
}
function closeUserEdit() {
  currentUser.value = Users[0];
  document.getElementById("user-modal")!.classList.remove("is-active");
}
function callEditUser() {
  editUser(currentUser.value!);
  closeUserEdit();
}
function openConfirmDelete(user: User) {
  currentUser.value = user;
  document.getElementById("delete-user-modal")!.classList.add("is-active");
}
function closeConfirmDelete() {
  currentUser.value = Users[0];
  document.getElementById("delete-user-modal")!.classList.remove("is-active");
}
function callDeleteUser(){
  deleteUser(currentUser.value!);
  closeConfirmDelete();
}
</script>

<template>
  <div>
    <section>
      <div class="columns is-mobile is-centered my-5">
        <!-- <div
          class="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop"
        ></div> -->
        <div class="column">
          <div id="user-modal" class="modal">
            <div class="modal-background"></div>
            <div class="modal-card">
              <header class="modal-card-head">
                <p class="modal-card-title">Edit User</p>
                <button
                  class="delete"
                  aria-label="close"
                  @click="closeUserEdit"
                ></button>
              </header>
              <section class="modal-card-body">
                <div class="field">
                  <label class="label">First Name</label>
                  <div class="control">
                    <input
                      class="input"
                      v-model="currentUser!.firstName"
                      type="text"
                    />
                  </div>
                </div>
                <div class="field">
                  <label class="label">Last Name</label>
                  <div class="control">
                    <input
                      class="input"
                      v-model="currentUser!.lastName"
                      type="text"
                    />
                  </div>
                </div>
                <div class="field">
                  <label class="label">Username</label>
                  <div class="control">
                    <input
                      class="input"
                      v-model="currentUser!.username"
                      type="text"
                    />
                  </div>
                </div>
                <div class="field">
                  <label class="label">Password</label>
                  <div class="control">
                    <input
                      class="input"
                      v-model="currentUser!.password"
                      type="text"
                    />
                  </div>
                </div>
                <div class="field">
                  <label class="label">Sex</label>
                  <div class="control">
                    <input
                      class="input"
                      v-model="currentUser!.sex"
                      type="text"
                    />
                  </div>
                </div>
                <div class="field">
                  <label class="label">Height</label>
                  <div class="control">
                    <input
                      class="input"
                      v-model="currentUser!.height"
                      type="number"
                    />
                  </div>
                </div>
                <div class="field">
                  <label class="label">Weight</label>
                  <div class="control">
                    <input
                      class="input"
                      v-model="currentUser!.weight"
                      type="number"
                    />
                  </div>
                </div>
                <div class="field">
                  <label class="label">Weight</label>
                  <div class="control">
                    <input
                      class="input"
                      v-model="currentUser!.age"
                      type="number"
                    />
                  </div>
                </div>
              </section>
              <footer class="modal-card-foot">
                <button class="button is-warning" @click="callEditUser">
                  Save changes
                </button>
                <button class="button" @click="closeUserEdit">Cancel</button>
              </footer>
            </div>
          </div>
          <div id="delete-user-modal" class="modal">
            <div class="modal-background"></div>
            <div class="modal-card">
              <header class="modal-card-head">
                <p class="modal-card-title">Delete User</p>
                <button
                  class="delete"
                  aria-label="close"
                  @click="closeConfirmDelete"
                ></button>
              </header>
              <section class="modal-card-body">
                <p>
                  Are you sure you want to delete this user? This cannot be
                  undone.
                </p>
              </section>
              <footer class="modal-card-foot">
                <button class="button is-warning" @click="callDeleteUser">
                  Yes
                </button>
                <button class="button" @click="closeConfirmDelete">
                  Cancel
                </button>
              </footer>
            </div>
          </div>
          <table class="table is-striped is-fullwidth is-hoverable">
            <caption class="title">
              All Users
            </caption>
            <thead>
              <tr>
                <td>First Name</td>
                <td>Last Name</td>
                <td>User Name</td>
                <td>Password</td>
                <td>Sex</td>
                <td>Height</td>
                <td>Weight</td>
                <td>Age</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in Users" :key="user.user_id">
                <td>{{ user.firstName }}</td>
                <td>{{ user.lastName }}</td>
                <td>{{ user.username }}</td>
                <td>{{ user.password }}</td>
                <td>{{ user.sex }}</td>
                <td>{{ user.height }}</td>
                <td>{{ user.weight }}</td>
                <td>{{ user.age }}</td>
                <td>
                  <i
                    class="crud-action fa-solid fa-pen-to-square mx-1"
                    @click="openUserEdit(user)"
                  ></i>
                  <i
                    v-if="!user.isAdmin"
                    class="crud-action fa-solid fa-trash mx-1"
                    @click="openConfirmDelete(user)"
                  >
                  </i>
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
