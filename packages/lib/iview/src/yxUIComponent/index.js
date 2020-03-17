import Vue from 'vue';
import MApplySteps from "./custom/applySteps";
import MApprovalResult from "./custom/approvalResult";
import MBaseInfo from "./custom/baseInfo";
import MBreadCrumb from "./custom/breadCrumb";
import MTabbar from "./custom/tabbar";
import MCModal from "./custom/cModal";
import MBoxWithTitle1 from "./custom/boxWithTitle1";
import MBoxWithTitle2 from "./custom/boxWithTitle2";
import MFujian from "./custom/fujian/fujian";
import MNumberAniCell from "./custom/numberAniCell";
import MCascad from './custom/cascad'
import MLoading from './plugins/loading/mloading'

Vue.use(MLoading);

export default {
    MApplySteps,
    MApprovalResult,
    MBaseInfo,
    MBreadCrumb,
    MTabbar,
    MCModal,
    MBoxWithTitle1,
    MBoxWithTitle2,
    MFujian,
    MNumberAniCell,
    MCascad
}
