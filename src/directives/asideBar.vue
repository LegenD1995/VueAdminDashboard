<template>
  <section id="aside" class="flex-row flex-wrap">
      <div class="col-12 p-0">
        <div class="d-flex flex-row flex-wrap">
          <ul class="col-12" v-for="item in this.$store.state.menu">
            <li>{{ item.title }}</li>
            <li v-for="options in item.options">
              <i class="ml-2" ::class="options.icon"></i>
              <router-link tag="span" :to="{name: options.name}"><a>{{ options.name }}</a></router-link>
            </li>
          </ul>
        </div>
      </div>
  </section>
</template>

<script>
  export default {
    name: 'asideBar',
    mounted () {
        let height = window.innerHeight;
        //$('#aside').height(height);
    }
  }
</script>

<style scoped>
  /*section {
    background-color: #222D33;
    font-family: sans-light;
    padding: 0 !important;
    position: fixed;
    min-height: 677px;
    align-items: flex-start;
    justify-content: flex-start;
  }
  ul {
    align-self: flex-start;
    margin: .1rem 0 !important;
    padding: 0;
  }
  ul:first-child {
    margin-top: 0 !important;
  }
  ul:last-child {
    margin-bottom: 2rem !important;
  }
  ul > li:first-child {
    background-color: #1A2225;
    border-right: 3px solid #1A2225;
    color: #4a626f;
    height: 2.2em;
    padding: .4rem .8rem .2rem;
  }
  li:first-child:hover {
    border-right: 3px solid #1A2225;
  }
  !* active menu : #1F262C*!
  li {
    font-family: sans-ultra-light;
    font-size: .9rem;
    height: 2.6em;
    padding: .5rem .8rem .4rem;
    color: whitesmoke;
    clear: both;
    display: block;
    border-right: 3px solid transparent;
    transition: all .5s ease-out;
  }
  li:hover {
    border-right: 3px solid cornflowerblue;
  }
  !*li::before {
    content: "";
    position: absolute;
    width: 2px;
    right: 0px;
    height: inherit;
    color: dodgerblue;
    background-color: dodgerblue;
    transition: all 1s ease-out;
  }
  li:hover:before {
    height: 100%;
  }*!
  li a {
    color: whitesmoke;
  }*/
</style>
