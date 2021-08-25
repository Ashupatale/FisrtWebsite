<template>
    <div>
            

<body class="FooterDiv d-flex flex-column bg-dark">
 
  <footer class="footer ">
    <div class="container ">
      <div class="row ">
        <div class="icon col-lg-4 col-md-4  mb-lg-0">
        
        <a href="/">
         <img src="../assets/Logo.svg" alt="logo" class="LogoImg"/>
        </a>
        
        </div>
        <div class="footer-text col-lg-4 col-md-4 mb-4 mb-lg-0">
          <h6 class="text-uppercase font-weight-bold mb-4" >LONDON-EAST OFFICE</h6>
          <ul class="list-unstyled mb-0">
            <li class="mb-2" ><a >Minuteman Delivery Services Ltd , </a></li>
            <li class="mb-2"><a >84 Church Road ,United Kingdom</a></li>
            <li class="mb-2"><a >London , SE19 2EZ</a></li>


          </ul>
        </div>
        <div class="footer-text col-lg-4 col-md-4 mb-4 mb-lg-0">
          <h6 class="text-uppercase font-weight-bold mb-4"></h6>
          <ul class="list-unstyled mb-0">
            <li class="mb-2"><a >Phone</a></li>
            <li class="mb-2"><a  >+44 7448 954 980</a></li>
             <li class="mb-2"><a >Email</a></li>
            <li class="mb-2"><a class="emailFooter">bookings@minutemandeliveryservice.com</a></li>

          </ul>
        </div>
        
      </div>
    </div>

    <hr class="hr"/>
    <div class="bg-light py-4 bg-dark">
      <div class="container text-center">


<nav class="navbar navbar-expand-lg  bg-dark">
 
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="" id="">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">HOME <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="about">ABOUT US</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="services">SERVICES</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="contactus">CONTACT US</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="FAQ">FAQ</a>
      </li>

      
      
     
    </ul>
    
   
  </div>
  
</nav>
      </div>

    </div>
  </footer>

  
 

</body>





    </div>
</template>

<script>
    export default {
        name:'Footer'
    }
    
</script>

<style scoped>
.footer img{
  /* height:150px;
  margin-right: 15%; */
  width:100%;
  height: auto;
  padding:0.5rem;
  }

.FooterDiv{
   padding-top: 5%;
   margin-top: 0;
   color:white;



}
.hr{
    width:90%;
    margin :auto;
}

.footer-text{
 text-align: left;
 font: 17px inter sans-serif;
  /* padding-left:50px; */
}

.footer-text li a{
  color:white;
  text-decoration: none;
}
.text-muted{
  color:white;
}

.navbar li a{
    color: white;

}
.navbar{
    display:flex;
    padding-left: 35%;
}

.collapse ul li .nav-link:hover{
  color: #1EAE98;
    border-bottom: 1px solid #1EAE98;
    transition: 1s #1EAE98 all;

  
  
}

.finaText{
  font-size: 15px;
  justify-content:end;
  text-align:end;
}

@media (max-width:570px) {
.LogoImg{
  width:200px;
  text-align:center;
}

.footer-text{
  text-align: center;
}

.emailFooter{
  font-size: 15px;
}
.navbar{
  display:none
}



}

@media (min-width: 401px) and (max-width: 768px) {

.navbar{
  display:none
}
}

@media (min-width: 769px) and (max-width: 1024px) {

.navbar{
  display:none
}
}





</style>