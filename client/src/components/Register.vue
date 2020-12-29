/* eslint-disable */
<template>
<div>
  <Header></Header>
  <div class="container">
      <h1>Register</h1>
    <form @submit.prevent='register'>
      <div class="row">
        <div class="col-25">
          <label for="email">E-mail</label>
        </div>
        <div class="col-75">
          <input type="email" v-model="email" name="email" placeholder="E-mail">
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="username">Username</label>
        </div>
        <div class="col-75">
          <input type="text" v-model="username" name="username" placeholder="Username">
        </div>
      </div>
      
      <div class="row">
        <div class="col-25">
          <label for="password">Password</label>
        </div>
        <div class="col-75">
          <input type="password" v-model="password" name="password" placeholder="Password">
        </div>
      </div>
      <div class="row">
        <input type="submit" value="Register" :disabled='isDisabled()'>
      </div>
    </form>
  </div>
<Footer2></Footer2>
</div>
</template>

<script>

import AuthenticationService from '@/services/AuthenticationService'
import Header from '@/components/Header.vue'
import Footer2 from '@/components/Footer2.vue'

export default {
  components: {
    Header,
    Footer2
  },

  data () {
    return {
      username: '',
      email: '',
      password: '',
      users: []
    }
  },
  methods: {
    async register () {
      const inavlidUsername = this.users.map(x=>x.username).includes(this.username)
      const invalidEmail = this.users.map(x=>x.email).includes(this.email)

      if(invalidEmail){
        console.log("This email is already taken: ")
        return 0
      }
      if(invalidUsername){
        console.log("This username is already taken: ")
        return 0
      }
      
  },
  isDisabled () {
    if(this.email.trim() && this.password.trim() && this.username.trim()){
      console.log("not disabled")
      return false
    }
    return true
  }
  },
  async mounted () {
    const response = await AuthenticationService.getUsers()
    this.users = response.data
  }
  
  
}
</script>

<style scoped>
input[type=text], select, textarea{
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  resize: vertical;
}
input[type=password], select, textarea{
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  resize: vertical;
}

input[type=email], select, textarea{
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  resize: vertical;
}

/* Style the label to display next to the inputs */
label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

/* Style the submit button */
input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
}

/* Style the container */
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

/* Floating column for labels: 25% width */
.col-25 {
  float: left;
  width: 25%;
  margin-top: 6px;
}

/* Floating column for inputs: 75% width */
.col-75 {
  float: left;
  width: 75%;
  margin-top: 6px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .col-25, .col-75, input[type=submit] {
    width: 100%;
    margin-top: 0;
  }
}
</style>




// async register () {
//       if(this.email.trim() && this.password.trim())
//       {
//         const response = await AuthenticationService.register({
//           email: this.email,
//           password: this.password
//         })
//         console.log(response.data)
//       }

//     }