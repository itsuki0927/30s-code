# isRelative

检查是否为相对路径。

## 技巧

- 使用正则对路径进行判断。

## code

```js
const isRelative = path => !/^([a-z]+:)?[\\/]/i.test(path);
```

## 示例

```js
console.log(isRelative('/foo/bar/baz')); // false
console.log(isRelative('C:\\foo\\bar\\baz')); // false
console.log(isRelative('foo/bar/baz.txt')); // true
console.log(isRelative('foo.md')); // true
```
