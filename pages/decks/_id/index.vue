<template>
  <section>
    <div class="container">
      <div class="title__header">
        <h3>Learn section: DECK # {{ $route.params.id }}</h3>
        -- {{ title }}
      </div>
      <div class="tools">
        <button class="btn btn-success">Start now</button>
        <button class="btn btn-primary">Create a card</button>
      </div>
      <hr />
      <div class="card">
        <ul v-for="car in card" :key="car.id" class="card__list">
          <li class="card__list-item">
            <div class="card__list-title">
              <h3>{{ car.title }}</h3>
            </div>
            <div class="card__list-img">
              <img :src="car.image" :alt="car.title" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PageParamDeck',
  validate({ params }) {
    return /^[0-9]$/.test(params.id)
  },
  asyncData(context) {
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line nuxt/no-timing-in-fetch-data
      setTimeout(() => {
        resolve({
          id: 1,
          title: `Title 1 ${context.params.id}`,
          thumbnail:
            'https://jes.edu.vn/wp-content/uploads/2017/10/h%C3%ACnh-%E1%BA%A3nh.jpg',
          desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora veritatis ea itaque nostrum debitis hic omnis beatae? Explicabo doloremque aliquam, necessitatibus nihil qui cumque quidem temporibus minus suscipit itaque recusandae?',
        })
      }, 1500)
    })
  },

  data() {
    return {
      card: [
        {
          id: 1,
          title: 'Card 1',
          image:
            'https://www.toponseek.com/blogs/wp-content/uploads/2019/06/toi-uu-hinh-anh-optimize-image-4-1200x700.jpg',
        },
        {
          id: 2,
          title: 'Card 2',
          image:
            'https://www.toponseek.com/blogs/wp-content/uploads/2019/06/toi-uu-hinh-anh-optimize-image-4-1200x700.jpg',
        },
        {
          id: 3,
          title: 'Card 3',
          image:
            'https://www.toponseek.com/blogs/wp-content/uploads/2019/06/toi-uu-hinh-anh-optimize-image-4-1200x700.jpg',
        },
        {
          id: 4,
          title: 'Card 4',
          image:
            'https://www.toponseek.com/blogs/wp-content/uploads/2019/06/toi-uu-hinh-anh-optimize-image-4-1200x700.jpg',
        },
        {
          id: 5,
          title: 'Card 5',
          image:
            'https://www.toponseek.com/blogs/wp-content/uploads/2019/06/toi-uu-hinh-anh-optimize-image-4-1200x700.jpg',
        },
      ],
    }
  },
}
</script>

<style lang='scss'>
.title__header {
  text-align: center;
}
.btn {
  background: rgb(156, 162, 156);
  padding: 10px;
  font-size: 1.2rem;
  outline: none;
  border: none;
  cursor: pointer;
  min-height: 20px;
  border-radius: 2px;

  &:hover {
    background: blue;
    color: white;
  }
}

.card {
  display: flex;

  .card__list {
    border: 1px solid #666;
    border-radius: 2px;
    padding: 10px;
    width: 200px;
    margin-left: 5px;

    .card__list-title {
      text-align: center;
    }

    .card__list-item {
      width: 100%;
      .card__list-img {
        width: 100%;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
