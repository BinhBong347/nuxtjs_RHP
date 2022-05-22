<template>
  <section>
    <div class="container">
      <h3>Learn section</h3>
      <div class="tools">
        <button class="btn btn-success">Start now</button>
        <button class="btn btn-primary">Create a card</button>
      </div>
      <hr />
      <div class="card">
        <ul class="card__list">
          <li class="card__list-item">
            <h3>Title</h3>
            <p>Desc</p>
          </li>
        </ul>
        <ul class="card__list">
          <li class="card__list-item">
            <h3>Title</h3>
            <p>Desc</p>
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
}
</script>

<style lang='scss'>
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
    width: 100px;
    margin-left: 5px;
  }
}
</style>
