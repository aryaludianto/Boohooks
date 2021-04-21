<template>
  <div class="books">
    <div id="large-th">
      <div class="container">
        <!-- for the first landing page, header will be shown below -->
        <div class="welcome" v-if="keyword === 'all'">
          <h1>Welcome to Boohooks!</h1>
          <p>You can start looking by searching any book you desire</p>
        </div>
        <!-- after user entered keyword and search, header for the displayed books will be shown below -->
        <div class="welcome-1" v-else-if="keyword != null">
          <h2>Boohooks list of "{{ keyword }}"</h2>
        </div>
        <!-- list of 3 books on Bookdetails will have header shown below -->
        <div class="welcome" v-else>
          <h2>{{ books[0].volumeInfo.authors[0] }}'s Boohooks</h2>
        </div>
        <br />
        <!-- End oof the header -->

        <!-- book container for books from APi  -->
        <div class="books-container">
          <div id="list-th" v-for="(book, index) in books" :key="index">
            <router-link
              :to="{ name: 'BookDetails', params: { bookDetails: book } }"
            >
              <div v-if="book.volumeInfo.imageLinks" class="book read">
                <img
                  class="cover"
                  :src="book.volumeInfo.imageLinks.thumbnail"
                />
                <p class="description title">{{ book.volumeInfo.title }}</p>
              </div>

              <div v-else class="book read">
                <img class="cover" src="./img/noCover.png" />
                <p class="description title">{{ book.volumeInfo.title }}</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Book",
  components: {},
  props: {
    books: Array,
    keyword: String,
  },
  data() {
    return {};
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.books {
  margin: 7.5% auto;
  width: 100%;
  display: flex;
  justify-content: center;
  min-height: 100vh;
}

.container {
  margin: 0;
  max-width: 100%;
}

.choose {
  width: 100%;
  height: 40px;
}
.fa {
  margin-right: 20px;
  font-size: 30px;
  color: gray;
  float: right;
}

/******************************************
Book stuff
*******************************************/

.book {
  display: inline-block;
  width: 331px;
  height: 573px;
  box-shadow: 0 0 20px #aaa;
  margin: 25px;
  padding: 10px 10px 0 10px;
  vertical-align: top;
  transition: height 1s;
  overflow: hidden;
}
/* star button */
.book:after {
  font-family: FontAwesome;
  /* content: "\f006"; */
  font-size: 35px;
  position: relative;
  left: -0.1cm;
  top: -1.6cm;
  float: right;
}

.cover {
  height: 80%;
  overflow: hidden;
  width: 100%;
}

.cover img {
  width: 100%;
  height: 100%;
}

.book p {
  margin-top: 1%;
  font-size: auto;
  text-decoration: none;
}

.book.author {
  font-size: auto;
}

.welcome {
  margin-top: 0;
  font-size: 200%;
}

h1 {
  color: gray;
  text-align: center;
  font-size: 50px;
  margin-bottom: -3px;
}

/**********************************
display change
***********************************/
/*book height smaller, cover opacity, move text onto cover
animate it */
#list-th:target .book {
  height: 100px;
  width: 250px;
  padding: 10px;
  margin: 25px auto 25px auto;
}

#list-th:target .cover {
  width: 246px;
}

#list-th:target img {
  opacity: 0.1;
}

#list-th:target p {
  margin-top: -62px;
  margin-left: 20px;
}
/* remove button? */
#large-th:target .book {
  height: 390px;
}

.books-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.description {
  height: 100%;
  width: 100%;
}

.description p {
  margin-top: 8%;
  text-decoration: none;
}

p.description.title {
  font-family: Arial, Helvetica, sans-serif;
  color: #41b883;
  height: 100%;
  font-size: 20px;
  overflow: hidden;
  margin-top: 1%;
}

#list-th a {
  text-decoration: none;
}

.book:hover {
  overflow: hidden;
}

router-link {
  text-decoration: none;
}

@media only screen and (min-width: 1900px) {
  .welcome {
    margin-top: 0;
    font-size: 130%;
  }

  .book {
    display: inline-block;
    width: 200px;
    height: 360px;
    box-shadow: 0 0 20px #aaa;
    margin: 25px;
    padding: 10px 10px 0 10px;
    vertical-align: top;
    transition: height 1s;
    overflow: hidden;
  }
  /* star button */
  .book:after {
    font-family: FontAwesome;
    /* content: "\f006"; */
    font-size: 35px;
    position: relative;
    left: -0.1cm;
    top: -1.6cm;
    float: right;
  }

  .cover {
    height: 80%;
    overflow: hidden;
    width: 100%;
  }

  .cover img {
    width: 100%;
    height: 100%;
  }

  .book p {
    margin-top: 1%;
    font-size: auto;
    text-decoration: none;
  }

  .book.author {
    font-size: auto;
  }

  p.description.title {
    font-size: 88%;
  }
}

@media (max-width: 941px) {
  .welcome {
    font-size: 100%;
  }
  .books {
    min-height: 100%;
  }

  .container {
    max-width: 700px;
  }
  .book {
    margin: 49px;
  }
}

@media (max-width: 730px) {
  .books {
    min-height: 100%;
  }
  .book {
    display: block;
    margin: 0 auto;
    margin-top: 50px;
    margin: 25px;
  }
  /* .cover {
  } */
}

@media only screen and (max-width: 600px) {
  .welcome {
    margin-top: 10%;
  }

  .welcome-1 {
    margin-top: 15%;
  }

  .books {
    margin-top: 10%;
    min-height: 75vh;
  }

  .container {
    max-width: 100%;
    max-height: 100%;
  }

  .book {
    width: 110px;
    height: 198px;
    box-shadow: 0 0 20px #aaa;
    margin: 25px;
    padding: 10px 10px 0 10px;
    vertical-align: top;
    transition: height 1s;
  }

  p.title {
    font-size: 10px;
  }

  .container h1 {
    font-size: 30px;
  }

  p.description.title {
    font-size: 12px;
  }
}

@media only screen and (max-width: 450px) {
  .welcome h1 {
    margin-top: 20%;
  }
}
</style>
