<!--这个弹窗没有取消按钮 自定义footer -->
<template>
    <Modal
            v-model="cModalData.showModal"
            :title="cModalData.title"
            width="450"
    >

           <i-form :model="cModalData" ref="cModalData" :label-width="cModalData.withoutLabel ? 0 : 110">
                <Form-item v-for="(item,index) in fields"  :class="index == fields.length-1 ?  margin-b-0 : ''" :key="index" :label="item.label" :prop="item.key" :rules="[{required:true, type: item.type =='radio' ? 'number':'string', message:`不能为空`}]">
                    <i-input v-if="item.type=='input'" type="text" clearable v-model="cModalData[`${item.key}`]" placeholder="请输入"></i-input>

                    <i-input v-if="item.type=='textarea'" type="textarea"  :rows="4" maxlength="200" show-word-limit clearable v-model="cModalData[`${item.key}`]" placeholder="请输入"></i-input>

                    <Select v-if="item.type=='select'" clearable v-model="cModalData[`${item.key}`]" placeholder="请选择">
                        <Option v-for="(opt,index) in item['options']" :key="index" :label="opt['code']">{{opt.value}}</Option>
                    </Select>

                    <!--radio-->
                    <RadioGroup v-if="item.type=='radio'" v-model="cModalData[`${item.key}`]">
                        <Radio v-for="(opt,index) in item['options']" :key="index" :label="opt['code']">{{opt.value}}</Radio>
                    </RadioGroup>
                </Form-item>
           </i-form>
        <div slot="footer">
            <Button v-if="hideCancel==false" @click="cancel">取消</Button>
            <Button type="primary" :disabled="disabled" @click="ok">确认</Button>
        </div>
    </Modal>
</template>

<script>
export default {
  name: 'cModal',
  props: {
    title: { type: String },
    fields: {
      type: Array // [{type:'',label:'',key:'remark'}]
    },
    cModalData: {
      type: Object // {remark:}
    },
    disabled:{
        type:Boolean,
        default:false
    },
    hideCancel:{
        type:Boolean,
        default:false
    }
  },
  methods: {
    async ok () {
      const res = await this.$refs.cModalData.validate()
      if (res) {
        this.cModalData.showModal = false
        this.$emit('onOk')
      }
    },
    cancel () {
      this.cModalData.showModal = false
    }
  }
}
</script>

<style scoped>
.margin-b-0{margin-bottom: 0!important;}
</style>
