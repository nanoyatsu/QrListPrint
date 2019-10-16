<template>
  <div class="box margin">
    <qrcode-vue :value="code" :size="160" />
    <div class="free-text">
      {{ label }} : <code>{{ code }}</code>
    </div>
  </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue'
export default {
  components: {
    QrcodeVue
  },
  props: {
    label: {
      type: String,
      default: 'undefined'
    },
    code: {
      type: String,
      default: undefined
    }
  }
}
</script>

<style>
.box.margin {
  margin: 0.5em;
}
.box > .free-text {
  max-width: 160px;
  overflow-wrap: break-word;
}
</style>
