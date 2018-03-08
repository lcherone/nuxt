<template>
  <div>
    <top-nav/>
    <div class="columns is-fullheight">
      <div class="column is-narrow is-sidebar-menu is-hidden-mobile">
        <side-nav/>
      </div>
      <div class="column is-main-content">

        <div class="content" style="margin-top:10px">
          <h1>Hello World</h1>

          <pre>app rendered {{ rendered }} side</pre>
          <pre>{{ loggedUser }}</pre>
          <pre>{{ loggedToken }}</pre>
          <pre>isAuthenticated = {{ isAuthenticated }}</pre>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import axios from 'axios'

  import TopNav from '~/components/TopNav.vue'
  import SideNav from '~/components/SideNav.vue'

  export default {
    layout: 'admin',
    middleware: 'authenticated',
    computed: {
      ...mapGetters({
        isAuthenticated: 'auth/isAuthenticated',
        loggedUser: 'auth/loggedUser',
        loggedToken: 'auth/loggedToken',
      })
    },
    components: {
      TopNav, SideNav
    },
    mounted: function () {

    },
    /*
    async asyncData() {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
      return { users: data }
    },
    */
    asyncData() {
      return {
        rendered: process.static ? 'static' : (process.server ? 'server' : 'client')
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
