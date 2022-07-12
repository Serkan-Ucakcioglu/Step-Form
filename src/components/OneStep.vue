<script setup lang="ts">
//import
import { ref } from "@vue/reactivity";
import { watchEffect } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import { useStore } from "../store/"
//import
const store = useStore();
const router = useRouter();

const goStep = () => {
  if (isDisabled.value == true) {
    router.push({ name: "step2" });
  }
};

//button disabled binding
let isDisabled = ref(false);

// Validation
watchEffect(() => {
  store.state.email, store.state.password, store.state.select;
  if (store.state.email.length > 10 && store.state.password.length > 5) {
    if (store.state.select != "") {
      isDisabled.value = true;
    }
  }
});
</script>

<template>
  <div class="container">
    <h1>Please Login</h1>
    
    <form @submit.prevent="">
      <!-- Email  -->
      <div class="form-control">
        <label><strong>Email</strong></label>
        <input
          v-model="store.state.email"
          type="email"
          placeholder="Email..."
          required
        />
        <!-- Email  -->
      </div>
      <!-- Password  -->
      <div class="form-control">
        <label><strong>Password</strong></label>
        <input
          v-model="store.state.password"
          type="password"
          placeholder="Password..."
          required
        />
        <!-- Password  -->
      </div>
      <div class="select-control">
        <!-- Select Gender  -->
        <select v-model="store.state.select" name="gender" required>
          <option value="girl">Girl</option>
          <option value="man">Man</option>
        </select>
        <!-- Select Gender  -->
      </div>
      
      <!-- //Continue button  go step 2  -->
      <button
        :class="{ disabled: !isDisabled }"
        :disabled="!isDisabled"
        class="btn"
        @click="goStep"
      >
        Continue
      </button>
    </form>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>


//email and password group
.form-control {
  display: flex;
  flex-direction: column;
  input {
    height: 40px;
    margin-bottom: 10px;
  }
  label {
    text-align: left;
  }
}
//email and password group

//register Button
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  margin: 0px auto;
  height: 40px;
  padding: 0px 20px;
  border-radius: 4px;
  color: #fff;
  background-color: rgb(12, 108, 242);
  border-color: #0d6efd;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
}

//gender select
.select-control {
  display: block;
  select {
    width: 300px;
    margin-bottom: 10px;
    height: 30px;
  }
}

//button disabled class
.disabled {
  opacity: 0.5;
}
</style>
