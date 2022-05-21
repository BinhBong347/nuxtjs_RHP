<template>
  <header>
    <nav>
      <ul>
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/decks">Decks</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/profile">Profile</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/settings">Settings</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about">About</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'DefaultHeader',
  setup() {},
}
</script>

<style lang="scss">
header {
  background: #000;
  color: #fff;
  height: 60px;

  ul {
    display: flex;
    list-style: none;
    padding-left: 0;
    justify-content: center;

    li {
      font-size: 1.4rem;
      padding: 0 12px;
      line-height: 60px;

      a {
        text-decoration: none;
        color: white;
      }
      &:hover {
        text-decoration: underline;
      }
    }
    &:hover {
      color: red;
    }
  }
}
</style>