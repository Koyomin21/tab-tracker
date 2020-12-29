<template>
     <footer>
        <h1 class="logo">Anuar<span style="color: #f55">Website</span></h1>
        <div class="social">
            <a href="https://www.instagram.com/_koyomin_21/?hl=ru"><img src="../images/icons/instagram.svg"></a>
            <a href="https://www.youtube.com/watch?v=A5jAqozOShQ"><img src="../images/icons/youtube.svg"></a>
            <a href="https://web.whatsapp.com/"><img src="../images/icons/whatsapp.svg"></a>
        </div>
        <p>Copyright © 2020 anuarfitness.kz</p>
    </footer>
</template>


<script>
export default {
    
}
</script>


<style scoped>
footer {
    padding: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #000;
    color: #fff;
}
.logo {
    font-family: 'Baloo Bhai 2', cursive;
    margin-right: 2rem;
}
.social img {
    width: 36px;
    background-color: #000;
    border-radius: 200%;
}
</style>