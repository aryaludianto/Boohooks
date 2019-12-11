<template>
  <div class="footer">
    <h2 class="title">Boohooks</h2>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Footer",
  props: {},
  data() {
    return {};
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  margin-left: 2%;
  color: #41b883;
}

.footer {
  margin: 0;
  position: fixed;
  width: 100%;
  height: 7.5%;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
