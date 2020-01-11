import {request} from './request';

export function getHomeMultidata(){
  return request({
    url:'/home/multidata'
  })
}
// 函数调用

function test(){
  const names = ['why','aaa']
}
test()