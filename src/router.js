import Vue from 'vue';
import Router from 'vue-router';
import home from '@/components/Home';
// import Survey from "@/components/SurveyPage";
// import cancel from "@/components/Cancel";
import BeginDonation from '@/components/BeginDonation';
import FinalDonation from '@/components/FinalDonation';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'home',
      },
    },
    {
      path: '/home',
      name: 'home',
      component: home,
    },
    {
      path: '/beginDonation',
      name: 'beginDonation',
      component: BeginDonation,
    },
    {
      path: '/finalDonation',
      name: 'finalDonation',
      component: FinalDonation,
    },
    // {
    //   path: "/survey",
    //   name: "Survey",
    //   component: Survey,
    // },
    // {
    //   path: "/finalSurvey",
    //   name: "finalSurvey",
    //   component: FinalSurvey,
    // },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
