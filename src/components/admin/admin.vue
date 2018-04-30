<style lang="scss">
@import "../common/footer.scss"; // should probably be somewhere else...

.editableSection {

}
</style>

<template>
<section class="page">
  <top />
  <div class="editableSection">
    <h2 class="sectionTitle">About Me</h2>
    <el-collapse>
      <el-collapse-item>
        <textarea v-model="about" name="aboutMe" id="aboutMe" cols="30" rows="10"></textarea>
      </el-collapse-item>
    </el-collapse>
  </div>
</section>
</template>

<script>
import top from '../common/header/header.vue';

export default {
  data: function() {
    return {
      about: ''
    };
  },
  components: {
    top
  }
}
</script>