<template>
  <section class="d-none d-md-block col-12 mt-4 mt-md-0" id="menu">

    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in" apear>

      <!-- Method - 1 -->
      <method-one-menu v-if="this.$store.state.website.menuMethod === 1"/>

      <!-- Method - 2 -->
      <!--  ...  -->

    </transition>


  </section>
</template>

<script>
  import MethodOneMenu from "./VerticalMenu/methodOneMenu";
  export default {
    name: 'menus',
      components: {MethodOneMenu}
  }
</script>

<style scoped>

</style>
