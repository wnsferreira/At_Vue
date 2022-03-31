<template>
  <div>
    <Navbar :logo="logo_src" :alt="app_name" />
    <div>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/adicionar">Adicionar</router-link>
      <router-view></router-view> -->
    </div>
    <!-- <RentalForm /> -->
    <!-- <ShowCar /> -->
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
// import RentalForm from './components/RentalForm.vue'
// import ShowCar from './components/ShowCar.vue'

export default {
  data: function(){
    return{
      logo_src: "/img/logo.png",
      app_name: "Car Rental"
    }
  },
  components: {
    Footer,
    Navbar,
    // RentalForm,
    // ShowCar
  }
}
</script>

<style>
    * {
    font-family: Helvetica;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .main-container {
    margin: 50px;
    /* Coloca o footer no final */
    min-height: 250px; 
  }

  h1 {
    text-align: center;
    font-size: 42px;
    margin-bottom: 30px;
    color: #222;
  }
</style>
