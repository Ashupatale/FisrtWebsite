<template>
  <div class="Home">
    <Navbar />

    <div class="HomeSlider">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src="../assets/bannerImg.jpg"
              alt="First slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="../assets/BannerImg2.jpg"
              alt="Second slide"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>

    <div class="services">
      <section class="section-services" id="services">
        <div class="container">
          <div class="row justify-content-center text-center">
            <div class=" col-sm-12 col-md-10 col-lg-10">
              <div class="header-section">
                <h2 class="title"><span>Services</span></h2>
                <p class="description">
                  We offer UK, European and Worldwide document, parcel, pallet
                  and freight services.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <!-- Start Single Service -->
            <div class="col-md-6 col-lg-4">
              <div class="single-service">
                <div class="part-1">
                  <img src="../assets/Import.svg" />
                  <h3 class="title">IMPORT</h3>
                </div>
                <div class="part-2">
                  <p class="description">
                 No matter where in the world you are looking to import from, 
                 we will find you the right carrier and service to meet your need, and at discounted rates.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4">
              <div class="single-service">
                <div class="part-1">
                  <img src="../assets/Export.svg" />
                  <h3 class="title">EXPORT</h3>
                </div>
                <div class="part-2">
                  <p class="description">
                    Take advantage of our discounted rates with the leading carriers to deliver your documents, parcels or freight to 220 countries. 
                    Our booking portal can also help you with your commercial invoicing
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4">
              <div class="single-service">
                <div class="part-1">
                  <img src="../assets/Insurences.svg" />
                  <h3 class="title">INSURENCES</h3>
                </div>
                <div class="part-2">
                  <p class="description">
                   Working with a leading Lloyds Broker, we have the ability to quote for goods in transit cover for your consignments, 
                   either on a per consignment or annual basis.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4">
              <div class="single-service">
                <div class="part-1">
                  <img src="../assets/Ecommerce.svg" />
                  <h3 class="title">E-COMMERCE</h3>
                </div>
                <div class="part-2">
                  <p class="description">
                   Our simple-to-use tool links with ecommerce stores including Amazon, eBay, Magento, PrestaShop, Shopify and Woo Commerce automating the shipping process, saving you time and helping to get your parcels out of the door as quickly as possible. If you're using a different e-commerce solution, or another order management system, you can upload CSV files or use API integration.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4">
              <div class="single-service">
                <div class="part-1">
                  <img src="../assets/Fullfillment.svg" />
                  <h3 class="title">FULFILLMENT</h3>
                </div>
                <div class="part-2">
                  <p class="description">
                   Operating from a secure, modern warehouse, our local fulfilment partner offers storage solutions catering for pallets, cartons, boxes and individual items. You then send us the packing lists from your system(s) and we will pick, pack and dispatch your consignments using the most appropriate courier and service from our extensive network. We will also manage your inventory.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4">
              <div class="single-service">
                <div class="part-1">
                  <img src="../assets/Fullfillment-1.svg" />
                  <h3 class="title">SAME DAY/NEXT DAY</h3>
                </div>
                <div class="part-2">
                  <p class="description">
                   Through our carrier partners, we offer secure door-to-door next business day deliveries across the UK, with time delivery options also available.
                  </p>
                </div>
              </div>
            </div>
            <!-- / End Single Service -->
          </div>
        </div>
      </section>
    </div>

    <!-- ********************** About Section**************** -->

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
              Minuteman Delivery  services has helped small to medium sized businesses
              send and receive documents, parcels and pallets around the UK and
              between Europe and the rest of the world at discounted rates. We
              provide these services in conjunction with familiar national and
              international carrier partners. They handle all the pick-up and
              deliveries, while we provide a personalised customer service and
              the invoicing. Through our dedicated customer care and our
              discounted rates, we are now an established and highly recommended
              choice for SMEs.
            </p>
          </div>
        </div>
      </div>
    </section>

    <ChooseUs />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
import ChooseUs from "./ChooseUs.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Footer,
    ChooseUs,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.HomeSlider img {
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

.section-services {
  font-family: "Poppins", sans-serif;
}

.section-services .header-section .title {
  position: relative;

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
}

.section-services .header-section .title:after {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 50%;
  transform: translateX(-50%);
  width: 45px;
  height: 3px;
}

.section-services .single-service {
  margin-top: 40px;
  background-color: white;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
  min-height: 36rem;
}

@media (min-width: 993px) and (max-width: 1199px){
  .section-services .single-service{
    min-height: 41rem;
  }
}

.section-services {
  padding-top: 50px;
  padding-bottom: 10px;
  font-family: "Poppins", sans-serif;
  font: 18px inter, sans-serif;
}

.section-services .header-section {
  margin-bottom: 5px;
}

.section-services .header-section .title {
  position: relative;
  margin-bottom: 20px;
  padding-bottom: 10px;
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
  color: #6f6f71;
  font-size: 20px;
  margin-top: 0;
  /* margin-bottom: 1.5rem; */
}

.section-services .single-service {
  margin-top: 40px;
  background-color: white;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
}

.section-services .single-service .part-1 {
  padding: 40px 40px 0;
}

.section-services .single-service .part-1 i {
  margin-bottom: 25px;
  font-size: 80px;
  color: #21bb9f;
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

.section-services .single-service .part-2 .description {
  margin-bottom: 22px;
  color: #6f6f71;
  font-size: 14px;
  line-height: 1.8em;
}

.section-services .single-service .part-2 a {
  color: #fff;
  font-size: 14px;
  text-decoration: none;
}

.section-services .single-service .part-2 a i {
  margin-right: 10px;
  color: #f70037;
}

.ContainerDes {
  font-size: 1rem;
  line-height: 1.8rem;
  justify-content: start;
}

.part-1 img {
  width: 300px;
}

/* .HomeSlider {
  margin-top: 7%;
} */

.HomeSlider img {
  height: auto;
}

/* ****************************** Media Queries **************** */


@media (min-width: 769px){

.Home{
  overflow-x: hidden;
}
}

@media screen and (max-width: 400px) {
  .HomeSlider {
    height: auto;
    /* margin-bottom: 15%; */
  }

  .Home {
    overflow-x: hidden;
  }

  .HomeDiv img {
    width: 100%;
    height: 450px;
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

  .section-services {
    padding-top: 3rem;
    /* padding-bottom: 120px; */
    font-family: "Poppins", sans-serif;
    cursor: pointer;
  }

  .section-services .header-section {
    margin-bottom: 0;
  }

  .section-services .header-section .title {
    position: relative;
    margin-bottom: 40px;
    padding-bottom: 25px;
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
    color: #6f6f71;
  }

  .section-services .single-service {
    margin-top: 40px;
    background-color: white;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  }

  .section-services .single-service .part-1 {
    padding: 40px 40px 0;
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

  .section-services .single-service .part-2 .description {
    margin-bottom: 22px;
    color: #6f6f71;
    font-size: 14px;
    line-height: 1.8em;
  }

  .section-services .single-service .part-2 a {
    color: #fff;
    font-size: 14px;
    text-decoration: none;
  }

  .section-services .single-service .part-2 a i {
    margin-right: 10px;
    color: #f70037;
  }

  .section-services {
    padding-top: 3rem;
    /* padding-bottom: 120px; */
    font-family: "Poppins", sans-serif;
    /* background-color:rgb(247, 238, 238); */
    font: 18px inter, sans-serif;
  }

  .section-services .header-section {
    margin-bottom: 0;
  }

  .section-services .header-section .title {
    position: relative;
    margin-bottom: 40px;
    padding-bottom: 25px;
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
    background-color:rgba(236, 31, 31, 0.808);
  }

  .section-services .header-section .title span {
    color: rgba(236, 31, 31, 0.808);
  }

  .section-services .header-section .description {
    color: #6f6f71;
  }

  .section-services .single-service {
    margin-top: 40px;
    background-color: white;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  }

  .section-services .single-service .part-1 {
    padding: 40px 40px 0;
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

  .section-services .single-service .part-2 .description {
    margin-bottom: 22px;
    color: #6f6f71;
    font-size: 14px;
    line-height: 1.8em;
  }

  .section-services .single-service .part-2 a {
    color: #fff;
    font-size: 14px;
    text-decoration: none;
  }

  .section-services .single-service .part-2 a i {
    margin-right: 10px;
    color: #f70037;
  }

  .ContainerDes {
    text-align: start;
    line-height: 40px;
    justify-content: start;
  }

  .navbar-nav {
    font: 18px inter, sans-serif;
  }
  .LogoImg {
    text-align: start;
    justify-content: start;
  }

  /* .dropdown:hover .dropdown-menu {
    display: ;
} */

.collapse ul li .nav-link{
  color:rgba(236, 31, 31, 0.808);
}
  .navbar {
    /* margin-top:10px; */
    overflow: hidden;
    background-color: white;
    position: fixed;
    top: 0;
    width: 100%;
    transition: 0.4s;
    position: fixed;
    z-index: 99;
    padding-right: 3%;
    font: 18px inter, sans-serif;
  }

  .collapse ul li .nav-link {
    font: 14px inter sans-serif;
    text-transform: uppercase;
    color: black;
  }
  .collapse ul li .nav-link:hover {
    color: rgba(236, 31, 31, 0.808);
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
    width: 100px;
    height: 80px;
    margin-left: 100%;
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

  .ContainerDes {
    font-size: 14px;
    line-height: 20px;
  }

  .section-services title {
    margin-top: 0;
  }

  .part-1 img {
    width: 280px;
  }
}

@media (min-width: 401px) and (max-width: 768px) {
  .HomeSlider img {
    height: auto;
    /* margin-bottom: 15%; */
  }

  .Home {
    overflow-x: hidden;
  }

  .navbar {
    display: none;
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

  .section-services {
    padding-top: 0px;
    /* padding-bottom: 50px; */
    font-family: "Poppins", sans-serif;
    cursor: pointer;
  }

  .section-services .header-section {
    margin-bottom: 0;
  }

  .section-services .header-section .title {
    position: relative;
    margin-bottom: 20px;
    padding-bottom: 25px;
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
    background-color: #21bb9f;
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
    color: #6f6f71;
  }

  .section-services .single-service {
    margin-top: 40px;
    background-color: white;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  }

  .section-services .single-service .part-1 {
    padding: 40px 40px 0;
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

  .section-services .single-service .part-2 .description {
    margin-bottom: 22px;
    color: #6f6f71;
    font-size: 14px;
    line-height: 1.8em;
  }

  .section-services .single-service .part-2 a {
    color: #fff;
    font-size: 14px;
    text-decoration: none;
  }

  .section-services .single-service .part-2 a i {
    margin-right: 10px;
    color: #f70037;
  }

  .section-services {
    padding-top: 3rem;
    /* padding-bottom: 120px; */
    font-family: "Poppins", sans-serif;
    /* background-color:rgb(247, 238, 238); */
    font: 18px inter, sans-serif;
  }

  .section-services .header-section {
    margin-bottom: 0;
  }

  .section-services .header-section .title {
    position: relative;
    margin-bottom: 1.5rem;
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
  }

  .section-services .single-service {
    margin-top: 40px;
    background-color: white;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  }

  .section-services .single-service .part-1 {
    padding: 40px 40px 0;
  }

  .section-services .single-service .part-1 i {
    margin-bottom: 25px;
    font-size: 80px;
    color: #21bb9f;
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

  .section-services .single-service .part-2 .description {
    margin-bottom: 22px;
    color: #6f6f71;
    font-size: 14px;
    line-height: 1.8em;
  }

  .section-services .single-service .part-2 a {
    color: #fff;
    font-size: 14px;
    text-decoration: none;
  }

  .section-services .single-service .part-2 a i {
    margin-right: 10px;
    color: #f70037;
  }

  .ContainerDes {
    text-align: start;
    line-height: 40px;
    justify-content: start;
  }

  .navbar-nav {
    font: 18px inter, sans-serif;
  }
  
  .navbar {
    /* margin-top:10px; */
    overflow: hidden;
    background-color: white;
    position: fixed;
    top: 0;
    width: 100%;
    transition: 0.4s;
    position: fixed;
    z-index: 99;
    padding-right: 3%;
    font: 18px inter, sans-serif;
  }

  .collapse ul li .nav-link {
    font: 14px inter sans-serif;
    text-transform: uppercase;
    color: black;
  }
  .collapse ul li .nav-link:hover {
    color: #1eae98;
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
    height: 200px;
    margin-left: 0%;
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
    background-color: rgba(236, 31, 31, 0.808);
  }

  .ContainerDes {
    font-size: 14px;
    line-height: 20px;
  }

  .section-services title {
    margin-top: 0;
  }

  .part-1 img {
    width: 280px;
  }
}
</style>
