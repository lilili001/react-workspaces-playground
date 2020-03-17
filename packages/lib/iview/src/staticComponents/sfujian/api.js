/* 附件查询 */
export const annexStructure = (params) => axios.post(`${server}/aries/annex/structure`, params)

/* 附件上传 */
export const annexUpload = (params) => axios.post(`${server}/aries/annex/upload`, params)

/* 附件下载 */
export const annexDownload = (params) => axios.post(`${server}/aries/annex/getDownloadUrl`,params)

/* 附件删除 */
export const annexURemove = (params) => axios.post(`${server}/aries/annex/delete`, params)

/* 附件预览 */
export const annexPreview = (params) => axios.post(`${server}/aries/annex/getPreViewUrl`,params)

// 附件审核
export const annexApproval = (params) => axios.post(`${server}/aries/annex/approval`,params)
