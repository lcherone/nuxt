<template>
  <div>
    <top-nav/>
    <div class="columns is-fullheight">
      <div class="column is-narrow is-sidebar-menu is-hidden-mobile">
        <side-nav/>
      </div>
      <div class="column is-main-content">
        Main content
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  import TopNav from '~/components/TopNav.vue'
  import SideNav from '~/components/SideNav.vue'

  export default {
    layout: 'admin',
    components: {
      TopNav, SideNav
    },
    /*
    async asyncData() {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
      return { users: data }
    },
    */
    asyncData() {
      return {
        name: process.static ? 'static' : (process.server ? 'server' : 'client')
      }
    },
    data () {
      return {

      }
    }
  }
</script>

<style>
  
</style>
