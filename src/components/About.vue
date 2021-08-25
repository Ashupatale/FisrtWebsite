<template>
  <div class="MainAboutDiv">
    <Navbar />

    <div class="HomeDiv">
      <img src="../assets/bannerImg.jpg" class="BannerImg" />
    </div>

    <section class="section-services" id="#about">
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-md-12 col-lg-10">
            <div class="header-section">
              <h2 class="title"><span>OUR COMPANY</span></h2>
              <p class="description">
                We offer UK, European and Worldwide document, parcel, pallet and
                freight services.
              </p>
            </div>

            <p class="ContainerDes">
              Minuteman Delivery Services has helped small to medium sized businesses
              send and receive documents, parcels and pallets around the UK and
              between Europe and the rest of the world at discounted rates. We
              provide these services in conjunction with familiar national and
              international carrier partners. They handle all the pick-up and
              deliveries, while we provide a personalised customer service and
              the invoicing. Through our dedicated customer care and our
              discounted rates, we are now an established and highly recommended
              choice for SMEs in Essex, Central and minuteman delivery and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";

export default {
  name: "About",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped>
/* .HomeDiv{
	padding-top: 3rem;
} */

.HomeDiv img {
  width: 100%;
  height: auto;
  /* margin-top: 35px;; */
}

.section-services {
  /* padding-top: 50px; */
  padding-bottom: 10px;
  font-family: "Poppins", sans-serif;
  font: 18px inter, sans-serif;
}

.ContainerDes {
  line-height: 1.8rem;
  margin-bottom: 1.5rem;
}


@media (min-width: 769px){

.MainAboutDiv{
  overflow-x: hidden;
}
}

@media screen and (max-width: 400px) {
  /* *************Navbar*********** */

  .MainAboutDiv {
    overflow-x: hidden;
  }

  .MainAboutDiv img {
    height: auto;
    width: 100%;
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
    border-bottom: 1px solid #1eae98;
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
    background-color: #1eae98;
    padding: 20px;
    color: white;
    outline: none;
    border: none;
    width: 200px;
  }

  .btn:hover {
    background-color: #21bb9f;
  }
}

.aboutImg {
  padding: 8%;
}

.section-services p {
  font-size: 1rem;
  color: #000;
}

.section-services {
  margin-top: 3rem;
  margin-bottom: 3rem;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
}

/* .section-services .header-section {
  margin-bottom: 35px;
} */

.section-services .header-section .title {
  position: relative;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
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

.section-services .header-section .description {
  color: #000;
  font-weight: 600;
  margin-bottom: 1.7rem;
}

.section-services .single-service {
  margin-top: 40px;
  background-color: white;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}

.section-services .single-service .part-1 {
  padding: 40px 40px 25px;
}

.section-services .single-service .part-1 i {
  margin-bottom: 25px;
  font-size: 80px;
  color: rgba(236, 31, 31, 0.808);
}

.section-services .single-service .part-1 .title {
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 0.02em;
  line-height: 1.8em;
}

.section-services .single-service .part-2 {
  padding: 30px 40px 40px;
}

@media (min-width: 401px) and (max-width: 768px) {
  .HomeDiv img {
    height: auto;
	width: 100%;
    /* margin-bottom: 15%; */
  }

  .section-services {
    /* padding-top: 10px; */
    padding-bottom: 0px;
    font-family: "Poppins", sans-serif;
    cursor: pointer;
  }
}
</style>
