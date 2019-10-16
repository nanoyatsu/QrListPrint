<template>
  <div class="container">
    <div>
      <div class="field" style="min-width:80vw">
        <div class="control">
          <textarea
            v-model="qrtext"
            class="textarea"
            type="text"
            placeholder='please input 
            [{"label":"label","code":"code"},...]'
          />
        </div>
      </div>
      <div class="columns is-multiline is-centered is-mobile">
        <qr-frame
          v-for="qr in qrJson"
          :key="qr.index"
          class="column is-narrow"
          :label="qr.label"
          :code="qr.code"
        />
      </div>
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
    return {
      qrtext:
        '[{"label":"label1","code":"code1"},' +
        '{"label":"label2","code":"code2"}]'
    }
  },
  computed: {
    qrJson: function() {
      try {
        return JSON.parse(this.qrtext)
      } catch (error) {
        return [{ label: 'error', code: 'error' }]
      }
    }
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
