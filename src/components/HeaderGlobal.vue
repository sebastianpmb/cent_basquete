<template>
  <div class="mb-5">
    <nav
      class="navbar navbar-expand-md navbar-dark fixed-top bg-secondary"
      v-bind:class="{'navbar-dark' : !this.secondaryHeader}"
    >
      <div class="container px-lg-0 py-1">
        <div class="col-12 col-lg-1 text-center">
          <a class="navbar-brand" href="index.html">
            <img
              :src="[!this.secondaryHeader ? 'static/assets/img/logo.png' : 'static/assets/img/logo-secondary.png']"
              class="px-3 px-lg-0 py-2"
              alt="Cadastra Portuguesa Santista"
              height="106"
            />
          </a>
        </div>
        <div class="d-none d-sm-block">
          <div class="pull-right">
            <h4 class="text-yellow">
              <strong>R$ 34.876,32</strong>
            </h4>
          </div>
          <div class="pull-right pt-2 mr-2">
            <h5 v-bind:class="[!this.secondaryHeader ? 'text-white' : 'text-black']">
              <strong>Já arrecadamos</strong>
            </h5>
          </div>
        </div>
      </div>
    </nav>
  </div>
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
    qtSomos: 0
  }),
  created() {
    this.getNSurvey();
  },
  computed: {
    showSomos: function() {
      if (this.qtSomos == 0) return false;
      else return true;
    }
  },
  methods: {
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