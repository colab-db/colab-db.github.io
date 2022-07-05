<template>
  <div>
    <h6 class="text-xl font-semibold mt-6">Comments</h6>
  </div>
</template>
<script>
export default {
  mounted() {
    const scriptTag = document.createElement("SCRIPT");
    scriptTag.setAttribute("src", "https://utteranc.es/client.js");
    scriptTag.setAttribute("repo", "colab-db/colab-db.github.io");
    scriptTag.setAttribute("issue-term", "pathname");
    scriptTag.setAttribute("label", "Comment");
    scriptTag.setAttribute("theme", "github-light");
    scriptTag.setAttribute("crossorigin", "anonymous");
    scriptTag.setAttribute("async", "async");
    this.$el.append(scriptTag);
  },
};
</script>

<style>
.utterances {
  width: 100%;
  margin: 0 !important;
  max-width: 100%;
}
</style>