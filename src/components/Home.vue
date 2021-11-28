<template>
<div>
    <navbar :isHomeActive="isHomeActive" />
 <div class="container text-center mt-3">  
     <h1 style="font-size:100px">Train Booking System</h1>
        <div class="row justify-content-center">
            <div class="col-md-10">
                <img src="../assets/img/1.jpg" width="100%">

            </div>
        </div>     
        
    </div>
    <Footer/>
</div>
   
</template>

<script>
import navbar from '../components/navbar.vue'
import Footer from '../components/Footer.vue'
export default {
    data(){
        return{
            isHomeActive:true
        }
    },
    components:{
        navbar,
        Footer
    },
    
    
}
</script>

<style>

</style>