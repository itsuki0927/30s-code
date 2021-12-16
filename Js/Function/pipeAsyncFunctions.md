# pipeAsyncFunctions

异步函数的管道函数。

## 技巧

- 使用`...` 将函数参数合并成一个数组。
- 使用`Array.prototype.reduce()` 从左至右执行。
- 使用`Promise.resolve()` 将参数初始化为 `Promise`。
- 返回高阶函数提供调用, 并且每一个函数必须接收单个参数。

## code

```js
const pipeAsyncFunctions =
  (...fns) =>
  args =>
    fns.reduce((f, g) => f.then(g), Promise.resolve(args));
```

## 示例

```js
const sum = pipeAsyncFunctions(
  x => x + 1,
  x => new Promise(resolve => setTimeout(() => resolve(x + 2), 1000)),
  x => x + 3,
  async x => (await x) + 4,
);
(async () => {
  console.log(await sum(5)); // 15 (after one second)
})();
```
