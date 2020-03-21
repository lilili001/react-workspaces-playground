<template>
    <div class="color6">
      <label class="margin-b-10">全部维度 <Checkbox @on-change="checkAll" class="margin-l-4" v-model="formData.allelection">全选</Checkbox></label>
      <Form :model="formData" ref="formData" class="margin-b-10 margin-t-10" :label-width="0">

      <Row :gutter="4" class="margin-b-0" v-for="(item, index) in formData.ruleDimension" :key="index">
        <Col :xs="12" :md="4">
            <Form-item  :prop="'ruleDimension.' + index + '.matchDimensionCode'" :rules="{validator: formData.allelection ? '': $validators.required.validator('维度名称'+(index+1)).validator }">
            	<Select v-model="item.matchDimensionCode" :disabled="formData.allelection==1">
        	        <Option :value="opt.dictCode" v-for="(opt,idx1) in dimensionOptions" :key="idx1">{{opt.dictName}}</Option>
        	    </Select>
            </Form-item>
        </Col>
        <Col :xs="12" :md="4">
          <Form-item  :prop="'ruleDimension.' + index + '.matchSymbol'" :rules="{validator: formData.allelection ? '': $validators.required.validator('符号'+(index+1)).validator }">
            <Select  v-model="item.matchSymbol" :disabled="formData.allelection==1">
              <Option :value="opt.dictCode" v-for="(opt,idx2) in symbolDictOptions" :key="idx2">{{opt.dictName}}</Option>
            </Select>
          </Form-item>
        </Col>
        <Col :xs="12" :md="14">
          <div  >
            <Form-item :prop="'ruleDimension.' + index + '.matchResult'" :rules="{validator: formData.allelection ? '': $validators.required.validator('匹配结果'+(index+1)).validator }">
              <Input :disabled="formData.allelection==1" v-model="item.matchResult"  clearable placeholder="请输入" />
            </Form-item>
          </div>
        </Col>
        <Col :xs="1" :md="2" class="flex action-box">
          <div class="margin-l-10 ">
            <Icon v-if="!formData.allelection && formData.ruleDimension.length>1 " @click="remove(index)" class="act-icon margin-r-4" custom="iconfont iconsc" size="16"/>
            <Icon @click="add"  class="act-icon" :class="{disabled:formData.allelection==1}" v-if="index==formData.ruleDimension.length-1 || formData.ruleDimension.length==1 "  custom="iconfont icontj" size="16"/>
          </div>
        </Col>
      </Row>

        <!--<Col span="4" offset="1">
          <Button @click="handleSubmit('formData')">submit</Button>
        </Col>-->
      </Form>
    </div>
</template>

<script>
export default {
  name: 'ConfigDimension',
  props: {
    dimensionOptions: {
      type: Array,
      default: () => []
    },
    symbolDictOptions: {
      type: Array,
      default: () => []
    },
    formData: {
      type: Object,
      default: () => {
        return {
          ruleDimension: [
            { matchDimensionCode: '', matchSymbol: '', matchResult: '', index: 1 }
          ],
          allelection: 0
        }
      }
    }
  },
  data () {
    return {
      idx: 1
    }
  },
  methods: {
    checkAll (val) {
      if (val) {
        this.$refs['formData'].resetFields()
        this.formData.ruleDimension = [
          { matchDimensionCode: '', matchSymbol: '', matchResult: '', index: 1 }
        ]
      }
    },
    add () {
      if (this.formData.allelection) return
      this.idx++
      this.formData.ruleDimension.push({ matchDimensionCode: '', matchSymbol: '', matchResult: '', index: this.idx })
    },
    remove (index) {
      this.formData.ruleDimension.splice(index, 1)
    },
    validate (name = 'formData') {
      this.$refs[name].validate((valid) => {
        this.$emit('cgDmValid', valid)
      })
    },
    handleSubmit (name) {
      this.validate(name)
    }
  }
}
</script>

<style scoped lang="less">
  .action-box{height:32px; }
  .act-icon{
    color:#ccc;
    cursor: pointer;
    &.icontj:hover{
      color:#1890FF
    }
    &.iconsc:hover{
      color:#F5222D
    }
    &.disabled,&.disabled:hover{
      color:#e0e0e0;
      cursor: not-allowed
    }
  }
</style>
