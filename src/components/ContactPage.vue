<template>
  <div class="MainContactDiv">
    <Navbar />

    <div class="HomeDiv">
      <img src="../assets/bannerImg.jpg" class="BannerImg" />
    </div>

    <div class="contactDiv1">
      <section class="section-services" id="#about">
        <div class="container">
          <div class="row justify-content-center text-center">
            <div class="">
              <div class="header-section">
                <h2 class="title"><span>Contact Info</span></h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="services">
      <section class="section-services" id="services">
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-lg-4">
              <div class="single-service card">
                <div class="IconsDiv">
                  <i class="far fa-phone-alt"></i>
                </div>

                <div class="DivText">
                  <p>PHONE</p>

                  +44 7448 954 980
                </div>
              </div>
            </div>

            <div class="col-md-4 col-lg-4">
              <div class="single-service card">
                <div class="IconsDiv">
                  <i class="fal fa-envelope"></i>
                </div>
                <div class="DivText">
                  <p>EMAIL</p>

                  bookings@minutemandeliveryservice.com
                </div>
              </div>
            </div>

            <div class="col-md-4 col-lg-4">
              <div class="single-service card">
                <div class="IconsDiv">
                  <i class="fal fa-map-marker-alt"></i>
                </div>
                <div class="DivText">
                  <p>LOCATION</p>
                  Minuteman Delivery Services Ltd ,
                  <br />
                  84 Church Road ,United Kingdom
                  <br />
                  London , SE19 2EZ
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <iframe
      class="gmap_iframe"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9917.273961771954!2d0.177047!3d51.580726!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x805cb36d5d521ac4!2sLondon%20East%20Transportation%20Services%20Limited!5e0!3m2!1sen!2sin!4v1629552160014!5m2!1sen!2sin"
      width="600"
      height="450"
      style="border:0;"
      allowfullscreen=""
      loading="lazy"
    >
    </iframe>

    <Footer />
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";

export default {
  name: "ContactPage",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped>
#services{
    margin-bottom: 2.5rem !important;
}

.section-services .header-section .title {
  position: relative;
  margin-bottom:0px;
  padding-bottom: 0px;
  text-transform: uppercase;
  font-weight: 700;
}




.section-services .card{
    padding: 2rem 1rem;
    margin: 1rem;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    min-height: 19rem;
}

@media (max-width: 768px){
    .section-services .card{
    min-height: auto;
    }

    .section-services .card{
    padding: 2rem 1rem;
    margin: 1rem;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    min-height: 19rem;
}


}

/* @media (min-width: 769px) and (max-width: 1200px){
    .section-services .card{
    min-height: 40rem;
    }
} */

/* .HomeDiv{
    padding-top: 3rem;
} */
.HomeDiv img {
  width: 100%;
  height: auto;
}
.BannerImg {
  width: 100%;
}

.contactDiv1 h1 {
  margin-top: 5%;
}

.contact p {
  margin-right: 20%;

  margin-bottom: 5%;
  margin-left: 15%;
  font: 18px inter sans-serif;
}

.IconsDiv {
  margin-left: 40%;
  font-size: 30px;
  border: 1px solid rgb(88, 88, 243);
  border-radius: 50%;
  width: 70px;
  height: 70px;
  padding: 5px;
  padding-top: 5%;
  color: rgb(88, 88, 243);
}

.DivText {
  margin-top: 2rem;
}

.DivText p {
    font-weight: 700;
}

.gmap_iframe {
  width: 100% !important;
  height: 400px !important;
  margin-bottom: 0;
}

.section-services {
  padding-top: 3.5rem;
  /* margin-bottom: 3%; */
  font-family: "Poppins", sans-serif;
  cursor: pointer;
}

.section-services .header-section .title {
  position: relative;

  padding-bottom: 15px;
  text-transform: uppercase;
  font-weight: 700;
}

.section-services .header-section .title:before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 140px;
  height: 1px;
  background-color: rgba(236, 31, 31, 0.808);
}

.section-services .header-section .title:after {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 50%;
  transform: translateX(-50%);
  width: 45px;
  height: 3px;
  background-color: rgba(236, 31, 31, 0.808);
}

.section-services .header-section .title span {
  color: rgba(236, 31, 31, 0.808);
}

@media screen and (max-width: 400px) {
  .HomeDiv img {
    height: auto;
    width: 100%;
  }
  .MainContactDiv {
    overflow-x: hidden;
  }
  .navbar-brand img {
    height: 400px;
  }
  .dropdown:hover .dropdown-menu {
    display: block;
  }

  .navbar {
    /* margin-top:10px; */
    padding: 2px;
    overflow: hidden;
    background-color: white;
    position: fixed;
    top: 0;
    width: 100%;
    transition: 0.4s;
    position: fixed;
    z-index: 99;
    padding-right: 3%;
    font: 14px inter, sans-serif;
  }

  .collapse ul li .nav-link {
    /* font: 14px inter sans-serif; */
    text-transform: uppercase;
    color: black;
  }
  .collapse ul li .nav-link:hover {
    color: rgba(236, 31, 31, 0.808);
    border-bottom: 1px solid rgba(236, 31, 31, 0.808);
  }

  .iconsClass {
    font-size: 30px;
    margin-left: 3%;
  }

  .IconsDiv {
    font-size: 35px;
    color: rgb(161, 159, 159);
    cursor: pointer;
  }

  .navbar img {
    margin-left: 0;
    height: 80px;
  }

  .btn {
    background-color: rgba(236, 31, 31, 0.808);
    padding: 20px;
    color: white;
    outline: none;
    border: none;
    width: 200px;
  }

  .btn:hover {
    background-color: rgba(236, 31, 31, 0.808);
  }

  .contactDiv img {
    height: 400px;
  }

  .DivText {
    /* padding: 0 25px; */
    font-size: 16px;
  }

  .title {
    margin-bottom: 0;
  }
}

@media (min-width: 769px){
.MainContactDiv{
    overflow-x: hidden;
}

.section-services .card{
    padding: 2rem 1rem;
    margin: 1rem;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    min-height: 19rem;
}



}

@media screen and (min-width: 401px) and (max-width: 550px) {
  .HomeDiv img {
    height: auto;
    width: 100%;
  }
  .MainContactDiv {
    overflow-x: hidden;
  }
  .navbar-brand img {
    height: 400px;
  }
  .dropdown:hover .dropdown-menu {
    display: block;
  }

  .navbar {
    /* margin-top:10px; */
    padding: 2px;
    overflow: hidden;
    background-color: white;
    position: fixed;
    top: 0;
    width: 100%;
    transition: 0.4s;
    position: fixed;
    z-index: 99;
    padding-right: 3%;
    font: 14px inter, sans-serif;
  }

  .collapse ul li .nav-link {
    /* font: 14px inter sans-serif; */
    text-transform: uppercase;
    color: black;
  }
  .collapse ul li .nav-link:hover {
    color: rgba(236, 31, 31, 0.808);
    border-bottom: 1px solid rgba(236, 31, 31, 0.808);
  }

  .iconsClass {
    font-size: 30px;
    margin-left: 3%;
  }

  .IconsDiv {
    font-size: 35px;
    color: rgb(161, 159, 159);
    cursor: pointer;
  }

  .navbar img {
    margin-left: 0;
    height: 80px;
  }

  .btn {
    background-color: rgba(236, 31, 31, 0.808);
    padding: 20px;
    color: white;
    outline: none;
    border: none;
    width: 200px;
  }

  .btn:hover {
    background-color: rgba(236, 31, 31, 0.808);
  }

  .contactDiv img {
    height: 400px;
  }

  .DivText {
    /* padding: 25px; */
    font-size: 16px;
  }

  .title {
    margin-bottom: 0;
  }
}

@media only screen and (min-width: 550px) and (max-width: 768px) {
  .HomeDiv img {
    height: auto;
    width: 100%;
  }
  .MainContactDiv {
    overflow-x: hidden;
  }
  .navbar-brand img {
    height: 400px;
  }
  .dropdown:hover .dropdown-menu {
    display: block;
  }

  .navbar {
    /* margin-top:10px; */
    padding: 2px;
    overflow: hidden;
    background-color: white;
    position: fixed;
    top: 0;
    width: 100%;
    transition: 0.4s;
    position: fixed;
    z-index: 99;
    padding-right: 3%;
    font: 14px inter, sans-serif;
  }

  .collapse ul li .nav-link {
    /* font: 14px inter sans-serif; */
    text-transform: uppercase;
    color: black;
  }
  .collapse ul li .nav-link:hover {
    color: rgba(236, 31, 31, 0.808);
    border-bottom: 1px solid rgba(236, 31, 31, 0.808);
  }

  .iconsClass {
    font-size: 30px;
    margin-left: 3%;
  }

  .IconsDiv {
    font-size: 35px;
    color: rgb(161, 159, 159);
    cursor: pointer;
  }

  .navbar img {
    margin-left: 0;
    height: 80px;
  }

  .btn {
    background-color: rgba(236, 31, 31, 0.808);
    padding: 20px;
    color: white;
    outline: none;
    border: none;
    width: 200px;
  }

  .btn:hover {
    background-color: rgba(236, 31, 31, 0.808);
  }

  .contactDiv img {
    height: 400px;
  }

  .DivText {
    /* padding: 25px; */
    font-size: 13px;
  }

  .title {
    margin-bottom: 0;
  }
}
</style>
