<template>
  <div id="container">
    <div id="contacts">
      <div id="contacts--contact">
        <p>{{ mail }}</p>
        <p>{{ phone }}</p>
      </div>
      <div id="contacts--social">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div id="mentions">
      <p>{{ mention }}s</p>
    </div>
   </div>
</template>

<script>
  export default {
      data () {
          return {
            mail : 'helloTestEmail@gmail.com',
            phone : '87079104118',
            mention : '2020 | some mentions'
          }
      }
  }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

body{
  display:flex;
  background-color:#F0F8FF;
  height:95vh;
  justify-content:center;
  align-items:flex-end;
  font-family:Open Sans;
}

#container{
    position: fixed;
    bottom: 0;
    padding-top:20px;
    padding-left: 10px;
    margin-top:20px;
    width:100%;
    color:white;
    background-color:#292354;
    display:flex;
    flex-direction:column;
    align-items:center;
  
}
#contacts{
  display:flex;
  justify-content:space-around;
  align-items:center;
  width:100%;
}
#contacts--contact{
  text-align:right;
}
#contacts--social{
  width:20%;
  display : flex;
  justify-content : space-between;
}
#contacts--social div{
  height:30px;
  width:30px;
  background-color:white;
  border-radius:50%;
}
#mentions p {
  font-size:0.5em;
}
</style>