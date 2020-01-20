/*
使用引數為 (callback(item, i, array), context) 的函式:
Array#map
Array#filter
Array#some: 回傳是否找到的布林值
Array#find: 回傳對應的資料項
Array#findIndex: 回傳對應資料項的索引位置
 */

['a', 'b', 'c', 'd', 'e'].find(item => item === 'c')
// <- 'c'
['a', 'b', 'c', 'd', 'e'].find((item, i) => i === 0)
// <- 'a'
['a', 'b', 'c', 'd', 'e'].find(item => item === 'z')
// <- undefined

['a', 'b', 'c', 'd', 'e'].findIndex(item => item === 'c')
// <- 2
['a', 'b', 'c', 'd', 'e'].findIndex((item, i) => i === 0)
// <- 1
['a', 'b', 'c', 'd', 'e'].findIndex(item => item === 'z')
// <- -1，沒有符合的資料項
