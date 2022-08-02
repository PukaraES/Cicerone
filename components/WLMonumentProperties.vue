<template>
    <div>
        <h1>Properties</h1>
        <div class="data">
          <p class="1">{{ values }}</p>
        </div>
    </div>
</template>

<script>
export default {
  props: ['monumentId'],
  data () {
    return {
      values: ''
    }
  },
  async created () {
    const wdFetch = await this.$axios.get(`https://www.wikidata.org/wiki/Special:EntityData/${this.monumentId}.json`)
    this.values = wdFetch
  }
}
</script>

<style lang="scss" scoped>

</style>
