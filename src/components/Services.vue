<template>
  <div class="MainServiceDiv">
    <Navbar />

    <div class="HomeDiv">
      <img src="../assets/BannerImg2.jpg" class="BannerImg" />
    </div>

    <div class="services">
      <section class="section-services" id="services">
        <div class="container">
          <div class="row justify-content-center text-center">
            <div class="col-md-10 col-lg-8">
              <div class="header-section">
                <h2 class="title"><span>Services</span></h2>
                <p class="description">
                  We offer UK, European and Worldwide document, parcel, pallet
                  and freight services.
                </p>
              </div>
            </div>
          </div>
          <div class="row ">
            <!-- Start Single Service -->
            <div class="col-md-6 col-lg-4">
              <div class="single-service">
                <div class="part-1">
                  <img src="../assets/Import.svg" />
                  <h3 class="title">IMPORT</h3>
                </div>
                <div class="part-2">
                  <p class="description">
                    Express delivery inno service effective logistics solution
                    for delivery of small cargo delivery service.
                  </p>
                </div>
              </div>
            </div>
            <!-- / End Single Service -->
            <!-- Start Single Service -->
            <div class="col-md-6 col-lg-4">
              <div class="single-service">
                <div class="part-1">
                  <img src="../assets/Export.svg" />
                  <h3 class="title">EXPORT</h3>
                </div>
                <div class="part-2">
                  <p class="description">
                    Express delivery inno service effective logistics solution
                    for delivery of small cargo delivery service.
                  </p>
                </div>
              </div>
            </div>
            <!-- / End Single Service -->
            <!-- Start Single Service -->
            <div class="col-md-6 col-lg-4">
              <div class="single-service">
                <div class="part-1">
                  <img src="../assets/Insurences.svg" />
                  <h3 class="title">INSURENCES</h3>
                </div>
                <div class="part-2">
                  <p class="description">
                    Express delivery inno service effective logistics solution
                    for delivery of small cargo delivery service.
                  </p>
                </div>
              </div>
            </div>
            <!-- / End Single Service -->
            <!-- Start Single Service -->
            <div class="col-md-6 col-lg-4">
              <div class="single-service">
                <div class="part-1">
                  <img src="../assets/Ecommerce.svg" />
                  <h3 class="title">E-COMMERCE</h3>
                </div>
                <div class="part-2">
                  <p class="description">
                    Express delivery inno service effective logistics solution
                    for delivery of small cargo delivery service.
                  </p>
                </div>
              </div>
            </div>
            <!-- / End Single Service -->
            <!-- Start Single Service -->
            <div class="col-md-6 col-lg-4">
              <div class="single-service">
                <div class="part-1">
                  <img src="../assets/Fullfillment.svg" />
                  <h3 class="title">FULFILLMENT</h3>
                </div>
                <div class="part-2">
                  <p class="description">
                    Express delivery inno service effective logistics solution
                    for delivery of small cargo delivery service.
                  </p>
                </div>
              </div>
            </div>
            <!-- / End Single Service -->
            <!-- Start Single Service -->
            <div class="col-md-6 col-lg-4">
              <div class="single-service">
                <div class="part-1">
                  <img src="../assets/Fullfillment-1.svg" />
                  <h3 class="title">SAME DAY/NEXT DAY</h3>
                </div>
                <div class="part-2">
                  <p class="description">
                    Express delivery inno service effective logistics solution
                    for delivery of small cargo delivery service.
                  </p>
                </div>
              </div>
            </div>
            <!-- / End Single Service -->
          </div>
        </div>
      </section>
    </div>

    <Footer />
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";

export default {
  name: "Services",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped>
/* .HomeDiv {
  padding-top: 3rem;
} */

.HomeDiv img {
  width: 100%;
  height: auto;
}

a,
p,
h1,
h2,
h3,
h4,
ul {
  margin: 0;
  padding: 0;
}

@media (min-width: 769px){

.MainServiceDiv{
	overflow-x: hidden;
}
.section-services {
  margin-top: 3.5rem;
  margin-bottom: 6rem;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
}
}

.section-services .header-section {
  margin-bottom: 5px;
  margin-top: 2.5rem;
}

.section-services .header-section .title {
  position: relative;
  margin-bottom: 15px;
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

.section-services .header-section .description {
  color: #000;
}

.section-services .single-service {
  margin-top: 30px;
  background-color: white;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}

.section-services .single-service .part-1 {
  padding: 20px 40px 20px;
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
  padding: 0px 40px 20px;
}

.section-services .single-service .part-2 .description {
  margin-bottom: 22px;
  color: #000;
  font-size: 14px;
  line-height: 1.8em;
}

.section-services .single-service .part-2 a {
  color: #fff;
  font-size: 14px;
  text-decoration: none;
}

.part-1 img {
  width: 300px;
}

@media screen and (max-width: 400px) {
  .HomeDiv img {
    height: auto;
    width: 100%;
  }

  .MainServiceDiv {
    overflow-x: hidden;
  }

  .single-service img {
    margin-left: -15px;
  }

  .title {
    margin-bottom: 0;
  }
}

@media (min-width: 401px) and (max-width: 768px) {
	.MainServiceDiv{
	overflow-x: hidden;
}
  .HomeDiv img {
    height: auto;
    width: 100%;
  }
  .section-services {
    margin-top: 2.5rem;
    padding-bottom: 3.5rem;
    font-family: "Poppins", sans-serif;
    cursor: pointer;
  }
}
</style>
