<script>
export default {
  name: 'btn-more',
  data: () => ({
    visible: false
  }),
  methods: {
    setVisible () {
      this.visible = !this.visible
      if (!this.visible) {
        return
      }
      this.$nextTick(() => {
        this.$event = () => {
          this.visible = false
          document.removeEventListener('click', this.$event)
        }

        document.addEventListener('click', this.$event)
      })
    }
  },
  beforeDestroy () {
    if (this.$event) {
      document.removeEventListener('click', this.$event)
    }
  }
}
</script>

<template>
  <div class="btn-more">
    <ul v-if="visible" class="animated fadeIn">
      <li>
        <a href="#">
          <i class="fas fa-info"></i>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fas fa-bell"></i>
        </a>
      </li>
    </ul>
    <a class="button" @click="setVisible">
      <i class="fas fa-bars"></i>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.btn-more {
  position: relative;
  ul {
    position: absolute;
    right: 0;
    bottom: 100%;
    list-style: none;
    list-style-position: inside;
    padding: 0;
    margin: -20px 15px 0 0;
  }
}
li {
  margin-bottom: 5px;
  text-align: center;
  &, a {
    background-color: var(--main-color-dark);
    width: 100%;
    display: block;
  }
  a {
    padding: 0.5rem;
  }
}
</style>
