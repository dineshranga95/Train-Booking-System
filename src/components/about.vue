<template> 
<div>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark pt-4 pb-4">
  <div class="container-fluid  pt-1 pb-1">     
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
      </ul>
      <ul class="navbar-nav  mb-2 mb-lg-0">
           
          <li class="nav-item search-bar">
              <div class="form-group has-search">
    <span class="fa fa-search form-control-feedback"></span>
     <input type="text" class="form-control" id="staticsearch" placeholder="Search Train Here" @input="keypressed" >
    </div>
             
            </li>
        <li class="nav-item">
          <router-link class="nav-link mr-5" to="/home">Home</router-link>  
        </li>
        <li class="nav-item">
          <router-link class="nav-link mr-5" to="/schedule">Schedule</router-link>  
        </li>
        <li class="nav-item">
            <a href=""><i class="fas fa-user-circle fa-2x mt-1"></i> </a>
        </li> 
        <li class="nav-item">
            
        </li>        
        <li class="nav-item">
            
        </li> 
      </ul>
      
    </div>
  </div>
</nav>  
  <div class="container-fluid" id="main">
    <div class="row">
      <div class="col-md-3 col-lg-2 sidebar-offcanvas bg-secondary" id="sidebar" role="navigation">
        <ul class="nav flex-column pl-1 mt-5">
          <li class="nav-item"><a class="nav-link text-white" href="/home"><i class="fas fa-home fa-2x"></i> Home</a></li>          
          <li class="nav-item"><a class="nav-link text-white" href=""><i class="fas fa-clock fa-2x"></i> Schedule</a></li>
          <li class="nav-item sidebar-footer"><a class="nav-link text-white" href=""><i class="fas fa-cog fa-2x"></i> Settings</a></li>
        </ul>
        
      </div>
      <!--/col-->

      <div class="col-md-9 col-lg-10 main mt-5">
          <div class="row">
			<li class="list-group-item border-none mb-3"> 
                <div class="row justify-content-center">                      
                    <div class="col-sm-8 pt-3 pb-3" style="border:1px solid black">
                        <div class="row">
                            <div class="col-md-7">
                                <span class="name">Galle Train Postponed for 10 minutes</span>
                            </div>
                            <div class="col-md-3">
                                <span class="name"><span class="fa fa-comments c-info" data-toggle="tooltip" title="scott.stevens@example.com"> 10</span></span>
                            </div>
                            <div class="col-md-2">
                               <span class="fa fa-user-circle c-info" data-toggle="tooltip" title="scott.stevens@example.com"> 5</span>
                            </div>
                        </div>
                    </div>
                </div> 
            </li>
            <li class="list-group-item border-none"> 
                <div class="row justify-content-center">                      
                    <div class="col-sm-8 pt-3 pb-3" style="border:1px solid black">
                        <div class="row">
                            <div class="col-md-7">
                                <span class="name">Kandy Train Postponed for 10 minutes</span>
                            </div>
                            <div class="col-md-3">
                                <span class="name"><span class="fa fa-comments c-info" data-toggle="tooltip" title="scott.stevens@example.com"> 10</span></span>
                            </div>
                            <div class="col-md-2">
                               <span class="fa fa-user-circle c-info" data-toggle="tooltip" title="scott.stevens@example.com"> 5</span>
                            </div>
                        </div>
                    </div>
                </div> 
            </li>
		</div>
        </div> 
    </div> 
    </div> 
   
</div>  
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
   
    }
  },
  methods:{
    keypressed(event){
      var key = event.target.value;
     
      this.$http.get(" "+ key )
      .then(response=>{
       
      })
      .catch(e=>{
          this.error = [];
          this.error.push(e)
      })
    }
  }
 
}
</script>
<style scoped>
.navbar-nav > li{
  margin-left:20px;
  margin-right:20px;
}
.has-search .form-control {
    padding-left: 2.375rem;
}

.has-search .form-control-feedback {
    position: absolute;
    z-index: 2;
    display: block;
    width: 2.375rem;
    height: 2.375rem;
    line-height: 2.375rem;
    text-align: center;
    pointer-events: none;
    color: #aaa;
}@media screen and (min-width: 500px) {
  .search-bar{
    width:400px;
}#sidebar{
    margin-bottom: -400px; /* any large number will do */
    padding-bottom: 400px; 
}i{
    margin-right: 10px;
}.sidebar-footer{   
    position: absolute;
    bottom: 0;
    padding-bottom:5.5em;
}
}

</style>