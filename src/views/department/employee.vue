<template>
  <section class="d-flex flex-row flex-wrap">

    <!-- your routes attr is here [optional] -->
    <!--<div class="col-12 my-header-card"></div>-->

    <!-- User information -->
    <div class="col-12 col-md-5 col-lg-3 my-card my-3 p-3">

      <h2 class="h2 mt-2">افزودن ادمین</h2>
      <small class="p-normal mb-3">تکمیل تمامی مراحل و فیلدها الزامیست.</small>
      <div class="d-flex flex-row mt-3 mb-1 justify-content-end">
        <vs-button size="small" class="mx-1 btn-dark-border" color="rgb(128, 128, 128)" type="border" icon="cached">بازنشانی فرم</vs-button>
      </div>
      <transition enter-active-class="animated fadeIn fast" leave-active-class="animated fadeOut fast" mode="out-in" apear>
        <div class="w-100 my-3 pt-2" v-if="step == 1">
          <vs-input class="w-100 my-4" label-placeholder="icon-after" v-model="insertAdmin.row.username" placeholder="نام کاربری" icon="perm_identity"/>
          <vs-input class="w-100 my-4" label-placeholder="icon-after" v-model="insertAdmin.row.password" placeholder="گذرواژه" icon="lock" type="password" :warning="validation.charLength" warning-text="حداقل از ۸ کاراکتر استفاده کنید."/>
          <vs-input class="w-100 my-4" label-placeholder="icon-after" v-model="repassword" placeholder="تکرار گذرواژه" icon="lock" type="password" :danger="validation.samePass" danger-text="عدم مطابقت با گذرواژه اصلی"/>
        </div>
        <div class="w-100 my-3" v-else>
          <vs-input class="w-100 my-4" label-placeholder="icon-after" v-model="insertAdminMeta.row.first_name" placeholder="نام فارسی" icon="perm_identity"/>
          <vs-input class="w-100 my-4" label-placeholder="icon-after" v-model="insertAdminMeta.row.last_name" placeholder="نام خانوادگی فارسی" icon="perm_identity"/>
          <vs-input class="w-100 my-4" label-placeholder="icon-after" v-model="insertAdminMeta.row.national_card" placeholder="کد ملی" icon="account_box" maxlenght="10"/>
          <vs-input class="w-100 my-4" label-placeholder="icon-after" v-model="insertAdminMeta.row.mail" placeholder="ایمیل" icon="email" type="mail_outline"/>
          <vs-input class="w-100 my-4" label-placeholder="icon-after" v-model="insertAdmin.row.password.mobile" placeholder="شماره همراه" icon="smartphone" description-text="مثال: ۰۹۱۵۰۰۰۱۲۳۴" maxlenght="11"/>
          <vs-input class="w-100 my-4" label-placeholder="icon-after" v-model="insertAdminMeta.row.grid" placeholder="درجه شغلی" icon="work_outline"/>
        </div>
      </transition>

      <div class="w-100">
        <vs-button size="small" color="success" type="filled"> <!--call action by using step to decide which one function must ran-->
          <transition enter-active-class="animated zoomIn fast" leave-active-class="animated zoomOut fast" mode="out-in" apear>
            <span class="text-white" v-if="step == 1">تکمیل مرحله اول</span>
            <span class="text-white" v-else>تکمیل درخواست</span>
          </transition>
        </vs-button>
      </div>

    </div>

    <!-- Tables -->
    <div class="col my-3 p-3">

      <div class="w-100 px-3">
        <h2 class="h2 mt-2">در یک نگاه</h2>
      </div>

      <div class="row mt-5 mb-1 px-3">
        <div class="col text-left">
          <vs-button size="small" color="success" type="filled">به روز رسانی</vs-button>
        </div>
      </div>

      <div class="w-100 my-4">

        <vs-table class="vuesax-table" :data="admin">

          <template slot="thead">
            <vs-th>شماره</vs-th>
            <vs-th>نام یوزر</vs-th>
            <vs-th>شماره همراه</vs-th>
            <vs-th>تاریخ ایجاد</vs-th>
          </template>

          <template slot-scope="{data}">
            <vs-tr :key="index" v-for="(tr, index) in data">
              <td class="en-td"><span>{{ index + 1 }}</span></td>
              <vs-td :data="data[index].username" class="en-td">{{ data[index].username }}</vs-td>
              <vs-td :data="data[index].mobile" class="en-td">{{ data[index].mobile }}</vs-td>
              <vs-td :data="data[index].timestamp" class="en-td">{{ data[index].timestamp }}</vs-td>

              <template slot="expand">
                  <div class="d-flex flex-box flex-wrap w-100 justify-content-between">
                    <div class="col-9 pr-4">
                      <img class="avatar-in-tbl" :src="tr.avatar">
                      <span class="mr-2">{{ tr.first_name + ' ' + tr.last_name }}</span>
                    </div>
                    <div class="col text-left">
                      <vs-button vs-type="flat" size="small" color="danger" icon="delete_sweep"></vs-button>
                    </div>
                    <div class="col-12">
                      <vs-list>
                        <vs-list-item class="list-en" icon="track_changes" title="وضعیت" :subtitle="checkOnline(tr.at_work)"></vs-list-item>
                        <vs-list-item class="list-en" icon="work" title="درجه شغلی" :subtitle="tr.grid"></vs-list-item>
                        <vs-list-item class="list-en" icon="mail" title="پست الکترونیک" :subtitle="tr.mail"></vs-list-item>
                      </vs-list>
                    </div>
                  </div>
              </template>

            </vs-tr>
          </template>

        </vs-table>

      </div>

    </div>

  </section>
</template>

<script>
    export default {
        name: "employee",
        data: () => ({
            step: 2,
            validation: {
                samePass: false,
                charLength: false,
            },
            repassword: '',
            insertAdmin: {
                row: {
                    username: '',
                    password: '',
                    mobile: '',
                    status: 1,
                },
                table: 'ci_user'
            },
            insertAdminMeta: {
                row: {
                    'user_id' : null,
                    'first_name': '',
                    'last_name' : '',
                    'national_card' : '',
                    mail : '',
                    grid : '',
                },
                table: 'admin_meta'
            },
            admin:[
                {
                    id: '1',
                    username: 'Legend',
                    mobile: '09361719209',
                    timestamp: "۱۵ فروردین ۱۳۹۰",
                    'first_name' : 'میلاد',
                    'last_name' : 'محمدی',
                    'national_card' : '0810163470',
                    mail: 'milad1995honor@gmail.com',
                    grid: 'Owner',
                    'at_work': '1',
                    avatar: '/cms/img/theme/me.png'
                },
                {
                    id: '2',
                    username: 'Milad',
                    mobile: '09361666209',
                    timestamp: "۲۹ اسفند ۱۳۵۵",
                    'first_name' : 'مهرداد',
                    'last_name' : 'ایزدپناه',
                    'national_card' : '۰0938806977',
                    mail: 'foxyPanah@yahoo.com',
                    grid: 'Web Developer',
                    'at_work': '0',
                    avatar: '/cms/img/theme/me.png'
                },
            ],
        }),
        methods: {
            checkOnline(mode) {
                return (mode == 0) ? 'offline' : 'online';
            }
        }
    }
</script>
