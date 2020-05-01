<template>
  <div class="home">
    <div class="bg"></div>
    <HeaderGlobal :secondaryHeader="false" />
    <main>
      <div class="container min-vh-100 px-4 px-lg-0 pt-5">
        <div class="row pt-5">
          <div class="header-vertical-align my-5 my-lg-0 pt-4">
            <div class="col-lg-9 col-12 pt-5 px-4 px-lg-3 mt-5 mt-lg-0 pt-lg-0">
              <h1 class="text-white pr-lg-5 mt-5 pt-lg-3 pt-5 pt-0 mt-lg-0">
                <strong>Centavos que valem cesta de 3!</strong>
              </h1>
            </div>
            <div class="col-12 col-lg-8 pt-4 px-3">
              <h4 class="text-yellow">
                <strong>Sabia que você pode ajudar na formação de milhares de crianças, através do basquete, doando seus centavos?</strong>
              </h4>
            </div>

            <div class="container d-lg-none">
              <div class="row mb-5 mb-lg-0">
                <div class="col-12 text-center mt-5 mb-3">
                  <a href="#/beginDonation" class="btn btn-primary" target="_blank">Quero doar</a>
                </div>
                <div class="col-12 text-center mt-5 mt-lg-0 px-5 px-lg-3">
                  <h6>Já arrecadamos</h6>
                </div>
                <div class="col-12 mb-5 text-center mb-lg-0">
                  <h5 class="text-yellow">
                    <strong>R$ 34.876,32</strong>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <section role="how-it-works">
      <div class="container-fluid text-white">
        <div class="row">
          <div class="col-lg-6 bg-primary px-lg-5 p-5 px-lg-3">
            <h4 class="px-lg-5 py-2">
              <strong>Simples, seguro e transparente!</strong>
            </h4>
            <h6 class="px-lg-5">
              Ao cadastrar o seu Cartão de Crédito Mastercard* em nossa
              plataforma, todas as suas compras Será doada diretamente para o CBB Cuida , o projeto social da CBB.
            </h6>
          </div>
          <div class="col-lg-6 bg-green-2 px-lg-5 p-5 px-lg-3">
            <h4 class="px-lg-5 py-2">
              <strong>Sua doação direto para quem precisa!</strong>
            </h4>
            <h6
              class="px-lg-5"
            >Os valores arrecadados pela CBB com a doação dos seus centavos serão integralmente direcionados para o projeto CBB Cuida, voltado para o desenvolvimento de escolinhas de basquete em comunidades por todo o Brasil.</h6>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row bg-white pb-5">
          <div class="col-8 offset-2 col-lg-4 offset-lg-4 bg-white pt-lg-5 mt-5">
            <h4 class="text-black text-center">
              <strong>Como funciona</strong>
            </h4>
            <div class="title-bar" />
          </div>
        </div>
        <div class="row bg-white px-5 pt-lg-5">
          <div class="col-lg-3">
            <div class="row">
              <div class="col-2 col-lg-3">
                <h1 class="text-yellow text-right">
                  <strong>1</strong>
                </h1>
              </div>
              <div class="col-10 col-lg-9 pt-3 pt-lg-5">
                <h6 class="text-black">
                  Cadastrando seu Cartão de Crédito Mastercard*, você se torna
                  um doador de centavos para os projetos sociais
                  <strong>CBB</strong>.
                </h6>
              </div>
            </div>
          </div>
          <div class="col-lg-3 mt-4 mt-lg-0">
            <div class="row">
              <div class="col-2 col-lg-3">
                <h1 class="text-yellow text-right">
                  <strong>2</strong>
                </h1>
              </div>
              <div class="col-10 col-lg-9 pt-3 pt-lg-5">
                <h6 class="text-black">
                  Em uma compra de
                  <strong>R$8,60</strong>, por exemplo, o sistema arredonda para
                  <strong>R$9,00</strong> o valor a ser cobrado na sua fatura.
                </h6>
              </div>
            </div>
          </div>
          <div class="col-lg-3 mt-4 mt-lg-0">
            <div class="row">
              <div class="col-2 col-lg-3">
                <h1 class="text-yellow text-right">
                  <strong>3</strong>
                </h1>
              </div>
              <div class="col-10 col-lg-9 pt-3 pt-lg-5">
                <h6 class="text-black">
                  A diferença de
                  <strong>R$0,40</strong> é o valor da sua doação , que será
                  repassado diretamente para conta da
                  <strong>CBB</strong>.
                </h6>
              </div>
            </div>
          </div>
          <div class="col-lg-3 mt-4 mt-lg-0">
            <div class="row">
              <div class="col-2 col-lg-3">
                <h1 class="text-yellow text-right">
                  <strong>4</strong>
                </h1>
              </div>
              <div class="col-10 col-lg-9 pt-3 pt-lg-5">
                <h6 class="text-black">
                  No final do mês será feito um único lançamento na fatura do
                  seu cartão de crédito Mastercard com o total de centavos
                  doados.
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div class="row bg-white pt-lg-5">
          <div class="col-12 text-center my-5 my-lg-0 pt-4">
            <a href="#/beginDonation" class="btn btn-primary ml-3" target="_blank">Quero doar</a>
          </div>
        </div>
      </div>
    </section>
    <section id="how-it-works" class="bg-white pt-lg-5">
      <div class="container-fluid pt-5">
        <div class="row text-center">
          <div class="col-12 col-lg bg-blue-2 px-3 px-lg-5">
            <div class="vertical-align">
              <h6
                class="text-white py-4 py-lg-0"
              >Os arredondamentos nunca passam de R$0,99 por compra.</h6>
            </div>
          </div>
          <div class="col-12 col-lg bg-secondary px-3 px-lg-4">
            <div class="vertical-align">
              <h6 class="text-white py-4 py-lg-0">
                Você pode descadastrar seu cartão quando quiser, de forma
                simples e rápida pelo site.
              </h6>
            </div>
          </div>
          <div class="col-12 col-lg bg-blue-3 px-3 px-lg-4">
            <div class="vertical-align">
              <h6 class="text-white py-4 py-lg-0">
                A Plataforma InCENTive atende aos principais protocolos globais
                de segurança digital.
              </h6>
            </div>
          </div>
          <div class="col-12 col-lg bg-blue-4 px-3 px-lg-4">
            <div class="vertical-align">
              <h6 class="text-white py-4 py-lg-0">
                No momento, aceitamos apenas Cartões de Crédito Mastercard.
                Outros cartões e bandeiras serão aceitos em breve.
              </h6>
            </div>
          </div>
          <div class="col-12 col-lg bg-blue-5 px-3 px-lg-4">
            <div class="vertical-align">
              <h6 class="text-white py-4 py-lg-0">O valor de doação mínima mensal é de R$5,00.</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section role="how-it-works" class="bg-white">
      <div class="container-fluid">
        <div class="row">
          <div class="col-8 offset-2 col-lg-8 offset-lg-2 pt-lg-5 mt-5">
            <h4 class="text-black text-center mb-3">
              <strong>Quem usa a plataforma InCENTive</strong>
            </h4>
            <div class="title-bar" />
          </div>
        </div>
        <div class="row text-center py-lg-5 mt-5">
          <div class="col pt-5 pt-lg-0">
            <img src="../../public/static/assets/img/partners/logo-aacd.png" alt="..." height="90" />
          </div>
          <div class="col pt-5 pt-lg-0">
            <img
              src="../../public/static/assets/img/partners/logo-greenpeace.png"
              alt="..."
              height="90"
            />
          </div>
          <div class="col pt-5 pt-lg-0">
            <img
              src="../../public/static/assets/img/partners/logo-instituto-da-crianca.png"
              alt="..."
              height="90"
            />
          </div>
          <div class="col pt-5 pt-lg-0">
            <img src="../../public/static/assets/img/partners/logo-sesi.png" alt="..." height="90" />
          </div>
          <div class="col pt-5 pt-lg-0">
            <img
              src="../../public/static/assets/img/partners/logo-make-a-wish.png"
              alt="..."
              height="90"
            />
          </div>
          <div class="col pt-5 pt-lg-0">
            <img
              src="../../public/static/assets/img/partners/logo-instituto-ronald-mcdonalds.png"
              alt="..."
              height="90"
            />
          </div>
          <div class="col pt-5 pt-lg-0">
            <img
              src="../../public/static/assets/img/partners/logo-gaia-mais.png"
              alt="..."
              height="90"
            />
          </div>
          <div class="col pt-5 pt-lg-0">
            <img
              src="../../public/static/assets/img/partners/logo-fundacao-cafu.png"
              alt="..."
              height="90"
            />
          </div>
        </div>
        <div class="row px-5 py-5 mb-3">
          <div class="col-12 col-lg-6 offset-lg-3">
            <p class="text-black text-center">
              "O brasileiro é solidário e disposto a contribuir, mas a falta
              de tempo e de canais que possibilitam doações são os principais
              fatores que não potencializam esse engajamento.
              <br />Essa nova
              tecnologia resolve esses dois problemas, pois basta um simples
              cadastro para realizar doações com pequenos valores, sem mudar
              nada na rotina.
              <br />A nossa expectativa é que essa nossa parceria cause uma
              grande impacto positivo em nosso trabalho, contribuindo de forma
              significativa para os atendimentos que realizamos diariamente na
              AACD."
            </p>
            <p class="text-black text-center">
              <strong>
                Edson Brito, Superintendente de Marketing
                <br />e Relações Internacionais da AACD
              </strong>
            </p>
          </div>
        </div>
      </div>
    </section>
    <FooterGlobal />
  </div>
</template>

<script>
import HeaderGlobal from "./HeaderGlobal.vue";
import NumberText from "./widgets/NumberText.vue";
import FooterGlobal from "./FooterGlobal.vue";

// import { Survey } from "../services/Survey.js";
// const s = new Survey();

// import { Guest } from "../em1click/SmartSurvey.js";
// const g = new Guest();

//     import { mask } from "vue-the-mask";
export default {
  name: "Home",
  components: {
    HeaderGlobal,
    NumberText,
    FooterGlobal
  },
  data: () => ({
    btnMes: "Quero responder",
    nome: "",
    sobreNome: "",
    rg: "",
    cpf: "",
    phone: "",
    email: "",
    errors: [],
    qtErros: 0,
    surv: {}
  }),
  // directives: { mask },
  created() {},
  mounted() {},
  watch: {},
  computed: {
    inputInvalid() {
      if (this.qtErros == 0) return false;
      else return true;
    }
  },
  methods: {
    beginDonation() {
      this.$router.push("beginDonation");
    }
    // submit() {
    //   //this.$router.push("home");
    // },

    // checkForm() {
    //   this.errors = [];
    //     this.qtErros = 0;

    //   if (!this.nome) {
    //     this.ErrorOccured("Informe seu Nome.", 1);
    //   }

    //   if (!this.sobreNome) {
    //     this.ErrorOccured("Informe seu sobreNome.", 2);
    //   }

    //   if (!this.rg) {
    //     this.ErrorOccured("Informe seu RG.", 3);
    //   }

    //   if (!this.cpf) {
    //     this.ErrorOccured("Informe seu CPF.", 4);
    //   } else {
    //     if (!this.TestaCPF(this.cpf))
    //       this.ErrorOccured("Verifique, CPF Inválido", 4);
    //   }

    //   if (!this.phone) {
    //     this.ErrorOccured("Informe seu número de celular.", 5);
    //   } else {
    //     if (!this.TestaPhone(this.phone)) {
    //       this.ErrorOccured("Verifique, número de celular inválido.", 5);
    //     }
    //   }

    //   if (!this.email) {
    //     this.ErrorOccured("Informe seu E-mail.", 6);
    //   } else {
    //     if (!this.TestaEmail(this.email))
    //       this.ErrorOccured("Verifique, E-mail Inválido", 6);
    //   }

    //     var ok = false;

    //     if (this.errors)
    //     {
    //         if (this.errors.length == 0)
    //             ok = true;
    //     }
    //     else
    //     {
    //     ok = true;
    //     }

    //   if (ok) {
    //     var payload = {
    //         cpf: this.cpf,
    //         rg: this.rg,
    //         nome: this.nome,
    //         sobreNome: this.sobreNome,
    //         celular: this.phone,
    //         email: this.email
    //       };

    //       this.$store.commit("SET_GuestData", payload);
    //        g.UpdateGuest(payload).then(ret => {
    //            if (ret) { //atualizamos os dados do convidado e chamamos o survey
    //                      s.Start(this.cpf, this.phone).then(
    //                         ret => {
    //                           this.$store.commit("SET_SurveyStruct", ret.surveyStruct);
    //                           this.$store.commit("SET_Req", 0);
    //                           this.$store.commit("SET_Chapter", 0);
    //                           this.$store.commit("SET_SurveyUserId", ret.userSurveyId);
    //                           this.$store.commit("SET_UserId", this.cpf);
    //                           this.$store.commit("SET_LastReq", 0);
    //                           this.$store.commit("SET_LastChapter", 0);
    //                           this.surv = ret;
    //                           this.$router.push("survey");
    //                         },
    //                         err => alert(err)
    //                       );
    //                     }
    //                 },
    //             err => this.ErrorOccured(err.msg, 10)
    //         );
    //   }
    //   else window.scrollTo(0, 0);
    //   //e.preventDefault();
    // },
    // ErrorOccured(value, id) {
    //   var payload = { questid: id, msg: value };

    //   if (this.errors) {
    //     var found = false;
    //     for (var i = 0; i < this.errors.length; i++) {
    //       if (this.errors[i].questid == id) {
    //         this.errors[i] = payload;
    //         found = true;
    //       }
    //     }
    //     if (!found) {
    //       this.errors.push(payload);
    //       this.qtErros++;
    //     }
    //   } else {
    //     this.qtErros++;
    //     this.errors.push(payload);
    //   }
    // },
    // TestaCPF: function(strCPF) {
    //   var Soma;
    //   var Resto;
    //   Soma = 0;
    //   strCPF = strCPF.replace(/[^\d]/g, "");
    //   if (strCPF == "00000000000") return false;
    //   if (strCPF == "11111111111") return false;
    //   if (strCPF == "22222222222") return false;
    //   if (strCPF == "33333333333") return false;
    //   if (strCPF == "44444444444") return false;
    //   if (strCPF == "55555555555") return false;
    //   if (strCPF == "66666666666") return false;
    //   if (strCPF == "77777777777") return false;
    //   if (strCPF == "88888888888") return false;
    //   if (strCPF == "99999999999") return false;
    //   var i;
    //   for (i = 1; i <= 9; i++)
    //     Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    //   Resto = (Soma * 10) % 11;

    //   if (Resto == 10 || Resto == 11) Resto = 0;
    //   if (Resto != parseInt(strCPF.substring(9, 10))) return false;

    //   Soma = 0;
    //   for (i = 1; i <= 10; i++)
    //     Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    //   Resto = (Soma * 10) % 11;

    //   if (Resto == 10 || Resto == 11) Resto = 0;
    //   if (Resto != parseInt(strCPF.substring(10, 11))) return false;
    //   return true;
    // },
    // TestaRG: function(rg) {
    //   // value = document.getElementById("cpf").value;
    //   let strRG = rg.replace(/[^\d]/g, "");
    //   if (strRG == "000000000") return false;
    //   if (strRG == "111111111") return false;
    //   if (strRG == "222222222") return false;
    //   if (strRG == "333333333") return false;
    //   if (strRG == "444444444") return false;
    //   if (strRG == "555555555") return false;
    //   if (strRG == "666666666") return false;
    //   if (strRG == "777777777") return false;
    //   if (strRG == "888888888") return false;
    //   if (strRG == "999999999") return false;

    //   var re = /^[0-9]{2}.[0-9]{3}.[0-9]{3}-[0-9]{1}$/;
    //   if (re.test(rg)) {
    //     return true;
    //   } else {
    //     // form.cpf.focus();
    //     return false;
    //   }
    // },
    // TestaEmail: function(rg) {
    //   var rgRegex = /\S+@\S+\.\S+/;
    //   if (rgRegex.test(rg)) {
    //     return true;
    //   } else {
    //     // form.cpf.focus();
    //     return false;
    //   }
    // },

    // TestaPhone: function(cel) {
    //   var celRegex = /(0?[1-9]{2})*\D*(9)\D?(\d{4})+\D?(\d{4})\b/;
    //   if (celRegex.test(cel)) {
    //     return true;
    //   } else {
    //     // form.cpf.focus();
    //     return false;
    //   }
    // }
  }
};
</script>
