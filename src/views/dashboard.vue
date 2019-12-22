<template>
  <div class="d-flex flex-row flex-wrap">
    <status-bar/>
    <menus/>
    <section class="col-12 px-0">
      <div class="d-flex flex-row flex-wrap px-0">

        <div class="col-12 bg-item-menu"></div>

        <div class="offset-md-1 col-12 col-md-10 card-route">
          <transition enter-active-class="animated zoomIn fast" leave-active-class="animated zoomOut fast" mode="out-in" appear>
            <router-view/>
          </transition>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
  import statusBar from '../layout/statusBar'
  import Menus from '../layout/menus'
  export default {
    name: 'dashboard',
    components: { Menus, statusBar }
  }
</script>
