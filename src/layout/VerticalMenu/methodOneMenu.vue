<template>
    <section class="d-flex flex-row flex-wrap justify-content-lg-center pt-4">

        <transition enter-active-class="animated slower fadeIn" leave-active-class="animated slower fadeOut" mode="out-in" apear>
          <!-- Loop main menu -->
          <div class="col-12" v-if="showMenu">
            <div class="d-flex flex-row flex-wrap justify-content-lg-center">

              <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 px-1" v-for="item in mainMenu">
                <div class="w-100 main-menu-item pt-5" @click="toggleSubMenu(item.menu, true)">
                  <div class="text-center"><img class="gray-scale" :src="`/cms/img/layout/mainMenu/${item.icon}`" :alt="item.title"></div>
                  <p class="text-center mt-3">{{ item.title }}</p>
                </div>
              </div>
            </div>

          </div>

          <!-- sub menu -->
          <div class="col-12" v-else>
            <div class="d-flex flex-row flex-wrap">

              <!-- sub menu header -->
              <template>
                <div class="col-9 col-md-4 sub-menu-title text-white">
                  <img class="gray-scale" :src="`/cms/img/layout/mainMenu/${this.subMenu.icon}`" :alt="this.subMenu.title">
                  <h2>{{ this.subMenu.title }}</h2>
                </div>
                <div class="col text-left">
                  <i class="fal fa-arrow-alt-circle-left fa-2x text-white" @click="toggleSubMenu()"></i>
                </div>
              </template>

              <div class="col-12 sub-menu-item">
                <div class="row">
                  <ul class="col-12 col-xs-6 col-md-4 col-lg-3 col-xl-2" v-for="col in subMenuList">
                    <li v-for="item in col">
                      <router-link tag="a" :to="{name: item.name, path: item.flag}" active-class="active-link" exact>
                        {{ item.title }}
                      </router-link>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </transition>

    </section>
</template>

<script>
    export default {
        name: "methodOneMenu",
        data() {
            return {
                showMenu: true,
                mainMenu: this.$store.state.website.mainMenu,
                subMenuList: [],
                subMenu: [],
            }
        },
        methods: {
            chunk(myArray, size) {
                const chunked_arr = [];
                for (let i = 0; i < myArray.length; i++) {
                    const last = chunked_arr[chunked_arr.length - 1];
                    if (!last || last.length === size) {
                        chunked_arr.push([myArray[i]]);
                    } else {
                        last.push(myArray[i]);
                    }
                }
                return chunked_arr;
            },
            toggleSubMenu(menu = null, type = false) {
                if(type) {
                    this.subMenu = this.$store.state.website.subMenu[menu];
                    this.subMenuList = this.chunk(this.subMenu.menus, 5);
                    this.showMenu = false; return;
                }
                this.showMenu = true;
            }
        },
    }
</script>

<style scoped>

</style>
