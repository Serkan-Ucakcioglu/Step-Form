<script setup lang="ts">
//import
import { ref } from "@vue/reactivity";
import { useStore } from "../store";

const store = useStore();


//button disabled
let isShow = ref(false)
</script>

<template>
  <div class="container">
    <h1>Please You Are Info</h1>
    <form>
      <!-- Email  -->
      <div class="form-control">
        <label><strong>Name</strong></label>
        <input type="name" placeholder="Name..." required />
        <!-- Email  -->
      </div>

      <!-- Password  -->
      <div class="form-control">
        <label><strong>Surname</strong></label>
        <input type="surname" placeholder="Surname..." required />
      </div>
      <!-- Age -->
      <div class="form-control">
        <label><strong>Age</strong></label>
        <input
          v-model="store.state.age"
          type="number"
          placeholder="Age..."
          required
        />

        <!-- Password  -->
      </div>
      <nav>
        <router-link class="btn" to="/">Back</router-link>
        <button class="btn" :disabled="!isShow">Continue</button>
      </nav>
    </form>
  </div>
</template>
<style lang="scss" scoped>
nav{
    display: flex;
    a{
        margin-right: 10px;
    }
}
</style>
