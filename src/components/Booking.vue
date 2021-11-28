<template>
<div>
    <navbar :isBookingActive="isBookingActive"/>
<div class="container mt-5 mb-5">
    <div class="row justify-content-center">
        <div class="col-md-7">
            <div class="card mt-5">
                <div class="card-header bg-dark text-white">Ticket Reservation</div>

                <div class="card-body bg-light">
                    <form @submit.prevent="postdata">
                        <div class="form-group dropdown row mb-2">
                            <label for="start" class="col-md-4 col-form-label text-md-right">Start Place</label>
                            
                            <div class="col-md-6"> 
                               <select class="form-control" name="start" v-model="form.start" placeholder="Select Start Place">
                              <option value="" selected disabled>Select Start Place</option>
                              <option value="Mathara" >Mathara</option>
                              <option value="Colombo" >Colombo</option>
                              <option value="Kandy" >Kandy</option>
                              <option value="Anuradapura" >Anuradapura</option>
                              <option value="Jaffna" >Jaffna</option>
                              <option value="Badulla" >Badulla</option>
                              <option value="Kurunegala" >Kurunegala</option>
                              <option value="Hambanthota" >Hambanthota</option>
                              <option value="NuwaraEliya" >NuwaraEliya</option>
                              <option value="Kaluthara" >Kaluthara</option>
                              <option value="Galle" >Galle</option>
                            </select> 
                            </div>
                        </div>
                        

                        <div class="form-group row mb-2">
                            <label for="destination" class="col-md-4 col-form-label text-md-right">Destination</label>

                            <div class="col-md-6">
                                
                            <select class="form-control" name="start" v-model="form.destination">
                              <option value="" selected disabled>Select Destination</option>
                              <option value="Mathara" >Mathara</option>
                              <option value="Colombo" >Colombo</option>
                              <option value="Kandy" >Kandy</option>
                              <option value="Anuradapura" >Anuradapura</option>
                              <option value="Jaffna" >Jaffna</option>
                              <option value="Badulla" >Badulla</option>
                              <option value="Kurunegala" >Kurunegala</option>
                              <option value="Hambanthota" >Hambanthota</option>
                              <option value="NuwaraEliya" >NuwaraEliya</option>
                              <option value="Kaluthara" >Kaluthara</option>
                              <option value="Galle" >Galle</option>
                            </select> 
                            </div>
                        </div>

                        <div class="form-group row mb-2">
                            <label for="train" class="col-md-4 col-form-label text-md-right">Train</label>

                            <div class="col-md-6">
                            <select class="form-control" name="start" v-model="form.train">
                              <option value="" selected disabled>Select Train</option>
                              <option value="Normal" >Normal</option>
                              <option value="Express" >Express</option>
                              <option value="Intercity" >Intercity</option>
                            </select> 
                            </div>
                        </div>

                        <div class="form-group row mb-0 mt-4">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    Reserve
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<Footer :footerbottom="footerbottom"/>
</div>

</template>
<script>
import navbar from '../components/navbar.vue'
import Footer from '../components/Footer.vue'
export default {
    data(){
        return{
            form:{
              start:'',
              destination:'',
              train:''  
            },
            isBookingActive:true,
            footerbottom:true
        }
    },
     components:{
        navbar,
        Footer
    },
    methods:{
        postdata(){
            
           this.$http.post('http://localhost:5000/api/train-bookings', this.form).then(response=>{
               console.warn(response);
               this.$router.push('/login');
           })
        }
    }
    
}

</script>

