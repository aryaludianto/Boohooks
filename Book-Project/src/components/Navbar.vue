<template>
  <div class="navbar">
    <h2 class="title">Boohooks</h2>

    <div class="nav-content">
      <a href="/">Home</a>
      <div class="dropdown">
        <button class="dropbtn">
          Categories
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a
            v-for="(key, index) in author"
            :key="index"
            v-bind:value="index"
          >{{key.volumeInfo.title}}</a>
        </div>
      </div>
      <a href="#random">Random</a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Navbar",
  props: {
    author: []
  },
  data() {
    return {};
  }
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
  //     this.error = this.categories = null;
  //     this.loading = true;
  //     // replace `getPost` with your data fetching util / API wrapper
  //     fetch("https://www.googleapis.com/books/v1/volumes?q=search+terms", {
  //       method: "GET"
  //       // ,
  //       // headers: { "X-API-Key": "yDopPricaMTxYJvgYSF3d1dah1k2TlgaijneYq1G" }
  //     })
  //       .then(response => {
  //         if (response.ok) {
  //           return response.json();
  //         } else throw new Error(response.statusText);
  //       })
  //       .then(data => {
  //         this.categories = data.items;
  //       })
  //       .catch(err => {
  //         this.error = err.toString();
  //       });
  //   }
  // }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  margin-left: 2%;
  color: #41b883;
}

.nav-content {
  margin-left: 3%;
}

.navbar {
  margin: 0;
  position: fixed;
  overflow: hidden;
  top: 0;
  width: 100%;
  height: 7.5%;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  flex-direction: row;
  align-items: center;
}

.navbar a {
  float: left;
  font-size: 16px;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown .dropbtn {
  font-size: 16px;
  border: none;
  outline: none;
  color: black;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.navbar a:hover,
.dropdown:hover .dropbtn {
  background-color: pink;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}
.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
