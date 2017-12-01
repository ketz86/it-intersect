const ItIntersect = {
  name : 'it-intersect',
  props : {
    tagName : {
      type: String,
      default : 'div'
    },
    refName : {
      type: String,
      default : 'it-intersect-trigger'
    },
    rootMargin : {
        type : Number,
        default : 0
    },
    root : {
      type : String,
      default : ''
    },
    threshold : {
      type : Number,
      default : 0
    }
  },
  mounted(){

    const options = {
      root:  this.root == '' ? null : document.querySelector(this.root),
      rootMargin: `${this.rootMargin}px`,
      threshold: this.threshold
    }

    const observer = new IntersectionObserver( this.onIntersect, options)
    observer.observe( this.$refs[this.refName] )

  },
  methods: {
    onIntersect(entries){
      entries.forEach((entry) => {
        if(entry.isIntersecting){
          this.$emit('it-intersected')
        }
      })
    }
  },

  render : function(createElement){  
    const options = {
      style : {
        minHeight : '15px',
        display : 'block'
      },
      ref : this.refName
    }
    return createElement(this.tagName , options, this.$slots.default)
  }

}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(ItIntersect.name, ItIntersect)
}

export default ItIntersect