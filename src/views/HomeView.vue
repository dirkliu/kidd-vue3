<script>
import { Document, Packer, Paragraph, TextRun } from "docx"
import { saveAs } from 'file-saver'
export default {
  data() {
    return {
    }
  },

  methods: {
    exportWord() {
      // This simple example will only contain one section
      const doc = new Document({
        sections: [
          {
            properties: {},
            children: [
              new Paragraph({
                children: [
                  new TextRun("Hello World"),
                  new TextRun({
                    text: "Foo Bar",
                    bold: true,
                  }),
                  new TextRun({
                    text: "\tGithub is the best",
                    bold: true,
                  }),
                ],
              }),
            ],
          },
        ],
      });

      Packer.toBlob(doc).then((blob) => {
        // saveAs from FileSaver will download the file
        saveAs(blob, "example.docx");
      });
    }
  }
}
</script>

<template>
  <main>
    <h1>Home view</h1>
    <a @click="exportWord">导出world文档</a>
  </main>
</template>
