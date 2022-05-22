<template>
  <div>
    <div class="container">
      <h3>List of your decks:</h3>
      <ul class="deck__list">
        <li>
          <nuxt-link to="decks/1">
            <div class="card">
              <div class="car-image">
                <img
                  src="https://jes.edu.vn/wp-content/uploads/2017/10/h%C3%ACnh-%E1%BA%A3nh.jpg"
                  alt="Thumbnail"
                />
              </div>
              <div class="card-body">
                <h3>Title</h3>
                <p>Description</p>
              </div>
            </div>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="decks/1">
            <div class="card">
              <div class="car-image">
                <img
                  src="https://jes.edu.vn/wp-content/uploads/2017/10/h%C3%ACnh-%E1%BA%A3nh.jpg"
                  alt="Thumbnail"
                />
              </div>
              <div class="card-body">
                <h3>Title</h3>
                <p>Description</p>
              </div>
            </div>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="decks/1">
            <div class="card">
              <div class="car-image">
                <img
                  src="https://jes.edu.vn/wp-content/uploads/2017/10/h%C3%ACnh-%E1%BA%A3nh.jpg"
                  alt="Thumbnail"
                />
              </div>
              <div class="card-body">
                <h3>Title</h3>
                <p>Description</p>
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
