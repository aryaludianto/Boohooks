<template>
  <div class="navbar">
    <!-- <router-link to="/"> -->
    <h2 class="title">Boohooks</h2>
    <!-- </router-link> -->

    <div class="nav-content">
      <a href="/">Home</a>
      <div class="dropdown">
        <button class="dropbtn">
          Categories
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <!-- <a
            v-for="(category, index) in categories"
            :key="index"
            v-bind:value="index"
          >{{category.volumeInfo.categories ? category.volumeInfo.categories[0] : null }}</a>-->

          <a
            v-for="category in filteredCategories"
            :key="category" v-on:click="onClick(category)"
            v-bind:value="category"
          >{{ category && category }}</a>
        </div>
      </div>
      <a href="#random">Random</a>
    </div>
    <div class="keyword">
      <p>Search By :</p>
      <input v-model="keyword" placeholder="keyword" v-on:keyup.enter="onSubmit(keyword)" />
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
  data() {
    return {
      keyword: null
    };
  },
  methods: {
    onSubmit(e: String) {
      this.$emit("submit", e);
    },
    onClick(e: String){
      this.$emit("click", e);

    }
  },
  computed: {
    filteredCategories() {
      let filtered: Array<String> = [];
      this.data &&
        Object.values(this.data).map(data => {
          data.volumeInfo.categories !== undefined &&
            filtered.push(data.volumeInfo.categories[0]);
        });
      let arr = filtered.reduce(
        (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
        []
      );

      arr.splice(0,0,"All")

      return arr;
    }
  }
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
  /* overflow: hidden; */
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

.keyword {
  display: flex;
  flex-direction: row;
  align-items: auto;
}

.keyword input {
  margin: 3% 0;
}
</style>
