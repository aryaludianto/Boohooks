<template>
  <div class="home">
    <Navbar></Navbar>
    <Book v-bind:books="categories" v-bind:keyword="keyword"></Book>
    <!-- <h1>{{$log(categories)}}</h1> -->
    <Footer></Footer>
  </div>
</template>

<script>
import Vue from "vue";
import Navbar from "./Navbar.vue";
import Book from "./Book.vue";
import Footer from "./Footer";

export default Vue.extend({
  name: "Home",
  components: {
    Navbar,
    Book,
    Footer
  },
  props: {},
  data() {
    return {
      loading: false,
      categories: null,
      error: null,
      keyword: "all"
    };
  },
  created() {
    // fetch the data when the view is created and the data is
    // already being observed

    this.fetchData();
  },
  watch: {
    // call again the method if the route changes
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      this.error = this.categories = null;
      this.loading = true;
      // replace `getPost` with your data fetching util / API wrapper
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.keyword}`, {
        method: "GET"
        // ,
        // headers: { "X-API-Key": "yDopPricaMTxYJvgYSF3d1dah1k2TlgaijneYq1G" }
      })
        .then(response => {
          if (response.ok) {
            // this.categories = response.json().items;
            return response.json();
          } else throw new Error(response.statusText);
        })
        .then(data => {
          this.categories = data.items;
          data.items.forEach(item => {
            // console.log(item.volumeInfo.imageLinks.thumbnail)
          });
        })
        .catch(err => {
          this.error = err.toString();
        });
    }
  },
  computed: {
    // testPrintState: function() {
    //   console.log(this.categories);
    // }
  }
});
</script>

<style>
.home {
  margin: 0;
  height: 100%;
  width: 100%;
}
</style>