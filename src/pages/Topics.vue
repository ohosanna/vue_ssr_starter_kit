<template>
  <ul>
    <li v-for="topic in topics">
      {{topic.title}}
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      topics: 'allTopics'
    })
  },
  methods: mapActions([
  ]),
  mounted () {
    this.$store.dispatch('getAllTopics')
  }
}
</script>
