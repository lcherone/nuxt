<template>
  <div>
    <h1>
      Add Server
      <div class="field is-grouped is-pulled-right">
        <p class="control">
          <a class="button is-success" @click="save">
            <i class="fa fa-check"></i> Save
          </a>
        </p>
        <p class="control">
          <nuxt-link to="/servers" class="button"><i class="fa fa-reply"></i> Back</nuxt-link>
        </p>
      </div>
    </h1>
    <div class="box"> 

      <div class="notification is-danger" v-show="form.error.global">
        <button class="delete" @click="form.error.global=false"></button>
        <strong>Error: </strong> <span v-html="form.error.global"></span>
      </div>

      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" type="text" v-model="form.value.name" placeholder="Enter the name of the server...">
        </div>
      </div>

      <div class="field">
        <label class="label">Customer</label>
        <div class="control">
          <input class="input" type="text" v-model="form.value.customer" placeholder="Enter the customer of the server...">
        </div>
      </div>

      <div class="field">
        <label class="label">IP Address</label>
        <div class="control">
          <input class="input" type="text" v-model="form.value.ip" placeholder="Enter the IP address of the server...">
        </div>
      </div>

      <div class="field">
        <label class="label">Details</label>
        <div class="control">
          <textarea class="textarea" v-model="form.value.details" placeholder="enter any details about the server..."></textarea>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link" @click="save">Submit</button>
        </div>
        <div class="control">
          <button class="button is-text">Cancel</button>
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
    components: {
      TopNav, SideNav
    },
    computed: {
      ...mapGetters(['auth/loggedUser', 'auth/loggedToken'])
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
        form: {
          error: {
            global: ''
          },
          value: {
            name: '',
            customer: '',
            ip: '',
            details: ''
          }
        }
      }
    },
    mounted: function () {

    },
    methods: {
      save() {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.loggedToken
        axios.post('https://fatfree-base-rest-cloned-lcherone.c9users.io/servers', this.form.value).then(response => {
          console.log(response)
        }).catch(error => {
          console.log(error)
          if (error.response) {
            if (error.response.status === 401) {
              this.form.error.global = 'Invalid username or password!'
            } else {
              this.form.error.global = 'Unknown error whilst sigining in!'
            }
          } else if (error.request) {
            this.form.error.global = 'A network error has occured, your changes have <b>not</b> been saved.'
          } else {
            this.form.error.global = error.message
          }
        })
      }
    }
  }
</script>

<style>

</style>
