<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    beforeCreate () {
      this.$http.defaults.headers.common['Authorization'] = this.$store.state.axios.jwt;
      this.$http.defaults.headers.post['Content-Type'] = 'application/json';
      // check jwt token first, and decide user logged or not? if not, he/she must redirect to login page
    }
  }
</script>
