<template>
  <div class="book-detail">
    <!-- Nav-bar not returning anything at this point -->
    <Navbar></Navbar>
    <!-- Book details will be shown below -->
    <div class="body">
      <div class="details" :class="show.className">
        <div class="head">
          <h3>{{ bookDetails.volumeInfo.title }} | By</h3>
          <h3 v-for="author in bookDetails.volumeInfo.authors" :key="author">
            {{ author }}
          </h3>
        </div>
        <div class="desc">
          <p>Published: {{ bookDetails.volumeInfo.publishedDate }}</p>
          <p>Page : {{ bookDetails.volumeInfo.pageCount }} Pages</p>
          <a :href="bookDetails.volumeInfo.infoLink" target="_blank">
            <p>Google books Link</p>
          </a>
          <p>
            "
            {{
              bookDetails.volumeInfo.description[0]
                ? bookDetails.volumeInfo.description
                : noDesc
            }}
            "
          </p>
        </div>
        <!-- drop button for accordion div -->
        <div class="show-more" v-on:click="dropButton">
          <p>{{ show.text }}</p>
        </div>
      </div>
      <div class="book read">
        <div class="cover">
          <img
            class="cover-img"
            :src="
              bookDetails.volumeInfo.imageLinks
                ? bookDetails.volumeInfo.imageLinks.thumbnail
                : noCoverUrl
            "
          />
        </div>
        <div class="description">
          <p>
            {{ bookDetails.volumeInfo.title }}
            <!-- <br /> -->
          </p>
        </div>
      </div>
    </div>

    <!-- Book component to display 3 books related to the author -->
    <Book v-bind:books="booksAuthor"></Book>

    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Navbar from "./Navbar.vue";
import Book from "./Book.vue";
import Footer from "./Footer.vue";

export default Vue.extend({
  name: "BookDetails",
  components: {
    Navbar,
    Book,
    Footer
  },
  props: {
    bookDetails: Object,
    keyword: String
  },
  data() {
    return {
      // noCoverUrl:
      //   "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAETCAMAAABDSmfhAAAAaVBMVEV9eXr///99eXl2cnHy8vL19fV8enl/fH3j4+N0cnBzcXG0srNxbW3v7++joqKZlpaOi4urqai/vLyHhYXb2tvFxMTT0tN5dXPOzc6TkZKLiYrl5OWdmpt9e3ywrq+8u7ttbGlpZ2iIiIVHwnfLAAAP/ElEQVR4nO2dibajqhKGCURUnOJWgxqJ3ef9H/JSBY4Z+5yYpO/iXz1sNcFPLIqx2IQ4OTk5OTk5OTk5OTk5OTk5OTk5OTk5OTk5/X+r6LrOJ4Q2XZfNz7Os6w50/rGM0PkHRNHleecLewgJzHXYlJrL8263a6QKa/3/xKnIQR/XzJxQSsBlwfkASeOs3KGOBX6IhsfdQj/iyu1eJsoMN0fueryXAa3Y8CC+pw9zOXKzaiJM2VVutiU3t9wEub1ivICgIzfLASUIlb2KT7UEF8Dtjdr1m+Y3MXZCOUOSnmGOUi76HXIbk+bMGMU/1D5sCkdlVrR5ArQ+5ZjfnohHbZrda+49sdwqsdxwrHgBdPBYBA/jvT6OYkkJEyfzXjjkt+fzuzfbjFubMHJLzNCBm4Q695Mf/TeEDOeygdyOOeHabuCRdpo7/Cj3CXOUs2DB/UvnfuXDB/EqfieVQK0Uyfuop/zD3LsMMpw2uwU3+MQmTtDhKKJYPzwCiGnp/yy3Mno7dxkT4xu8iRu8R0KgqHoAxNEJtvBt/RCGUpn8Bs9u9E7ufW15wCQqb+Rm+CMWzhS568FlCiuijD9pBm1bW664vQzrHiogPw9TfqdoP5xp11EK7WtG7qI0Cpp1vXOK38mNbtqnQufvkVj/rYjQZxNtwmjWPp9xtwNmJ/mKe9taZ8WtOqh7Yjzl2/xW6OkqzUEB8yzpxH1YcweDjm/l9uMTVHracQRi5GYRWI3Obwl1zCme5bcfadUT916Ek8Vv61OW3NgOqbHJMXBTMOv9IdNqTLlVkz/RLlB0yE2tH3yTO1lxczBtqO8FGblHY7A+XXC58N+58fofrHeAG9tTu0jSgXveYgV5wtSXuW04YdOw4PSz3JQgHON8zG9t7Z71d+UJbUJCAS1tyVMeOCL62fymJvvAe1huCeYb/TKFLYaTx5BDla87NPpqiC0Z+LypLyWl76kxl9z6RHsKTugrDDd2B4ohG+MAnw4fZhd0RXs27W9iudtilL8t+AU3ETFawJDfAMi4dWroE89yKAZWGbvST+vDN3Bz7F8abs45HbgFduOisZuJZ/Vj8DCaCmqHhO/tX479YrSH+bsFwlqgJbfTWTAU+DgRreH0Kh8BqShX/nLT/NbFRzChvQb8vxgfoRKa1YowKen8rGS6aYWtW9GmXSGGCl0/CptJkG1dC9VdWqzkOGh2QVsLHFJrNuPH8YNUPxDVzwCnbIXOTQqDKN3YJRqfddt1XZ6m5kHWX6ArbcTr5OTk5OTk9G+ksNk0ToXgD2PbhHMJggYYtExWdTp/W//sihTxsywr8AGQu8myBrhh6JKJQ5d2B8EoV7zIVlKfBFek8HBEzXIzHP8x10SEExC7JIo5Z/1upcPGrdYHAu5hQolyMXDrF5GMiKer3Fu3Wu/J5DfOrhHoB2B+4xxfMWdMfHZOUNDdwR/2Ldl+pP4hd8BW3Dj3tKuaIsMxoGPIcMbsNwzb/sYfPwc949b94CU3jH97jZBUhhn239Gd4JjckZkuwgeze+KGYbMZN06h5AL7XiLCLi9VRFluRbYeen2OG9CDX+CRB24cXLafoTFcFjgjb7g/SWxkuCsw5rOYc++neQ8KTuYkv5Ebx40LObPv/TSKyUWgPQr/Qu76NziNMrT+m5klBseRu/xWbkbAMefsr+Nm4Ow8n7K/i1vYNTTh38atK0hwhl0457Z8381NYFzei/8ufwIzrDiqDJ4c/Xcy+W+cIvlK/43cHJdXeZf1Jf/a+hLtRInctFSAW5j2CUxEmGVkFRrNV3KTuBy5CfrFFlp+AivTjH5tftt1U4bbPMNP6x9M+1t8a7kEoUUYbru6bezvmDH5of39QWKjJTfHKSjDLf1gxA6GtZH0i7h3M248wvUvnEp5tv358wjKBbS/xEc78ijdh/G1hiOuvaHPh7kpwfwu7QrJppESfX0xZ+Xk5OTk5OTk9Odaj50qXHduf+TTmhFYSQPnKec3V5JcpqWgQ2TPDatxput4rEbRpxbWULvYSCcqpy/oewwTaDiXNoVDcfg4gNDZ2Xl6+vyMm9oZNlzoZGeHLr7K+WIW7mq6a7VNU5gkl2vh/cZcIHjBny7oo3Z5/WqC09Gwzn6MVyv0kVp/Z66r6c5FKcP+ACyKwimPgY9jj7czoDB6PHW6ElxajwvTrwaa2QSN5kvZvDIVkO24Zr+YZ+l6wVv0aIk4N8srdb9WmYWLuZ3q4zCi4+F6ObxNMMzTUIrcHFeqXywEVHbmZFwNuSKqQ20juBx4vq7vYqFe9Khrys03UgkZjitcheHG+KE6HDIYpiGf4x4SnHPvQaZT9CMofwE3paZjGKKhwApXyw1hUCZgBwfWJpN4mN82QTJx70UMwWlmatO/ld/JFL/261HPlDK7JhQXOeNBZ3JKYlQAPo0J2EkGb3CXm48JzrmVWZgXA28ub+R3QvjkUR5lN4yTwVhfj0+IURYm7A+7waGCjiXcDDL/KW5MMJnetOVGSRgZ6tktbvV8NxoX+mcQGRdDMuBR9r/gJxwhySQEbgFzGICPQJ98nxuLRVNBgpfcnOBXbuf309zsB8aEG8xNuAm85H+G23lCV3G4WreE8BfPJ4+5wwrMGQbfmktu9F3pHTt5mhtcRcVYYodG7IvUlSYYB5ziGMugvQO6SP6QG7xnxWD2pzIFHLmhxoRFvxBWoG6Wy2nlysMp5g6tAXMd85JhFI7mTm2O4foGiMkoh3Gc+9wmQfD4ezJxH0ANDg+l7JYfTKb1+I9yG11FTNEoTVQcGEphAlQTcII4Fq8p0d79h9wmQU5MggP3pFMGI7eP/Hf5oLakPgbzKRrbqpvjqoyz5LEJ+NOWkxmTxAu4vP8et0lQV4nxOH2yJAoyphtVj7iD+9xcgqs4wNC1aTAoU/WUMeYXVjpiCBHAuZv4Lrfi6HtamyBERFvuoIS4tMTUhDe5k0EPAtgoeLdEOw0uITcj8NZgKJ4Pt02wSQsROMd4mExoHnCbh4M17hhmB3UC2reEQJlQHDy0wlvlUgyL8uX9YonvvvKhIChYHgCtZuM+fidD/QMZmGNZaayHuc3NZwn6kODIjV0M/X5brNfUTX8yrMe/v/hjvRQKW07gruvCmglftXc8rK9vcq8ThFb63H9Tsyrrph98MvAuTpa3wSklMJQE/urs5rxYfgLajbe5sTQuEmSr+hLt6D/X8/DmkyGY08OmoBbUMInZRsG4xTHecwdFVve3bnHLiwTjNbcHo/3/sb7EDk1rywLW8Ni7EWbaI4MBeWwU/ralBWegCn47v3HNUjF8GtvBS24Mlq2vcJPnuRUxDz8cg0VAn4FKbIju0eXZ+GebnSm6sWV+TwFE2gvuMF7KHreYIJaQvY+9nxbNP5PGvsd+Gtjjyk747YKpcP+JaWMMzGa4u7FpjBnG9M2KQUgMwtH0W55z44or88++yPG5hptDk2FnPbM32XytKx5MF/blGM6Jsfzbczf7O7Y/dRhbMCYqjmlujD4E34Jd5v0IYsK9DnLBPcnzIcF2XPtrE2RLj3SEMYd1uGnNnu6nKXyP84hwM0MG3JE1EzSMapwUMxGK2mz26MzWMbq7DBOYRmzMDRbcp1xAYNKa+8hEsDzT3+5fKqgd5iemhthwAWoQdfmR4YPFUv71BOefIBbHX33zMq2b1IrwZXQZuI/V2srLwkE5V4ujpeQVj8DleHl+lq/PzuPXblGbYbTVGN0zYWN0MY53EXa2SGEa7JsuGj+xPrs+8/pNO+itcLnh6PqjXj7UlbNPd+adnJycnJycnJyc3q63xU+9+kbvARdCvGxVse4QMyEezWC/RH5Z1n2e+bG+3b/sidgVDiIWRXf+qcu3rK727TiMV1aphmd/iE4hKpoyERd5FdikTm/hno+wesdzEf7Ra9b5zETbLydB3s4NSupOPW3xTPj50Vul8BlutJm8uItOcW8dJopzcPntz3GjxaSE3Qzoh2kDndPl1a9+lFtrX7XiehkF59HUa/N4Gzdu/XqbGwi6qxsdM5Gf7n2LDbvKbqImiqJc3uXWmX7mbDach05PXQT+r7n5WafdbjMqBVP2u1P4gFtbeu+PA+QwbVtUD76guWHScZfKu/f/19yQa8FjbkNuv/QENdpJsiH3z7PcQE5g+zamnqD+Jm5t5znjNLrpQq5zbxLc82fcu10moscfctxXBI1OScUbuOVi98L/jF006dkPt+c+nLumeF33J4TED9tzhzBNm4hX7TJCxTu5vfhl3Ay5t7dvy/2qzZYc93Pcr9psyeW343bcjtv5E8ftuL+P25VLx+24HferuJ0/cdyO+/u4Xbl03I7bcb+K2/kTx+24v4/blUvH7bgd96u4nT9x3I77+7hduXTcjttxv4rb+RPHfVUnQd/AXe6fWx39JLfn7evwDdxExLzI0v54eoD/kHt/qvu0KagQdPty6SsRw65p+k/RnOs7YSJ3uU91fvAhESZEzPx2v3F+w3tNICCwEXGsbyqLtE6uo93kPlWdb4Bpk/8cg8HutuUelRz7TOIGXUV/Lduvc5dnX4gwFKT7KVcl/E3cY96FTMR+dIF+hbvMiQgZ89Or9vVOblAQHbTFx22/NJg19ykqtGXJpr8WWofc7L3cwNQ3uozJ7niL26sbndEiq24UBuQWm/gT2ZxTUH6O+upYBiuCU+Tr7Cx+Ru84407OuiDGxeqFeElQ1lV/zm2y7Tb5DQHMuFVeGMLfELYpz6t54TpmMRMkT1bcpw42w0tnQYxJWeWND5GvkBYLGf4rN+Humi7NQWmXHQqfSLvbXyya6DjAJxHX7i1F8szs5xw0+mH8fngNSR0dwlg/ti7NArYJO2RpOiQbbcC9kn7JxyrPCgpZFcdFbt24VxWhztyT5UbqtrbMGEkNwKrNzpU2tStV7sbc4ysP9CunmHuHqESO+iCYyPediJJOm1aDhXWPobxavq5lgztts1eXy3val33GBQuFn2LQc60RlU8KzuIGN1evO87gctcHjxplb8rv6X6l9s+aXWEBrBWjXLIC8voI0Cw+3HTcH+UGJRVszikU/HbunjFVw/6CEk5l9bPN9k9wI/pBe5oYjFqT1m3MQn4nJHpT7nCW6j5JTkFZHkFleUqSy16ErtChljn3qa8L6OGiivQgkSmNYJmIF5MXhdZRmScnaLt2zaHgEhqwwkg7QMb9Q9Odq+NpbgjHztRQJJ3btHadPzqR1tflVUyKmeTajXfnvg6SpHsNNIGgfabASE2QoZptlEhNoD+XumEq/LbryzFvk4jEfj8+y+kYZYWCDZolboRBzS9VUbMtHnUisNUEe108oE1amV8CYzeSVPaC3TgRfzFKGEo/He1iqNiDqlO6Rpf4VYqpjL/8ZdiGcr6rx4d+f7eIST62C7260zbxEY5/IW3/HTQez9l79pJ5jZT5RT0o/qpK+y1S9vdz/E3MTk5OTk5OTk5OTk5OX6H/Ad1QXEGE8PSgAAAAAElFTkSuQmCC",
      loading: false,
      error: null,
      url: "https://www.googleapis.com/books/v1/volumes?q=",
      authorBasedBooks: null,
      booksAuthor: Array,
      show: { text: "Show more", className: "" },
      noDesc: "No Description about this book"
    };
  },
  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    //Fetch data only related to the author of the book displayed on book details page
    this.fetchData();
  },
  watch: {
    // call again the method if the route changes
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      this.error = this.authorBasedBooks;
      //empty the result container
      this.authorBasedBooks = null;
      this.loading = true;
      //fetch data based on author's name
      fetch(`${this.url}${this.bookDetails.volumeInfo.authors[0]}`, {
        method: "GET"
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          } else throw new Error(response.statusText);
        })
        .then(data => {
          this.authorBasedBooks = data.items;
          //Filter the result by only taking 3 top books out of 10 books provided
          let res = [];
          for (let i = 0; i < 3; i++) {
            res.push(this.authorBasedBooks[i]);
          }
          this.booksAuthor = res;
          this.loading = false;
        })
        .catch(err => {
          this.error = err.toString();
        });
    },
    dropButton() {
      //Function to display dropdown button's text
      this.show.text === "Show more"
        ? (this.show = { text: "Close", className: "more" })
        : (this.show = { text: "Show more", className: "" });
    }
  },
  computed: {}
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body {
  margin: 10% auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.head {
  background-color: #41b883;
  margin: 0;
  /* padding: 1%; */
  width: 100%;
}

.head h3 {
  margin: 4%;
  font-size: 200%;
}

.desc {
  padding: 2%;
  overflow: hidden;
}

.desc p {
  font-size: 200%;
  text-align: left;
  margin: 3% 0;
}

.details {
  display: grid;
  width: 500px;
  height: 573px;
  box-shadow: 0 0 20px #aaa;
  margin: 25px;
  padding: 0 0 10px;
  vertical-align: top;
}

.more {
  height: 100%;
}

.book-detail {
  margin: 0;
  height: 100%;
  width: 100%;
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
  font-size: 35px;
  position: relative;
  left: -0.1cm;
  top: -1.6cm;
  float: right;
}

.cover {
  /* border: 2px solid gray; */
  height: 80%;
  width: 100%;
  overflow: hidden;
}

.cover img {
  width: 100%;
  height: 100%;
}

.book p {
  margin-top: 1%;
  font-size: auto;
}

.book .author {
  font-size: auto;
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
}

.description {
  height: 100%;
  width: 100%;
  font-size: 175%;
}

.description p {
  margin-top: 8%;
  color: #41b883;
}

.show-more p {
  color: #41b883;
  cursor: pointer;
  font-size: 200%;
}

@media only screen and (max-width: 1900px) {
  .book {
    width: 200px;
    height: 360px;
    margin: 25px;
    padding: 10px 10px 0 10px;
    vertical-align: top;
  }

  .description {
    font-size: 100%;
  }

  .head h3 {
    margin: 4%;
    font-size: 140%;
  }

  .desc p {
    font-size: 100%;
  }

  .details {
    width: 500px;
    height: 360px;
    margin: 25px;
    vertical-align: top;
  }

  .desc p {
    font-size: 100%;
    text-align: left;
    margin: 3% 0;
  }

  .show-more p {
    font-size: 100%;
  }

  .more {
    height: 100%;
  }
}

@media (max-width: 941px) {
  .container {
    max-width: 700px;
  }
  .book {
    margin: 25px;
  }
  .more {
    height: 100%;
  }
}

@media (max-width: 800px) {
  .book {
    margin: 10px;
  }
  .more {
    height: 100%;
  }
}

@media (max-width: 730px) {
  .book {
    display: block;
    margin: 0 auto;
    margin-top: 50px;
  }
  .more {
    height: 100%;
  }
}

@media only screen and (max-width: 600px) {
  .body {
    display: flex;
    flex-direction: column-reverse;
  }

  .details {
    display: grid;
    width: 250px;
    height: 360px;
    -webkit-box-shadow: 0 0 20px #aaa;
    box-shadow: 0 0 20px #aaa;
    margin: 25px auto;
    padding: 0 0 10px;
    vertical-align: top;
    -webkit-transition: height 1s;
    transition: height 1s;
  }

  .more {
    height: 100%;
  }
}
</style>
