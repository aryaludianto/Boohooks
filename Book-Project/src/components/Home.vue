<template>
  <div class="home">
    <Navbar
      @submit="onEnterNav"
      @click="onClickNav"
      v-bind:data="data"
    ></Navbar>
    <Book v-bind:books="displayData" v-bind:keyword="keyword"></Book>
    <Footer></Footer>
    <loading :active.sync="loading"></loading>
  </div>
</template>

<script>
import Vue from "vue";
import Navbar from "./Navbar.vue";
import Book from "./Book.vue";
import Footer from "./Footer";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default Vue.extend({
  name: "Home",
  components: {
    Navbar,
    Book,
    Footer,
    Loading,
  },
  props: {},
  data() {
    return {
      loading: false,
      data: null,
      error: null,
      keyword: "star wars",
      filterBy: null,
      url: "https://www.googleapis.com/books/v1/volumes?q=",
    };
  },
  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    //Function for fetching data from Googlebooks API
    this.fetchData();
  },
  watch: {
    // call again the method if the route changes
    $route: "fetchData",
  },
  methods: {
    fetchData() {
      this.error = this.categories = null;
      this.loading = true;
      fetch(`${this.url}${this.keyword}`, {
        method: "GET",
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else throw new Error(response.statusText);
        })
        .then((data) => {
          this.data = data.items;
          this.loading = false;
        })
        .catch((err) => {
          this.error = err.toString();
        });
    },
    onEnterNav(val) {
      //function to retreive keyword from nav-bar and fetch API based on keyword from user
      this.keyword = val;
      this.fetchData();
    },
    onClickNav(val) {
      //function to retreive filter value from nav-bar and diplay Book/Books based Filter categories from user
      this.filterBy = val;
    },
  },
  computed: {
    displayData() {
      //function to display Book/books based on filtered categories
      let filtered =
        this.filterBy != null && this.filterBy != "All"
          ? this.data &&
            Object.values(this.data).filter(
              (data) =>
                data.volumeInfo.categories != undefined &&
                data.volumeInfo.categories[0] === this.filterBy
            )
          : this.data;
      return filtered;
    },
  },
});
</script>

<style>
.home {
  margin: 0;
  height: 100%;
  width: 100%;
}
</style>
