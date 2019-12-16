<template>
  <div class="body">
    <Navbar></Navbar>
    <!-- <div class="hello">
      <h3>Welcome to The Pet's facts, Where you can find different facts aboutt Cats, Dogs, and Horses</h3>
    </div>-->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Navbar from "../components/Navbar.vue";

export default Vue.extend({
  name: "Hello",
  components: {
    Navbar
  },
  props: {
    msg: String
  }
  // ,
  // data() {
  //   return {
  //     loading: false,
  //     categories: null,
  //     error: null
  //   };
  // },
  // created() {
  //   // fetch the data when the view is created and the data is
  //   // already being observed
  //   this.fetchData();
  // },
  // watch: {
  //   // call again the method if the route changes
  //   $route: "fetchData"
  // },
  // methods: {
  //   fetchData() {
  //     this.error = this.post = null;
  //     this.loading = true;
  //     // replace `getPost` with your data fetching util / API wrapper
  //     fetch("https://dog.ceo/api/breeds/list/all",
  //       {
  //         method: "GET"
  //         // ,
  //         // headers: { "X-API-Key": "yDopPricaMTxYJvgYSF3d1dah1k2TlgaijneYq1G" }
  //       }

  //     )
  //       .then(response => {
  //         if (response.ok) {
  //           return response.json();
  //         } else throw new Error(response.statusText);
  //       })
  //       .then(data => {
  //         this.categories = data.message;
  //       })
  //       .catch(err => {
  //         this.error = err.toString();
  //       });

  // getPost(this.$route.params.id, (err, post) => {
  //   this.loading = false;
  //   if (err) {
  //     this.error = err.toString();
  //   } else {
  //     this.post = post;
  //   }
  // });
  // }
  // }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  padding-top: 10%;
}

h3 {
  margin: 40px 0 0;
}
</style>
