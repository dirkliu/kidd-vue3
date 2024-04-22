<template>
  <div class="docx-templater-demo">
    <el-button @click="exportWordFile">导出word文档</el-button>
  </div>
</template>

<script>
import { ExportBriefDataDocx, getBase64Sync } from "@/utils/outword.js";
export default {
  data() {
    return {
      name: "lipipi",
      listname: "导出的模板",
      imglist: [
        {
          imgUrl:
            "https://img2.baidu.com/it/u=2709954499,581919391&fm=253&fmt=auto&app=138&f=JPEG?w=468&h=518",
        },
        {
          imgUrl:
            "https://img0.baidu.com/it/u=1462004956,1440895436&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=353",
        },
      ],
    };
  },

  methods: {
    async exportWordFile() {
      //多个图片遍历转base64
      for (let i in this.imglist) {
        this.imglist[i].imgUrl = await getBase64Sync(this.imglist[i].imgUrl);
      }
      let data = {
        name: this.name,
        imglist: this.imglist,
      };
      let imgSize = {
        //控制导出的word图片大小
        imgurl: [200, 200],
      };
      ExportBriefDataDocx(
        "/docx-templater.docx",
        data,
        `${this.listname}.docx`,
        imgSize
      );
    },
  },
};
</script>
