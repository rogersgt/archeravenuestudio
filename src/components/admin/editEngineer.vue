<style lang="scss">
@import "../common/buttons.scss";
@import "../common/shared.scss";
.form {
  width: 80%;
  margin: 10% auto 0 auto;
  font-family: 'Strait', sans-serif;
  .action-btn {
    margin-left: 4.5%;
  }
  h2 {
    text-align: center;
    margin: 0;
    color: $lightGray;
  }
  textarea {
    width: 80%;
    margin: 5%;
    padding: 3%;
    border-radius: .2rem;
  }
  .right {
    float: right;
  }
  button {
    margin: 1%;
  }
  ul {
    margin: 0;
    padding: 0;
    width: 100%;
    li {
      display: block;
      width: auto;
    }
  }
  input {
    padding: 1%;
    width: 50%;
  }
  .clientList {
    width: 80%;
    margin-left: 4.5%;
  }
  h3 {
    margin-left: 4.5%;
  }
}
.green {
  color: $okGreen;
}
.red {
  color: $errorRed;
}
@media(max-width: 1080px) {
  .form {
    margin: 18% 0 0 0;
    width: 100%;
    padding: 0;
  }
}
</style>
<template>
  <section class="page">
  <top title="Admin Panel"/>
  <div class="form">
    <h2>Edit {{ firstName }} {{ lastName }}</h2>
    <h3>Bio</h3>
   <textarea name="bio" id="" cols="30" rows="10" v-model="bio"></textarea>
   
   <h3>Clients</h3>
   <ul class="clientList">
     <li :key="index" v-for="(client, index) in clients">
       <input v-model="clients[index]" type="text">
       <button class="cancel-btn" @click="clients.splice(index, 1)">Remove Client -</button>
     </li>
   </ul>
   <button class="action-btn" @click="clients.push('')">Add Client +</button>
   <button class="ok-btn" @click="save">Save</button>
   <button class="cancel-btn" @click="back">Back</button>
   <span class="green" v-if="saved">Saved <i class="fa fa-check" aria-hidden="true"></i></span>
   <span class="red" v-if="errored">There was an error saving your changes. Please try again later.</span>
  </div>
  <foot></foot>
</section>
</template>
<script>
import top from '../common/header/header.vue';
import foot from '../common/footer/footer.vue';

export default {
  beforeMount: function() {
    const { firstName, lastName } = this.$route.params;
    if (!lastName || !firstName) {
      this.$router.push('admin');
    } else {
      this.getEngineer(lastName, firstName);
    }
  },
  components: {
    top,
    foot
  },
  data: function() {
    return {
      lastName: '',
      firstName: '',
      bio: '',
      clients: [],
      saved: false,
      errored: false
    };
  },
  methods: {
    back: function(e) {
      this.$router.push({ path: '/admin' });
    },
    getEngineer: function(lastName, firstName) {
      const { API_HOST } = process.env;
      this.$http.get(`${API_HOST}/engineer/${lastName}/${firstName}`)
      .then((resp) => {
        this.setComponentData(resp.body);
        return Promise.resolve();
      })
      .catch((e) => {
        console.log(e);
      })
    },
    save: function() {
      const engineer = {
        firstName: this.firstName,
        lastName: this.lastName,
        bio: this.bio,
        clients: this.clients
      };
      const { API_HOST } = process.env;
      this.$http.put(`${API_HOST}/engineer`, engineer)
      .then(() => {
        this.saved = true;
        return Promise.resolve();
      })
      .catch((e) => {
        console.log(e);
      });
    },
    setComponentData: function(newState={}) {
      const {
        firstName,
        lastName,
        bio,
        clients
      } = newState;
      this.firstName = firstName;
      this.lastName = lastName;
      this.bio = bio || '';
      this.clients = clients || [];
    }
  },
  watch: {
    'saved': function() {
      const wait = new Promise((res) => setTimeout(res, 5000));
      wait
      .then(() => {
        this.saved = false;
      });
    }
  }
}
</script>
