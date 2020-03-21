<template>
    <VblLayout>
      <h2 id="a1" class="anc">基本用法</h2>
      <MBoxWithTitle1 title="配置维度">
          <ConfigDimension :formData="formData"
                           :dimensionOptions="dimensionOptions"
                           :symbolDictOptions="symbolDictOptions"
                           @cgDmValid="cgDmValid"
          ></ConfigDimension>
      </MBoxWithTitle1>
      <pre v-highlightjs=""><code >
        &lt;template&gt;
            &lt;VblLayout&gt;
              &lt;MBoxWithTitle1 title="配置维度"&gt;
                  &lt;ConfigDimension :formData="formData"
                                   :dimensionOptions="dimensionOptions"
                                   :symbolDictOptions="symbolDictOptions"
                                   @cgDmValid="cgDmValid"
            &gt;&lt;/ConfigDimension&gt;
              &lt;/MBoxWithTitle1&gt;
            &lt;/VblLayout&gt;
        &lt;/template&gt;
        &lt;script&gt;
        export default {
            data(){
              return {
                  dimensionOptions:[{dictCode: '111',dictName: '111'},{dictCode: '222',dictName: '222'}],
                  symbolDictOptions:[{dictCode: '111',dictName: '111'},{dictCode: '222',dictName: '222'}],
                  formData:{
                      allelection:0,
                      ruleDimension:[
                          { matchDimensionCode: '111', matchSymbol:"111",matchResult:"111", index: 1 },
                          { matchDimensionCode: '111', matchSymbol:"111",matchResult:"111", index: 1 },
                      ]
                  }
              }
            },
           methods:{
                cgDmValid(v){
                    console.log(v)
                }
            }
        }
        &lt;/script&gt;
      </code></pre>

      <h2 id="a2" class="anc">api</h2>
      <Card>
        <MTable :tableData="tableData"></MTable>
      </Card>
    </VblLayout>
</template>
<script>
export default {
  data () {
    return {
      dimensionOptions: [{ dictCode: '111', dictName: '111' }, { dictCode: '222', dictName: '222' }],
      symbolDictOptions: [{ dictCode: '111', dictName: '111' }, { dictCode: '222', dictName: '222' }],
      formData: {
        allelection: 0,
        ruleDimension: [
          { matchDimensionCode: '111', matchSymbol: '111', matchResult: '111', index: 1 },
          { matchDimensionCode: '111', matchSymbol: '111', matchResult: '111', index: 1 }
        ]
      },
      tableData: [
        {
          attr: 'formData',
          desc: '初始化传入组件的数据',
          type: 'Object',
          defaultValue: '{allelection:0,ruleDimension:[]}'
        },
        {
          attr: 'dimensionOptions',
          desc: '维度字典',
          type: 'Array',
          defaultValue: '[]'
        },
        {
          attr: 'symbolDictOptions',
          desc: '符号字典',
          type: 'Array',
          defaultValue: '[]'
        }
      ]
    }
  },
  methods: {
    cgDmValid (v) {
      console.log(v)
    }
  }
}
</script>
