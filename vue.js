class Vue {
  constructor(opts) {
    this.el = opts.el
    this.data = opts.data
    this.watch = opts.watch
    this.methods = opts.methods
    this.mounted = opts.mounted

    Object.keys(this.data).forEach(key => {
      this.injectData(key)
    })
  }
  injectData(key) {
    Object.defineProperty(this, key, {
      configurable: true,
      enumerable: false,
      get() {
        return this.data[key]
      },
      set(value) {
        if (value !== this.data[key]) {
          this.data[key] = value
        }
      }
    })
  }
}