import Vue from 'vue'
import VblLayout from '@/components/layout'
import MTable from '@/components/mTable'
import STable from '@/components/sTable'
import ETable from '@/components/eTable'

import MApplySteps from '@/components/MApplySteps'
import MApprovalResult from '@/components/MApprovalResult'
import MBaseInfo from '@/components/MBaseInfo'
import MBreadCrumb from '@/components/MBreadCrumb'
import MTabbar from '@/components/MTabbar'
import MCModal from '@/components/MCModal'
import MBoxWithTitle1 from '@/components/MBoxWithTitle1'
import MBoxWithTitle2 from '@/components/MBoxWithTitle2'
import MFujian from '@/components/fujian/fujian'
import MNumberAniCell from '@/components/MNumberAniCell'
import MCascad from '@/components/MCascad'
import MLoading from './plugins/loading/mloading'
import MInitPageBox from '@/components/MInitPageBox'
import MCmPanel from '@/components/MCmPanel'

// 这里是业务组件
import ConfigDimension from '@/components/biz/ConfigDimension'

Vue.component('VblLayout', VblLayout)
Vue.component('MTable', MTable)
Vue.component('STable', STable)
Vue.component('ETable', ETable)
Vue.component('MApplySteps', MApplySteps)
Vue.component('MApprovalResult', MApprovalResult)
Vue.component('MBaseInfo', MBaseInfo)
Vue.component('MBreadCrumb', MBreadCrumb)
Vue.component('MTabbar', MTabbar)
Vue.component('MCModal', MCModal)
Vue.component('MBoxWithTitle1', MBoxWithTitle1)
Vue.component('MBoxWithTitle2', MBoxWithTitle2)
Vue.component('MInitPageBox', MInitPageBox)
Vue.component('MFujian', MFujian)
Vue.component('MNumberAniCell', MNumberAniCell)
Vue.component('MCascad', MCascad)
Vue.component('MLoading', MLoading)
Vue.component('MCmPanel', MCmPanel)
Vue.component('ConfigDimension', ConfigDimension)

Vue.use(MLoading)
