<template>
  <section class="d-flex flex-row flex-wrap text-white">
    <div class="col-2">
    </div>
    <div class="col-10">
      <div class="d-flex flex-row flex-wrap">
        <div class="d-none d-md-flex col-md-5">HI</div>
        <div class="d-none d-md-flex col-md-5 offset-2">OFFSET</div>
        <div class="col-12 d-md-none">Menus in tablet | Mobile</div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'main',
    props: {
      theme: Object,
    },
    data() {
      return {}
    },
    mounted() {
      let theme = this.theme;
      this.$vs.theme({
        theme,
      })
    }
  }
</script>

<style scoped>
  section {
    height: 2.5rem;
    background-color: #3F8CB9;
  }
  section > div:first-child {
    background-color: #317DA4;
    z-index: 1;
  }
  section > div:last-child {
    box-shadow: 0 1px 10px 1px rgba(0, 0, 0, 0.3);
    z-index: 0;
  }
</style>
