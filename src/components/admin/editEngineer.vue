<style lang="scss">
@import "../common/variables.scss";
.editEngineer {
  width: 80%;
  max-width: 1080px;
  padding: 0;
  margin: 4% 10%;
  ul {
    width: 70%;
    margin: .5% auto;
    li {
      width: 100%;
      margin: .5% auto;
    }
  }
}
@import "./editEngineer.media.scss";
</style>
<template>
  <section>
    <div class="editEngineer">
      <ul>
        <li><input type="text" :value="engineer.firstName" placeholder="First Name"/></li>
        <li><input type="text" :value="engineer.lastName" placeholder="Last Name"/></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <foot></foot>
  </section>
</template>
<script>
import foot from '../common/footer/footer.vue';

export default {
  components: {
    foot
  },
  created: function() {
    
  },
  data: function() {
    return {
      engineer: {
        firstName: '',
        lastName: '',
        about: {},
        clients: []
      }
    };
  }
}
</script>
