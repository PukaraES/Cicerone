<template>
    <div>
        hola
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
    console.log(wdFetch)
  }
}
</script>

<style lang="scss" scoped>

</style>
