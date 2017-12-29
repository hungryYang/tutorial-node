/*
如果打出的日志等级比info高的话也会打到info里面，error默认比info 等级高

日志一般会放在其他磁盘上
需要以合适的频率进行归档
*/
const winston = require('winston')
const {Logger,transports} = winston
require('winston-daily-rotate-file')
// const logger = new Logger({
//   transports: [
//     new (transports.File)({
//       name:'error_logger',
//       filename:'logs/error.log',
//       level:'error'
//     }),
//     new transports.Console({
//       level:'error'
//     }),
//     new (transports.File)({
//       name:'info_logger',
//       filename:'logs/info.log',
//       level:'info'
//     })
//   ]
// })

const reqLogger = new Logger({
  transports: [
    new transports.Console(),
    new transports.DailyRotateFile({
      filename:'./logs/req_log.log',
      dataPattern: 'yyyy_MM_dd',
      prepend: true,
      level: 'info',
    })
  ]
})

/*
log rotation

日志周期滚动，如以天为节，作为文件名存档
*/


const err = new Error('noo')
reqLogger.info('request from client',{a:1,b:2,err:err.stack})