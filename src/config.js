/*
 |---------------------------------------------------------------------------------------------------------------------
 | Config your vue layout.
 |---------------------------------------------------------------------------------------------------------------------
 |
 | Base setting for change menus and routes is here.
 |
 **/

export const website = {
  baseURL: 'http://localhost:8080/cms/',
  defaultAvatar: '/cms/img/theme/avatar_default.png',
  subMenuRouteIndex: 4, // this parameter saves last route for find out which one of menu must be activated and shown to user.
  route: '',
  logo: {
    address: '/cms/img/layout/logo.png',
    format: 'img' // or svg
  },
  menuMethod: 1,
  mainMenu: [
    { menu: 'department', title: 'دپارتمان و کارمندان', flag: '/department/employee', auth: false, icon: 'department.png' },
    { menu: 'customers', title: 'امور مشتریان', flag: '/department/list', auth: false, icon: 'users.png' },
    { menu: 'goods', title: 'امور فروشگاهی', flag: '/department/production', auth: false, icon: 'goods.png' }
  ],
  subMenu: {
    department:
      { title: 'دپارتمان و کارمندان', auth: false, icon: 'department.png', menus: [
        { route: 'department', name: 'employee', flag: '/department/employee', title: 'مدیریت منابع انسانی', badge: false}]
      },
    customers:
      { title: 'امور مشتریان', auth: false, icon: 'users.png', menus: [
        { route: 'customers', name: 'customers', flag: '/customers', title: 'نمایش مشتریان', badge: false},
        { route: 'customers', name: 'order', flag: '/customers/order', title: 'درخواست خرید', badge: '999+'},
        /*{ route: 'users', name: 'support', flag: '/users/support', title: 'تیکت ها', badge: '55'*/]
      },
    goods:
      { title: 'امور فروشگاهی', auth: false, icon: 'goods.png', menus: [
        { route: 'goods', name: 'add', flag: '/goods/add', title: 'افزودن به محصولات', badge: false},
        { route: 'goods', name: 'list', flag: '/goods/list', title: 'لیست محصولات', badge: '19'},
        { route: 'goods', name: 'category', flag: '/goods/category', title: 'دسته بندی ها', badge: '55'},
        { route: 'goods', name: 'media', flag: '/goods/media', title: 'محتوای دیجیتال', badge: '69'}]
      },
    }
};

/*
 |---------------------------------------------------------------------------------------------------------------------
 | Config your directory in assets and media files.
 |---------------------------------------------------------------------------------------------------------------------
 |
 | Base setting for change menus and routes is here.
 |
 **/
export const directoryFile = {
  baseUrl: 'http://localhost:8080/cms/',
  expConvert: {
    // it means, you should follow this format: [img-name of classes-address which add to baseUrl]
    img: new RegExp(/\[img-[a-zA-Z ]+\-[1234567890a-zA-Z./]+\]/g)
  }
};

/*
 |---------------------------------------------------------------------------------------------------------------------
 | User information
 |---------------------------------------------------------------------------------------------------------------------
 |
 | This parameters will fill via server and help routes for authentication and customize themes
 |
 **/
export const user = {
  permission: {/*name of mainMenu and SubMenu*/},
  personalInfo: {
    user: 'legend',
    name: 'میلاد',
    family: 'محمدی',
    idCard: '0810163470',
    cellPhone: '09361719209',
    avatar: '/cms/img/theme/me.png', // true src in production mode: website.baseUrl + 'path'
    grid: 'Owner website',
  },
  setting: {
    usedMenu: '', // will upgrade in next versions
    theme: '', // will upgrade in next versions
    twoAuthAcc: false,
    online: false,
  }, // it can get information from cookie
};

