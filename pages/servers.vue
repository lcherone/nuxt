<template>
  <div>
    <top-nav/>
    <div class="columns is-fullheight">
      <div class="column is-narrow is-sidebar-menu is-hidden-mobile">
        <side-nav/>
      </div>
      <div class="column is-main-content">
        <div class="content" style="margin-top: 10px">
          <nuxt-child ref="childComponent"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  import TopNav from '~/components/TopNav.vue'
  import SideNav from '~/components/SideNav.vue'

  export default {
    layout: 'admin',
    middleware: 'authenticated',
    components: {
      TopNav, SideNav
    },
    computed: {
      ...mapGetters(['auth/loggedUser'])
    },
    /*
    async asyncData() {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
      return { users: data }
    },
    */
    mounted: function () {},
    data () {
      return {}
    },
    methods: {}
  }
</script>

<style>

</style>
