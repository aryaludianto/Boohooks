<template>
  <div class="navbar" v-bind:class="burgerBar">
    <div class="desktop-res" v-bind:class="burgerBar">
      <h2 class="title1">Boohooks</h2>
      <div class="nav" v-bind:class="burgerBar" v-on:click="burgerBarClick">
        <h2 class="title">Boohooks</h2>
      </div>
      <div class="nav-content nav-content-res" v-bind:class="burgerBar">
        <a href="/" v-bind:class="activeStatus.home">Home</a>
        <router-link to="/randomPage" v-bind:class="activeStatus.random"
          >Random</router-link
        >

        <div class="dropdown">
          <button class="dropbtn">
            <i class="fas fa-sort-amount-down"></i>
            Sort
          </button>
          <div class="dropdown-content">
            <a
              v-for="category in filteredCategories"
              :key="category"
              v-on:click="onClick(category)"
              v-bind:value="category"
              >{{ category && category }}</a
            >
          </div>
        </div>
      </div>
      <div class="keyword" v-if="this.$route.name == 'home'">
        <input
          v-model="keyword"
          placeholder="Search"
          v-on:keyup.enter="onSubmit(keyword)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Navbar",
  props: {
    data: Array,
  },
  created() {
    //to determine which nav-bar buttons are active
    this.$route.name === "home"
      ? (this.activeStatus = { home: "inactive", random: "" })
      : (this.activeStatus = { home: "", random: "inactive" });
    this.$route.name === "BookDetails" &&
      (this.activeStatus = { home: "", random: "" });
  },
  data() {
    return {
      keyword: null,
      burgerBar: "",
      activeStatus: { home: "", random: "" },
    };
  },
  methods: {
    onSubmit(e: String) {
      //Function to submit keyword from nav-bar to home component
      this.$emit("submit", e);
    },
    onClick(e: String) {
      //Nav-bar to know which button is clicked
      this.$emit("click", e);
      this.burgerBarClick();
    },
    burgerBarClick() {
      //Function to show and unshow mobile nav-bar menu
      this.burgerBar === ""
        ? (this.burgerBar = "active")
        : (this.burgerBar = "");
    },
  },
  computed: {
    filteredCategories() {
      //Function to filter out recursive categories and display categories in the nav-bar
      let filtered: Array<String> = [];
      this.data &&
        Object.values(this.data).map((book: any) => {
          book.volumeInfo.categories !== undefined &&
            filtered.push(book.volumeInfo.categories[0]);
        });
      let arr = filtered.reduce(
        (unique: any, item: any) =>
          unique.includes(item) ? unique : [...unique, item],
        []
      );
      arr.splice(0, 0, "All");
      return arr;
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inactive {
  pointer-events: none;
}

.navbar a.inactive {
  color: #41b883;
}

.title {
  margin-left: 2%;
  color: #41b883;
  display: none;
}

.title1 {
  margin-left: 2%;
  color: #41b883;
  font-size: 50px;
}

.nav-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 5%;
}

.navbar {
  margin: 0;
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  flex-direction: row;
  align-items: center;
}

.navbar a {
  float: left;
  font-size: 210%;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.dropdown {
  float: left;
  overflow: hidden;
  width: 177px;
}

.desktop-res {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.dropbtn {
  width: 200%;
}

.dropdown .dropbtn {
  font-size: 210%;
  border: none;
  outline: none;
  color: black;
  padding: 14px 16px;
  padding: auto;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
  /* display: flex; */
  flex-direction: row;
  width: 100%;
  text-align: right;
}

.navbar a:hover,
.dropdown:hover .dropbtn {
  background-color: #ddd;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  /* min-width: 160px; */
  width: 250px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  cursor: pointer;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  width: 145px;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.keyword {
  display: flex;
  flex-direction: row;
  align-self: center;
  align-content: flex-end;
}

.keyword p {
  width: 100px;
}

.keyword input {
  margin: 5% 0;
  width: 362px;
  font-size: 195%;
  height: 150%;
}

/* @media only screen and (max-width: 1950px) {
  .title {
    margin-left: 2%;
    color: #41b883;
    display: none;
  }

  .title1 {
    margin-left: 2%;
    color: #41b883;
    font-size: 100%;
  }

  .nav-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 5%;
  }

  .navbar {
    margin: 0;
    position: fixed;
    top: 0;
    width: 100%;
    height: 30px;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .navbar a {
    float: left;
    font-size: 100%;
    color: black;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  .dropdown {
    float: left;
    overflow: hidden;
    width: 177px;
  }

  .desktop-res {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .dropdown .dropbtn {
    font-size: 100%;
    border: none;
    outline: none;
    color: black;
    padding: 14px 16px;
    padding: auto;
    background-color: inherit;
    font-family: inherit;
    margin: 0;
    /* display: flex; */
    flex-direction: row;
    width: 100%;
    text-align: right;
  }

  .navbar a:hover,
  .dropdown:hover .dropbtn {
    background-color: #ddd;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    width: 200px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    cursor: pointer;
  }

  .dropdown-content a {
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
    width: 145px;
  }

  .dropdown-content a:hover {
    background-color: #ddd;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .keyword {
    display: flex;
    flex-direction: row;
    align-self: center;
    align-content: flex-end;
  }

  .keyword p {
    width: 100px;
  }

  .keyword input {
    margin: 5% 0;
    font-size: 100%;
    width: 100%;
  }
} */

@media only screen and (max-width: 860px) {
  .dropdown {
    width: 100px;
  }
}

@media only screen and (max-width: 750px) {
  .keyword {
    margin-left: 0;
    width: 329px;
  }
}

@media only screen and (max-width: 600px) {
  div.nav.active {
    margin: 10% 0;
  }

  .title {
    display: block;
    margin-left: 4%;
    color: #41b883;
  }
  .title1 {
    display: none;
  }

  .desktop-res {
    display: flex;
    flex-direction: row;
  }

  .desktop-res.active {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .navbar.active {
    height: 100%;
    display: block;
  }

  .navbar.active div.keyword {
    display: none;
  }

  .nav {
    display: flex;
    margin: auto auto auto 5%;
    flex-direction: column;
  }

  .nav-content {
    display: none;
  }

  .keyword p {
    font-size: 10px;
    width: 100%;
    margin: auto 0 auto 10px;
    text-align: right;
  }

  .keyword input {
    width: 100%;
    height: 48%;
    margin: auto;
  }

  .nav-content-res.active {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background-color: white;
    position: relative;
    margin: 0;
  }

  .nav-content-res.active a {
    margin: 0 10% 0;
    font-size: 20px;
  }

  /* dropdown */
  .dropdown {
    width: 100%;
    margin: 0 10% 0 10%;
    text-align: center;
  }

  .dropdown .dropbtn {
    font-size: 20px;
    border: none;
    outline: none;
    color: black;
    padding: auto;
    background-color: inherit;
    font-family: inherit;
    /* margin: 0 10% 0 10%; */
  }

  .dropdown:hover {
    display: flex;
    flex-direction: column;
  }

  .navbar a:hover,
  .dropdown:hover .dropbtn {
    background-color: #ddd;
  }

  .dropdown-content {
    /* display: none; */
    position: inherit;
    background-color: #f9f9f9;
    overflow: hidden;
    z-index: 1;
  }

  .dropdown-content {
    position: inherit;
    background-color: #f9f9f9;
    overflow-y: scroll;
  }

  .dropdown-content a {
    float: none;
    color: black;
    padding: auto;
    text-decoration: none;
    display: block;
    text-align: left;
  }
}

@media only screen and (max-width: 450px) {
  .keyword {
    margin-left: 16%;
    width: 229px;
  }
}

@media only screen and (max-width: 350px) {
  .keyword {
    margin-left: 8%;
    width: 100%;
  }
}
</style>
