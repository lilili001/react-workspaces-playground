<template>
    <div>
      <div class="top-oper" v-if="initOperObj.showOperBar">
            <div class="flex-box handle-box">
                <Button type="info" ghost  @click="showHideEmpty"> <i :class="['iconfont', showAllFlag?'iconyincang':'iconxianshi']"></i> {{showAllFlag?'隐藏空白':'显示空白'}}</Button>
                <Button type="info" ghost   @click="allChose"> <i :class="['iconfont', choseAllFlag?'iconquanbuxuan':'iconquanxuan']"></i> {{choseAllFlag?'全不选':'全选'}}</Button>
                <Button type="info" ghost v-if="choseAllFlag" @click="approvalAnnex(1)"> <i class="iconfont iconhege"></i> 合格</Button>
                <Button type="info" ghost v-if="choseAllFlag" @click="approvalAnnex(-1)"> <i class="iconfont iconbuhege"></i> 不合格</Button>
                <slot name="l-area"></slot>
                <div style="flex: 1;" class="text-right font0">
                    <!-- <slot name="r-area"></slot> -->
                    <Button  @click="returnBack"><i class="iconfont iconfanhui"></i> 返回</Button>
                    <Button  type="primary" @click="saveApproval"><i class="iconfont iconbaocun"></i> 保存</Button>
                </div>
            </div>
      </div>
    <div v-if="inited" :class="[initOperObj.showOperBar?'fujian-wrap':'']">
        <div v-for="(bigCategoryItem,bigCategoryIndex) in fileListArr" :key="bigCategoryIndex" :class="bigCategoryIndex==0?'':'margin-t-10'">
              <secondTiTle v-if="initOperObj.hasSecondLevelTitle" :title="bigCategoryItem.bigCategoryName" />
             <h3 style="margin-bottom:14px;line-height:16px;font-size:16px" v-if="bigCategoryItem.bigCategoryDisplay==1&&!initOperObj.hasSecondLevelTitle">{{bigCategoryItem.bigCategoryName}} <span style="color:#999;font-weight:normal">({{bigCategoryItem.itemList.length}}个项目)</span></h3>
             <div  class="fujian flex flex-wrap">
                  <div v-for="(item ,index) in  bigCategoryItem.itemList"  :class="[item.fileMaximum > 1 ? 'item multiple': 'item single' , item.uploadOpration==0 || initOperObj['viewFlag']!=0  ? 'disabled' : null]" :key="index" v-show="showAllFlag||item.fileList.length>0">
                          <div :class="['box',item.fileMaximum > 1&&item.fileList.length==0?'bg_f8':'',choseAllFlag&&item.fileList.length>0?'active':'' ,]">
                              <div class="title text-center" :class="{zhehang:zhehang(item)}" style="color:#fff" v-if="!initOperObj['hideSubCategoryName']">
                                <b  v-if="initOperObj['viewFlag']==0&&isContinue(item)&&item.uploadOpration==1&&item.fileList.length<item.fileMaximum">继续上传</b> {{item.fileList.length+'/'+item.fileMaximum}}
                                <input ref="inputFile"  v-if="initOperObj['viewFlag']==0&&isContinue(item)&&item.uploadOpration==1&&item.fileList.length<item.fileMaximum" :multiple="item.fileMaximum > 1" @change="fnChange($event,item,index)" type="file" class="uploadInputBtn">
                              </div>
                              <div :class="['uploadzone',
                              initOperObj['hideSubCategoryName']==1?'hideSubCategoryName':'',
                              item.uploadOpration==0||initOperObj['viewFlag']==1 ?'imgDisabled':''
                              ]"
                              v-if="!isContinue(item)"
                              >
                                  <input v-if="initOperObj['viewFlag']==0 && item.uploadOpration==1" ref="inputFile" :multiple="item.fileMaximum > 1" @change="fnChange($event,item,index)" type="file" class="uploadBtn">
                                  <div class="iconfont icontianjia" v-if="!(item.fileMaximum ==1&&item.fileList.length==1)"></div>
                                  <p class="format"  v-if="!(item.fileMaximum ==1&&item.fileList.length==1)">仅支持{{item.fileFormat.join(',')}}</p>
                              </div>
                              <div class="file" :class="item.fileMaximum == 1 ? 'singleFile' : ''"  v-for="(file,idxFile) in item.fileList" :key="idxFile">
                                  <div v-if="item.fileList.length>0">
                                          <div class="img" @click='fnPreView(item,bigCategoryItem.bigCategoryCode,idxFile)'><img :src="file.fileId.endsWith('.pdf') ? pdfIcon  : file.thumbnailUrl" alt=""></div>
                                          <i class="iconfont choseSlogan iconfujianxuanzhong" v-if="choseAllFlag"></i>
                                          <i :class="['standardSlogan',file.approveStatus==1?'biaoqianhege':'',file.approveStatus==-1?'biaoqianbuhege':'']" v-if="initOperObj.standard"></i>
                                          <div class="actions" v-if="initOperObj['viewFlag']!=2"><span v-if="file.approveStatus!=1&&item.deleteOpration==1 && initOperObj['viewFlag']==0" @click="fnRemove(item,idxFile)" class="iconfont iconlajitong margin-r-20"></span><span @click="fnDownload(file)" class="iconfont icondr" v-if="item.downloadOpration==1"></span></div>
                                  </div>
                              </div>
                          </div>
                           <div class="bottom-title text-center" :class="{zhehang:zhehang(item)}" style="color:#fff" v-if="!initOperObj['hideSubCategoryName']">
                                <Tooltip :content="item.subCategoryName" theme="light" v-if="item.subCategoryName.length>15">
                                     <span style="cursor:pointer">{{item.subCategoryName?sliceStr(item.subCategoryName):''}}</span>
                                </Tooltip>
                                <span v-else>{{item.subCategoryName}}</span>
                           </div>
                  </div>
             </div>
        </div>
        <previewPop v-if="imgArr.length>0&&initOperObj.businessNo" :status ='modalStaus' :businessNo ='initOperObj.businessNo' v-on:closeFn ="close" :imgs="imgArr" :popMsg ="popMsg" :hasOper ="initOperObj.hasOper||false" :initIndex="initIndex"></previewPop>
    </div>
    </div>
</template>

<script>
import {getRes,deepCompare,dateFtt} from "../../utils/utils";
import pdfIcon from './PDF.png'
import previewPop from './previewPop'
import secondTiTle from './secondTiTle'
import '../../styles/components/.fujian.less'
import * as api from './api'
export default {
  name: 'fujian',
  data () {
    return {
      pdfIcon,
      fileListArr: [],
      filesToUpload: { fileList: [] },
      len: 0,
      inited: false,
      modalStaus: false,
      popMsg: {}, // 传递给预览弹窗的信息(标题,大小类code)
      imgArr: [], // 预览的小类文件数组
      showAllFlag: true, // 显示全部
      choseAllFlag: false,
      originObjStr:'',
      initIndex:0//当前点击的是第几张图(多选)
    }
  },
  props: {
   /* businessNo: { type: String },*/
    /*viewFlag: { type: String, default: '0' },*/ // 1 查看 0 编辑
    /*templateType: { type: Number, default: 1 },*/ // 1、提报页 2、补充信息页 3、请款页 4、取消确认打款页
    /*orderType: { type: String, default: '1' },*/ // 1 车主包
   /* hideSubCategoryName: { type: String, default: '1' }*/
    operObj: {
      type: Object
    },
  },
  computed: {
      initOperObj() {
    return {
        viewFlag:0,
        hasOper: false, //预览弹窗是否可以标记
        showOperBar: false, //是否显示审批状态栏
        standard: true,//是否有合格不合格标志
        ...this.operObj
    };
  }
  },
  components: {
    previewPop,
    secondTiTle
  },
  methods: {
    //title超过两行截取
    sliceStr (value) {
      return value.toString().substring(0, 15) + '...'
    },
    //是否可以继续上传
    isContinue(item){
      return item.fileMaximum > 1&&item.fileList.length>=1
    },
      zhehang(item){
          if(item.fileList.length == 0){
              if(item.subCategoryName.indexOf('(')>0){
                  return item.subCategoryName.length > 9
              }else{
                  return item.subCategoryName.length > 8
              }
          }else{
              if(item.fileMaximum==1){
                  if(item.subCategoryName.indexOf('(')!=-1){
                      return item.subCategoryName.length > 9
                  }else{
                      return item.subCategoryName.length > 8
                  }
              }else{
                  return item.subCategoryName.length > (item.fileList+1)*8
              }
          }
      },
    // 附件上传
    async fnChange (ev, item, index) {
      this.filesToUpload['businessNo'] = this.initOperObj.businessNo
      this.filesToUpload['fileCategory'] = item.subCategoryCode
      this.filesToUpload['flieCategoryName'] =  item.subCategoryName
      this.filesToUpload['fileMaximum'] =  item.fileMaximum
      // 获取文件列队
      var selectedFiles = ev.target.files
      var len = selectedFiles.length
      if (len > item.fileMaximum - item.fileList.length) {
        len = item.fileMaximum - item.fileList.length
        this.$Message.error(`当前小类最多上传${item.fileMaximum}个文件`)
        if (len == 0) return
      }
      this.len = len
      var _this = this

      for (var i = 0; i < len; i++) {
        // 初始化清空上传列表
        _this.filesToUpload['fileList'] = []
        var curFile = selectedFiles[i]
        if (curFile) {
          var res = await _this.validateImg(curFile, item, i)
          if (res.isValid && res.base64) {
            _this.filesToUpload['fileList'].push({
              fileName: res.fileName,
              fileBase64: res.base64
            })
            const uploadRes = await api.annexUpload(this.filesToUpload)
              try {
                  getRes(uploadRes, data => {
                      data[0]['fileName'] = res.fileName;
                      item.fileList = [...item.fileList, ...data]
                      if (i == this.len - 1) {
                          document.querySelectorAll('[type="file"]').forEach(item=>item.value='')
                      }
                  })
              }catch (e) {
                  document.querySelectorAll('[type="file"]').forEach(item=>item.value='')
              }
          }
        }
      }
    },
    async validateImg (file, item, curFileIndex) {
      return new Promise(async (resolve, reject) => {
        var res = { isValid: false, file: null }
        var ext = (file.type).split('/')[1]
        var ext1 = (file.name).split('.');
          //console.log(ext,ext1,item.fileFormat)
        if ( !item.fileFormat.includes(ext1[ext1.length-1])) {
          this.$Message.error(`请上传${item.fileFormat.join(',')}格式文件`)
          res.isValid = false
          resolve(res)
        } else {
          if(file.name.length > 50){
             this.$Message.error(`文件名不能超过50字符`);
             return;
          }
          if (ext !== 'pdf') {
            if (!lrz) {
              return
            }
            var newFile = await lrz(file, { width: 1024 })
            if (newFile.fileLen > item.fileMaxSize * 1024 * 1024) {
              this.$Message.error(`文件大小不能超过${item.fileMaxSize}`)
              res.isValid = false
              resolve(res)
            } else {
              res.isValid = true
              // res.file = new File([newFile.file] ,file.name, { type:file.type,lastModified:Date.now()} );
              res.base64 = newFile.base64.split(',')[1]
              res.fileName = file.name
            }
            resolve(res)
          } else {
            // 如果是pdf
            if (file.fileLen > item.fileMaxSize * 1024 * 1024) {
              this.$Message.error(`文件大小不能超过${item.fileMaxSize}`)
              res.isValid = false
              resolve(res)
            } else {
              res.isValid = true
              var fr = new FileReader()
              fr.readAsDataURL(file)
              fr.onload = function (e) {
                console.log(e.target.result)
                res.base64 = e.target.result.split(',')[1]
                res.fileName = file.name
                resolve(res)
              }
            }
          }
        }
      })
    },
    // 附件删除
    async fnRemove (item, index) {
      var fileId = item.fileList[index].fileId
      const res = await api.annexURemove({ fileId, businessNo: this.initOperObj.businessNo })
      getRes(res, () => {
        (item.fileList).splice(index, 1)
        document.querySelectorAll('[type="input"]').value = ''
      })
    },
    // 附件下载
    async fnDownload (file) {
      let paramsObj={businessNo:this.initOperObj.businessNo,fileId:file.fileId,fileName:file.fileName};
     const res = await  api.annexDownload(paramsObj);
      getRes(res, data => {
        window.open(data.downLoadUrl);
      })
    },
    // 附件预览
    async fnPreView (item, bigCategoryItemCode,index) {
      this.imgArr = [...item.fileList]
      this.preViewTit = item.subCategoryName
      this.popMsg = {
        preViewTit: item.subCategoryName,
        parentCode: bigCategoryItemCode,
        currentCode: item.subCategoryCode
      }
      this.initIndex = index;
      this.modalStaus = true
    },
    // 关闭附件弹窗
    close (closeFlag, imgList, popMsg) {
      this.modalStaus = closeFlag
      if (this.initOperObj.showOperBar) {
        // 预览弹窗的信息修改
        this.fileListArr.forEach((bigCategoryItem, bigCategoryIndex) => {
          if (bigCategoryItem.bigCategoryCode === popMsg.parentCode) {
            bigCategoryItem.itemList.forEach((subCategoryItem, subCategoryIndex) => {
              if (subCategoryItem.subCategoryCode === popMsg.currentCode) {
                imgList.forEach((imgItem, imgIndex) => {
                  let curItem = subCategoryItem.fileList.find(item => item.fileId === imgItem.fileId)
                  curItem = JSON.parse(JSON.stringify(imgItem));
                  delete curItem.percent;
                  delete curItem.rotateOrder;
                  delete curItem.preViewUrl;
                })
              }
            })
          }
        })
      }
    },
    //显示空白
    showHideEmpty () {
      this.showAllFlag = !this.showAllFlag
    },
    //全选
    allChose () {
      this.choseAllFlag = !this.choseAllFlag
    },
    //审批  打合格不合格
    approvalAnnex (flag) {
      this.fileListArr.forEach((bigCategoryItem, bigCategoryIndex) => {
        bigCategoryItem.itemList.forEach((subCategoryItem, subCategoryIndex) => {
          subCategoryItem.fileList.forEach((littleItem, littleIndex) => {
            littleItem.approveStatus = flag
          })
        })
      })
    },
    //审批返回
  returnBack(){
    let flag = true;
      this.fileListArr.forEach((bigCategoryItem, bigCategoryIndex) => {
        bigCategoryItem.itemList.forEach((subCategoryItem, subCategoryIndex) => {
          subCategoryItem.fileList.forEach((littleItem, littleIndex) => {
            if(littleItem.approveStatus!=this.originObjStr[bigCategoryIndex].itemList[subCategoryIndex].fileList[littleIndex].approveStatus
              || littleItem.approveRemark!=this.originObjStr[bigCategoryIndex].itemList[subCategoryIndex].fileList[littleIndex].approveRemark
            ){
              flag =false
            }
          })
        })
      })
      if(!flag){
        this.$Modal.confirm({
          title:'...',
          content: `有数据未保存,确定返回？`,
          onOk: () => {
            this.$router.go(-1);
          }
        })
      }else{
         this.$router.go(-1);
      }
  },
    //审核保存
   async  saveApproval(){
     let paramsObj = {
       businessNo:this.initOperObj.businessNo,
       operator:'kehuzhoutingting',
       operatingTime:dateFtt("yyyy-MM-dd hh:mm:ss",new Date()),
       fileList:[]
     };
      this.fileListArr.forEach((bigCategoryItem, bigCategoryIndex) => {
        bigCategoryItem.itemList.forEach((subCategoryItem, subCategoryIndex) => {
          subCategoryItem.fileList.forEach((littleItem, littleIndex) => {
            if(littleItem.approveStatus==-1||littleItem.approveStatus==1){
              paramsObj.fileList.push({
                fileId:littleItem.fileId,
                approveRemark:littleItem.approveRemark,
                approveStatus:littleItem.approveStatus
              })
            }
          })
        })
      })
      const res = await api.annexApproval(paramsObj);
      if (res) {
        getRes(res, data => {
            this.$Message.success('保存成功');
            setTimeout(()=>{
              this.$emit('reload')//调用父组件刷新当前组件的方法
              // this.$forceUpdate();
            },500)
        })
      }
    }
  },
  async mounted () {
      if(this.initOperObj['dataSource']){
          this.fileListArr = this.initOperObj['dataSource'];
          this.inited = true;
          return;
      }
    if(this.initOperObj['showAllBlank']===0){
      this.showAllFlag=false;//默认不展示空白附件框
    }
    // 获取附件结构 todo 接口不好使 接口好使后打开下面的
    const res = await api.annexStructure({
      businessNo: this.initOperObj.businessNo,
      templateType: this.initOperObj.templateType,
      orderType: this.initOperObj.orderType
    })
    if (res) {
      getRes(res, data => {
        if(data.length>1){//附件大类名称全部不展示   就合并成一个数组
          if(data[0].bigCategoryDisplay == 0){
            data.forEach((item,index)=>{
              if(index>0){
                data[0].itemList = [...data[0].itemList,...item.itemList]
              }
            })
            data = [data[0]];
          }
        }
        this.originObjStr = JSON.parse(JSON.stringify(data));//保存一份初始数据,审批时返回时对比提醒
        this.fileListArr = data
        this.inited = true
      })
    }
  }
}
</script>
