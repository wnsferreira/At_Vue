<template>
  <div>
    <!-- <Banner /> -->
    <div class="main-container">
      <Dashboard />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Dashboard from '../components/Dashboard.vue'

export default {
  name: 'Home',
  components: {
   Dashboard
  }
}
</script>