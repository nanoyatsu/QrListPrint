<template>
  <div>
    koko-ni-qr-takusan:{{ label }}
    <qrcode-vue :value="codeText" />
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
    codeText: {
      type: String,
      default: undefined
    }
  }
}
</script>

<style></style>
