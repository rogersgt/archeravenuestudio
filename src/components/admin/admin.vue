<style lang="scss">
@import "../common/variables.scss";
@import "../common/shared.scss";
#engineerTable {
  width: 80%;
  margin: 8% auto;
  min-height: 80vh;
}
@import "./admin.media.scss";
</style>

<template>
<section class="page">
  <top title="Admin Panel"/>
  <div>
    <el-table id="engineerTable" :data="engineers">
      <el-table-column label="First Name" prop="firstName.S"></el-table-column>>
      <el-table-column label="Last Name" prop="lastName.S"></el-table-column>>
      <el-table-column align="right">
        <template slot-scope="scope">
          <el-button size="mini" v-on:click="editEngineer(scope.row)">Edit</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <foot></foot>
</section>
</template>

<script>
import top from '../common/header/header.vue';
import foot from '../common/footer/footer.vue';

export default {
  data: function() {
    return {
      engineers: [{
        lastName: '',
        firstName: '',
        about: {},
        clients: []
      }]
    };
  },
  components: {
    top,
    foot
  },
  methods: {
    editEngineer: function(row) {
      console.log(row);
    },
    getengineerData: function() {
      const res = this.$http.get(`${process.env.API_HOST}/engineer`)
      .then((res) => {
        console.log(res);
        this.engineers = res.body.Items || [];
      })
      .catch((e) => console.log(e));
    }
  },
  created: function() {
    const token = localStorage.getItem(`${process.env.TOKEN_NAME}`);
    if (!token) this.$router.push('login');
    this.getengineerData();
  }
}
</script>
