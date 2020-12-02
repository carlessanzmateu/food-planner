<template>
  <a class="px-8 py-2 rounded cursor-pointer bg-green-400 hover:bg-green-700" v-on:click="onClick">{{ text }}</a>
</template>

<script>
export default {
  name: 'TheButton',
  props: {
    text: {
      type: String,
      required: true
    }
  },
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>
