/**
 * Created by miyaye on 2019/12/8.
 */
import Mock from 'mockjs'

const Random = Mock.Random
function wrap (data) {
  return {
    code: 0,
    data,
    message: ''
  }
}
export const baodanList = wrap(
  { 'pageSize': 10,
    'start': 1,
    'resultCount': 100,
    data: [
      {
        'orderNo': '2019120713',
        'approveStatus': 'xx',
        'custName': 'xx',
        'custPhone': 'xx',
        'certificateNo': 'xx',
        'endDate': 'xx',
        'remainingDays': 'xx',
        'delayStatus': 'xx',
        'operatingButton': [
          { operatingCode: 'toFinish', operatingName: '去完成' },
          { operatingCode: 'delay', operatingName: '去延期申诉' }
        ],
        'operatingCode': 'xx',
        'operatingName': 'xx'
      }
    ]
  }
)

export const upcoming = wrap([
  { taskType: '1', taskNum: 100 },
  { taskType: '2', taskNum: 99 },
  { taskType: '3', taskNum: 98 },
  { taskType: '4', taskNum: 97 },
  { taskType: '5', taskNum: 96 }
])
