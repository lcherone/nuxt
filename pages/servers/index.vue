<template>
  <div>
    <div class="box"> 
      <table class="table">
        <thead>
          <tr>
            <th><nuxt-link to="/servers/1" active-class="is-active">Servers</nuxt-link></th>
            <th>Two</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Three</td>
            <td>Four</td>
          </tr>
          <tr>
            <td>Five</td>
            <td>Six</td>
          </tr>
          <tr>
            <td>Seven</td>
            <td>Eight</td>
          </tr>
          <tr>
            <td>Nine</td>
            <td>Ten</td>
          </tr>
          <tr>
            <td>Eleven</td>
            <td>Twelve</td>
          </tr>
        </tbody>
      </table>
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
    },
    mounted: function () {
      this.$emit('show-buttons', {
        save: false,
        create: true,
        delete: false
      });
    },
    methods: {
      save: function(value) {
        alert('ffff')
      }
    }
  }
</script>

<style>

</style>
