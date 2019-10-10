<template>
  <div>
    {{ label }}
    <qrcode-vue :value="code" :size="200" />
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

<style></style>
