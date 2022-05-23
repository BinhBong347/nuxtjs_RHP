# learnnuxt

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).


### Note
- Khi dùng validate() {}
+ Phải return và cái validate phải chạy xong thì route ( path ) mới được chạy

### Cấu trúc thư mục
settings.vue
folder settings: bên trong có tất cả path thì nó đều là nuxt-child của file.vue
 + path: / => (render cả file .vue + index.vue trong folder )
 + path /deck => pages/deck/index.vue
 + path /schedule => pages/shedule/index.vue

 ### COMMIT 
 git commit -m "nội dung ở đây"  --no-verify

 Binhb@ng17061996

 ### VUEJS
 - Khái niệm về Props Down: Nguyên tắc từ cha truyền xuống cho con con không có quyền thay đổi dữ liệu
 - Event Up: Truyền thông báo (sự kiện) để cha thay đổi
 v-on:click = "handleClick"
 => click: Tên sự kiện
 => handleClick: Hàm xử lý khi sự kiện được kích hoạt
 TẠO RA MỘT SỰ KIỆN MỚI 
 từ cha tạo một custom evetn gọi ở component con thông qua
 this.$emit('ten sk custom', {dữ liệu đi kèm})

