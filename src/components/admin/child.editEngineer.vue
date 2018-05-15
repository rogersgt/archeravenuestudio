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

.save {
  margin: .5% auto;
  padding: .3%;
  font-size: 1rem;
  background-color: $okGreen;
  color: white;
  &:hover {
    background-color: $green2;
    cursor: pointer;
  }
}

@import "./editEngineer.media.scss";
</style>
<template>
  <div class="editEngineer">
    <h2 class="sectionTitle">{{ engineer.firstName.S }} {{ engineer.lastName.S }}</h2>
    <el-collapse>
      <el-collapse-item title="Edit Bio">
        <ul>
          <li :key="paragraph.id" v-for="paragraph in displayBio">
            <h5>Paragraph {{ paragraph.id + 1 }}</h5>
            <textarea :key="paragraph.id" cols="30" rows="10" v-model="paragraph.text"></textarea>
          </li>
        </ul>
      </el-collapse-item>
    </el-collapse>
    <el-collapse>
      <el-collapse-item title="Sample Tracks">
        <file-upload :url="uploadUrl" v-on:change="onFileChange" accept=".mp3" :headers="uploadHeaders"></file-upload>
      </el-collapse-item>
    </el-collapse>
    <button class="save" v-on:click="save">Save Changes to {{ engineer.firstName.S }}</button>
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
      displayBio: [],
      token: localStorage.getItem(`${process.env.TOKEN_NAME}`),
      uploadUrl: `${process.env.API_HOST}/upload`,
      uploadHeaders: {
        'x-api-key': `${process.env.API_KEY}`,
        'Authorization': `Bearer ${this.token}`
      }
    };
  },
  methods: {
    onFileChange: function(file) {
      console.log(file);
    },
    save: function() {
      const payload = {
        firstName: this.engineer.firstName.S,
        lastName: this.engineer.lastName.S,
        bio: this.displayBio.map((paragraph) => paragraph.text)
      };
      this.$http.put(`${process.env.API_HOST}/engineers`, payload)
      .then((response) => {
        this.engineer.firstName = response.body.Attributes.firstName;
        this.engineer.lastName = response.body.Attributes.lastName;
        this.engineer.bio = response.body.Attributes.bio;
      }, (err) => {
        console.log(err);
      });
    },
    shapeData: function() {
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
    },
    upload: function(files=[]) {
      console.log(files);
    }
  },
  props: ['engineer']
}
</script>
