<style lang="scss">
@import "../common/variables.scss";
@import "../common/shared.scss";
#login {
  font-family: 'Strait', sans-serif;
  width: 50%;
  min-height: 10vh;
  max-width: 60%;
  margin: 20% auto;
  padding: 3% 0 3% 0;
  box-shadow: 0 0 3rem $lightGray;
  h3 {
    text-align: center;
    margin: 1% auto;
  }
  li {
    width: 100%;
    margin: 0;
    padding: 0;
    list-style-type: none;
    input {
      width: 92%;
      margin: 2%;
      padding: 2%;
    }
  }
}
#submit {
  width: 60%;
  margin:  2% 19.5%;
  padding: 1% 4%;
  background-color: $okGreen;
  color: white;
  border: none;
  font-size: 1.5rem;
  &:hover {
    background-color: $green2;
    cursor: pointer;
  }
}
.link {
  color: $blue;
  padding: 0;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
}
.badInput {
  border: .06rem solid $errorRed;
  border-radius: .05rem;
}
.error {
  color: $errorRed;
  text-align: center;
  margin: .5% auto;
}
@import "./login.media.scss";
</style>

<template>
  <section class="page">
    <top />
    <ul id="login">
      <li>
        <h3>Admin Login</h3>
      </li>
      <li>
        <input v-on:change="resetInputs" :class="{ badInput:badLogin }" v-model="username" type="text" placeholder="username">
      </li>
      <li>
        <input v-on:change="resetInputs" :class="{ badInput:badLogin }" v-model="password" type="password" placeholder="password">
      </li>
      <button id="submit" v-on:click="login">Login</button>

      <li>
        <div class="error" v-if="badLogin">Username or Password is incorrect.</div>
        <div class="link" v-on:click="goBack">Return to public site.</div>
      </li>
    </ul>
  </section>
</template>

<script>
import top from '../common/header/header.vue';

export default {
  data: function() {
    return {
      username: '',
      password: '',
      badLogin: false
    };
  },
  components: {
    top
  },
  methods: {
    goBack: function() {
      this.$router.push({path: '/'});
    },
    login: function(e) {
      e.preventDefault();
      const payload = {
        username: this.username,
        password: this.password
      };
      this.$http.post(`${process.env.API_HOST}/login`, payload)
      .then((res) => {
        console.log(res);
        if (!!res && !!res.body && !!res.body.token) {
          localStorage.setItem(process.env.TOKEN_NAME, res.body.token);
          /* hacky workaround to put this at the end of the event loop */
          setTimeout(() => {
            this.$router.push('admin')
          }, 0);
        } else {
          this.badLogin = true;
        }
      })
      .catch((e) => console.log(e));
    },
    resetInputs: function() {
      this.badLogin = false;
    }
  }
}
</script>
