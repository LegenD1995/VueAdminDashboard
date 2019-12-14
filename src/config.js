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
    address: '/cms/img/theme/logo.png',
    format: 'img' // or svg
  },
  mainMenu: [
    { name: 'department', component: 'employee', path: '/department/employee', auth: false, icon: 'fal fa-building' },
    { name: 'users', component: 'unknown', path: '/department/list', auth: false, icon: 'fal fa-head-side' },
    { name: 'goods', component: 'unknown2', path: '/department/production', auth: false, icon: 'fal fa-store' }
  ],
  subMenu: {
    department: [
      { title: 'سازمان', auth: false, menus: [
        { route: 'department', name: 'employee', path: '/', text: 'کارکنان', badge: false, icon: 'fal fa-users' },
        { route: 'department', name: 'add-employee', path: 'add-employee', text: 'افزودن کارکنان', badge: false, icon: 'fal fa-users-medical', }
      ]}
    ],
    users: [
      { title: 'مشتریان', auth: false, menus: [
        { route: 'users', name: 'list', path: '/users/list', text: 'مشتریان', badge: false, icon: 'fal fa-users',
          attr: [{ name: 'customers', icon: 'far fa-user-friends' }]
        },
        { route: 'users', name: 'orders', path: '/users/orders', text: 'درخواست خرید', badge: '999+', icon: 'fal fa-shopping-basket',
          attr: [{ name: 'orders', icon: 'far fa-user-friends' }, { name: 'orderTime', icon: 'far fa-calendar-alt' }]
        }
      ]
    },
      { title: 'پشتیبانی', auth: false, menus: [
        { route: 'users', name: 'support', path: '/users/support', text: 'تیکت ها', badge: '55', icon: 'fal fa-user-headset',
          attr: [{ name: 'customerTicket', icon: 'far fa-filter' }]
        }
      ]}
    ],
    goods: [
      { title: 'محصولات', auth: false, menus: [
        { route: 'goods', name: 'add', path: '/goods/add', text: 'افزودن به محصولات', badge: false, icon: 'fal fa-ramp-loading',
          attr: [{ name: 'uploader', icon: 'far fa-filter' }]
        },
        { route: 'goods', name: 'list', path: '/goods/list', text: 'لیست محصولات', badge: '19', icon: 'fal fa-warehouse-alt' },
        { route: 'goods', name: 'category', path: '/goods/category', text: 'دسته بندی ها', badge: '55', icon: 'fal fa-boxes'},
        { route: 'goods', name: 'media', path: '/goods/media', text: 'محتوای دیجیتال', badge: '69', icon: 'fal fa-database' }
      ]}
    ]
  },
  activeAttr: [], // this get attr name show icons in navigation bars
  attrs: {
    admins: false,
    /* put your attr name component here, default value must be false */
  }
}

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
}

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
    avatar: '/cms/img/theme/me.png', // true src in production mode: website.baseUrl + 'path'
    grid: 'مدیریت وب سایت',
  },
  setting: {
    usedMenu: '', // will upgrade in next versions
    theme: '', // will upgrade in next versions
    twoAuthAcc: false,
    online: false,
  }, // it can get information from cookie
}

