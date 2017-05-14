export default {
  data: function() {
    return {
      home: false,
      gallery: false,
      // gear: false,
      engineers: false,
      blog: false,
      contact: false
    };
  },
  methods: {
    goHome: function () {
       this.$router.push({path: '/'});
     },
    goGallery: function () {
       this.$router.push('gallery');
     },
    goEngineers: function () {
       this.$router.push('engineers');
     },
    goBlog: function () {
       this.$router.push('blog');
     },
    goContact: function () {
       this.$router.push('contact');
     }
  },
  created: function () {
    let self = this;
      const route = self.$route.name;
      if (route === "home") {
        this.home = true;
      } else if (route === "gallery") {
        this.gallery = true;
      // } else if (route === "gear") {
        // this.gear = true;
      } else if (route === "engineers") {
        this.engineers = true;
      } else if (route === "blog") {
        this.blog = true;
      } else if (route === "contact") {
        this.contact = true;
      }
  }
}
