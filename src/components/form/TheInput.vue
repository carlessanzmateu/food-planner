<template>
  <input class="the-input" v-model="age" :type="type" :placeholder="placeholder">
</template>

<script>
export default {
  name: 'TheInput',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    }
  }
}
</script>