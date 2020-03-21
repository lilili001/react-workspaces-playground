<template>
    <Row type="flex" class="cascad-wrap" :gutter="4">
            <Col :xs="12" :md="8">
              <Form-item>
                <Select :label-in-value="labelInValue" v-model="value[0]" @on-change="change($event,0)">
                  <Option v-for="(item,index) in cascadOptions[0]" :key="index" :value="item[dictCode]">{{item[dictName]}}</Option>
                </Select>
              </Form-item>
            </Col>
            <Col :xs="12" :md="8">
              <Form-item>
                <Select :label-in-value="labelInValue" v-model="value[1]"  @on-change="change($event,1)">
                  <Option v-for="(item,index) in cascadOptions[1]" :key="index" :value="item[dictCode]">{{item[dictName]}}</Option>
                </Select>
              </Form-item>
            </Col>
            <Col :xs="12" :md="8" v-if="hasThirdSelectField">
              <Form-item>
                <Select :label-in-value="labelInValue" v-model="value[2]"  @on-change="change($event,2)">
                  <Option v-for="(item,index) in cascadOptions[2]" :key="index" :value="item[dictCode]">{{item[dictName]}}</Option>
                </Select>
              </Form-item>
            </Col>
            <Col :xs="12" :md="8" v-if="hasAddress">
              <Form-item>
                <Input  clearable placeholder="请输入" v-model="value[2]"  @on-change="change($event,2)"/>
              </Form-item>
            </Col>

    </Row>
</template>

<script>
export default {
  name: 'MCarscad',
  props: {
    dictCode: {
      type: String,
      default: 'dictCode'
    },
    dictName: {
      type: String,
      default: 'dictName'
    },
    cascadOptions: {
      type: Array,
      default: () => [[], [], []]
    },
    hasThirdSelectField: {
      type: Boolean,
      default: true
    }, // 是否有区  默认是省市区的情况  还有省市地址的情况
    hasAddress: {
      type: Boolean,
      default: false
    }, // 是否有详细地址
    labelInValue: {
      type: Boolean,
      default: false
    }, // 选择的时候是否需要获取 label
    value: {
      type: Array
    }
  },
  methods: {
    change (val, index) {
      if (index == 0) {
        this.value.length = 1
      } else if (index == 1) {
        this.value.length = 2
      }
      this.$emit('cascadChange', index, val)
    }
  },
  mounted () {

  }
}
</script>

<style scoped>

</style>
