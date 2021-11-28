<template>
<div>
    <navbar :isLogActive="isLogActive"/>
<div class="container mt-5 mb-5">
    <div class="row justify-content-center">
        <div class="col-md-7">
            <div class="card mt-5" >
                <div class="card-header bg-dark text-white">Login</div>

                <div class="card-body bg-light">
                    <form @submit.prevent="logindata">
                        <div class="form-group row mb-2">
                            <label for="name" class="col-md-4 col-form-label text-md-right">User Name</label>

                            <div class="col-md-6">
                                <input v-validate="'required'" id="name" type="text" class="form-control" v-model="form.name" name="username" placeholder="name">
                                <div v-show="errors.has('username')" class="help-block alert alert-danger mb-0 pt-2 pb-2">{{errors.first('username')}}</div>
                            </div>
                        </div>

                        <div class="form-group row mb-2">
                            <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                            <div class="col-md-6">
                                <input id="password" v-validate="'required'" type="password" class="form-control" name="password" v-model="form.password" placeholder="password">
                                <div v-show="errors.has('password')" class="help-block alert alert-danger mb-0 pt-2 pb-2">{{errors.first('password')}}</div>
                            </div>
                        </div>
                        
                        <div class="form-group row mb-0 mt-4">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    Login
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
                name:'',
                password:'',
            },
            isLogActive:true,
            footerbottom:true
        }
    },
     components:{
        navbar,
        Footer
    },
    methods:{
        logindata(){
            this.$router.push('/booking');
           this.$http.post('', this.form).then(response=>{
               console.warn(response);
               this.$router.push('/booking');
           })
        }
    }
    
}

</script>

