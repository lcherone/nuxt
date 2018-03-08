<template>
  <aside class="menu" style="width: 200px;">
    <p class="menu-label">
      General
    </p>
    <ul class="menu-list">
      <li><nuxt-link to="/" active-class="is-active" exact>Dashboard</nuxt-link></li>
      <li><nuxt-link to="/servers" active-class="is-active">Servers</nuxt-link></li>
      <li><nuxt-link to="/auth/sign-out">Sign Off</nuxt-link></li>
    </ul>
    <p class="menu-label">
      Administration
    </p>
    <ul class="menu-list">
      <li><a>Team Settings</a></li>
      <li>
        <a>Manage Your Team</a>
        <ul>
          <li><a>Members</a></li>
          <li><a>Plugins</a></li>
          <li><a>Add a member</a></li>
        </ul>
      </li>
      <li><a>Invitations</a></li>
      <li><a>Cloud Storage Environment Settings</a></li>
      <li><a>Authentication</a></li>
    </ul>
    <p class="menu-label">
      Transactions
    </p>
    <ul class="menu-list">
      <li><a>Payments</a></li>
      <li><a>Transfers</a></li>
      <li><a>Balance</a></li>
    </ul>
  </aside>
</template>

<script>
  //
  //const store = require('../../store/store')

  export default {
    // components: { },
    props: [],
    data () {
      return {}
    },
    // mounted: function () {}
    methods: {
      signOut () {
        /*
        this.$confirm('Are you sure you want to sign out?', 'Warning', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          store.delete('session.token')
          this.$router.push({ path: '/signin' })
        })
        */
      }
    }
  }
</script>

<style scoped>
  #nav-toggle-state {
    display: none;
  }

  #nav-toggle-state:checked ~ .is-hidden-mobile {
    display: block;
  }
</style>
