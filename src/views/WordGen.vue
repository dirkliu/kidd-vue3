<template>
  <div class="page-wordgen">
    <div class="word-container">
      <h1>文档标题1</h1>
      <table>
        <thead>
          <tr>
            <th>名字</th>
            <th>年龄</th>
            <th>性别</th>
            <th>备注</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>七月</td>
            <td>22</td>
            <td>男</td>
            <td>1dddfa的方法大发放的放大法</td>
          </tr>
          <tr>
            <td>九月</td>
            <td>33</td>
            <td>女</td>
            <td>啧啧啧啧啧啧嘻嘻嘻嘻嘻嘻</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="bottom-buttons">
      <el-button @click="onExport">导出word文档</el-button>
    </div>
  </div>
</template>

<script>
import { 
  Document, 
  Packer, 
  Paragraph, 
  TextRun, 
  HeadingLevel 
} from "docx"
export default {
  data() {
    return {}
  },

  methods: {
    onExport() {
      const doc = new Document({
        sections: [{
          properties: {},
          children: [
            new Paragraph({
              text: "Hello World",
              heading: HeadingLevel.HEADING_1,
              thematicBreak: true
            })
          ]
        }]
      })

      Packer.toBlob(doc).then((blob) => {
        // saveAs from FileSaver will download the file
        saveAs(blob, `wordgen-${Date.now()}.docx`);
      });
    }
  }
}
</script>

<style>
.bottom-buttons {
  margin-bottom: 20px;
}
</style>
