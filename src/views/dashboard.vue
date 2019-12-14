<template>
  <div class="d-flex flex-row flex-wrap">
    <navigation/>
    <menus/>
    <router-view/>
  </div>
</template>

<script>
  import Navigation from '../layout/navigation'
  import Menus from '../layout/menus'
  export default {
    name: 'dashboard',
    components: { Menus, Navigation }
  }
</script>

<style scoped>

</style>
