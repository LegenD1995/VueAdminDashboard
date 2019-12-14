<template>
    <nav class="col-12 px-3">
      <div class="d-flex flex-row flex-wrap px-1 px-lg-3 px-xl-4">
        <div class="col-12 col-md-4 col-lg-3" id="logo">
          <template>
            <svg-icon v-if="this.$store.state.website.logo.format === 'svg'"/>
            <img v-else :src="this.$store.state.website.logo.address" class="mt-3">
          </template>
        </div>
        <div class="col-12 col-md-8 col-lg-9">
          <div class="d-flex flex-row flex-wrap">

            <!-- My attributes in nav  -->
            <div class="col flex-shrink-1">
              <div class="d-flex flex-row justify-content-center">
                <!-- Attributes Lists -->
              </div>
            </div>

            <!-- Show admin info - controllers -->
            <div class="col-12 col-md-5 col-lg-4 col-xl-3 bg-danger text-right text-md-left" id="drop-list-admin">
              <!--<vs-avatar badge size="35px"/>-->
              <img :src="this.$store.state.user.personalInfo.avatar">
              <p class="mr-3">
                <span class="drop-down-welcome">خوش اومدی، </span>
                <span>{{ this.$store.state.user.personalInfo.name }}</span>
              </p>
              <i class="fas fa-caret-down mr-2"></i>
            </div>

          </div>
        </div>
      </div>
    </nav>
</template>

<!--<div class="col-12 col-md-4 offset-md-1 col-xl-2 offset-xl-1 text-primary">

        </div>

        <div class="col-12 col-md-4 offset-md-4 col-xl-2 offset-xl-7 pt-2" id="drop-down">
          <vs-avatar badge size="35px"/>
          <img :src="this.$store.state.user.personalInfo.avatar">
          <p class="mr-3">
            <span class="drop-down-welcome">خوش اومدی، </span>
            <span>{{ this.$store.state.user.personalInfo.name }}</span>
          </p>
          <i class="fas fa-caret-down mr-2"></i>
          &lt;!&ndash;<vs-input class="w-100" icon="search" label-placeholder="جست و جو کنید" v-model="value"/>&ndash;&gt;
        </div>-->

<script>
  import SvgIcon from './svgIcon'
  export default {
    name: 'navigation',
    components: { SvgIcon },
    data() {
      return {
        value: 2
      }
    }
  }
</script>
