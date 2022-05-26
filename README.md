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


### VIDE0 29: SỬ DỤNG REF
- tạo 1 component
+ có ô input với type = file ( chọn ảnh) thêm 1 atrribute ref = 'abc'
+ tham chiếu tới ô input này bằng 1 button, khi click vào buuton ô input file sẽ hiện lên (thêm @click, viết logic trong tham chiếu tới dùng: this.$refs.abc.click())

### video 30: SLOT
có thể truyền component đến file cha, dùng slot để nhận dữ liệu từ file cha <slot></slot> 

### Quay lại RHP 
- asynData(): Những data sinh ra sau, được đổ vào dom thì sẽ được hiển thị lên trên DOM của trình duyệt ( vuejs k làm đc) cái này phục vụ cho SEO
+ Giup cho việc lấy data có tuần tự, dữ liệu được trả về ở đây là promise
+ có 2 parameter ( context, cb)
+ context: Phần đã thực thi khi kết nói với api, context.axios requrest tới api mình cần sau khi xong sẽ gọi tới cb
+ cb có nhiệm vụ set dữ liệu cho asyncData, và template của vueje truy cập và đổ ra DOM
cb(err, dữ liệu muốn set)   db(err, {
    data: []
})
+ gọi dữ liệu trong created(): call api ở đây cần thời gian để call
+ 
- Nuxt hoạt động khi lần đầu tiên web được refresh => nuxt sd serve để render ra DOM (search ENGINE sẽ đọc được) 
+ refresh lần đầu tiên: asyncData đang hoạt động với nuxt trên serve => khi console nó sẽ hiện ở terminal
+ sau lần đầu tiên render ra DOM mọi thứ đã được load, nó sẽ trở về như SPA ở đây asyncData đã là phía client ( tất cả là do vuejs sử lý)

### video 25: sử dụng context
đối tượng this là DOM => trong hàm asyncData sẽ chưa sử dụng dụng được
muốn truy cập id dùng context.params.id 

### video 26: sử dụng Promise
return new Promise( bên trong là 1 cb fc)
Sử dụng promise có 2 tham số là resolve, reject, nếu vào reject chú ý bắt lỗi và dùng context đẩy lỗi về 500

### Học về VUEX CỦA NUXTJS (RHP-VIDEO 27)
- Đại diện cho 1 center store ( kho chứa trung tâm )
+ chứa được nhiều kiện hàng (...)
- Dữ liệu chứa trong store, tất cả component sử dụng đến dữ liệu này, khi trạng thái của đơn hàng thay đổi thì hiệu lực update trong store cũng sẽ thay đổi 
=> 1 khi store thay đổi => tất cả component sd cũng thay đổi
