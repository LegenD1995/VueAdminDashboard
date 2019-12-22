<template>
  <section class="d-flex flex-row flex-wrap">

    <!-- User information -->
    <div class="col-12 col-md-5 col-lg-4 my-card my-3 p-3">

      <h2 class="h2 mt-2">لیست کاربران وب سایت</h2>
      <small class="p-normal mb-3">برای مشاهده جزئیات بر روی هر ردیف کلیک کنید.</small>
      <div class="w-100 mt-3 mb-1 text-left">
        <vs-button size="small" color="success" type="filled">به روز رسانی</vs-button>
      </div>
      <div class="w-100 my-3 px-0">
        <div class="set--search-center">

          <vs-table search pagination max-items="50" class="vuesax-table w-100 d-flex flex-row flex-wrap" :data="user">

            <template slot="thead">
              <vs-th class="fa-td">نام کامل مشتری</vs-th>
              <vs-th class="fa-td">تاریخ ثبت نام کاربر</vs-th>
            </template>

            <template slot-scope="{data}">
              <vs-tr @click="getUserInfo(tr.user_id)" :key="index" v-for="(tr, index) in data">
                <vs-td class="en-td" :data="data[index].username">{{ data[index].username }}</vs-td>
                <vs-td class="fa-td" :data="data[index].timestamp">{{ data[index].timestamp }}</vs-td>
              </vs-tr>
            </template>

          </vs-table>

        </div>
      </div>

    </div>

    <!-- Tables -->
    <div class="col my-3 p-3">

      <!-- User Situation -->
      <div class="w-100 px-3">
        <h2 class="h2 mt-2">مشخصات کلی</h2>
        <template v-if="userStatus() == 0">
          <vs-chip transparent color="warning">
            <vs-avatar v-if="userAvatar() == 1" :src="'/cms/img/theme/me.png'"/>
            <vs-avatar v-else/>
            <span class="mt-1 text-white">تایید نشده است</span>
          </vs-chip >
        </template>
        <template v-if="userStatus() == 1">
          <vs-chip transparent color="primary">
            <vs-avatar v-if="userAvatar() == 1" :src="'/cms/img/theme/me.png'"/>
            <vs-avatar v-else/>
            <span class="mt-1 text-white">تایید شده است</span>
          </vs-chip >
        </template>
        <template v-if="userStatus() == 2">
          <vs-chip transparent color="danger">
            <vs-avatar v-if="userAvatar() == 1" :src="'/cms/img/theme/me.png'"/>
            <vs-avatar v-else/>
            <span class="mt-1 text-white">مسدود شده است</span>
          </vs-chip >
        </template>

      </div>

      <div class="d-flex flex-row-reverse mt-5 mb-1 px-0">
        <vs-button class="mr-2" size="small" color="rgb(80,80,80)"  type="filled"><i class="fas fa-trash text-white"></i></vs-button>
        <vs-button class="mr-2" size="small" color="primary" type="filled" v-if="userStatus() == 1 | 0"><i class="fas fa-user-lock text-white"></i></vs-button>
        <vs-button class="mr-2" size="small" color="primary" type="flat">ارسال گذرواژه</vs-button>
      </div>

      <div class="w-100 my-4">

        <vs-table class="vuesax-table" :data="userMeta">

          <template slot-scope="{data}">
            <vs-tr :key="index" v-for="(tr, index) in data">
              <vs-td class="td-icon" :data="data[index].icon"><i :class="data[index].icon"></i></vs-td>
              <vs-td :data="data[index].title" class="fa-td">{{ data[index].title }}</vs-td>
              <vs-td :data="data[index].value" :class="tr.class">{{ data[index].value | setter }}</vs-td>
            </vs-tr>
          </template>

        </vs-table>

      </div>

    </div>

  </section>
</template>

<script>
    export default {
        name: "customers",
        data: () => ({
            user:[
                {
                    user_id: '1',
                    username: 'username',
                    timestamp: '۱۵ فروردین ماه ۱۳۹۷',
                },
                {
                    user_id: '2',
                    username: 'miladof',
                    timestamp: '۱۵ فروردین ماه ۱۳۹۷',
                },
                {
                    user_id: '3',
                    username: 'adminiiiiam',
                    timestamp: '۱۵ فروردین ماه ۱۳۹۷',
                },
                {
                    user_id: '4',
                    username: 'legendary',
                    timestamp: '۱۵ فروردین ماه ۱۳۹۷',
                },
                {
                    user_id: '5',
                    username: 'yohaha',
                    timestamp: '۱۵ فروردین ماه ۱۳۹۷',
                },
            ],
            userMeta: [
                {icon: 'fal fa-user', title: 'نام کامل', value: 'میلاد محمدی', class: "fa-td"},
                {icon: 'fal fa-mobile-android-alt', title: 'شماره همراه', value: '09361719209', class: "en-td"},
                {icon: 'fal fa-mailbox', title: 'پست الکترونیک', value: 'milad1995honor', class: "en-td"},
                {icon: 'fal fa-user-tag', title: 'تعداد کالاهای سفارش داده شده تاکنون', value: '15', class: "en-td"},
                {icon: 'fal fa-store', title: 'تعداد سفارشات در دست اقدام', value: '0', class: "en-td"},
                {icon: 'fal fa-calendar-alt', title: 'تاریخ ثبت نام', value: '۱۵ فروردین ماه ۱۳۹۷', class: "fa-td"},
            ]
        }),
        filters: {
            setter(value) {
                return (value === '') ? 'ذخیره نشده است' : value;
            }
        },
        methods: {
            getUserInfo(id) {
                return;
            },
            userStatus() {
                return 1;
                /*
                * return 1, if acc verified
                * return 2, if acc blocked
                * return 0, if acc not verified
                * */
            },
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
