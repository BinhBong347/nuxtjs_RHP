<template>
  <div>
    <div class="container">
      <h3>List of your decks:</h3>
      <button class="btn" @click.prevent="openModal">Create a decks</button>
      <ul class="deck__list">
        <li v-for="(deck, index) in decks" :key="index">
          <nuxt-link :to="`/decks/${deck.id}`">
            <div class="card">
              <div class="car-image">
                <img :src="deck.thumbnail" alt="Thumbnail" />
              </div>
              <div class="card-body">
                <h3>{{ deck.title }}</h3>
                <p>{{ deck.desc }}</p>
              </div>
            </div>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageDeck',
  asyncData(context) {
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line nuxt/no-timing-in-fetch-data
      setTimeout(() => {
        resolve({
          decks: [
            {
              id: 1,
              title: 'Title 1',
              thumbnail:
                'https://jes.edu.vn/wp-content/uploads/2017/10/h%C3%ACnh-%E1%BA%A3nh.jpg',
              desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora veritatis ea itaque nostrum debitis hic omnis beatae? Explicabo doloremque aliquam, necessitatibus nihil qui cumque quidem temporibus minus suscipit itaque recusandae?',
            },
            {
              id: 2,
              title: 'Title 2',
              thumbnail:
                'https://jes.edu.vn/wp-content/uploads/2017/10/h%C3%ACnh-%E1%BA%A3nh.jpg',
              desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora veritatis ea itaque nostrum debitis hic omnis beatae? Explicabo doloremque aliquam, necessitatibus nihil qui cumque quidem temporibus minus suscipit itaque recusandae?',
            },
            {
              id: 3,
              title: 'Title 3',
              thumbnail:
                'https://jes.edu.vn/wp-content/uploads/2017/10/h%C3%ACnh-%E1%BA%A3nh.jpg',
              desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora veritatis ea itaque nostrum debitis hic omnis beatae? Explicabo doloremque aliquam, necessitatibus nihil qui cumque quidem temporibus minus suscipit itaque recusandae?',
            },
          ],
        })
      }, 2000)
    })
  },

  created() {
    this.$store.dispatch('setDecks', this.decks)
    // eslint-disable-next-line no-console
    console.log(this.$store.getters.decks)
  },
  data() {
    return {
      decks: [],
    }
  },
}
</script>

<style lang="scss">
.deck__list {
  list-style: none;
  padding: 0;
  margin: 0;

  .card {
    border: 1px solid #333;
    border-radius: 3px;
    margin-top: 10px;
    display: flex;

    .car-image {
      img {
        width: 250px;
      }
    }

    .card-body {
      padding: 0 20px;
    }
  }
}
</style>
