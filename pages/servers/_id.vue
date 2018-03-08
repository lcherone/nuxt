<template>
  <div>
    <h1>
      View Server
      <div class="field is-grouped is-pulled-right">
        <p class="control">
          <a class="button is-success" @click="save">
            <i class="fa fa-check"></i> Save
          </a>
        </p>
        <p class="control">
          <a class="button is-danger">
            <i class="fa fa-times"></i> Delete
          </a>
        </p>
      </div>
    </h1>
    <div class="box"> 
      This will be the view server seciotn, which will show details.
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
    mounted: function () {
      this.$emit('show-buttons', {
        save: true,
        create: false,
        delete: true
      });
    },
    /*
    async asyncData() {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
      return { users: data }
    },
    */
    data () {
      return {

      }
    },
    methods: {
      save: function(value) {
        alert('ssss')
      }
    }
  }
</script>

<style>

</style>
