# `let`、`const`变量声明

## `let`

- 变量不能重复声明
- 块级作用域 全局、函数、eval
- 不存在变量提升



## `const`

- 一定要赋初始值
- 一般使用大写
- 常量的值不能修改
- 块级作用域

- 对于数组和对象元素的修改，不算对常量的修改，不会报错
  - 没有修改地址



# 解构赋值

- 数组解构

```javascript
let test = ['熊大', '熊二', '熊三', '熊四']
let [name1, name2, name3, name4] = test
```

- 对象解构

```javascript
let obj = {
	name: '熊大',
  age: 18,
  favorite() {
    console.log('my favorite is ice cream')
	}
}
let { name, age, favorite } = obj
```



# 模板字符串

声明字符串的方式``

- 内容中可以直接出现换行符
- 变量拼接



# 简化对象写法

es6 允许在大括号里，直接写入变量和函数，作为对象的属性和方法（书写更加简洁）

```javascript
let name = '熊大'
let favorite = function() {
  console.log('my favorite is ice cream')
}
let pInfo = {
  name,
  favorite,
  improve() {
    console.log('提升技能')
	}
}
```



# 箭头函数

使用箭头`=>` 定义函数

```javascript
let fn = (a, b) => {
  return a+b
}
```

和function定义的函数的区别：

- this是静态的，this始终指向函数声明时所在作用域下的this的值
- 不能作为构造函数实例化对象
- 不能使用 arguments 变量
- 简写
  - 当形参有些只有一个的时候，省略小括号
  - 当代码体只有一条语句的时候，省略花括号、省略return（必须省略）

箭头函数适合与this无关的回调，如定时器、数组的方法回调



# 函数参数的默认值

- 形参初始值。具有默认值的参数，一般位置要靠后（潜规则）
- 与结构赋值结合

```javascript
function connect({host="127.0.0.1", port, user, password }) {
  
}

connect({
  host: 'localhost',
  port: '8080',
  user: 'root',
  password: 'root'
})
```



# rest 参数

es6 引入rest参数，用于获取函数的实惨，用来代替 arguments

```javascript
function date(...args) {
  console.log(args) // Array
}
date('xiongda', 'xionger', 'xiongsan')
```

rest参数必须放到参数最后



# spread扩展运算符

... 扩展运算符能将 数组 转换为逗号分隔的参数序列



扩展运算符的应用

- 数组的合并。例：`[...a, ...b]`
- 数组的克隆。属于浅拷贝
- 将伪数组转为真正的数组



# Symbol

引入了一种新的原始数据类型 Symbol，表示独一无二的值。是 javascript 的第七种数据类型。

不能与其他数据进行运算。



# 迭代器





# 生成器

生成器是一个特殊的函数。



## 生成器函数参数



## 生成器函数实例



# Promise

异步编程新解决方案。



# Set



# Map

