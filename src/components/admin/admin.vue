<style lang="scss">
.editableSection {
  margin: 5% auto;
  width: 80%;
  font-family: 'Strait', sans-serif;
}



@import "./admin.media.scss";
</style>

<template>
<section class="page">
  <top />
  <div class="editableSection">
    <h3>Admin Panel</h3>
    <edit-engineer :key="engineer.lastName.S" v-for="engineer in engineers" :engineer="engineer"></edit-engineer>
  </div>
  <foot></foot>
</section>
</template>

<script>
import top from '../common/header/header.vue';
import editEngineer from './child.editEngineer.vue';
import foot from '../common/footer/footer.vue';

export default {
  data: function() {
    return {
      engineers: []
    };
  },
  components: {
    top,
    editEngineer,
    foot
  },
  methods: {
    getengineerData: function() {
      this.$http.get(`${process.env.API_HOST}/engineers`)
      .then((res) => {
        this.engineers = res.body.Items || [];
      }, (err) => {
        // alert(JSON.stringify(err));
        console.log(err);
      });
    }
  },
  created: function() {
    const token = localStorage.getItem(`${process.env.TOKEN_NAME}`);
    if (!token) this.$router.push('login');
    this.getengineerData();
  }
}
</script>