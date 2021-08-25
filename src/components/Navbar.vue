<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="img-ancor" href="/">
        <img src="../assets/Logo.svg" alt="logo" class="LogoImg" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/"
              >HOME <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">ABOUT US</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/services">SERVICES</a>
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
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.navbar-nav a{
  margin-right: 30px;
  font-weight: 600;
}
.navbar-brand img {
  height: 400px;
  
}
.dropdown:hover .dropdown-menu {
  display: block;
}

.navbar {
  /* margin-top:10px; */
  /* padding: 2px; */
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

.navbar-light .navbar-nav .active>.nav-link, .navbar-light .navbar-nav .nav-link.active, .navbar-light .navbar-nav .nav-link.show, .navbar-light .navbar-nav .show>.nav-link
.nav-item .nav-link {
  color:rgba(236, 31, 31, 0.808);
}

.collapse ul li .nav-link {
  text-transform: uppercase;
  color: rgba(236, 31, 31, 0.808);
}
.collapse ul li .nav-link:hover {
  /* color: #1eae98;
  border-bottom: 1px solid #1eae98; */

    color: rgba(236, 31, 31, 0.808);
  border-bottom: 1px solid red;
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
  width: 120px;
  height: 100px;
  margin-left: 8rem;
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

@media (max-width: 991px){
  .navbar-nav a{
    margin-right: 0;
  }
}


@media screen and (max-width: 400px) {
  .navbar-brand img {
    height: 400px;
  }
  .dropdown:hover .dropdown-menu {
    display: block;
  }


.collapse ul li .nav-link {
  text-transform: uppercase;
  color: rgba(236, 31, 31, 0.808);
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
}

.navbar img {
  height: 90px;
  margin-left: 0%;
}

.HomeSlider {
  height: 350px;
  margin-bottom: 15%;
}

.Home {
  overflow-x: hidden;
}

.HomeDiv img {
  width: 100%;
  height: 250px;
}
</style>
