<template>
  <div class="page-html2docx">
    <div class="docx-container">
      <h1>标题1</h1>
      <p>你好1111</p>
    </div>
    <div class="bottom-buttons">
      <el-button @click="onExport">导出word文档</el-button>
    </div>
  </div>
</template>

<script>
import { saveAs } from 'file-saver'
import htmlDocx from './html-docx'
export default {
  data() {
    return {}
  },
  methods: {
    onExport() {
      const dom = document.querySelector('.docx-container')
      const content = '<!DOCTYPE html>' + dom.outerHTML
      var converted = htmlDocx.asBlob(content, {orientation: 'portrait'});
      saveAs(converted, 'test.docx');
    }
  }
}
</script>