<template>
  <div>
    <top-nav/>
    <div class="columns is-fullheight">
      <div class="column is-narrow is-sidebar-menu is-hidden-mobile">
        <side-nav/>
      </div>
      <div class="column is-main-content">
        <div class="content" style="margin-top: 10px">
          <h1>
            Servers
            <div class="field is-grouped is-pulled-right">
              <p class="control" v-if="buttons.save">
                <a class="button is-success" @click="click">
                  Save
                </a>
              </p>
              <p class="control" v-if="buttons.create">
                <a class="button is-success">
                  Create
                </a>
              </p>
              <p class="control" v-if="buttons.delete">
                <a class="button is-danger">
                  Delete
                </a>
              </p>
            </div>
          </h1>
          <nuxt-child @show-buttons="showButtons" ref="childComponent"/>
        </div>
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
    mounted: function () {
      
    },
    asyncData() {
      return {
        name: process.static ? 'static' : (process.server ? 'server' : 'client')
      }
    },
    data () {
      return {
        buttons: {}
      }
    },
    methods: {
      showButtons(data) {
        this.buttons = data
      },
      click: function() {
        this.$refs.childComponent.save();
      }
    }
  }
</script>

<style>

</style>
