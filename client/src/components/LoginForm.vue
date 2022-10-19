<script setup lang="ts">
import router from '@/router';
import { defineComponent } from 'vue';
import {login} from '../stores/session'
</script>

  
<template>
  <div class="columns is-mobile is-centered">
    <div class="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
      <div class="box">
        <div class="container">
          <form></form>
          <div class="field">
            <label class="label">Username</label>
            <div class="control">
              <input class="input" v-model="username" type="text" />
            </div>
          </div>
          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input class="input" v-model="password" type="password" />
            </div>
          </div>
          <p class="help is-danger">{{ errMessage }}</p>
          <div class="field is-grouped">
            <div class="control">
              <button @click="onSubmit" class="button is-warning"><strong>Submit</strong></button>
            </div>
            <div class="control">
              <button class="button is-link is-light">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  export default defineComponent({
    data(){
      return {
        username: "",
        password: "",
        errMessage: "",
      }
    },
    methods:{
      onSubmit(e: any){
        e.preventDefault();
        if(!this.username){
          this.errMessage = "Please enter a username"
          return;
        }
        if(!this.password){
          this.errMessage = "Please enter a password"
          return;
        }
        this.errMessage = login(this.username,this.password);
        this.password = "";
        console.log(this.errMessage);
        if(this.errMessage==""){
          this.username = "";
          this.password = "";
          router.push('/account');
        }
      }
    }
  })
</script>
<style scoped></style>
