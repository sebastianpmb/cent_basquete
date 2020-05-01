<template>
  <footer role="how-it-works" class="bg-blue-2 py-4">
    <div class="container-fluid pb-4">
      <div class="row">
        <div class="col-12 pt-3 text-center d-none d-md-inline">
          <a href="index.html">
            <img
              src="static/assets/img/logo.png"
              class="px-3 px-lg-0 py-2"
              alt="Cadastra Portuguesa Santista"
              height="80"
            />
          </a>
        </div>
        <div class="col-12 pt-lg-3 text-center">
          <ul class="list-group">
            <li class="list-group-item bg-transparent border-0 py-0">
              <p class="my-1">
                <a href="#" class="text-white">
                  <small>Sobre</small>
                </a>
              </p>
            </li>
            <li class="list-group-item bg-transparent border-0 py-0">
              <p class="my-1">
                <a href="#" class="text-white">
                  <small>Termos de Uso</small>
                </a>
              </p>
            </li>
            <li class="list-group-item bg-transparent border-0 py-0">
              <p class="my-1">
                <a href="#" class="text-white">
                  <small>Política de Privacidade</small>
                </a>
              </p>
            </li>
          </ul>
        </div>
        <div class="col-12 pt-lg-4 text-center mt-4">
          <p class="text-uppercase text-white">
            <small>Powered by</small>
          </p>
        </div>
        <div class="col-12 text-center">
          <img
            src="static/assets/img/partners/logo-incentive.png"
            class="px-3 px-lg-3"
            alt="Incentive"
            height="40"
          />
          <img
            src="static/assets/img/partners/logo-fanbase.png"
            class="px-3 px-lg-3 py-2"
            alt="Fan Base"
            height="62"
          />
        </div>
      </div>
    </div>
  </footer>
</template>
//
<script>
// import { Survey } from "../services/Survey.js";
// const s = new Survey();
// export default {
//   name: "FooterGlobal",
//   props: {
//     secondaryFooter: { type: Boolean }
//   },
//   data: () => ({
//     qtSomos: 0
//   }),
//   created() {
//     this.getNSurvey();
//   },
//   computed: {
//     showSomos: function() {
//       if (this.qtSomos == 0) return false;
//       else return true;
//     }
//   },
//   methods: {
//     getNSurvey() {
//       s.GetData().then(
//         ret => {
//           if (ret) {
//             this.qtSomos = ret;
//             this.$store.commit("SET_QtUsers", this.qtSomos);
//           }
//         },
//         err => alert(err)
//       );
//     }
//   }
// };
//
</script>
