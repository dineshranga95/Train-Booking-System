<template>
<div>
    <navbar :isRegActive="isRegActive"/>
<div class="container mt-5 mb-5">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card mt-5">
                <div class="card-header bg-dark text-white">Sign Up</div>

                <div class="card-body bg-light">
                    <form @submit.prevent="savedata">
                        <div class="form-group row mb-2">
                            <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>

                            <div class="col-md-6">
                                <input v-validate="'required'" id="name" type="text" class="form-control" v-model="form.name" name="name" placeholder="name">
                                <div v-show="errors.has('name')" class="help-block alert alert-danger mb-0 pt-2 pb-2">{{errors.first('name')}}</div>
                            </div>
                        </div>

                        <div class="form-group row mb-2">
                            <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                            <div class="col-md-6">
                                <input id="email" v-validate="'required'" type="email" class="form-control" v-model="form.email" name="email" placeholder="email">
                                <div v-show="errors.has('email')" class="help-block alert alert-danger mb-0 pt-2 pb-2">{{errors.first('email')}}</div>
                            </div>
                        </div>

                        <div class="form-group row mb-2">
                            <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                            <div class="col-md-6">
                                <input id="password" v-validate="'required'" type="password" class="form-control" name="password" v-model="form.password" placeholder="password">
                                <div v-show="errors.has('password')" class="help-block alert alert-danger mb-0 pt-2 pb-2">{{errors.first('password')}}</div>
                            </div>
                        </div>

                        <div class="form-group row mb-2">
                            <label for="password-confirm" class="col-md-4 col-form-label text-md-right">Confirm Password</label>

                            <div class="col-md-6">
                                <input id="password-confirm" v-validate="'required'" type="password" class="form-control" name="confirmation" v-model="form.confirm" placeholder="Confirm Password">
                                <div v-show="errors.has('confirmation')" class="help-block alert alert-danger mb-0 pt-2 pb-2">{{errors.first('confirmation')}}</div>
                            </div>
                        </div>

                        <div class="form-group row mb-0 mt-4">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    Register
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
                email:'',
                password:'',
                confirm:''
            },
            isRegActive:true,
            footerbottom:true
        }
    },
     components:{
        navbar,
        Footer
    },
    methods:{
        savedata(){
            this.$router.push('/login');
           this.$http.post('http://localhost:5000/api/users', this.form).then(response=>{
               console.warn(response);
               this.$router.push('/login');
           })
        }
    }
    
}

</script>

