<template>
    <nav class="col-12 px-3 bg-white">
      <div class="d-flex flex-row-reverse flex-md-row flex-wrap px-1 px-lg-3 px-xl-4">

        <!-- Logo in nav  -->
        <div class="col-4 col-lg-3 text-center text-md-right" id="logo">
          <template>
            <svg-icon v-if="this.$store.state.website.logo.format === 'svg'"/>
            <img v-else :src="this.$store.state.website.logo.address" class="mt-3">
          </template>
        </div>

        <!-- Attributes and admin dropdown -->
        <div class="col-8 col-lg-9">
          <div class="d-flex flex-row flex-wrap h-100">


            <!-- you may to need new logo for show navigation aside bar-->

            <!-- My attributes in nav  -->
            <div class="d-none d-md-flex col flex-shrink-1">
              <div class="d-flex flex-row justify-content-center">
                <!-- Attributes Lists -->
              </div>
            </div>

            <!-- Show admin drop down -->
            <div class="col-12 col-md-5 col-lg-4 col-xl-3 text-right text-md-left" id="drop-list-admin">
              <!--<vs-avatar badge size="35px"/>-->
              <img :src="this.$store.state.user.personalInfo.avatar">
              <p class="mr-3">
                <span class="drop-down-welcome">خوش اومدی </span>
                <span>{{ this.$store.state.user.personalInfo.name }}</span>
              </p>
              <i class="fas fa-caret-down mr-2"></i>
            </div>

          </div>
        </div>

      </div>
    </nav>
</template>


<script>
  import SvgIcon from './svgIcon'
  export default {
    name: 'statusBar',
    components: { SvgIcon },
    data() {
      return {

      }
    }
  }
</script>
