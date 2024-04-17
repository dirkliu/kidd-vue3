<template>
  <div class="docx-view">
    <h1>Docx View</h1>
    <vue-office-docx 
      src="/example.docx"
      style="height: 100vh;"
      @rendered="rendered"
  />
  </div>
</template>

<script>
//引入VueOfficeDocx组件
import VueOfficeDocx from '@vue-office/docx'
//引入相关样式
import '@vue-office/docx/lib/index.css'

export default {
  components:{
    VueOfficeDocx
  },
  data() {
    return {}
  },
  methods:{
    rendered(){
      console.log("渲染完成")
    }
  }
}
</script>
