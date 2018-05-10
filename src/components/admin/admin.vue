<style lang="scss">
@import "../common/footer.scss"; // should probably be somewhere else...

.editableSection {
  margin: 5% auto;
}

@import "./admin.media.scss";
</style>

<template>
<section class="page">
  <top />
  <div class="editableSection">
    <h3>Edit Engineers</h3>
    <edit-engineer :key="engineer.lastName.S" v-for="engineer in engineers" :engineer="engineer"></edit-engineer>
  </div>
</section>
</template>

<script>
import top from '../common/header/header.vue';
import editEngineer from './child.editEngineer.vue';

export default {
  data: function() {
    return {
      engineers: []
    };
  },
  components: {
    top,
    editEngineer
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
    this.getengineerData();
  }
}
</script>