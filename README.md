# 30s-code

30s-code 学习笔记

## Array

1. orderWith: 根据所提供的顺序数组，返回按属性排序的已排序的对象数组

2. combine: 组合两个对象数组，使用指定的键来匹配对象

3. hasDuplicates: 检查平面数组中是否有重复的值

4. pullBy: 根据给定的迭代器函数，修改原始数组以过滤指定的值

5. unzipWith: 创建元素数组，将 zip 生成的数组中的元素解分组，并应用提供的函数

6. JSONtoCSV: 将对象数组转换为仅包含指定列的逗号分隔值（CSV）字符串

7. stableSort: 对数组执行稳定的排序，并在它们的值相同时保留项目的初始索引。 不更改原始数组，而是返回一个新数组

8. reducedFilter: 根据条件过滤对象数组，同时也过滤掉未指定的键

9. countBy: 根据给定的函数对数组的元素进行分组，并返回每个组中元素的计数

10. groupBy: 根据给定的函数对数组的元素进行分组

11. mapObject: 使用函数将数组的值映射到对象，其中键-值对由原始值作为键，而函数的结果作为值

12. all: 数组的每一项是否全部通过验证函数

13. allEqual: 检查数组中的所有元素是否相等

14. any: 验证数组中是否有一个元素通过验证函数

15. compact: 过滤数组中的 falsy 值

16. difference: 两个数组之间的差

17. arithmeticProgression: 以算术级数返回一个数字数组，该数组从给定的正整数开始，直至指定的限制

18. average: 返回两个或多个数字的平均值

19. castArray: 如果不是数组，则将提供的值强制转换为数组

20. digitize: 将数字转换为数字数组，并在必要时删除其符号

21. drop: 返回一个新数组，其中左侧删除了 n 个元素

22. dropRight: 返回一个新数组，其中右侧删除了 n 个元素

23. everyNth: 返回数组中的每第 n 个元素

24. fibonacci: 生成一个指定长度的斐波那契数列

25. filterNonUnique: 过滤掉非唯一值,并返回一个新数组

26. findLast: 查找提供的函数为其返回真值的最后一个元素

27. head: 返回数组的头元素

28. includesAll: 检查values中的所有元素是否都包含在arr中

29. includesAny: 检查arr中是否包含至少一个values中的元素

30. initial: 返回数组中除最后一个元素之外的所有元素

31. isEmpty: 检查值是否为[]、{}、''、null、undefined、没有可枚举属性

32. last: 返回数组最后一个元素

33. maxBy: 使用提供的函数将每个元素映射到一个值后，返回数组的最大值

34. minBy: 使用提供的函数将每个元素映射到一个值后，返回数组的最小值

35. nodeListToArray: 类数组->数组

36. none: 检查提供的谓词函数是否对集合中的所有元素返回false

37. nthElement: 返回数组的第n个元素

38. objectFromPairs: 根据给定的键值对创建一个对象

39. objectToEntries: 从一个对象创建一个键-值对数组

40. objectToPairs: 从一个对象创建一个键-值对数组

41. offset: 将指定数量的元素移动到数组的末尾

42. pluck: 将对象数组转换为与指定键对应的值数组

43. reject: 根据谓词函数过滤数组的值，仅返回谓词函数返回false的值

44. sample: 从数组中获取随机元素

45. similarity: 返回同时出现在两个数组中的元素的数组

46. sum: 计算两个或多个数字/数组的总和

47. tail: 返回数组中除第一个元素外的所有元素

48. take: 创建一个数组，其中从头开始删除了n个元素

49. union: 返回存在于两个数组中的任何一个中的每个元素至少一次 

50. uniqueElements: 查找数组中的所有唯一值

51. without: 筛选出具有指定值之一的数组元素

52. accumulate: 创建一个部分和数组

53. allEqualBy: 根据提供的映射函数，检查数组中的所有元素是否相等

54. allUniqueBy: 根据提供的映射函数，检查数组中的所有元素是否唯一

55. aperture: 创建由连续元素组成的n元组数组

56. arrayToCSV: 将二维数组转换为逗号分隔值（CSV）字符串

57. arrayToHTMLList: 将给定的数组元素转换为<li>标记，并将它们附加到给定id的列表中

58. averageBy: 使用提供的函数将每个元素映射到一个值后，计算数组的平均值

59. bifurcate: 根据给定过滤器数组的结果将值分为两组

60. bifurcateBy: 根据给定过滤功能的结果将值分为两组

61. chunk: 将一个数组分成指定大小的较小数组

62. binarySearch: 二分查找

63. bubbleSort: 冒泡排序

64. linearSearch: 线性搜索算法查找数组中给定元素的第一个索引

65. bucketSort: 桶排序

66. chunkIntoN: 将一个数组分成n个较小的数组

67. collectInto: 将接受数组的函数更改为可变函数

68. countOccurrences: 计算数组中某个值的出现次数

69. CSVToArray: 将逗号分隔值（CSV）字符串转换为2D数组

70. deepFlatten: 数组扁平化

71. differenceBy: 将提供的函数应用于两个数组的每个数组元素后，返回两个数组之间的差

72. differenceWith: 从比较器函数未返回true的数组中筛选出所有值

73. dropRightWhile: 从数组末尾删除元素，直到传递的函数返回true，返回数组中剩余的元素

74. dropWhile: 删除数组中的元素，直到传递的函数返回true，返回数组中剩余的元素

75. filterNonUniqueBy: 基于提供的比较器函数，创建一个过滤了非唯一值的数组

76. filterUniqueBy: 根据提供的比较器函数，创建一个过滤出唯一值的数组

77. findLastIndex: 查找提供的函数为其返回真值的最后一个元素的索引

78. flatten: 数组扁平化

79. forEachRight: 反向forEach

80. frequencies: 创建一个对象，将数组的唯一值作为键，并将其频率作为值

81. frozenSet: 创建一个冻结的Set对象

82. generateItems: 使用给定的函数生成具有给定数量的项的数组

83. haveSameContents: 检查两个数组是否包含相同的元素，而不管顺序如何

84. indexOfAll: 查找数组中val的所有索引。 如果val从不发生，则返回一个空数组

85. initial2DArray: 初始化给定宽度，高度和值的2维数组

86. initializeArrayWithRange: 初始化一个数组，该数组包含指定范围内的数字，其中开始和结束包括其共同差值步骤

87. initializeArrayWithRangeRight: 初始化一个数组，该数组包含指定范围内的数字（反向），其中开始和结束包含其共同差值步骤

88. intersectionWith: 使用提供的比较器函数返回两个数组中都存在的元素

89. is: 检查提供的值是否为指定的类型

90. isArrayLike: 检查所提供的参数是否类似于数组（即可迭代）

91. isContainedIn: 检查第一个数组的元素是否包含在第二个数组中，而不管顺序如何

92. join: 将数组的所有元素连接到字符串中并返回此字符串。 使用分隔符和结尾分隔符

93. longestItem: 接受任意数量的可迭代对象或具有length属性的对象，并返回最长的对象

94. maxN: 返回数组中的n个最大元素

95. median: 中位数

96. merge: 通过两个或更多对象的组合创建一个新对象

97. mergeSortedArrays: 将两个排序数组合并为一个

98. minN: 返回数组中的n个最小元素

99. mostFrequent: 返回数组中最频繁的元素

100. partition: 将元素分为两个数组，具体取决于每个元素提供的函数的真实性

101. prod: 计算两个或多个数字/数组的乘积

102. pull: 改变原始数组以过滤掉指定的值

103. reduceSuccessive: 对一个累加器和数组中的每个元素（从左到右）应用一个函数，返回一个依次减小的值的数组

104. reduceWhich: 在应用提供的函数设置比较规则之后，返回数组的最小值/最大值

105. remove: 通过删除给定函数返回false的元素来改变数组

106. sampleSize: 从数组中获取唯一键处的n个随机元素，最大为数组的大小

107. selectionSort: 选择排序

108. shank: splice实现

109. shuffle: 数组乱序

110. size: 获取array、object、string的长度

111. sortedIndex: 查找应将值插入数组以保持其排序顺序的最低索引

112. sortedIndexBy: 根据提供的迭代器函数，找到应将值插入数组以保持其排序顺序的最低索引

113. sortedLastIndex: 查找应将值插入数组以保持其排序顺序的最高索引

114. sortedLastIndexBy: 根据提供的迭代器函数，找到一个值，该值应插入数组以保持其排序顺序的最高索引

115. standardDeviation: TODO

116. subSet: 检查第一个可迭代对象是否是第二个可迭代对象的子集，不包括重复值

117. sumBy: 使用提供的函数将每个元素映射到一个值后，计算数组的总和

118. superSet: 检查第一个可迭代对象是否是第二个可迭代对象的超集，不包括重复值

119. symmetricDifferenceWith: 使用提供的函数作为比较器，返回两个数组之间的对称差

120. takeRight: 创建一个从末尾删除n个元素的数组

121. takeUntil: 删除数组中的元素，直到传递的函数返回true。 返回移除的元素

122. takeWhile: 删除数组中的元素，直到传递的函数返回false。 返回移除的元素

123. toHash: 将给定的数组简化为值哈希（键控数据存储）

124. toPairs: 从对象或其他可迭代对象创建键值对数组的数组

125. truthCheckCollection: 检查谓词函数对于集合的所有元素是否为真

126. unfold: 使用迭代器函数和初始种子值构建数组

127. unionBy: 在将提供的函数应用于两个数组的每个数组元素之后，至少返回一次存在于两个数组中的每个数组的每个元素

128. unionWith: 使用提供的比较器函数，至少返回一次存在于两个数组中的每个元素的每个元素

129. uniqueElementsBy: 根据提供的比较器函数查找数组的所有唯一值

130. uniqueElementsByRight: 从右侧开始，根据提供的比较器函数查找数组的所有唯一值

131. uniqueSymmetricDifference: 返回两个数组之间的唯一对称差异，不包含两个数组中的重复值

132. unzip: 创建一个数组数组，将zip产生的数组中的元素取消分组

133. xProd: 通过从阵列中创建每个可能的对，在提供的两个阵列中创建一个新阵列

134. zip: 创建一个元素数组，根据元素在原始数组中的位置进行分组

135. zipObject: 将属性与值，给定的有效属性标识符数组和值数组相关联

136. compactObject: 从对象或数组中深度删除所有'假值'

## Math

1. and: 判断两个参数是不是都是真值

2. accumulate: 计算部分和
