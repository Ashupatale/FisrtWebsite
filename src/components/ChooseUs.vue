<template>
  <div class="ChooseDiv">
    <div class="container pt-3">
      <div class=" row pb-5">
        <div class=" col-lg-5 col-md-5 col-sm-12">
          <div class="imgChooose">
            <img src="https://londoneasttransport.co.uk/images/imac.png" />
          </div>
        </div>

        <div class=" secondDiv col-lg-7 col-md-7 col-sm-12">
          <h2 style=" justify-content:start;text-align:start;">
            WHY CHOOSE MINUTEMAN DELIVARY SERVICES?
          </h2>
          <div class="chooseText">
            <p>
              You get a secure, reliable, discounted service, multiple carrier
              options, tracking, a full paper trail and one clear, consolidated
              invoice.
            </p>

            <p>
              We make all this available through our web shipping portal, with
              one point of contact
            </p>

            <p>
              Opening an account only takes a few minutes. It's free and doesn't
              commit you either to a minimum monthly spend or shipping volume.
            </p>
          </div>

          <div style="display: flex;margin-left:2%">
            <i
              class="fas fa-check-circle"
              style="font-size:35px;color:green;margin-top:2%;margin-top:1%"
            ></i>

            <p
              style="margin-left:3%;font-size:16px;margin-top:2.5%"
              class="pTag"
            >
              One relationship offering multiple carrier options
            </p>
          </div>

          <div style="display: flex;margin-left:2%">
            <i
              class="fas fa-check-circle"
              style="font-size:35px;color:green;margin-top:2%"
            ></i>

            <p
              style="margin-left:3%;font-size:16px;margin-top:2.5%"
              class="pTag"
            >
              Excellent customer service – no call centres!
            </p>
          </div>

          <div style="display: flex;margin-left:2%">
            <i
              class="fas fa-check-circle"
              style="font-size:35px;color:green;margin-top:2%"
            ></i>

            <p
              style="margin-left:3%;font-size:16px;margin-top:2.5%"
              class="pTag"
            >
              Access to our internet portal for quotes, bookings, tracking and
              more
            </p>
          </div>

          <div style="display: flex;margin-left:2%">
            <i
              class="fas fa-check-circle"
              style="font-size:35px;color:green;margin-top:2%"
            ></i>

            <p
              style="margin-left:3%;font-size:16px;margin-top:2.5%"
              class="pTag"
            >
              Multiple sites, multiple carriers, one invoice
            </p>
          </div>

          <div style="display: flex;margin-left:2%">
            <i
              class="fas fa-check-circle"
              style="font-size:35px;color:green;margin-top:2%"
            ></i>

            <p
              style="margin-left:3%;font-size:16px;margin-top:2.5%"
              class="pTag"
            >
              No minimum monthly volume to receive discounts
            </p>
          </div>

          <div style="display: flex;margin-left:2%">
            <i
              class="fas fa-check-circle"
              style="font-size:35px;color:green;margin-top:2%"
            ></i>

            <p
              style="margin-left:3%;font-size:16px;margin-top:2.5%;"
              class="pTag"
            >
              A natural partner for SMEs and lower volume shippers
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChooseUs",
};
</script>

<style scoped>
.ChooseDiv {
  margin-top: 5%;
  font: 23px inter sans-serif;
}
.imgChooose img {
  width: 100%;
  height: auto;
  padding:1rem;
}

@media (max-width: 570px){
.imgChooose img {
  width: 70%;
  text-align: center;
}

.ChooseDiv .secondDiv{
    text-align: left;
}
}

.chooseText {
  justify-content: start;
  text-align: start;
  font: 18px inter sans-serif;
  margin-top: 1.4rem;
}
.Icons {
  display: block;
  font-size: 40px;
  color: rgb(32, 199, 32);
}

.Righttext {
  margin-top: 3%;
  padding: 2%;
}

@media screen and (max-width: 400px) {
  .display i {
    font-size: 5px;
  }
  .ChooseDiv {
    margin-top: 5%;
  }

  .ChooseDiv h2 {
    font-size: 20px;
  }
  /* .imgChooose {
    height: 400px;
  } */

  .chooseText {
    justify-content: start;
    text-align: start;
  }

  .chooseText p {
    font-size: 14px;
    margin-top: 4%;
  }
  .Icons {
    display: block;
    font-size: 40px;
    color: rgb(32, 199, 32);
  }

  .Righttext {
    margin-top: 3%;
    padding: 2%;
  }
}

/* @media (min-width: 401px) and (max-width: 768px) {
  .imgChooose {
    height: 400px;
    width: 300px;
    margin-top: 2%;
  }
} */
</style>
