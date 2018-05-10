<style lang="scss">
@import "../common/variables.scss";

.editEngineer {
  ul {
    li {
      list-style: none;
      list-style-type: none;
    }
  }
  textarea {
    width: 80%;
    margin: 1% auto;
    padding: 1%;
  }
}

@import "./editEngineer.media.scss";
</style>
<template>
  <div class="editEngineer">
    <h2 class="sectionTitle">{{ engineer.firstName.S }} {{ engineer.lastName.S }}</h2>
    <el-collapse>
      <el-collapse-item title="bio">
        <ul>
          <li :key="paragraph.id" v-for="paragraph in displayBio">
            <h5>Paragraph {{ paragraph.id + 1 }}</h5>
            <textarea :key="paragraph.id" cols="30" rows="10">{{ paragraph.text }}</textarea>
          </li>
        </ul>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>

export default {
  created: function() {
    return Promise.resolve()
    .then(this.shapeData)
    .then(this.setNewParagraphBox);
  },
  data: function() {
    return {
      displayBio: []
    };
  },
  methods: {
    shapeData: function() {
      console.log(this.engineer)
      if (this.engineer.bio && this.engineer.bio.SS) {
        for (let i = 0; i < this.engineer.bio.SS.length; i++) {
          const displayParagraph = {
            text: this.engineer.bio.SS[i],
            id: i
          };
          this.displayBio.push(displayParagraph);
        }
      }
      return Promise.resolve();
    },
    setNewParagraphBox: function() {
      if (this.displayBio.length < 1) {
        this.displayBio.push({
          text: '',
          id: 0
        });
      }
      return Promise.resolve();
    }
  },
  props: ['engineer']
}
</script>
