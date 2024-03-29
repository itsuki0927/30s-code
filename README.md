# 30s-code

30s-code 学习笔记, **相信积累的力量, 加油!!!**

啦啦啦啦啦
啦啦啦啦啦
啦啦啦啦啦

## Array

1. [unzipWith](https://github.com/itsuki0927/30s-code/blob/main/Js/Array/unzipWith.md): 数组的每一列作为参数执行 fn 函数, 最后每一列的执行结果由一个数组返回
2. [compactObject](https://github.com/itsuki0927/30s-code/blob/main/Js/Array/compactObject.md): 深度删除一个对象或数组中的所有 falsy 值。
3. [frequencies](https://github.com/itsuki0927/30s-code/blob/main/Js/Array/frequencies.md): 统计每一个出现元素出现频率。
4. [remove](https://github.com/itsuki0927/30s-code/blob/main/Js/Array/remove.md): 改变原始数组, 返回删除满足`fn`函数的元素。
5. [shank](https://github.com/itsuki0927/30s-code/blob/main/Js/Array/shank.md): 等同于`Array.prototype.splice()`, 但不是改变原数组, 而是返回一个修改后的新数组
6. [symmetricDifferenceBy](https://github.com/itsuki0927/30s-code/blob/main/Js/Array/symmetricDifferenceBy.md): 找出两个数组的对称差值。
7. [orderBy](https://github.com/itsuki0927/30s-code/blob/main/Js/Array/orderBy.md): 根据`props`以及`orders`排序数组。
8. [pull](https://github.com/itsuki0927/30s-code/blob/main/Js/Array/pull.md): 改变原始数组, 过滤指定的值。
9. [pullAtIndex](https://github.com/itsuki0927/30s-code/blob/main/Js/Array/pull.md): 改变原始数组, 过滤指定下标的值。
10. [takeRightUtil](https://github.com/itsuki0927/30s-code/blob/main/Js/Array/takeRightUtil.md): 从数组的末端删除元素，直到提供的函数返回 true。返回被移除的元素。
11. [sortedLastIndexBy](https://github.com/itsuki0927/30s-code/blob/main/Js/Array/sortedLastIndexBy.md): 根据提供的迭代器函数，查找值插入数组以保持其排序顺序的最高索引。
12. [takeRightWhile](https://github.com/itsuki0927/30s-code/blob/main/Js/Array/takeRightWhile.md): 从数组的末端删除元素，直到提供的函数返回`false`。返回被移除的元素。
13. [arrayToCSV](https://github.com/itsuki0927/30s-code/blob/main/Js/Array/arrayToCSV.md): 将二维数组转换为 CSV 字符串。
14. [averageBy](https://github.com/itsuki0927/30s-code/blob/main/Js/Array/averageBy.md): 求平均值。
15. [bifurcate](https://github.com/itsuki0927/30s-code/blob/main/Js/Array/bifurcate.md): 根据过滤数组分为两组。
16. [merge](https://github.com/itsuki0927/30s-code/blob/main/Js/Array/merge.md): 从两个或多个对象的组合创建一个新对象。
17. [orderWith](https://github.com/itsuki0927/30s-code/blob/main/Js/Array/orderWith.md): 根据提供的顺序数组，按属性排序对象数组。
18. [partitionBy](https://github.com/itsuki0927/30s-code/blob/main/Js/Array/partitionBy.md): 将 `fn` 应用于 `arr` 中的每个值，每次提供的函数返回新值时都会拆分它。
19. [sumBy](https://github.com/itsuki0927/30s-code/blob/main/Js/Array/sumBy.md): 使用提供的函数将每个元素映射到值后，计算数组的和。
20. [toPairs](https://github.com/itsuki0927/30s-code/blob/main/Js/Array/toPairs.md): 获取对象/可迭代值的键值对二维数组。
21. [differenceBy](https://github.com/itsuki0927/30s-code/blob/main/Js/Array/differenceBy.md): 将提供的函数应用于两者的每个数组元素，返回两个数组之间的差异。
22. [intersectionBy](https://github.com/itsuki0927/30s-code/blob/main/Js/Array/intersectionBy.md): 将提供的函数应用于两个数组的每个数组元素后，返回两个数组中存在的元素。
23. [reduceSuccessive](https://github.com/itsuki0927/30s-code/blob/main/Js/Array/reduceSuccessive.md): 将函数与累加器和数组中的每个元素（从左到右从左到右应用，返回连续减少值的数组。
24. [castArray](https://github.com/itsuki0927/30s-code/blob/main/Js/Array/castArray.md): 将值强制转换为数组。
25. [isEmpty](https://github.com/itsuki0927/30s-code/blob/main/Js/Array/isEmpty.md): 检测数组是否为空。
26. [zip](https://github.com/itsuki0927/30s-code/blob/main/Js/Array/zip.md): 创建一个元素数组，根据元素在原始数组中的位置进行分组。
27. [cartesianProduct](https://github.com/itsuki0927/30s-code/blob/main/Js/Array/cartesianProduct.md): 计算两个数组的笛卡尔乘积。
28. [equals](https://github.com/itsuki0927/30s-code/blob/main/Js/Array/equals.md): 递归比较两个对象, 值是否相等。
29. [mostConsecutive](https://github.com/itsuki0927/30s-code/blob/main/Js/Array/mostConsecutive.md): 使用给定函数 fn 映射 n 个连续元素的每个块。

## Function

1. [pipeAsyncFunctions](https://github.com/itsuki0927/30s-code/blob/main/Js/Function/pipeAsyncFunctions.md): 异步函数的管道函数。
2. [converge](https://github.com/itsuki0927/30s-code/blob/main/Js/Function/converge.md): 接受收敛函数和分支函数列表，并返回将每个分支函数应用于参数的函数，分支函数的结果作为参数传递给收敛函数。
3. [deepMerge](https://github.com/itsuki0927/30s-code/blob/main/Js/Function/deepMerge.md): 使用一个函数处理两个对象中存在的键，深度合并两个对象。
4. [rearg](https://github.com/itsuki0927/30s-code/blob/main/Js/Function/rearg.md): 创建一个函数，该函数调用提供的函数，其参数根据指定的索引排列。

## Date

1. [formatDuration](https://github.com/itsuki0927/30s-code/blob/main/Js/Date/formatDuration.md): 返回给定毫秒数的可读格式。
2. [formatSeconds](https://github.com/itsuki0927/30s-code/blob/main/Js/Date/formatSeconds.md): 返回给定秒数的 ISO 格式。
3. [suffixAmPm](https://github.com/itsuki0927/30s-code/blob/main/Js/Date/suffixAmPm.md): 给小时添加 am、pm 前缀。
4. [diffDays](https://github.com/itsuki0927/30s-code/blob/main/Js/Date/diffDays.md): 计算两个日期相差多少天。
5. [monthDiff](https://github.com/itsuki0927/30s-code/blob/main/Js/Date/monthDiff.md): 计算两个日期相差多少个月。

## String

1. [capitalize](https://github.com/itsuki0927/30s-code/blob/main/Js/String/capitalize.md): 字符串首字母大写。
2. [isRelative](https://github.com/itsuki0927/30s-code/blob/main/Js/String/isRelative.md): 检查是否为相对路径。
3. [consistsRepeatedSubstring](https://github.com/itsuki0927/30s-code/blob/main/Js/String/consistsRepeatedSubstring.md): 判断字符串是否由重复的字符串序列组成.
4. [isPalindrome](https://github.com/itsuki0927/30s-code/blob/main/Js/String/isPalindrome.md): 判断是否为回文字符串。

## Math

1. [digitize](https://github.com/itsuki0927/30s-code/blob/main/Js/Math/digitize.md): 将数字转换为数字数组，必要时删除其符号。

## Css

1. [flex 响应式](https://github.com/itsuki0927/30s-code/blob/main/Css/responsiveFlexbox.html)
