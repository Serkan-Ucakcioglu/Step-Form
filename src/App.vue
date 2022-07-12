<template>

  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  max-width: 500px;
  margin: 0px auto;
}

a{
      text-decoration: none;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;


    &.router-link-exact-active {
      color: #42b983;
    }
  }
}


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
