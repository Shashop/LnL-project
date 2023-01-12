<template>
  <div class="liston" :style="styles"> <!-- computedなstylesプロパティをstyleにバインド-->
    <div class="message">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'box',
  props: {
    listImage: {},
    lisime: {}
  },
  computed: {
    // バインドするスタイルを生成
    styles () {
      return {
        '--color': this.color,
        '--width': this.width
      }
    }
  }
}
</script>

<style scoped>

.box {
  /* デフォルトの値を宣言*/
  --color: orange;
  /* --width: width; */ /* 20180215 書き間違えていたため修正しました */
  --width: 100px;

  /* CSS変数を背景と幅に割り当て */
  background-color: var(--color);
  width: var(--width);

  display: inline-block;

}

.box .message {
  padding: 1em;
}
</style>