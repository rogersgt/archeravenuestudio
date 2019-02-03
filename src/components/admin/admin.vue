<style lang="scss">
@import "../common/variables.scss";
@import "../common/shared.scss";
@import "../common/buttons.scss";

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
  <edit-engineer @update:engineer="handleUpdateEngineer" />
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
import editEngineer from './editEngineer.vue';

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
    foot,
    editEngineer
  },
  methods: {
    editEngineer: function(row) {
      this.$modal.show('edit-engineer', row);
    },
    getengineerData: function() {
      const res = this.$http.get(`${process.env.API_HOST}/engineer`)
      .then((res) => {
        this.engineers = res.body || [];
        console.log(this.engineers);
      })
      .catch((e) => console.log(e));
    },
    handleUpdateEngineer: function(e) {
      const {
        lastName,
        bio = '',
        clients = []
        } = e;
      this.engineers.forEach((eng, i) => {
        if (eng.lastName === lastName) {
          this.engineers[i].bio = bio;
          this.engineers[i].clients = clients;
        }
      });
    }
  },
  created: function() {
    this.getengineerData();
  }
}
</script>
