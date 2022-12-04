<script setup lang="ts">
import { editUser } from "@/stores/users";
import { defineComponent } from "vue";
import session from "../stores/session";

const user = session.user!;
function openModal() {
      document.getElementById("editUser")!.classList.add("is-active");
    }
    function closeModal() {
      document.getElementById("editUser")!.classList.remove("is-active");
    }
    function callEditUser(){
      editUser(user);
      closeModal();
    }
</script>
<template>
  <div>
    <section>
      <div class="columns is-mobile is-centered my-5">
        <div
          class="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop"
        >
          <div id="editUser" class="modal">
            <div class="modal-background"></div>
            <div class="modal-card">
              <header class="modal-card-head">
                <p class="modal-card-title">Edit User</p>
                <button
                  class="delete"
                  aria-label="close"
                  @click="closeModal"
                ></button>
              </header>
              <section class="modal-card-body">
                <div class="field">
                  <label class="label">First Name</label>
                  <div class="control">
                    <input class="input" v-model="user.firstName" type="text" />
                  </div>
                </div>
                <div class="field">
                  <label class="label">Last Name</label>
                  <div class="control">
                    <input class="input" v-model="user.lastName" type="text" />
                  </div>
                </div>
                <div class="field">
                  <label class="label">Username</label>
                  <div class="control">
                    <input class="input" v-model="user.username" type="text" />
                  </div>
                </div>
                <div class="field">
                  <label class="label">Password</label>
                  <div class="control">
                    <input class="input" v-model="user.password" type="password" />
                  </div>
                </div>
                <div class="field">
                  <label class="label">Sex</label>
                  <div class="control">
                    <input class="input" v-model="user.sex" type="text" />
                  </div>
                </div>
                <div class="field">
                  <label class="label">Height</label>
                  <div class="control">
                    <input class="input" v-model="user.height" type="number" />
                  </div>
                </div>
                <div class="field">
                  <label class="label">Weight</label>
                  <div class="control">
                    <input class="input" v-model="user.weight" type="number" />
                  </div>
                </div>
                <div class="field">
                  <label class="label">Weight</label>
                  <div class="control">
                    <input class="input" v-model="user.age" type="number" />
                  </div>
                </div>
              </section>
              <footer class="modal-card-foot">
                <button class="button is-warning" @click="callEditUser">Save changes</button>
                <button class="button" @click="closeModal">Cancel</button>
              </footer>
            </div>
          </div>
          <div class="box">
            <div class="my-3">
              <p class="title">First Name</p>
              <p class="subtitle">{{ user.firstName }}</p>
            </div>
            <div class="my-3">
              <p class="title">Last Name</p>
              <p class="subtitle">{{ user.lastName }}</p>
            </div>
            <div class="my-3">
              <p class="title">Username</p>
              <p class="subtitle">{{ user.username }}</p>
            </div>
            <div class="my-3">
              <p class="title">Sex</p>
              <p class="subtitle">{{ user.sex }}</p>
            </div>
            <div class="my-3">
              <p class="title">Height</p>
              <p class="subtitle">{{ user.height }} inches</p>
            </div>
            <div class="my-3">
              <p class="title">Weight</p>
              <p class="subtitle">{{ user.weight }} pounds</p>
            </div>
            <div class="my-3">
              <p class="title">Age</p>
              <p class="subtitle">{{ user.age }}</p>
            </div>
            <button @click="openModal" class="button is-warning">
              <strong>Edit Info</strong>
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
