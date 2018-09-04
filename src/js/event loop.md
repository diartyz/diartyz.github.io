# 事件循环

## 浏览器

- task：script 中代码、setTimeout、setInterval、I/O、UI render
- microtask: promise、Object.observe、MutationObserver

---

- 执行完主执行线程中的任务
- 取出 Microtask Queue 中任务执行直到清空
- 取出 Macrotask Queue 中一个任务执行
- 取出 Microtask Queue 中任务执行直到清空
- 重复 3 和 4

## node

- timers：执行满足条件的 setTimeout、setInterval 回调
- I/O callbacks：是否有已完成的 I/O 操作的回调函数，来自上一轮的 poll 残留
- idle，prepare：仅内部使用，可忽略
- poll：等待还没完成的 I/O 事件，会因 timers 和超时时间等结束等待
- check：执行 setImmediate 的回调
- close callbacks：关闭所有的 closing handles，一些 onclose 事件

---

- 同步任务
- 发出异步请求
- 规划定时器生效的时间
- 执行 `process.nextTick()`
- 清空当前循环内的 Timers Queue，清空 NextTick Queue，清空 Microtask Queue
- 清空当前循环内的 I/O Queue，清空 NextTick Queue，清空 Microtask Queue
- 清空当前循环内的 Check Queu，清空 NextTick Queue，清空 Microtask Queue
- 清空当前循环内的 Close Queu，清空 NextTick Queue，清空 Microtask Queue
- 进入下轮循环
