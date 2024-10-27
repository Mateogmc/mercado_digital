<template>
    <div class="test">
        <h1>{{ msg }} {{ num }}</h1>
    </div>
</template>

<script>
export default {
  name: 'TestItem',
  props: {
    msg: String,
    num: Number
  }
}
</script>