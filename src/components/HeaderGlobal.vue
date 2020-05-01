<template>
  <nav
    class="navbar navbar-expand-md fixed-top"
    v-bind:class="[
                !this.scrolled ? '' : 'bg-secondary bg-nav',
              ]"
    v-on="handleScroll"
  >
    <div class="container px-lg-0 py-1">
      <div class="col-3 offset-5 col-lg-2 offset-lg-0 pl-0 pl-md-4 pl-lg-0">
        <a class="navbar-brand" href="index.html">
          <img
            :src="[
                !this.secondaryHeader
                  ? 'static/assets/img/logo.png'
                  : 'static/assets/img/logo-secondary.png',
              ]"
            class="img-fluid px-lg-0 py-2"
            alt="Centavos CBB"
          />
        </a>
      </div>
      <div class="d-none d-lg-block">
        <div class="pull-right">
          <a href="#/beginDonation" class="btn btn-primary ml-3" target="_blank">Quero doar</a>
        </div>
        <div class="pull-right pt-2 mr-2">
          <h5 class="text-yellow">
            <strong>R$ 34.876,32</strong>
          </h5>
        </div>
        <div class="pull-right pt-2 mr-2">
          <h6
            class="pt-1"
            v-bind:class="[
                !this.secondaryHeader ? 'text-white' : 'text-black',
              ]"
          >Já arrecadamos</h6>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { Survey } from "../services/Survey.js";
const s = new Survey();

export default {
  name: "HeaderGlobal",
  props: {
    secondaryHeader: { type: Boolean }
  },
  data: () => ({
    qtSomos: 0,
    scrolled: false
  }),
  created() {
    this.getNSurvey();
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  computed: {
    showSomos: function() {
      if (this.qtSomos == 0) return false;
      else return true;
    }
  },
  methods: {
    handleScroll() {
      // let obj = document.querySelector("nav");
      let top = window.pageYOffset;
      // let height = document.documentElement.window;
      // if ()
      this.scrolled = top > 118;
      // this.scrolled = window.scrollY > 100;
    },
    beginDonation() {
      this.$router.push("beginDonation");
    },
    getNSurvey() {
      s.GetData().then(
        ret => {
          if (ret) {
            this.qtSomos = ret;
            this.$store.commit("SET_QtUsers", this.qtSomos);
          }
        },
        err => alert(err)
      );
    }
  }
};
</script>
