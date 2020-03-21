<template>
  <VblLayout class="bg-white">
    <h2 id="a1" class="anc margin-t-20">基础表单</h2>
    <Form ref="formData" class="margin-b-10" :label-width="130">
      <Row type="flex" justify="start" class="code-row-bg" :gutter="16">
        <Col :xs="12" :md="8">
          <Form-item label="普通输入框">
            <Input clearable placeholder="请输入"/>
          </Form-item>
        </Col>
        <Col :xs="12" :md="8">
          <Form-item label="禁用输入框">
            <Input disabled clearable placeholder="请输入"/>
          </Form-item>
        </Col>
        <Col :xs="12" :md="8">
          <Form-item label="普通下拉">
            <Select>
              <Option value="1">1</Option>
            </Select>
          </Form-item>
        </Col>
        <Col :xs="12" :md="8">
          <Form-item label="禁用下拉">
            <Select disabled>
              <Option value="1">1</Option>
            </Select>
          </Form-item>
        </Col>
        <Col :xs="12" :md="8">
          <Form-item label="日期">
            <DatePicker type="date" placeholder="请输入"></DatePicker>
          </Form-item>
        </Col>
        <Col :xs="12" :md="8">
          <Form-item label="日期禁用">
            <DatePicker disabled type="date" placeholder="请输入"></DatePicker>
          </Form-item>
        </Col>
        <Col :xs="12" :md="12">
          <Form-item label="radio">
            <RadioGroup v-model="disabledGroup">
              <Radio label="金斑蝶" disabled></Radio>
              <Radio label="爪哇犀牛"></Radio>
              <Radio label="印度黑羚"></Radio>
            </RadioGroup>
          </Form-item>
        </Col>
        <Col :xs="12" :md="12">
          <Form-item label="checkbox">
            <CheckboxGroup v-model="disabledGroup1">
              <Checkbox label="香蕉" disabled></Checkbox>
              <Checkbox label="苹果"></Checkbox>
              <Checkbox label="西瓜"></Checkbox>
            </CheckboxGroup>
          </Form-item>
        </Col>
      </Row>
    </Form>

    <pre v-highlightjs=""><code>
        &lt;template&gt;
          &lt;VblLayout class="bg-white"&gt;
            &lt;h2 id="a1" class="anc margin-t-20"&gt;基础表单&lt;/h2&gt;
            &lt;Form  ref="formData" class="margin-b-10" :label-width="130"&gt;
              &lt;Row type="flex" justify="start" class="code-row-bg" :gutter="16"&gt;
                &lt;Col :xs="12" :md="8"&gt;
                  &lt;Form-item label="普通输入框"&gt;
                    &lt;Input  clearable placeholder="请输入" /&gt;
                  &lt;/Form-item&gt;
                &lt;/Col&gt;
                &lt;Col :xs="12" :md="8"&gt;
                  &lt;Form-item label="禁用输入框"&gt;
                    &lt;Input disabled  clearable placeholder="请输入" /&gt;
                  &lt;/Form-item&gt;
                &lt;/Col&gt;
                &lt;Col :xs="12" :md="8"&gt;
                    &lt;Form-item label="普通下拉"&gt;
                      &lt;Select&gt;
                          &lt;Option value="1" &gt;1&lt;/Option&gt;
                      &lt;/Select&gt;
                    &lt;/Form-item&gt;
                &lt;/Col&gt;
                &lt;Col :xs="12" :md="8"&gt;
                  &lt;Form-item label="禁用下拉"&gt;
                    &lt;Select disabled&gt;
                      &lt;Option value="1" &gt;1&lt;/Option&gt;
                    &lt;/Select&gt;
                  &lt;/Form-item&gt;
                &lt;/Col&gt;
                &lt;Col :xs="12" :md="8"&gt;
                    &lt;Form-item label="日期"&gt;
                      &lt;DatePicker type="date" placeholder="请输入"&gt;&lt;/DatePicker&gt;
                    &lt;/Form-item&gt;
                &lt;/Col&gt;
                &lt;Col :xs="12" :md="8"&gt;
                  &lt;Form-item label="日期禁用"&gt;
                    &lt;DatePicker disabled type="date" placeholder="请输入"&gt;&lt;/DatePicker&gt;
                  &lt;/Form-item&gt;
                &lt;/Col&gt;
              &lt;/Row&gt;
            &lt;/Form&gt;
          &lt;/VblLayout&gt;
      &lt;/template&gt;

      </code></pre>

  </VblLayout>
</template>

<script>
export default {
  name: 'FormPage',
  data () {
    return {
      disabledSingle: true,
      disabledGroup1: ['苹果'],
      disabledGroup: '爪哇犀牛'
    }
  }
}
</script>

<style scoped>

</style>
