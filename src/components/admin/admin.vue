<style lang="scss">
@import "../common/variables.scss";
@import "../common/shared.scss";
@import "../common/buttons.scss";

#engineerTable {
  width: 80%;
  margin: 8% auto;
  height: auto;
}
@import "./admin.media.scss";
</style>

<template>
<section class="page">
  <top title="Admin Panel"/>
  <div>
    <el-table id="engineerTable" :data="engineers">
      <el-table-column label="First Name" prop="firstName"></el-table-column>
      <el-table-column label="Last Name" prop="lastName"></el-table-column>
      <el-table-column align="right">
        <template slot-scope="scope">
          <el-button class="action-btn" size="mini" @click="editEngineer(scope.row)">Edit</el-button>
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
        bio: '',
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
      const { lastName, firstName } = row;
      this.$router.push({ path: `/edit-engineer/${lastName}/${firstName}` });
    },
    getengineerData: function() {
      const res = this.$http.get(`${process.env.API_HOST}/engineer`)
      .then((res) => {
        this.engineers = res.body || [];
        console.log(this.engineers);
      })
      .catch((e) => console.log(e));
    }
  },
  beforeMount: function() {
    this.getengineerData();
  }
}
</script>
