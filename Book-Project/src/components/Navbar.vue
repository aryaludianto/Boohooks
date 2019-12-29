<template>
  <div class="navbar" v-bind:class="burgerBar">
    <!-- Sorry for not using DRY method -->
    <!-- below is navbar for mobile screen -->
    <div class="mobile-res" v-bind:class="burgerBar">
      <div class="nav" v-bind:class="burgerBar" v-on:click="burgerBarClick">
        <h2 class="title">Boohooks</h2>
      </div>
      <div class="nav-content-res" v-bind:class="burgerBar">
        <a href="/" v-bind:class="activeStatus.home">Home</a>
        <div class="dropdown">
          <button class="dropbtn">
            Sort By Categories
            <i class="fa fa-caret-down"></i>
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
        <router-link to="/randomPage" v-bind:class="activeStatus.random">
          <!-- <a href="/randomPage" > -->
          Random
          <!-- </a> -->
        </router-link>
      </div>
      <div class="keyword" v-if="this.$route.name == 'home'">
        <p>Search By :</p>
        <input
          v-model="keyword"
          placeholder="keyword"
          v-on:keyup.enter="onSubmit(keyword)"
        />
      </div>
    </div>

    <!-- below is navbar for Desktop screen -->
    <div class="desktop-res">
      <h2 class="title">Boohooks</h2>
      <div class="nav-content">
        <a href="/" v-bind:class="activeStatus.home">Home</a>
        <div class="dropdown">
          <button class="dropbtn">
            Sort By Categories
            <i class="fa fa-caret-down"></i>
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
        <!-- <a href="/randomPage" v-bind:class="activeStatus.random">Random</a> -->
        <router-link to="/randomPage" v-bind:class="activeStatus.random">
          <!-- <a href="/randomPage" > -->
          Random
          <!-- </a> -->
        </router-link>
      </div>
      <div class="keyword" v-if="this.$route.name == 'home'">
        <p>Search By :</p>
        <input
          v-model="keyword"
          placeholder="keyword"
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
    data: Array
  },
  created() {
    // Provide on which page user is and decide which nav-bar buttons are active
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
      activeStatus: { home: "", random: "" }
    };
  },
  methods: {
    onSubmit(e: String) {
      // Function for submit keyword from nav-bar to home component
      this.$emit("submit", e);
    },
    onClick(e: String) {
      //Function for Mobile screen nav-bar to know which button is clicked
      this.$emit("click", e);
      this.burgerBarClick();
    },
    burgerBarClick() {
      //Function for show and unshow mobile nav-bar menu
      this.burgerBar === ""
        ? (this.burgerBar = "active")
        : (this.burgerBar = "");
    }
  },
  computed: {
    filteredCategories() {
      //Function for filter out recursive categories and display the categories in the nav-bar
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
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inactive {
  pointer-events: none;
}
.title {
  margin-left: 2%;
  color: #41b883;
}

.nav {
  display: none;
}

.nav-content {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.mobile-res {
  display: none;
}

.nav-content-res {
  display: none;
}

.navbar {
  margin: 0;
  position: fixed;
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
  width: 177px;
}

.desktop-res {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.dropdown .dropbtn {
  font-size: 16px;
  border: none;
  outline: none;
  color: black;
  padding: 14px 16px;
  padding: auto;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
  display: flex;
  flex-direction: row;
  width: 100%;
}

.navbar a:hover,
.dropdown:hover .dropbtn {
  background-color: #ddd;
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
}

.keyword p {
  width: 100px;
}

.keyword input {
  margin: 5% 0;
}

@media only screen and (max-width: 600px) {
  div.nav.active {
    margin: 0;
  }

  .title {
    margin-left: 4%;
  }

  .desktop-res {
    display: none;
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

  .mobile-res {
    display: flex;
    flex-direction: row;
  }

  .mobile-res.active {
    display: flex;
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
    margin-top: 10%;
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
    /* padding: 14px 16px; */
    padding: auto;
    background-color: inherit;
    font-family: inherit;
    margin: 0 10% 0 10%;
    /* text-align: center; */
    /* width: 100%; */
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
    display: none;
    position: inherit;
    background-color: #f9f9f9;
    /* min-width: 160px;
    box-shadow: 0p x 8px 16px 0px rgba(0, 0, 0, 0.2); */
    overflow: hidden;
    z-index: 1;
  }

  .dropdown-content a {
    float: none;
    color: black;
    /* padding: 12px 16px; */
    padding: auto;
    text-decoration: none;
    display: block;
    text-align: left;
  }
}
</style>
