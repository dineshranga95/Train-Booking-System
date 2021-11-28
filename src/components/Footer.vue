<template>
    <div class="" v-bind:class="{footerbottom : footerbottom}"> 
        <footer class="bg-dark text-center text-lg-start">
  
            <div class="text-center p-3 text-white">
                Train Booking System
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    data(){
        return{
           isactive:false
        }
    },
    props:['footerbottom']
}
</script>

<style scoped>
.footerbottom{
    position:fixed;
    left: 0;
    right:0;
    bottom:0;
}
</style>