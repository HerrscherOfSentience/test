<template>
    <div class="box-inner">
        <div class="flex">
            <input v-model="searchKeyword" type="text" placeholder="Tags" @keydown.enter="doSearch">
            <button @click="doSearch(false)">Search</button>
            <button @click="doSearch(true)">Random!</button>
        </div>
        <a 
            v-if="problems.length && pickRandom"
            class="link" 
            :href="`https://codeforces.com/problemset/problem/${problems[randomProblem].contestId}/${problems[randomProblem].index}`">
            {{problems[randomProblem].contestId}}{{problems[randomProblem].index}} - {{problems[randomProblem].name}}
        </a>
        
        <template v-if="!pickRandom">
            <div v-if="!isFetchingData && problems.length > 0" class="flex-col">
                <a 
                  class="link"
                  v-for="problem in problems" 
                  :href="`https://codeforces.com/problemset/problem/${problem.contestId}/${problem.index}`" 
                  target="_blank"
                >
                  {{problem.contestId}}{{problem.index}} - {{problem.name}}
                </a>
            </div>
            <div v-else-if="!isFetchingData && problems.length === 0">
                <p>No problems found</p>
            </div>
        </template>
        
        <div v-if="isFetchingData">
            <p>Loading . . .</p>
        </div>
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
        pickRandom: false,
        randomProblem: 0,
        searchKeyword: "",
        isFetchingData: false,
    };
  },
  methods: {
    doSearch(pickRandom) {
        this.isFetchingData = true;
        const url = `https://codeforces.com/api/problemset.problems?tags=${this.searchKeyword}`;
        this.$axios.get(url)
        .then(res => {
                this.pickRandom = pickRandom;
                this.problems = res.data.result.problems;
                this.randomProblem = Math.floor(Math.random() * this.problems.length);
            })
            .finally(() => {
                this.isFetchingData = false;
            })
    },
  },
  mounted() {
    this.doSearch();
  },
}
</script>

<style scoped>
.box-inner {
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  padding: 16px;
  width: 100vw;
  background:rgb(171, 239, 156);
}

.link {
    color: rgb(42, 127, 201);
}

button {
    background: rgb(69, 79, 184);
    color: white;
    border-radius: 8px;
    padding: 12px;
    margin-left: 12px;
}

input {
    padding: 16px;
}
</style>