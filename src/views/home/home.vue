<template>
  <section class="d-flex flex-row flex-wrap">

    <!-- your routes attr is here [optional] -->
    <!--<div class="col-12 my-header-card"></div>-->

    <!-- User information -->
    <div class="col-12 col-md-5 col-lg-3 my-card my-3 p-3">

      <h2 class="h2 mt-2">مشخصات فردی</h2>
      <small class="p-normal mb-3">{{ setNameAdmin }}</small>
      <div class="w-100 mt-3 mb-1 text-left">
        <vs-button size="small" color="success" type="filled">شروع روز کاری</vs-button>
      </div>
      <div class="row my-3">

        <vs-table class="col-12 d-flex vuesax-table table-responsive-md" :data="information">

          <template slot-scope="{data}">
            <vs-tr class="w-100 d-flex flex-row flex-wrap" :key="index" v-for="(tr, index) in data">
              <vs-td class="col-1 td-icon" :data="data[index].icon"><i :class="data[index].icon"></i></vs-td>
              <vs-td :data="data[index].title" class="fa-td col">{{ data[index].title }}</vs-td>
              <vs-td :data="data[index].value" class="en-td col">{{ data[index].value }}</vs-td>
            </vs-tr>
          </template>

        </vs-table>
      </div>
      <div class="w-100">
        <vs-button size="small" class="mx-1 btn-dark-border" color="rgb(128, 128, 128)" type="border">تصویر پروفایل</vs-button>
        <vs-button size="small" class="mx-1 btn-dark-border" color="rgb(128, 128, 128)" type="border" icon="edit">تغییر گذرواژه</vs-button>
      </div>

    </div>

    <!-- Tables -->
    <div class="col my-3 p-3">

      <div class="w-100 px-3">
        <h2 class="h2 mt-2">در یک نگاه</h2>
      </div>

      <div class="row mt-5 mb-1 px-3">
        <div class="col-5 col-md-3">
          <vs-select class="selectExample d-inline" :color="'#287fc7'" v-model="select.limit">
            <vs-select-item :key="index" v-for="(item, index) in countRow" :value="item.value" :text="item.text" />
          </vs-select>
        </div>
        <div class="col-5 col-md-3">
          <vs-select class="selectExample d-inline" :color="'#287fc7'" v-model="select.col">
            <vs-select-item :key="index" v-for="(item, index) in bestRow" :value="item.value" :text="item.text" />
          </vs-select>
        </div>
        <div class="col text-left">
          <vs-button size="small" color="success" type="filled">به روز رسانی</vs-button>
        </div>
      </div>

      <div class="w-100 my-4">

        <vs-table class="vuesax-table" :data="goods">

          <template slot="thead">
            <vs-th>رتبه</vs-th>
            <vs-th>تعداد بازدید</vs-th>
            <vs-th>تعداد فروش</vs-th>
            <vs-th>نام کالا</vs-th>
            <vs-th>قیمت</vs-th>
            <vs-th>وضعیت</vs-th>
          </template>

          <template slot-scope="{data}">
            <vs-tr :key="index" v-for="(tr, index) in data">
              <td class="en-td"><span>{{ index + 1 }}</span></td>
              <vs-td :data="data[index].seen" class="en-td">{{ data[index].seen }}</vs-td>
              <vs-td :data="data[index].buy" class="en-td">{{ data[index].buy }}</vs-td>
              <vs-td :data="data[index].en_name" class="en-td">{{ data[index].en_name }}</vs-td>
              <vs-td :data="data[index].price" class="en-td">{{ '$' + data[index].price }}</vs-td>
              <vs-td :data="data[index].situation" class="fa-td">{{ data[index].situation | setSituation }}</vs-td>
            </vs-tr>
          </template>

        </vs-table>

      </div>

    </div>

  </section>
</template>

<script>
    import computed from '../../mixins/computed'
    export default {
        name: "home",
        mixins: [ computed ],
        data: () => ({
            select: {
                limit: 10,
                col: 'seen',
            },
            countRow: [
                {text: '۱۰ محصول برتر', value: 10},
                {text: '۲۰ محصول برتر', value: 25},
                {text: '۵۰ محصول برتر', value: 50},
            ],
            bestRow: [
                {text: 'پربازدیدترین', value: 'seen'},
                {text: 'پرفروش ترین', value: 'buy'},
            ],
            goods:[
                {
                    "seen": 855,
                    "buy": 56,
                    "en_name": "Taken 8",
                    "price": 158,
                    "situation": 1,
                },
                {
                    "seen": 653,
                    "buy": 600,
                    "en_name": "mission impossible",
                    "price": 100,
                    "situation": 0,
                },
                {
                    "seen": 343,
                    "buy": 291,
                    "en_name": "spider man : home comming",
                    "price": 680,
                    "situation": 1,
                },
            ],
            information: [
                {icon: 'fal fa-user', title: 'درجه شغلی', value: ''},
                {icon: 'fal fa-id-card', title: 'کد ملی', value: ''},
                {icon: 'fal fa-mobile-android-alt', title: 'شماره همراه', value: ''},
            ]
        }),
        filters: {
            setSituation(value) {
                return (value === 1) ? 'موجود' : 'ناموجود';
            }
        },
        mounted() {
            // set information :
            this.information[0].value = this.$store.state.user.personalInfo.grid;
            this.information[1].value = this.$store.state.user.personalInfo.idCard;
            this.information[2].value = this.$store.state.user.personalInfo.cellPhone;

        }
    }
</script>
