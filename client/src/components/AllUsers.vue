<script setup lang="ts">
import type { UserSelectProperty } from 'csstype';
import { defineComponent } from 'vue';
import session, {User, Users} from '../stores/session';
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
                <button class="delete" aria-label="close" @click="closeUserEdit"></button>
              </header>
              <section class="modal-card-body">
                <div class="field">
                  <label class="label">First Name</label>
                  <div class="control">
                    <input class="input" v-model="firstName" type="text" />
                  </div>
                </div>
                <div class="field">
                  <label class="label">Last Name</label>
                  <div class="control">
                    <input class="input" v-model="lastName" type="text" />
                  </div>
                </div>
                <div class="field">
                  <label class="label">Username</label>
                  <div class="control">
                    <input class="input" v-model="userName" type="text" />
                  </div>
                </div>
                <div class="field">
                  <label class="label">Password</label>
                  <div class="control">
                    <input class="input" v-model="password" type="text" />
                  </div>
                </div>
                <div class="field">
                  <label class="label">Sex</label>
                  <div class="control">
                    <input class="input" v-model="sex" type="text" />
                  </div>
                </div>
                <div class="field">
                  <label class="label">Height</label>
                  <div class="control">
                    <input class="input" v-model="height" type="number" />
                  </div>
                </div>
                <div class="field">
                  <label class="label">Weight</label>
                  <div class="control">
                    <input class="input" v-model="weight" type="number" />
                  </div>
                </div>
                <div class="field">
                  <label class="label">Weight</label>
                  <div class="control">
                    <input class="input" v-model="age" type="number" />
                  </div>
                </div>
              </section>
              <footer class="modal-card-foot">
                <button class="button is-warning" @click="EditUser">Save changes</button>
                <button class="button" @click="closeUserEdit">Cancel</button>
              </footer>
            </div>
          </div>
          <div id="delete-user-modal" class="modal">
            <div class="modal-background"></div>
            <div class="modal-card">
              <header class="modal-card-head">
                <p class="modal-card-title">Delete User</p>
                <button class="delete" aria-label="close" @click="closeConfirmDelete"></button>
              </header>
              <section class="modal-card-body">
                <p>Are you sure you want to delete this user? This cannot be undone.</p>
              </section>
              <footer class="modal-card-foot">
                <button class="button is-warning" @click="deleteUser">Yes</button>
                <button class="button" @click="closeConfirmDelete">Cancel</button>
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
              <tr
                v-for="user in Users"
                :key="user.user_id"
              >
                <td>{{ user.firstName }}</td>
                <td>{{ user.lastName }}</td>
                <td>{{ user.username }}</td>
                <td>{{user.password}}</td>
                <td>{{user.sex}}</td>
                <td>{{user.height}}</td>
                <td>{{user.weight}}</td>
                <td>{{user.age}}</td>
                <td>
                  <i
                    class="crud-action fa-solid fa-pen-to-square mx-1"
                    @click="openUserEdit(user)"
                  ></i>
                  <i v-if="!user.isAdmin" class="crud-action fa-solid fa-trash mx-1" @click="openConfirmDelete(user)">
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
<script lang="ts">
export default defineComponent({
  data(){
    return {
      user_id: 0,
      firstName: '',
      lastName: '',
      userName: '',
      password: '',
      sex: '',
      height: 0,
      weight: 0,
      age: 0
    }
  },
  methods: {
    openUserEdit(user: User){
      this.user_id = user.user_id;
      this.firstName = user.firstName;
      this.lastName = user.lastName;
      this.userName = user.username;
      this.password = user.password;
      this.sex = user.sex;
      this.height = user.height;
      this.weight = user.weight;
      this.age = user.age;
      document.getElementById("user-modal")!.classList.add("is-active");

    },
    closeUserEdit(){
      this.user_id = 0;
      this.firstName = '';
      this.lastName = '';
      this.userName = '';
      this.password = '';
      this.sex = '';
      this.height = 0;
      this.weight = 0;
      this.age = 0;
      document.getElementById("user-modal")!.classList.remove("is-active");
    },
    EditUser(){
      for(let i=0; i< Users.length;i++){
        if(Users[i].user_id===this.user_id){
          Users[i].firstName = this.firstName;
          Users[i].lastName = this.lastName;
          Users[i].username = this.userName;
          Users[i].password = this.password;
          Users[i].sex = this.sex;
          Users[i].height = this.height;
          Users[i].weight = this.weight;
          Users[i].age = this.age;
        }
      };
      this.closeUserEdit();
    },
    openConfirmDelete(user: User){
      this.user_id = user.user_id;
      document.getElementById("delete-modal")!.classList.add("is-active");
    },
    closeConfirmDelete(){
      this.user_id = 0;
      document.getElementById("delete-modal")!.classList.remove("is-active");
    },
    deleteUser(){
      for(let i = 0; i < Users.length; i++){
        if(Users[i].user_id===this.user_id){
          Users.splice(i,1);
        }
      }
      Users.forEach((user) => {
        for( let i = 0; i < user.friends.length; i++){
          if(user.friends[i].user_id===this.user_id){
            user.friends.splice(i,1);
          }
        }
      });
      this.closeConfirmDelete;
    }
  }
});
</script>
<style scoped>
.crud-action:hover {
  color: blue;
}</style>
