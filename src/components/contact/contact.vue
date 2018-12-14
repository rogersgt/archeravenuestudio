<style lang="scss">
  @import "../common/variables.scss";
  @import "../common/footer/footer.scss";
  #submit {
    background-color: $okGreen;
    border: none;
    color: white;
    width: 50%;
    margin: 1% 25%;
    &:hover {
      background-color: $green2;
      cursor: pointer;
    }
  }
  .contact {
    margin: 0;
    padding: 5% 0 0 0;
    width: 100%;
    height: 100vh;
    top: 0;
    background-image: url('../../assets/controlroom1.jpg');
    background-size: cover;
    background-position: center;
    form {
      width: 76%;
      margin: 0 12%;
      padding: 1.8% 0;
      background-color: $thinGray;
      box-shadow: 0 0 .4rem black;
      border-radius: .2rem;
      h3 {
        text-align: center;
        font-size: 2rem;
      }
      p {
        width: 80%;
        margin: 1% 10%;
        font-size: 1.1rem;
        text-align: center;
      }
      input {
        width: 95%;
        padding: 1%;
        margin: 1% 1.5%;
        border-radius: .1rem;
      }
      textarea {
        width: 95%;
        padding: 1%;
        margin: 1% 1.5%;
        height: 20vh;
      }
      textarea, input {
        font-size: 1.3rem;
        background-color: $transWhite;
        -webkit-appearance: none; 
        -moz-appearance: none; 
        border: .01rem solid $transGray;
      }
    }
  }
  .errMsg {
    color: $errorRed;
    margin-left: 2%;
  }
  .badInput {
    border: .01rem solid $errorRed !important; // ehhh...
  }
  .clicked {
    background-color: $gray !important;
    cursor: pointer;
  }
  @media(max-width: 1080px) {
    .contact { padding-top: 0; }
    .contact form {
      margin: 10% 0;
      width: 100%;
      h3 {
        display: none;
      }
      input {
        margin: 3% 1.5%;
      }
      input, textarea {
        font-size: 1rem;
      }
      p {
        font-size: .8rem;
        width: 70%;
        margin: 0 15%;
      }
    }
    .onlyDesktop { display: none; }
  }
  @media(max-width: 800px) {
    .contact form {
      margin: 14% 0;
    }
  }
</style>
<template lang="html">
    <section>
      <div class="contact">
        <h title="Contact"></h>
        <form>
          <h3>Contact Archer Avenue Studio</h3>
          <p>
            We have varied rates depending on the nature of your project. 
            Please contact us and we'll get you a personalized quote right away. 
          </p>
          <input v-on:change="watchEmail" v-model="email.email" v-bind:class="{badInput:badEmailOne}" type="text" placeholder="Email"></input>
          <span v-if="badEmailOne" class="errMsg">{{errorMessage}}</span>

          <input v-on:change="watchConfirm" v-model="email.confirm" v-bind:class="{badInput:badEmailTwo}" type="text" placeholder="Confirm Email"></input>
          <span v-if="badEmailTwo" class="errMsg">{{errorMessage}}</span>

          <input v-on:change="watchSubject" v-model="email.subject" v-bind:class="{badInput:badSubject}" type="text" placeholder="Subject (i.e. Booking)"></input>
          <span v-if="badSubject" class="errMsg">{{errorMessage}}</span>

          <textarea v-on:change="watchMessage" v-model="email.message" v-bind:class="{badInput:badMessage}" placeholder="Message"></textarea>
          <span v-if="badMessage" class="errMsg">{{errorMessage}}</span>

          <input v-on:click="submit" v-bind:class="{clicked:clicked}" id="submit" type="button" value="submit" />
        </form>
        <media class="onlyDesktop"></media>
        <navigation start-open="true"></navigation>
      </div>
      <foot />
    </section>
</template>
<script>
  import header from '../common/header/header.vue';
  import navigation from '../common/mobileNav/mobileNav.vue';
  import media from '../common/socialMedia.vue';
  import foot from '../common/footer/footer.vue';

  export default {
    components: {
      navigation,
      h: header,
      media,
      foot
    },
    data: function() {
        return {
          badEmailOne: false,
          badEmailTwo: false,
          badSubject: false,
          badMessage: false,
          clicked: false,
          errorMessage: '',
          email: {
            email: '',
            confirm: '',
            subject: '',
            message: ''
          }
        };
    },
    methods: {
      submit: function() {
        if (!this.clicked) {
          if (this.email.email.length === 0 || this.email.email.indexOf('@') < 0 || this.email.email.indexOf('.') < 0) {
            this.errorMessage = 'Please enter a valid email address.';
            return this.badEmailOne = true;
          } else if (this.email.confirm !== this.email.email) {
            this.errorMessage = "Email addresses do not match.";
            return this.badEmailTwo = true;
          } else if (this.email.subject.length === 0) {
            this.errorMessage = "Please include a subject to your message.";
            return this.badSubject = true
          } else if (this.email.message.length === 0) {
            this.errorMessage = "Please include a message.";
             return this.badMessage = true;
          }
          this.clicked = true;
          this.$http.post(`${process.env.API_HOST}/mail`, this.email)
          .then((res) => {
            this.clicked = false;
            this.email.email = this.email.confirm = this.email.message = this.email.subject = '';
          }, (errRes) => {
            alert('There was an error sending your message. Sorry, please try again or reach out on another channel.');
          });
        }
      },
      post: function(msg) {

      },
      watchEmail: function() { this.badEmailOne = false; },
      watchConfirm: function() { this.badEmailTwo = false; },
      watchSubject: function() { this.badSubject = false; },
      watchMessage: function() { this.badMessage= false; }
    }
  }
</script>
