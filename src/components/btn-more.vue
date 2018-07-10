<script>
export default {
  name: 'btn-more',
  data: () => ({
    visible: false,
    notificationPermission: null
  }),
  computed: {
    showBell () {
      const { notificationPermission } = this
      return notificationPermission !== 'denied' && notificationPermission !== 'granted'
    }
  },
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
    },
    requestPermission () {
      Notification.requestPermission(status => {
        this.notificationPermission = status

        if (status !== 'granted') {
          return
        }

        navigator.serviceWorker
          .getRegistration()
          .then(reg => {
            var options = {
              tag: 'thanks'
            }
            reg.showNotification('Obrigado ;)', options)
          })
      })
    }
  },
  mounted () {
    this.notificationPermission = Notification.permission
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
        <router-link :to="{ name: 'about' }">
          <i class="fas fa-info"></i>
        </router-link>
      </li>
      <li v-if="showBell">
        <a @click="requestPermission">
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
