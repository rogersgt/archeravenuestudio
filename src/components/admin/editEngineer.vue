<style lang="scss">
#modal {
  margin: 2.5%;
  padding: 3% 0 5% 0;
  width: 95%;
  height: auto;

  .options {
    width: 55%;
    padding: 0;
    margin: 0;
    ul {
      margin: 2%;
      padding: 0;
      li {
        width: 24%;
        padding: 0;
        text-align: left;
        display: inline-block;
        button {
          padding: 11%;
          font-size: 1rem;
          font-size: .9rem;
        }
      }
    }
  }

  .form {
    margin: 5%;
    padding: 0;
    textarea {
      overflow: scroll;
    }
  }
  button {
    float: right;
    margin-right: 8%;
    margin-bottom: 1%;
  }
  .btn-cancel {
    float: left;
    background-color: #5c5a59;
    color: white;
  }
  input, textarea {
    width: 80%;
    margin: 1% 9%;
    padding: 1%;
    border-radius: .1rem;
    border: .05rem solid gray;
  }
  .btn-cancel, h3, h6 {
    margin-left: 9%;
  }
}
</style>
<template>
  <modal name="edit-engineer" @before-open="beforeOpen" :width="'50%'" :height="'auto'">
    <div id="modal">
      <div class="options">
        <ul>
          <li>
            <button class="ok-btn" @click="save">Save</button>
          </li>
          <li>
            <button class="cancel-btn" @click="$modal.close('edit-engineer')">Cancel</button>
          </li>
        </ul>
      </div>

      <div class="form">
        <h3>Edit {{ firstName }} {{lastName }}</h3>
        <h6>Bio</h6>

        <textarea :model="bio"/>

        <button v-if="bio.length === 0" @click="bio.push('')" class="action-btn">Add paragraph +</button>
        <h6>Clients</h6>

        <div v-for="(client, index) in clients" :key="index">
          <input type="text" :model="clients[index]" /><button class="btn-cancel" @click="clients.splice(clients.indexOf(client), 1)">remove -</button>
        </div>
        <button class="action-btn" v-on:click="clients.push('')">Add client +</button>
      </div>
    </div>
  </modal>
</template>
<script>
export default {
  data: function() {
    return {
      bio: '',
      clients: [],
      firstName: '',
      lastName: ''
    };
  },
  methods: {
    beforeOpen: function(event) {
      this.bio = event.params.bio || '';
      this.clients = event.params.clients || [];
      this.firstName = event.params.firstName || '';
      this.lastName = event.params.lastName || '';
    },
    save: function() {
      const engineer = {
        lastName: this.lastName,
        firstName: this.firstName,
        bio: this.bio,
        clients: this.clients
      };
      console.log(engineer);
      // const { API_HOST } = process.env;
      // this.$http.put(`${API_HOST}/engineer`, engineer)
      // .then((res) => {
      //   console.log(res);
      //   // this.$emit('update:engineer', res.body);
      //   // this.$modal.close('edit-engineer');
      // })
      // .catch((e) => {
      //   console.log(e);
      // });
      // this.$emit('update:engineer', engineer);
    },
    handleParagraphs: function() {
      if (this.bio.length === 0) {
        this.bio.push('');
      } else {
        const lastP = this.bio[this.bio.length - 1];
        if (lastP.length === 0) {
          this.bio.splice(this.bio.length - 1, 1);
        } else {
          this.bio.push('');
        }
      }
    },
    handleUpdateParagraph: function(e) {
      const { index, value } = e;
      this.bio[index] = value;
    }
  },
  watch: {
    'bio': function(val) {
      console.log(val);
    }
  }
}
</script>
