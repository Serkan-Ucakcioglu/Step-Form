<script setup lang="ts">
//import
import { ref } from "@vue/reactivity";
import { watchEffect } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import { useStore } from "../store";
//

//use
const store = useStore();
const router = useRouter();

//button disabled
let isShow = ref(false);

//router push
const goPage = () => {
  router.push("/success");
};

//instant state tracking
watchEffect(() => {
  store.state.age, store.state.name, store.state.surname;

  if (
    store.state.age > 0 &&
    store.state.name.length > 2 &&
    store.state.surname.length > 3
  ) {
    isShow.value = true;
  }
});
</script>

<template>
  <div class="container">
    <h1>Please You Are Info</h1>
    <form @submit.prevent="">
      <!-- Email  -->
      <div class="form-control">
        <label><strong>Name</strong></label>
        <input
          v-model="store.state.name"
          type="name"
          placeholder="Name..."
          required
        />
        <!-- Email  -->
      </div>

      <!-- Password  -->
      <div class="form-control">
        <label><strong>Surname</strong></label>
        <input
          v-model="store.state.surname"
          type="surname"
          placeholder="Surname..."
          required
        />
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
        <button
          @click="goPage"
          :class="{ disabled: !isShow }"
          class="btn"
          :disabled="!isShow"
        >
          Continue
        </button>
      </nav>
    </form>
  </div>
</template>
<style lang="scss" scoped>
//back and continue buttons
nav {
  display: flex;
  a {
    margin-right: 10px;
  }
}
</style>
