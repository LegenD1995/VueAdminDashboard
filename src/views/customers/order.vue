<template>
  <section class="d-flex flex-row flex-wrap">

    <!-- User information -->
    <div class="col-12 col-md-5 col-lg-4 my-card my-3 p-3">

      <h2 class="h2 mt-2">درخواست خرید</h2>
      <vs-chip transparent color="primary">
        <vs-avatar icon="local_grocery_store" />
        <span class="mt-1 text-white en-lang">{{ invoices }}</span>
        <span class="mt-1 text-white mr-1"> سفارش جدید</span>
      </vs-chip><br>
      <div class="w-100 mt-3 mb-1 text-left">
        <vs-button size="small" color="success" type="filled">به روز رسانی</vs-button>
      </div>
      <div class="w-100 my-3 px-0">
        <div class="set--search-center">

          <vs-table search pagination max-items="50" class="vuesax-table w-100 d-flex flex-row flex-wrap" :data="invoice">

            <template slot="thead">
              <vs-th class="fa-td">کد فاکتور</vs-th>
              <vs-th class="fa-td">تاریخ ثبت فاکتور</vs-th>
            </template>

            <template slot-scope="{data}">
              <vs-tr @click="getUserInfo(tr.customer)" :key="index" v-for="(tr, index) in data">
                <vs-td class="en-td" :data="data[index].track_code">{{ data[index].track_code }}</vs-td>
                <vs-td class="fa-td" :data="data[index].timestamp">{{ data[index].timestamp }}</vs-td>
              </vs-tr>
            </template>

          </vs-table>

        </div>
      </div>

    </div>

    <!-- Tables -->
    <div class="col my-3 p-3">

      <div class="w-100">
        <h2 class="h2 mt-2">اطلاعات فاکتور</h2>
        <vs-chip transparent color="primary">
          <vs-avatar v-if="userAvatar() == 1" :src="'/cms/img/theme/me.png'"/>
          <vs-avatar v-else/>
          <span class="mt-1 text-white">{{ customer.first_name + ' ' + customer.last_name }}</span>
        </vs-chip>
        <vs-chip transparent color="primary">
          <vs-avatar icon="stay_primary_portrait" />
          <span class="mt-1 text-white en-lang">{{ customer.mobile }}</span>
        </vs-chip>
        <vs-chip transparent color="primary">
          <vs-avatar icon="email" />
          <span class="mt-1 text-white en-lang">{{ customer.mail }}</span>
        </vs-chip>
      </div>

      <div class="d-flex flex-row-reverse mt-5 mb-1 px-0">
        <vs-button size="small" class="mx-1 btn-dark-border" color="rgb(128, 128, 128)" type="border" icon="cached">بازنشانی</vs-button>
      </div>

      <div class="w-100 my-4">

        <!--<vs-table class="vuesax-table" :data="userMeta">

          <template slot-scope="{data}">
            <vs-tr :key="index" v-for="(tr, index) in data">
              <vs-td class="td-icon" :data="data[index].icon"><i :class="data[index].icon"></i></vs-td>
              <vs-td :data="data[index].title" class="fa-td">{{ data[index].title }}</vs-td>
              <vs-td :data="data[index].value" :class="tr.class">{{ data[index].value | setter }}</vs-td>
            </vs-tr>
          </template>

        </vs-table>-->


      </div>

    </div>

  </section>
</template>

<script>
    export default {
        name: "order",
        data: () => ({
            invoices: 55,
            invoice:[
                {
                    customer: '1',
                    'track_code': '1223952132',
                    timestamp: '۱۵ فروردین ماه ۱۳۹۷',
                },
                {
                    customer: '2',
                    'track_code': '2311510961',
                    timestamp: '۱۵ فروردین ماه ۱۳۹۷',
                },
                {
                    customer: '3',
                    'track_code': '3123181632',
                    timestamp: '۱۵ فروردین ماه ۱۳۹۷',
                },
                {
                    customer: '4',
                    'track_code': '1299250056',
                    timestamp: '۱۵ فروردین ماه ۱۳۹۷',
                },
                {
                    customer: '5',
                    'track_code': '3321913232',
                    timestamp: '۱۵ فروردین ماه ۱۳۹۷',
                },
            ],
            customer: {
                'first_name' : 'میلاد',
                'last_name' : 'محمدی',
                mobile: '09361719209',
                mail: 'milad1995honor@gmail.com',
            }
        }),
        methods: {
            userAvatar() {
                return 1;
                /*
                * return 1, if acc has avatar
                * return 0, if acc hasn't avatar
                * */
            }
        }
    }
</script>

<style scoped>

</style>
