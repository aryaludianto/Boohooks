<template>
  <div class="random">
    <Navbar
      @submit="onEnterNav"
      @click="onClickNav"
      v-bind:data="data"
    ></Navbar>
    <div class="randomizer">
      <h1>Random Book list</h1>
      <p>click below to randomize the list</p>
      <button v-on:click="randomBtn">Randomizer</button>
    </div>

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
let randomWords = require("random-words");

export default Vue.extend({
  name: "Random",
  components: {
    Navbar,
    Book,
    Footer,
    Loading
  },
  props: {},
  data() {
    return {
      loading: false,
      data: null,
      error: null,
      keyword: "all",
      filterBy: null,
      url: "https://www.googleapis.com/books/v1/volumes?q="
    };
  },
  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.randomizer();
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
      fetch(`${this.url}${this.keyword}`, {
        method: "GET"
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          } else throw new Error(response.statusText);
        })
        .then(data => {
          this.data = data.items;
          this.loading = false;
        })
        .catch(err => {
          this.error = err.toString();
        });
    },
    onEnterNav(val) {
      this.keyword = val;
      this.fetchData();
    },
    onClickNav(val) {
      this.filterBy = val;
    },
    randomizer() {
      this.keyword = randomWords(1)[0];
    },
    randomBtn() {
      this.randomizer();
      this.fetchData();
    }
  },
  computed: {
    displayData() {
      let filtered =
        this.filterBy != null && this.filterBy != "All"
          ? this.data &&
            Object.values(this.data).filter(
              data =>
                data.volumeInfo.categories != undefined &&
                data.volumeInfo.categories[0] === this.filterBy
            )
          : this.data;

      return filtered;
    }
  }
});
</script>

<style>
.random {
  margin: 0;
  height: 100%;
  width: 100%;
}

.randomizer {
  margin-top: 10%;
}

@media only screen and (max-width: 600px) {
  .randomizer {
    margin-top: 20%;
  }
}
</style>
