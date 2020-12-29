<template>
  <div class="hello">
    <Header v-bind="users"/>
    <h1>Home Page!</h1>
    <h2>
      <user-list
        v-bind:users="users"
      />
    </h2>
    <Footer2></Footer2>
  </div>
</template>

<script>

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Footer2 from '@/components/Footer2'
import AuthenticationService from '@/services/AuthenticationService'
import UserList from './UserList.vue'

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      users: []
    }
  },

  components: {
    Header,
    Footer,
    Footer2,
    UserList,
  },

  async mounted () {
    const response = await AuthenticationService.getUsers()
    this.users = response.data
  },

  methods: {

    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}



</style>
