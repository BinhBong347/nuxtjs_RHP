<template>
  <div>
    <h2>Please enter number to show</h2>
    <input v-model="deckId" type="text" placeholder="enter number" />
    <button @click="showDeck">Go to Deck</button>
  </div>
</template>

<script>
export default {
  name: 'PageDeck',
  data() {
    return {
      title: 'Page deck',
      deckId: 1,
    }
  },
  methods: {
    showDeck() {
      this.$router.push(`/decks/${this.deckId}`)
    },
  },
}
</script>
