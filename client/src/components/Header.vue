<template>
    <div class='container'>
      <header>
        <router-link to="/"><h1 class="logo">Anuar<span style="color: #f55">Website</span></h1></router-link>
            <nav>
                <a href="#">About us</a>
                <a href="#">Trainers</a>
                <a href="#">Programms</a>
                <a href="#">Contacts</a>
            </nav>
            <router-link to="/login" class="login" style="margin-left: 25px;"><img src="../images/icons/login.svg" style="width: 25px;"></router-link>
            <router-link to="/register" class="register" style="margin-left: 10px;"><img src="../images/icons/register.svg" style="width: 25px;"></router-link>
      </header>
    </div>
</template>

<script>



export default {
  data () {
    return {
      showRegister: false,
      showLogin: false
    }
  }
}
</script>

<style scoped>
.container {
    width: 1250px;
    margin: auto;
}

header {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    padding: 0 5rem;
}

header nav {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #000;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}

header nav a {
    display: block;
    padding: 1rem;
    text-transform: uppercase;
    text-decoration: none;
    color: #fff;
}

header nav a::after {
    content: '';
    display: block;
    width: 0px;
    height: 5px;
    background-color: #f55;
    transition: width 0.25s;
}

header nav a:hover::after {
    width: 100%;
}
</style>

