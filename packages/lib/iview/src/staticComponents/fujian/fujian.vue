<template>
    <div class="margin-t-20 fujian flex flex-wrap" v-if="inited">
        <div v-for="(item ,index) in  structure"  :class="item.fileMaximum > 1 ? 'item multiple': 'item single'">
                <div class="title text-center">{{item.subCategoryName}}</div>
                <div class="box">
                    <div class="uploadzone" v-if="viewFlag==0">
                        <input v-if="item.fileOpration!=1" ref="inputFile" :multiple="item.fileMaximum > 1" @change="fnChange($event,item,index)" type="file" class="uploadBtn">
                        <div class="iconfont icontianjia"></div>
                        <p>{{item.fileMaximum > 1 ? '上传多个附件':'上传单个附件'}}</p>
                    </div>

                    <div class="file" :class="item.fileMaximum == 1 ? 'singleFile' : ''" v-if="item.fileList.length>0" v-for="(file,idxFile) in item.fileList">
                        <div class="img"><img :src="file.fileId.endsWith('.pdf') ? pdfIcon  : file.thumbnailUrl" alt=""></div>
                        <div class="actions" ><span v-if="item.fileOpration!=1 && viewFlag==0 " @click="fnRemove(item,idxFile)" class="iconfont iconlajitong margin-r-20"></span><span @click="fnDownload(file)" class="iconfont icondr"></span></div>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
    import {getRes} from "../../utils/utils";
    import pdfIcon from './PDF.png'
    import '../../styles/components/.fujian.less'
    import * as api from './api'
    export default {
        name: "fujian",
        data(){
            return {
                pdfIcon,
                structure:[],
                filesToUpload:{fileList:[]},
                len:0,
                inited:false
            }
        },
        props:{
            orderNo:{type:String},
            view: {type:String, default: 'yixin_carsales_mail'},
            viewFlag:{type:String,default:'0'},//1 查看 0 编辑
            templateType:{type:Number,default:1},//1、提报页 2、补充信息页 3、请款页 4、取消确认打款页
            orderType:{type:String,default:"1"} // 1 车主包
        },
        methods:{
            //附件上传
            async fnChange(ev,item,index){
                this.filesToUpload['orderNo'] = this.orderNo;
                this.filesToUpload['fileCategory'] = item.subCategoryCode;

                //获取文件列队
                var selectedFiles = ev.target.files;
                var len = selectedFiles.length;
                if(len > item.fileMaximum - item.fileList.length){
                    len = item.fileMaximum - item.fileList.length;
                    this.$Message.error(`当前小类最多上传${item.fileMaximum}个文件`);
                    if(len==0) return;
                }
                this.len = len;
                var _this = this;

                for(var i=0;i<len;i++){
                    //初始化清空上传列表
                    _this.filesToUpload['fileList'] = [];
                    var curFile = selectedFiles[i];
                    if(curFile){
                        var res = await _this.validateImg(curFile,item,i);
                        if(res.isValid && res.base64){
                            _this.filesToUpload['fileList'].push({
                                fileName:res.fileName,
                                fileBase64:res.base64
                            });
                            const uploadRes = await api.annexUpload(this.filesToUpload);
                            getRes(uploadRes,data=>{
                                item.fileList = [...item.fileList,...data];
                                if(i==this.len-1){
                                    document.querySelectorAll('[type="input"]').value=""
                                }
                            })
                        }
                    }
                }
            },

            async validateImg(file, item, curFileIndex) {
                return new Promise(async (resolve, reject) => {
                    var res = {isValid: false, file: null};
                    var ext = (file.type).split('/')[1];
                    var ext1 = (file.name).split('.');
                    ext1 = ext1[ext1.length - 1];
                    if (!item.fileFormat.includes(ext) && !item.fileFormat.includes(ext1)) {
                        this.$Message.error(`请上传${item.fileFormat.join(',')}格式文件`);
                        res.isValid = false;
                        resolve(res)
                    } else {
                        if (ext !== 'pdf') {
                            if(!lrz){
                               return
                            }
                            var newFile = await lrz(file, {width: 1024});
                            if (newFile.fileLen > item.fileMaxSize * 1024 * 1024) {
                                this.$Message.error(`文件大小不能超过${item.fileMaxSize}`);
                                res.isValid = false;
                                resolve(res)
                            } else {
                                res.isValid = true;
                                //res.file = new File([newFile.file] ,file.name, { type:file.type,lastModified:Date.now()} );
                                res.base64 = newFile.base64.split(',')[1];
                                res.fileName = file.name;
                            }
                            resolve(res)
                        } else {
                            //如果是pdf
                            if (file.fileLen > item.fileMaxSize * 1024 * 1024) {
                                this.$Message.error(`文件大小不能超过${item.fileMaxSize}`);
                                res.isValid = false;
                                resolve(res)
                            } else {
                                res.isValid = true;
                                var fr = new FileReader();
                                fr.readAsDataURL(file);
                                fr.onload = function (e) {
                                    console.log(e.target.result)
                                    res.base64 = e.target.result.split(',')[1];
                                    res.fileName = file.name;
                                    resolve(res)
                                }
                            }
                        }
                    }
                })
            },

            //附件删除
            async fnRemove(item,index){
                var fileId = item.fileList[index].fileId;
                const res = await api.annexURemove({fileId ,orderNo:this.orderNo });
                getRes(res,()=>{
                    (item.fileList).splice(index,1);
                    document.querySelectorAll('[type="input"]').value=""
                })
            },
            //附件下载
            async fnDownload(file){
                window.open(file.downLoadUrl)
            },
        },
        async mounted(){
            //获取附件结构 todo 接口不好使 接口好使后打开下面的
              const res = await api.annexStructure({
                orderNo:this.orderNo,
                templateType:this.templateType,
                orderType:this.orderType
            });
            if(!!res){
                getRes(res,data=>{
                    if(data){
                        this.structure = data[0].itemList;
                        this.inited = true;
                    }
                })
            }
        }
    }
</script>
