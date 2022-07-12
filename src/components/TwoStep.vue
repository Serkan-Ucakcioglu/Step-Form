<script setup lang="ts">
import { useStore } from "../store"

const store = useStore()
</script>



<template>
   <div class="container">
    <h1>Please You Are Info</h1>
    <form>
      <!-- Email  -->
      <div class="form-control">
        <label><strong>Name</strong></label>
        <input
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
        <router-link class="btn" to="/">back</router-link>
      <router-link
        to="about"
        class="btn"
        >Continue</router-link
      >
      </nav>
    </form>
  </div>
</template>

<style lang="scss" >

.form-control{
    display: flex;
    flex-direction: column;
    input{
        height: 40px;
        margin-bottom: 10px;
    }
    label{
        text-align: left;
    }
}

nav{
    display: flex;
    .btn{
        margin-left: 5px;
    }
}
</style>