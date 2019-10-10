<template>
  <div class="container">
    <div>
      <div class="field">
        <div class="control">
          <input
            v-model="qrtext"
            class="input"
            type="text"
            placeholder="Normal input"
          />
        </div>
      </div>
      <qr-frame :label="aaa" :code-text="bbb"></qr-frame>
    </div>
  </div>
</template>

<script>
import QrFrame from '~/components/QrFrame.vue'

export default {
  components: {
    QrFrame
  },
  data() {
    return { qrtext: '' }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
