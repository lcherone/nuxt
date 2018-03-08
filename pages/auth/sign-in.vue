<template>
  <div>
    <div class="columns is-fullheight">
      <div class="column">
        <div class="content" style="margin-top:20px">
          <section class=" is-centered column is-4 is-offset-4">
            <article class="card">
              <div class="card-content">
                <h1 class="title">Sign In</h1>
                <h2 class="subtitle is-5">If you want to..</h2>

                <div class="notification is-danger" v-show="form.error.global">
                  <button class="delete"></button>
                  <strong>Error:</strong> {{ form.error.global }}
                </div>

                <div class="field">
                  <label class="label">Username</label>
                  <div class="control has-icons-left has-icons-right">
                    <input class="input is-success" type="text" placeholder="Text input" v-model="form.username"/>
                    <span class="icon is-small is-left">
                      <i class="fa fa-user"></i>
                    </span>
                    <span class="icon is-small is-right">
                      <i class="fa fa-check"></i>
                    </span>
                  </div>
                  <p class="help is-success">This username is available</p>
                </div>
                <div class="field">
                  <label class="label">Password</label>
                  <div class="control has-icons-left has-icons-right">
                    <input class="input is-success" type="password" placeholder="Text input" v-model="form.password"/>
                    <span class="icon is-small is-left">
                      <i class="fa fa-lock"></i>
                    </span>
                    <span class="icon is-small is-right">
                      <i class="fa fa-check"></i>
                    </span>
                  </div>
                  <p class="help is-success">This username is available</p>
                </div>
                <div class="field">
                  <div class="control">
                    <label class="checkbox">
                      <input type="checkbox">
                      I agree to the <a href="#">terms and conditions</a>
                    </label>
                  </div>
                </div>
                <div style="padding-bottom:30px">
                  <div class="field is-pulled-left">
                    <div class="control">
                      <button class="button is-link" @click="signIn">Sign In</button>
                    </div>
                  </div>
                  <div class="field is-pulled-right">
                    <div class="control">
                      <button class="button is-text ">Register</button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { setToken } from '~/utils/auth'

  import axios from 'axios'

  import TopNav from '~/components/TopNav.vue'
  import SideNav from '~/components/SideNav.vue'

  export default {
    layout: 'admin',
    middleware: 'anonymous',
    computed: mapGetters([
      'auth/isAuthenticated',
      'auth/loggedUser'
    ]),
    components: {
      TopNav, SideNav
    },
    mounted: function () {},
    data () {
      return {
        form: {
          error: {
            global: '',
            username: '',
            password: ''
          },
          username: '',
          password: ''
        }
      }
    },
    methods: {
      signIn () {
        if (this.form.username === '' || this.form.password === '') {
          this.form.error.global = 'Enter your username and password!'
          return
        }

        axios.post('https://fatfree-base-rest-cloned-lcherone.c9users.io/auth', {
          username: this.form.username,
          password: this.form.password
        }).then(response => {
          setToken(response.data['token'])
          this.$router.replace('/')
        }).catch(error => {
          console.log(error)
          if (error.response) {
            if (error.response.status === 401) {
              this.form.error.global = 'Invalid username or password!'
            } else {
              this.form.error.global = 'Unknown error whilst sigining in!'
            }
          } else if (error.request) {
            this.form.error.global = error.request
          } else {
            this.form.error.global = error.message
          }
        })
      },
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>

<style>
  html {
    background: #dddddd !important;
    height: 100%
  }
  .columns {
    margin-top: 0rem
  }
  .columns.is-fullheight {
    min-height: 100vh;
    max-height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: stretch
  }
</style>
