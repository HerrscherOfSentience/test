<template>
    <div class="box-inner" @click="increment">
      <h3>Counter {{counter}}</h3>
      <p>{{text}}</p>

      <p v-if="counter % 2 === 1">counter is odd</p>
      <p v-else>counter is even</p>

      <a 
        class="link"
        v-for="problem in problems" 
        :href="`https://codeforces.com/problemset/problem/${problem.contestId}/${problem.index}`" 
        target="_blank"
      >
        {{problem.contestId}}{{problem.index}} - {{problem.name}}
        <br/>
      </a>
    </div>
</template>

<script>
export default {
  name: 'Box',
  data() {
    return {
        text: "Hai",
        counter: 0,
        names: [
            "Name 1",
            "Name 2",
            "Name 3"
        ],
        problems: [],
    };
  },
  methods: {
    increment() {
      console.log('click');
      this.counter += 1;
    },
  },
  mounted() {
    const url = 'https://codeforces.com/api/problemset.problems?tags=implementation';
    this.$axios.get(url)
        .then(res => {
            this.problems = res.data.result.problems;
            console.log(this.problems);
        })
  },
}
</script>

<style scoped>
.box-inner {
  margin-top: 16px;
  padding: 16px;
  width: 100vw;
  background:rgb(171, 239, 156);
}

.link {
    color: rgb(42, 127, 201);
}
</style>