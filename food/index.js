const App = {
  data() {
    return {
      form: {
        newItem: '',
        favs: []
      }
    }
  },
  methods: {
    handleKeyup(e) {
      if (e.key === 'Enter') {
        this.handleAdd()
      }
    },
    handleAdd(e) {
      const { newItem, favs } = this.form
      if (!newItem) return

      const isHasItem = favs.find((item) => item === newItem)
      if (!isHasItem) {
        this.form.favs.push(newItem)
        this.form.newItem = ''
        localStorage.setItem('favs', JSON.stringify(this.form.favs))
      }
    },
    handleRandom() {
      const favs = this.form.favs

      if (favs.length === 0) {
        return this.$message.warning('请先添加项目')
      }

      const randomItem = favs[Math.floor(Math.random() * favs.length)]

      this.$confirm(randomItem, '今天吃', {
        confirmButtonText: '重选',
        cancelButtonText: '关闭',
        type: 'success'
      }).then(() => {
        this.handleRandom()
      })
    },
    handleDelItem(i) {
      this.form.favs.splice(i, 1)
    }
  },
  mounted() {
    const favs = localStorage.getItem('favs')
    if (favs) {
      this.form.favs = JSON.parse(favs)
    }
  }
}
const app = Vue.createApp(App)
app.use(ElementPlus)
app.mount('#app')
