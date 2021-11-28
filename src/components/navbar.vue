<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid  pt-1 pb-1">
    <router-link class="navbar-brand" to="home">Booking System</router-link>  
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" v-bind:class="{active:isHomeActive}" to="/home">Home</router-link>  
        </li>
        <li class="nav-item">
            <router-link class="nav-link" v-bind:class="{active:isBookingActive}" to="booking">Booking</router-link>         
        </li> 
        <li class="nav-item">
            <router-link class="nav-link"  to="about">About</router-link>
        </li>       
        <li class="nav-item">
            <router-link class="nav-link" to="contact">Contact</router-link>
        </li>
      </ul>
      <ul class="navbar-nav  mb-2 mb-lg-0">
        <li class="nav-item">
            <router-link class="nav-link" v-bind:class="{active:isLogActive}" to="login">Login</router-link>
        </li>        
        <li class="nav-item">
            <router-link class="nav-link" v-bind:class="{active:isRegActive}" to="register">Register</router-link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>  
</template>

<script>
export default {
  data(){
    return{
     
    }
  },
    props:['isHomeActive','isRegActive','isLogActive','isBookingActive']
}
</script>

<style>

</style>