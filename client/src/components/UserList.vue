<template>
<div>
    <h3>All Users: </h3>
    <br>
    <ul>
        <user 
        v-for="user of users" v-bind:key="user.id"
        v-bind:user="user"
        />
    </ul>
</div>
</template>


<script>

import User from './User.vue'

export default {
    components: {
        User
    },

    props: ['users'],

    methods: {

    }
}
</script>

<style scoped>
.ul{
    list-style-type: none;
}
</style>