# HTML

## H5新特性

| 功能               | 实现                                              |
| ------------------ | ------------------------------------------------- |
| 选择器             | document.querySelector、document.querySelectorAll |
| 拖拽               | (Drag and Drop)API                                |
| 媒体播放           | video、audio                                      |
| 本地存储           | localStorage、sessionStorage                      |
| 离线应用           | manifest                                          |
| 桌面通知           | Notification                                      |
| 语义化标签         | article、footer、header、nav、section             |
| 增强表单控件       | calendar、date、time、email、url、search          |
| 地理位置           | Geolocation                                       |
| 多任务             | webworker                                         |
| 全双工通信协议     | websocket                                         |
| 历史管理           | history                                           |
| 跨域资源共享(CORS) | Access-Control-Allow-Origin                       |
| 页面可见性改变事件 | visibilitychange                                  |
| 跨窗口通信         | PostMessage                                       |
| 绘画               | canvas                                            |
| 其他               | Form Data对象                                     |





## H5语义化

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  
  <title>        页面主体内容。
    <hn>         h1~h6，分级标题，<h1> 与 <title> 协调有利于搜索引擎优化。
    <ul>         无序列表。
    <li>         有序列表。
    <header>     页眉通常包括网站标志、主导航、全站链接以及搜索框。
    <nav>        标记导航，仅对文档中重要的链接群使用。
    <main>       页面主要内容，一个页面只能使用一次。如果是web应用，则包围其主要功能。
    <article>    定义外部的内容，其中的内容独立于文档的其余部分。
    <section>    定义文档中的节（section、区段）。比如章节、页眉、页脚或文档中的其他部分。
    <aside>      定义其所处内容之外的内容。如侧栏、文章的一组链接、广告、友情链接、相关产品列表等。
    <footer>     页脚，只有当父级是body时，才是整个页面的页脚。
    <small>      呈现小号字体效果，指定细则，输入免责声明、注解、署名、版权。
    <strong>     和 em 标签一样，用于强调文本，但它强调的程度更强一些。
    <em>         将其中的文本表示为强调的内容，表现为斜体。
    <mark>       使用黄色突出显示部分文本。
    <figure>     规定独立的流内容（图像、图表、照片、代码等等）（默认有40px左右margin）。
    <figcaption> 定义 figure 元素的标题，应该被置于 figure 元素的第一个或最后一个子元素的位置。
    <cite>       表示所包含的文本对某个参考文献的引用，比如书籍或者杂志的标题。
    <blockquoto> 定义块引用，块引用拥有它们自己的空间。
    <q>          短的引述（跨浏览器问题，尽量避免使用）。
    <time>       datetime属性遵循特定格式，如果忽略此属性，文本内容必须是合法的日期或者时间格式。
    <abbr>       简称或缩写。
    <dfn>        定义术语元素，与定义必须紧挨着，可以在描述列表dl元素中使用。
    <address>    作者、相关人士或组织的联系信息（电子邮件地址、指向联系信息页的链接）。
    <del>        移除的内容。
    <ins>        添加的内容。
    <code>       标记代码。
    <meter>      定义已知范围或分数值内的标量测量。（Internet Explorer 不支持 meter 标签）
    <progress>   定义运行中的进度（进程）。


  <progress id="progress" max="100" value="0">50%</progress>
  <script>
    const pro = document.querySelector("#progress")
    pro.addEventListener('click', function () {
      setInterval(() => {
        this.value += 5
        if (this.value >= 100) this.value = 0
      }, 300);

    })
  </script>
</body>

</html>
```



## 元素类型

| 元素类型 | 示例                                            |
| :------- | ----------------------------------------------- |
| 行内元素 | a  b  span  img  input  select  strong          |
| 块级元素 | div  p  ul  ol  li  dl  dt  dd  h1  h2  h3  h4… |
| 空元素   | br  hr  img  input  link  meta                  |

>  行内元素不可以设置宽高，不独占一行
>
>  块级元素可以设置宽高，独占一行



## 全局属性

>class: 为元素设置类标识
>
>data: 为元素增加⾃定义属性
>
>draggable: 设置元素是否可拖拽
>
>id:元素id，⽂档内唯⼀
>
>lang:元素内容的的语⾔
>
>style:⾏内css样式
>
>title:元素相关的建议信息



## DOM性能优化

### 避免频繁操作DOM元素

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <ul id="list">
  </ul>

  <script>
    const list = document.querySelector("#list")

    // 创建一个dom片段
    const frag = document.createDocumentFragment()

    for (let i = 1; i <= 10; i++) {
      const li = document.createElement("li")
      li.innerHTML = `item - ${i}`

      frag.appendChild(li)
    }

    // 批量插入 节约性能
    list.appendChild(frag)
  </script>

</body>

</html>
```



# CSS



## 边距

> margin和padding



>- 当只指定**一个**值时，该值会统一应用到**全部四个边**的内边距上。
>- 指定**两个**值时，第一个值会应用于**上边和下边**的内边距，第二个值应用于**左边和右边**。
>- 指定**三个**值时，第一个值应用于**上边**，第二个值应用于**右边和左边**，第三个则应用于**下边**的内边距。
>- 指定**四个**值时，依次（顺时针方向）作为**上边**，**右边**，**下边**，和**左边**的内边距。



## 元素居中

### 水平居中

- 元素为⾏内元素，设置⽗元素text-align:center
- 如果元素宽度固定，可以设置左右margin为auto
- 如果元素为绝对定位，设置⽗元素position为relative，元素设left:0;right:0;margin:auto
- **使⽤flex-box布局，指定justify-content属性为center**
- display设置为tabel-ceil

### 垂直居中

- 将显示⽅式设置为表格，display:table-cell,同时设置vertial-align：middle
- 使⽤flex布局，设置为align-item：center
- 绝对定位中设置bottom:0,top:0,并设置margin:auto
- 绝对定位中固定⾼度时设置top:50%，margin-top值为⾼度⼀半的负值
- ⽂本垂直居中设置line-height为height值 



## 伪类和伪元素

[伪类和伪元素](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)

## flex布局

[flex布局](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)



## 清除浮动

>⽗级div定义height
>
>结尾处加空div标签clear:both
>
>**⽗级div定义伪类:after和zoom**
>
>**⽗级div定义overflow:hidden**
>
>⽗级div也浮动，需要定义宽度
>
>结尾处加br标签clear:both
>
>⽐较好的是第3种⽅式，好多⽹站都这么⽤





# JavaScript

## 数组



### 1. 添加/删除



#### splice

**splice() 方法用于添加或删除数组中的元素**

**注意：**这种方法**会**改变原始数组。

```javascript
array.splice(index,howmany,item1,.....,itemX)
```

| 参数                  | 描述                                                         |
| --------------------- | ------------------------------------------------------------ |
| *index*               | **必需**。规定从何处添加/删除元素。 该参数是开始插入和（或）删除的数组元素的下标，必须是数字。 |
| *howmany*             | 可选。规定应该删除多少元素。必须是数字，但可以是 "0"。 如果未规定此参数，则删除从 index 开始到原数组结尾的所有元素。 |
| *item1*, ..., *itemX* | 可选。要添加到数组的新元素                                   |

```javascript
let fruits = ['apple', 'banana', 'orange']
fruits.splice(0, 1, 'lemon')
console.log(fruits);
// 输出结果：[ 'lemon', 'banana', 'orange' ]
```





#### slice

**slice() 方法可从已有的数组中返回选定的元素。**

slice() 方法可提取字符串的某个部分，并以新的字符串返回被提取的部分。

```javascript
array.slice(start,end)
```

| 参数    | 描述                                                         |
| ------- | ------------------------------------------------------------ |
| *start* | 可选。规定从何处开始选取。如果该参数为负数，则表示从原数组中的倒数第几个元素开始提取，slice(-2) 表示提取原数组中的倒数第二个元素到最后一个元素（包含最后一个元素）。 |
| *end*   | 可选。规定从何处结束选取。该参数是数组片断结束处的数组下标。如果没有指定该参数，那么切分的数组包含从 start 到数组结束的所有元素。如果该参数为负数， 则它表示在原数组中的倒数第几个元素结束抽取。 slice(-2,-1) 表示抽取了原数组中的倒数第二个元素到最后一个元素（不包含最后一个元素，也就是只有倒数第二个元素） |
```javascript
在数组中读取元素：

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1,3);
// citrus 输出结果
[ 'Orange', 'Lemon' ]
```





#### shift & unshift

- **shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值**

- **unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度**


```js
array.shift()
array.unshift(item1,item2, ..., itemX)
```

```javascript
// 从数组中移除元素:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift()
// fruits结果输出:
['Orange','Apple','Mango']

// 将新项添加到数组起始位置:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon","Pineapple");
// fruits 将输出：
['Lemon','Pineapple','Banana','Orange','Apple','Mango']
```



#### push & pop

- **push() 方法向数组的末尾添加一个或多个元素，并返回新的长度**
- **pop() 方法用于删除数组的最后一个元素并返回删除的元素**

```javascript
array.push(item1, item2, ..., itemX)
array.pop()
```

```javascript
// 数组中添加新元素：
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi")
// fruits 结果输出：
['Banana','Orange','Apple','Mango','Kiwi']

// 移除最后一个数组元素：
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
// fruits 结果输出：
['Banana','Orange','Apple']
```



#### fill

fill() 方法用于将一个固定值替换数组的元素

```js
array.fill(value, start, end)
```

| 参数    | 描述                                       |
| ------- | ------------------------------------------ |
| *value* | 必需。填充的值。                           |
| *start* | 可选。开始填充位置。                       |
| *end*   | 可选。停止填充位置 (默认为 *array*.length) |

```js
let arr = [1, 2, 3]
let result = arr.fill('ok', 0, 2)
console.log(result); //['ok','ok',3]
```



### 2. 排序



#### reverse

**用于翻转数组**

```javascript
array.reverse()
```
```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();
// fruits 结果输出：
['Mango','Apple','Orange','Banana']
```



#### sort

**sort() 方法用于对数组的元素进行排序。排序顺序可以是字母或数字，并按升序或降序**

```javascript
array.sort(sortfunction)
```

| 参数           | 描述                             |
| -------------- | -------------------------------- |
| *sortfunction* | 可选。规定排序顺序。必须是函数。 |

```javascript
// 数字升序:
var points = [40,100,1,5,25,10];
points.sort(function(a,b){return a-b});// 如果第一个参数应该排在第二个参数前面，就返回负值
// points输出结果：
[1,5,10,25,40,100]

// 数字降序:
var points = [40,100,1,5,25,10];
points.sort(function(a,b){return b-a});// 如果第一个参数应该排在第二个参数后面，就返回正值
// points输出结果：
[ 100, 40, 25, 10, 5, 1 ]

// 字母升序:
var arr = ['cat', "bus", "dog", "Apple", "egg"]
arr.sort();
// arr输出结果：
[ 'Apple', 'bus', 'cat', 'dog', 'egg' ] // 再次调用 reverse()即可完成字母降序
```



### 3. 查询



#### findIndex

> findIndex()方法返回数组中满足提供的**测试函数**的第一个元素的索引。若没有找到对应元素则返回 -1。

```js
let arr = ["a", "b", "c", 34, 98, 66]

console.log(arr.findIndex((item) => item > 50)) // 4
```



#### indexOf

> **indexOf()** 方法返回在数组中可以找到给定元素的第一个索引，如果不存在，则返回 **-1**。

下面来看一些例子:

```
const numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1]; 
alert(numbers.indexOf(4, 4)); // 5 

// lastIndexof 则是从后往前找
alert(numbers.lastIndexOf(4, 4)); // 3 
```



#### includes

>includes()**返回布尔值**，表示是否至少找到一个与指定元素匹配的项。在比较第一个参数跟数组每一 
>
>项时，会使用全等（===）比较，也就是说两项必须严格相等。
>
>arr.includes(searchElement,fromIndex) 
>
>从`fromIndex` 索引处开始查找 `searchElement`。如果为负值，则按升序从 `array.length + fromIndex` 的索引开始搜（即使从末尾开始往前跳 `fromIndex` 的绝对值个索引，然后往后搜寻）。默认为 0。



### 4. 连接



#### join

**把数组中的所有元素转换为一个字符串**

```javascript
array.join(separator)
```

| 参数        | 描述                                                         |
| ----------- | ------------------------------------------------------------ |
| *separator* | 可选。指定要使用的分隔符。如果省略该参数，则使用逗号作为分隔符。 |

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var energy = fruits.join(" and ");
// energe 输出结果
'Banana and Orange and Apple and Mango'
```



#### concat

**返回连接后的新数组**

```js
arr1.concat(arr2)
```

```javascript
let arr1 = [1,2,3],
	arr2 = [4,5,6]
let result = arr1.concat(arr2);
console.log(result)   //[1,2,3,4,5,6]
```

### 5. 创建

#### Array.of()

>  将参数中所有值作为元素形成数组。

```js
console.log(Array.of(1, 2, 3, 4)) // [1, 2, 3, 4]

// 参数值可为不同类型
console.log(Array.of(1, "2", true)) // [1, '2', true]

// 参数为空时返回空数组
console.log(Array.of()) // []
```

#### Array.from()

> 将类数组对象或可迭代对象转化为数组。

```js
// 参数为数组,返回与原数组一样的数组
console.log(Array.from([1, 2])); // [1, 2]
 
// 参数含空位
console.log(Array.from([1, , 3])); // [1, undefined, 3]
```



### 6. 进阶



#### forEach

**调用数组的每个元素，并将元素传递给回调函数**

```javascript
array.forEach(function(currentValue, index, arr), thisValue)
```

| 参数           | 描述                                                         |
| -------------- | ------------------------------------------------------------ |
| *currentValue* | **必需**。当前元素                                           |
| *index*        | 可选。当前元素的索引值。                                     |
| *arr*          | 可选。当前元素所属的数组对象。                               |
| *thisValue*    | 可选。传递给函数的值一般用 "this" 值。<br/>如果这个参数为空， "undefined" 会传递给 "this" 值 |

```javascript
let fruits = ['banana', 'apple', 'lemon', 'mango']
fruits.forEach(function(currentValue, index) {
        console.log(currentValue, index);
    })
// banana 0
// apple 1
// lemon 2
// mango 3
```



#### filter

**创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素**

```javascript
array.filter(function(currentValue,index,arr), thisValue)
```

| 参数           | 描述                                                         |
| -------------- | ------------------------------------------------------------ |
| *currentValue* | **必需**。当前元素的值                                       |
| *index*        | 可选。当前元素的索引值                                       |
| *arr*          | 可选。当前元素属于的数组对象                                 |
| *thisValue*    | 可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。<br/>如果省略了 thisValue ，"this" 的值为 "undefined" |

```javascript
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1]; 
let filterResult = numbers.filter((item, index, array) => item > 2); 
alert(filterResult); // 3,4,5,4,3
```



#### map

它对数组的每个元素都调用函数，并返回结果数组。

```js
let result = arr.map(function(item, index, array) {
  // 返回新值而不是当前元素
})
```

例如，在这里我们将每个元素转换为它的字符串长度：

```js
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // [5,7,6]
```



#### every

every() 方法用于检测数组所有元素是否**都符合**指定条件（通过函数提供）

```js
array.every(function(currentValue,index,arr), thisValue)
```

| 参数           | 描述                                                         |
| -------------- | ------------------------------------------------------------ |
| *currentValue* | 必须。当前元素的值                                           |
| *index*        | 可选。当前元素的索引值                                       |
| *arr*          | 可选。当前元素属于的数组对象                                 |
| *thisValue*    | 可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。<br/>如果省略了 thisValue，"this" 的值为 "undefined" |

```js
let arr = [1, 2, 3]
let result = arr.every(item => item > 0)
console.log(result);//true
```



#### reduce

reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值

```js
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
```

| 参数           | 描述                                     |
| -------------- | ---------------------------------------- |
| function(...)  | **必需**。用于执行每个数组元素的函数。   |
| *total*        | **必需**。*初始值*, 或者计算结束后的返回值。 |
| *currentValue* | **必需**。当前元素                      |
| *currentIndex* | 可选。当前元素的索引                     |
| *arr*          | 可选。当前元素所属的数组对象。            |
| *initialValue* | 可选。传递给函数的初始值                 |

```javascript
let arr = [1, 2, 3];
const result = arr.reduce((pre, current) => {
	return pre += current;		// 注意要把每一次的计算结果返回给pre。
},0);	// 这个0是pre的默认初始值，可改为任意数字。
console.log(result)	// 6

```



#### some

**检测数组中的元素是否满足指定条件**（函数提供）

some() 方法会依次执行数组的每个元素：

- 如果有一个元素满足条件，则表达式返回*true* , 剩余的元素不会再执行检测。
- 如果没有满足条件的元素，则返回false。

**注意：** some() 不会对空数组进行检测。

**注意：** some() 不会改变原始数组。

```javascript
array.some(function(currentValue,index,arr),thisValue)
```

| 参数           | 描述                         |
| -------------- | ---------------------------- |
| *currentValue* | **必需**。当前元素的值       |
| *index*        | 可选。当前元素的索引值       |
| *arr*          | 可选。当前元素属于的数组对象 |

```javascript
var a = [11,5,80,90,4]
function f1(item,index,array){
    console.log(item);
    return item>50
}
a.some(f1)
// 11
// 5
// 80
console.log(a.some(f2))
// true

// 还可以检索数组中是否存在某个值
function f2(item,index,array){
	if(item == 10){
		console.log	(10+"存在于这个数组");
	}
	console.log	(10+"不存在于这个数组");
}
a.some(f2)
// 10不存在于这个数组
// 10不存在于这个数组
// 10不存在于这个数组
// 10不存在于这个数组
// 10不存在于这个数组
console.log(a.some(f2))
// false
```



#### find

find() 方法返回通过测试（函数内判断）的数组的**第一个元素**的值

* find() 对于空数组，函数是不会执行的。

* find() 并没有改变数组的原始值。

```js
array.find(function(currentValue, index, arr),thisValue)
```

| 参数           | 描述                         |
| -------------- | ---------------------------- |
| *currentValue* | 必需。当前元素               |
| *index*        | 可选。当前元素的索引值       |
| *arr*          | 可选。当前元素所属的数组对象 |

```js
  let arr = [99, 100, 101]
  let res = arr.find(item => item > 99)
  console.log(res);// 100
```



#### findIndex

findIndex()方法返回数组中满足提供的测试函数的**第一个元素的索引**。若没有找到对应元素则返回**-1**。

```js
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// expected output: 3

```



#### flat

 按照**指定的深度**递归遍历数组, 返回值是遍历到的**所有元素**集合

  ```javascript
arr.flat()
  ```

```js
let arr = [1,2,[3,4,[5,6]]],
	res1 = arr.flat(Infinity),  //无限递归，直到最后
	res2 = arr.flat();		//如果不传参数那么只递归一次
console.log(res1)   //[1, 2, 3, 4, 5, 6]
console.log(res2)	//[1,2,3,4,[5,6]]

```

#### from

>**Array.from()** 方法对一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。
>
>`Array.from(arrayLike, mapFn, thisArg)`

```js
Array.from('foo')// ['f','o','o']
```



## 对象

### 遍历



#### Object.keys

> 返回一个**数组**，成员是参数对象自身的（不含继承的）所有可枚举（enumerable）属性的**键名**

```js
Object.keys(obj)
```

```js
let o = {
            a: 1,
            b: 2
        }
        let keyArr = Object.keys(o)
        console.log(keyArr); //['a','b']
```



#### Object.values

> 返回一个**数组**，成员是参数对象自身的（不含继承的）所有可枚举（enumerable）属性的**键值**

```js
Object.values(obj)
```



```javascript
let o = {
    a: 1,
    b: 2
}
let valArr = Object.entries(o)
console.log(valArr); //[1,2]
```



#### **Object.entries**

> 用于迭代对象(数组也适用)

```js
Object.entries(obj)
```

```javascript
 let o = {
            name: 'zs',
            age: 12,
            sex: '男'
        }
 console.log(Object.entries(o));
 // [['name', 'zs'],['age', 12],['sex', '男']]
```



### 赋值



#### {..obj1,...obj2}

**用于取出参数对象所有可遍历属性然后拷贝到当前对象**

**基本用法**

```javascript
let person = {name: "Amy", age: 15};
let someone = { ...person }; 
console.log(someone);  //{name: "Amy", age: 15}
```

**可用于合并两个对象**
```javascript
let age = {age: 15}; 
let name = {name: "Amy"};
let person = {...age, ...name};
console.log(person);  //{age: 15, name: "Amy"}
```
**注意点**

自定义的属性和拓展运算符对象里面属性的相同的时候：**自定义的属性在拓展运算符后面，则拓展运算符对象内部同名的属性将被覆盖掉。**
```javascript
let person = {name: "Amy", age: 15};
let someone = { ...person, name: "Mike", age: 17};
console.log(someone);  //{name: "Mike", age: 17}
```
自定义的属性在拓展运算度前面，则变成设置新对象默认属性值。

```javascript
let person = {name: "Amy", age: 15};
let someone = {name: "Mike", age: 17, ...person}; 
console.log(someone);  //{name: "Amy", age: 15}
```




拓展运算符后面是空对象，没有任何效果也不会报错。

`let a = {...{}, a: 1, b: 2}; a;  //{a: 1, b: 2}`

拓展运算符后面是null或者undefined，没有效果也不会报错。

`let b = {...null, ...undefined, a: 1, b: 2}; b;  //{a: 1, b: 2}`



#### Object.assign

**用于将源对象的所有可枚举属性复制到目标对象中**

**基本用法**

```javascript
let target = {a: 1};
let object2 = {b: 2};
let object3 = {c: 3};
Object.assign(target,object2,object3);   // 第一个参数是目标对象，后面的参数是源对象 
console.log(target);  // {a: 1, b: 2, c: 3}
```

- 如果目标对象和源对象有同名属性，或者多个源对象有同名属性，则后面的属性会覆盖前面的属性。

- 如果该函数只有一个参数，当参数为对象时，直接返回该对象；当参数不是对象时，会先将参数转为对象然后返回。

  

### 删除



#### delete

**删除对象中的属性**

```javas
delete Obj.key
```

```javascript
let obj={a:1,b:2}
delete obj.a
console.log(obj)// {b:2}
```



### 属性

#### Object.getOwnPropertyDescriptor

#### Object.defineProperty

查看/修改对象属性的属性描述符

```js
Object.getOwnPropertyDescriptor(obj,'key')
Object.defineProperty(obj, 'key', {
      value: xx,
      writable: true/false,
      configurable: true/false,
      enumerable:true/false
    })
```

```js
var myObject = { a:2 };

Object.getOwnPropertyDescriptor( myObject, "a" ); 
// {
// value: 2,
// writable: true,
// enumerable: true,
// configurable: true
// }

Object.defineProperty(myObject, 'a', {
      value: 99,
      writable: true,
      configurable: false,
      enumerable: false
    })
console.log(myObject.a) // 99
```





### Math 对象

| 方法                                                         | 描述                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [abs(x)](https://www.runoob.com/jsref/jsref-abs.html)        | 返回 x 的绝对值。                                            |
| [acos(x)](https://www.runoob.com/jsref/jsref-acos.html)      | 返回 x 的反余弦值。                                          |
| [asin(x)](https://www.runoob.com/jsref/jsref-asin.html)      | 返回 x 的反正弦值。                                          |
| [atan(x)](https://www.runoob.com/jsref/jsref-atan.html)      | 以介于 -PI/2 与 PI/2 弧度之间的数值来返回 x 的反正切值。     |
| [atan2(y,x)](https://www.runoob.com/jsref/jsref-atan2.html)  | 返回从 x 轴到点 (x,y) 的角度（介于 -PI/2 与 PI/2 弧度之间）。 |
| [ceil(x)](https://www.runoob.com/jsref/jsref-ceil.html)      | 对数进行上舍入。                                             |
| [cos(x)](https://www.runoob.com/jsref/jsref-cos.html)        | 返回数的余弦。                                               |
| [exp(x)](https://www.runoob.com/jsref/jsref-exp.html)        | 返回 Ex 的指数。                                             |
| [floor(x)](https://www.runoob.com/jsref/jsref-floor.html)    | 对 x 进行下舍入。                                            |
| [log(x)](https://www.runoob.com/jsref/jsref-log.html)        | 返回数的自然对数（底为e）。                                  |
| [max(x,y,z,...,n)](https://www.runoob.com/jsref/jsref-max.html) | 返回 x,y,z,...,n 中的最高值。                                |
| [min(x,y,z,...,n)](https://www.runoob.com/jsref/jsref-min.html) | 返回 x,y,z,...,n中的最低值。                                 |
| [pow(x,y)](https://www.runoob.com/jsref/jsref-pow.html)      | 返回 x 的 y 次幂。                                           |
| [random()](https://www.runoob.com/jsref/jsref-random.html)   | 返回 0 ~ 1 之间的随机数。                                    |
| [round(x)](https://www.runoob.com/jsref/jsref-round.html)    | 四舍五入。                                                   |
| [sin(x)](https://www.runoob.com/jsref/jsref-sin.html)        | 返回数的正弦。                                               |
| [sqrt(x)](https://www.runoob.com/jsref/jsref-sqrt.html)        | 返回数的平方根。                                               |
| [tan(x)](https://www.runoob.com/jsref/jsref-tan.html)        | 返回数的正切。                                               |



### Date对象

| 常用方法         | 描述                                                         |
| ---------------- | ------------------------------------------------------------ |
| toLocaleString() | 返回一个表述指定 [`Date`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 对象的字符串。该字符串格式因不同语言而不同。 |
| getTime()        | 返回一个数值，表示从 1970 年 1 月 1 日 0 时 0 分 0 秒（UTC，即协调世界时）距离该 [`Date`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 对象所代表时间的毫秒数。（更早的时间会用负数表示） |

[查看所有方法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date#%E6%96%B9%E6%B3%95)





## 字符串

#### split

>使用指定的分隔符字符串将一个[`String`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)对象分割成子字符串数组

```js
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]
```



#### trim

**trim() 方法用于删除字符串的头尾空白符，空白符包括：空格、制表符 tab、换行符等其他空白符等。**

trim() 方法**不会**改变原始字符串。

```javascript
string.trim()
```

```javascript
var str = "       Runoob        ";
console.log(str.trim());
// 输出结果:
'Runoob'
```



#### repeat

**字符串复制指定次数**

```javascript
string.repeat(count)
```

| 参数    | 描述                       |
| ------- | -------------------------- |
| *count* | **必需**，设置要复制的次数 |

```javascript
var str = "Runoob";
str.repeat(2);
// 输出结果:
'RunoobRunoob'
```



#### padStart & padEnd

**字符串补全**

- **padStart**：返回新的字符串，表示用参数字符串从头部（左侧）补全原字符串。
- **padEnd**：返回新的字符串，表示用参数字符串从尾部（右侧）补全原字符串。

以上两个方法接受两个参数，第一个参数是指定生成的字符串的最小长度，第二个参数是用来补全的字符串。如果没有指定第二个参数，默认用空格填充。

```javascript
console.log("h".padStart(5,"o"));  // "ooooh"
console.log("h".padEnd(5,"o"));    // "hoooo"
console.log("h".padStart(5));      // "    h"
```

如果指定的长度小于或者等于原字符串的长度，则返回原字符串:

```javascript
console.log("hello".padStart(5,"A"));  // "hello"
```

如果原字符串加上补全字符串长度大于指定长度，则截去超出位数的补全字符串:

```javascript
console.log("hello".padEnd(10,",world!"));  // "hello,worl"
```

常用于补全位数：

```javascript
console.log("123".padStart(10,"0"));  // "0000000123"
```



#### toLowerCase & toUpperCase

**字符串大小写转换**

```javascript
let c = 'tom'
let c1 = c.toUpperCase()
console.log(c1);
// 输出结果 
'TOM'
```

```javascript
let m = 'Jerry'
let m1 = m.toLowerCase()
console.log(m1);
// 输出结果 
'jerry'
```



## module

### 导入导出规则

#### 导出

- 在声明一个 class/function/… 之前：
  - `export [default] class/function/variable ...`
- 独立的导出：
  - `export {x [as y], ...}`.
- 重新导出：
  - `export {x [as y], ...} from "module"`
  - `export * from "module"`（不会重新导出默认的导出）。
  - `export {default [as y]} from "module"`（重新导出默认的导出）。

#### 导入

- 导入命名的导出：
  - `import {x [as y], ...} from "module"`
- 导入默认的导出：
  - `import x from "module"`
  - `import {default as x} from "module"`
- 导入所有：
  - `import * as obj from "module"`
- 导入模块（其代码，并运行），但不要将其任何导出赋值给变量：
  - `import "module"`

## 常用方法

### typeof

>**typeof** 运算符返回一个字符串，表示操作数的类型。

| 类型                                                         | 结果                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [Undefined](https://developer.mozilla.org/zh-CN/docs/Glossary/undefined) | `"undefined"`                                                |
| [Null](https://developer.mozilla.org/zh-CN/docs/Glossary/Null) | `"object"`（[原因](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null)） |
| [Boolean](https://developer.mozilla.org/zh-CN/docs/Glossary/Boolean) | `"boolean"`                                                  |
| [Number](https://developer.mozilla.org/zh-CN/docs/Glossary/Number) | `"number"`                                                   |
| [BigInt](https://developer.mozilla.org/zh-CN/docs/Glossary/BigInt) | `"bigint"`                                                   |
| [String](https://developer.mozilla.org/zh-CN/docs/Glossary/String) | `"string"`                                                   |
| [Symbol](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol) | `"symbol"`                                                   |
| [Function](https://developer.mozilla.org/zh-CN/docs/Glossary/Function)（在 ECMA-262 中实现 [[Call]]；[classes](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/class)也是函数) | `"function"`                                                 |
| 其他任何对象                                                 | `"object"`                                                   |

### instanceof

>**instanceof** **运算符**用于检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上。

```js
// 定义构造函数
function C(){}
function D(){}

var o = new C();


o instanceof C; // true，因为 Object.getPrototypeOf(o) === C.prototype


o instanceof D; // false，因为 D.prototype 不在 o 的原型链上

o instanceof Object; // true，因为 Object.prototype.isPrototypeOf(o) 返回 true
C.prototype instanceof Object // true，同上

C.prototype = {};
var o2 = new C();

o2 instanceof C; // true

o instanceof C; // false，C.prototype 指向了一个空对象，这个空对象不在 o 的原型链上。

D.prototype = new C(); // 继承
var o3 = new D();
o3 instanceof D; // true
o3 instanceof C; // true 因为 C.prototype 现在在 o3 的原型链上
```



## 常用封装函数

- 获取min~max随机整数(包含)

```js
function getNewId(minId = 0, maxId = 9999, idList = []) {
    if (minId >= maxId) {
    maxId = minId
    minId = 0
  }
  // 返回minId~maxId之间(含)任意整数
  let id = minId + Math.floor(Math.random() * (maxId - minId + 1))
  let isOver = true
  if (idList.length) {
    idList.forEach((item) => {
      if (id == item) {
        console.log("id重复，获取下一id")
        isOver = false
      }
    })
  }

  return isOver ? id : getNewId(minId, maxId, idList)
}
```





# 常用操作

### Git

#### 常用命令

```
git branch 查看本地所有分支
git status 查看当前状态 
git commit 提交 
git branch -a 查看所有的分支
git branch -r 查看远程所有分支
git commit -am "init" 提交并且加注释 
git remote add origin git@192.168.1.119:ndshow
git push origin master 将文件给推到服务器上 
git remote show origin 显示远程库origin里的资源 
git push origin master:develop
git push origin master:hb-dev 将本地库与服务器上的库进行关联 
git checkout --track origin/dev 切换到远程dev分支
git branch -D master develop 删除本地库develop
git checkout -b dev 建立一个新的本地分支dev
git merge origin/dev 将分支dev与当前分支进行合并
git checkout dev 切换到本地dev分支
git remote show 查看远程库
git add . 将工作区的被修改的文件和新增的文件提交到暂存区，不包括被删除的文件
git rm 文件名(包括路径) 从git中删除指定文件
git clone git://github.com/schacon/grit.git 从服务器上将代码给拉下来
git config --list 看所有用户
git ls-files 看已经被提交的
git rm [file name] 删除一个文件
git commit -a 提交当前repos的所有的改变
git add [file name] 添加一个文件到git index
git commit -v 当你用－v参数的时候可以看commit的差异
git commit -m "This is the message describing the commit" 添加commit信息
git commit -a -a是代表add，把所有的change加到git index里然后再commit
git commit -a -v 一般提交命令
git log 看你commit的日志
git diff 查看尚未暂存的更新
git rm a.a 移除文件(从暂存区和工作区中删除)
git rm --cached a.a 移除文件(只从暂存区中删除)
git commit -m "remove" 移除文件(从Git中删除)
git rm -f a.a 强行移除修改后文件(从暂存区和工作区中删除)
git diff --cached 或 $ git diff --staged 查看尚未提交的更新
git stash push 将文件给push到一个临时空间中
git stash pop 将文件从临时空间pop下来
```



### 跨域

#### proxy代理

-  [vite配置方法](https://vitejs.cn/vite3-cn/config/)（见下文工具库）

### 简易调用接口

```js
 // 利用axios简易调用接口
    axios.get('https://api.seniverse.com/v3/weather/daily.json', {
        // 注意存储query参数的是params对象
        params: {
          key: 'SCYrvkytJze9qyzOh',
          location: 'shenzhen'
        }
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      })
```



### 连接自己的服务器

打开终端(window最好在gitbash打开)

```
ssh root@服务器公网ip地址
```

之后输入密码



# [Vue](https://cn.vuejs.org/)

## [vue-router](https://router.vuejs.org/zh/)

### 全局 路由守卫

```js
// 全局前置路由守卫
router.beforeEach(async (to, from) => {
  // 显示loading
  showFullLoading()

  const token = getToken()
  if (
    // 检查用户是否已登录
    !token &&
    // ❗️ 避免无限重定向
    to.name !== "login"
  ) {
    //  提示用户并重定向到登录页面
    showNotification("error", "请先登录", true)
    return { name: "login" }
  }

  // 防止重复登录
  if (token && to.name === "login") {
    //
    showNotification("success", "当前已登录", true)
    return false
  }

  // 如果当前已登录 自动获取用户信息 并保存在vuex中
  if (token) {
    await store.dispatch("getInfo")
  }

  // 设置前往页面的标题
  let title = to.meta.title
  document.title = title ? title + " | Conyu Shop" : "Conyu Shop"
})

// 全局后置路由守卫
router.afterEach((to, from) => {
  // 隐藏loading
  hideFullLoading()
})
```

### 监听路由变化

```vue
<script setup>
import { onBeforeRouteUpdate } from "vue-router"

onBeforeRouteUpdate((to, from) => {
  // ...
})
</script>
```



## [pinia](https://pinia.vuejs.org/zh/)

### 定义store

- Options Store

```js
export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
})
```

- Setup Store

```js
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  function increment() {
    count.value++
  }

  return { count, increment }
})

// 在 Setup Store 中：

// ref() 就是 state 属性
// computed() 就是 getters
// function() 就是 actions
```

### 使用Store

```vue
<template>
  <div class="main">
    <h2>main</h2>
    <div>
      <h2>count:{{ counterStore.count }}</h2>
      <h2>doubleCount:{{ counterStore.doubleCount }}</h2>
      <button @click="counterStore.increment">+1</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCounterStore } from "@/store"
// 可以在模板中直接使用store   
const counterStore = useCounterStore()

// import { storeToRefs } from "pinia"
// 如果要从store中解构属性时保持其响应性，你需要使用 storeToRefs()
// const { count, doubleCount } = storeToRefs(counterStore)

// action 可以直接提取
// const { increment } = counterStore
</script>

<style scoped></style>

```



## 组件通信

```vue
// 子组件
<template>
  <button @click="$emit('callParentMethod')">调用父组件方法</button>
</template>

<script setup>
const emit = defineEmits(["callParentMethod"])
const childMethod = () => console.log("子组件的方法被调用了")

// 把子组件的方法暴露出去
defineExpose({
  childMethod
})

/* 使用 <script setup> 的组件是默认关闭的——即通过模板引用或者 $parent 链获取到的组件的公开实例，不会暴露任何在 <script setup> 中声明的绑定。
 可以通过 defineExpose 编译器宏来显式指定在 <script setup> 组件中要暴露出去的属性 */
</script>
```

```vue
// 父组件
<template>
  <Child ref="ChildRef" @call-parent-method="parentMethod"></Child>
  <button @click="callChildMethod">调用子组件方法</button>
</template>

<script setup>
import { ref } from "vue"
import Child from "./child.vue"

const ChildRef = ref(null)
const callChildMethod = () => ChildRef.value.childMethod()

const parentMethod = () => console.log("父组件的方法被调用了")
</script>
```



## 计算属性

>计算属性默认是只读的。当你尝试修改一个计算属性时，你会收到一个运行时警告。只在某些特殊场景中你可能才需要用到“可写”的属性，你可以通过同时提供 getter 和 setter 来创建，以todolist为例：

```js
const isAllChecked = computed({
    get() {
      return dones.value == all.value && all.value > 0
    },
    set(newValue) {
      todos.value.forEach((todo) => {
        todo.done = newValue
      })
    }
  })
```





# [React](https://zh-hans.reactjs.org/)

## [redux](https://cn.redux.js.org/)

### [redux-toolkit](https://redux-toolkit.js.org/)



## 技巧总结

### 1.组件生命周期流程？以类组件为例

```jsx
// 实例化      渲染           挂载                  更新                    卸载
constructor=>render=> componentDidMount -->componentDidUpdate -->componentWillUnmount
```

### 2.组件通信-子传父

```jsx
// App
import React, { Component } from "react"
import Child from "./Child"

export class App extends Component {
  constructor() {
    super()
    this.state = {
      counter: 100
    }
  }

  changeCount(num) {
    this.setState({
      counter: this.state.counter + num
    })
  }

  render() {
    const { counter } = this.state
    return (
      <div>
        <h2>{counter}</h2>
        <Child addClick={(num) => this.changeCount(num)} />
      </div>
    )
  }
}

export default App
```

```jsx
// Child
import React, { Component } from "react"

export class Child extends Component {
  addCount(num) {
    this.props.addClick(num)
  }
  render() {
    return (
      <div>
        <button onClick={() => this.addCount(1)}>+1</button>
        <button onClick={() => this.addCount(5)}>+5</button>
        <button onClick={() => this.addCount(10)}>+10</button>
      </div>
    )
  }
}

export default Child
```

### 3.组件的插槽实现

#### 普通插槽

```jsx
// App
import React, { Component } from "react"
import NavBar from "./NavBar"
import NavBar2 from "./NavBar2"

export class App extends Component {
  render() {
    const leftSlot = <button>按钮2</button>
    const centerSlot = <div>盒子2</div>
    const rightSlot = <i>斜体文字2</i>
    return (
      <div>
        {/* 使用chilren实现插槽 */}
        <NavBar>
          <button>按钮</button>
          <div>盒子</div>
          <i>斜体文字</i>
        </NavBar>

        {/* 使用props实现插槽 */}

        <NavBar2
          leftSlot={leftSlot}
          centerSlot={centerSlot}
          rightSlot={rightSlot}
        />
      </div>
    )
  }
}

export default App
```

```jsx
// NavBar
import React, { Component } from "react"
import "./style.css"

export class NavBar extends Component {
  render() {
    // chiidren有多个元素时是一个数组 否则是一个元素
    const { children } = this.props
    // console.log(children)
    return (
      <div className="nav-bar">
        <div className="left">{children[0]}</div>
        <div className="center">{children[1]}</div>
        <div className="right">{children[2]}</div>
      </div>
    )
  }
}

export default NavBar
```

```jsx
// NavBar2
import React, { Component } from "react"
import "./style.css"

export class NavBar extends Component {
  render() {
    const { leftSlot, centerSlot, rightSlot } = this.props
    return (
      <div className="nav-bar">
        <div className="left">{leftSlot}</div>
        <div className="center">{centerSlot}</div>
        <div className="right">{rightSlot}</div>
      </div>
    )
  }
}

export default NavBar	
```

#### 作用域插槽

```jsx
// App
import React, { Component } from "react"
import TabControl from "./TabControl"

export class App extends Component {
  constructor() {
    super()
    this.state = {
      titles: ["流行", "新款", "精选"],
      currentIndex: 0
    }
  }

  changeCurrent(index) {
    this.setState({
      currentIndex: index
    })
  }

  getTabItem(item) {
    switch (item) {
      case "流行":
        return <span>{item}</span>
      case "新款":
        return <button>{item}</button>
      default:
        return <i>{item}</i>
    }
  }

  render() {
    const { titles, currentIndex } = this.state
    return (
      <div>
        <TabControl
          titles={titles}
          currentIndex={currentIndex}
          changeIndex={(index) => this.changeCurrent(index)}
          // 把插槽写成箭头函数，妙
          itemType={(item) => this.getTabItem(item)}
        />
        <h2>{titles[currentIndex]}</h2>
      </div>
    )
  }
}

export default App
```

```jsx
// TabControl
import React, { Component } from "react"
import "./style.css"

export class TabControl extends Component {
  render() {
    const { titles, currentIndex, changeIndex, itemType } = this.props
    return (
      <div className="tab-control">
        {titles.map((item, index) => (
          <div className="item" onClick={() => changeIndex(index)} key={item}>
            <span className={index === currentIndex ? "active" : ""}>
              {itemType(item)}
            </span>
          </div>
        ))}
      </div>
    )
  }
}

export default TabControl
```

### 4.剖析setState

```jsx
import React, { Component } from "react"

export class TestSetState extends Component {
  constructor() {
    super()
    this.state = {
      msg: "hello",
      counter: 100
    }
  }
  changeText() {
    // setState的用法
    // 1.基本用法
    // this.setState({
    //   msg: "nice to met you!"
    // })
      
    // 2.可传入一个回调函数
    // 好处一👉 编写一些对新的state处理逻辑
    // 好处二👉 当前回调函数会传递之前的 state 和 props
    // this.setState((state, props) => {
    //   // state处理逻辑...
    //   console.log(state, props)
    //   return {
    //     msg: "你好哇!"
    //   }
    // })
      
    // 3.setState是一个异步调用
    // 为什么？👇
    /* 
    1.如果每次调用setState都进行一次更新 那么意味着render函数会被频繁调用 界面重新渲染  这样效率很低；
    最好的方法是获取到多次更新  之后批量进行更新
    这样设计可以显著的提高性能

    2.如果同步更新了state 但是还没有执行render函数 那么state和props不能保持同步
    如果希望等到数据更新(数据合并)后执行一些操作 可以在setState中传入第二个参数(callback) 
    */
    this.setState({ msg: "你好！" }, () => {
      console.log("数据合并后的代码", this.state.msg) // 此时的msg已经更新了
    })
    console.log("同步执行的代码", this.state.msg) // 此时的msg还是hello
  }

  addCouner() {
    this.setState({
      counter: this.state.counter + 1
    })
    this.setState({
      counter: this.state.counter + 1
    })
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    console.log("render函数执行了") // addCounter中setState执行了三次  而render函数只重新执行了一次
    const { msg, counter } = this.state
    const { title } = this.props
    return (
      <div>
        TestSetState
        <h2>接受暗号：{title}</h2>
        <h2>{msg}</h2>
        <button onClick={() => this.changeText()}>修改文本</button>
        <h2>{counter}</h2>
        <button onClick={() => this.addCouner()}>+1</button>
      </div>
    )
  }
}

export default TestSetState
```

### 5.render性能优化

> 以下案例仅为演示原理,实际开发仅需将类组件继承PureComponent,函数组件用memo包裹即可

```jsx
// App
import React, { Component } from "react"
import Home from "./Home"

export class App extends Component {
  constructor() {
    super()
    this.state = {
      msg: "hello world",
      counter: 100
    }
  }
  changeText() {
    this.setState({
      msg: "你好哇"
    })
  }
  changeCounter() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  // 使用SCU决定是否调用render函数(重新渲染)

  // 对App组件的render函数进行性能优化
  shouldComponentUpdate(nextProps, nextState) {
    // 如果没有数据和相对与之前无变化 则不调用render
    if (
      nextState.msg === this.state.msg &&
      nextState.counter === this.state.counter
    ) {
      return false
    } else {
      return true
    }
  }
  render() {
    console.log("App render")

    const { msg, counter } = this.state
    return (
      <div>
        App
        <h2>
          {msg}-{counter}
        </h2>
        <button onClick={() => this.changeText()}>修改文本</button>
        <button onClick={() => this.changeCounter()}>修改counter</button>
        {/* 如果传入子组件的数据(msg)无变化  则不应重新渲染 */}
        <Home msg={msg} />
      </div>
    )
  }
}

export default App
```

```jsx
// Home
import React, { Component } from "react"

export class Home extends Component {
  constructor() {
    super()
    this.state = {
      homeData: "908"
    }
  }
    
  // 对子组件的render函数进行性能优化
  shouldComponentUpdate(nextProps, nextState) {
    // console.log("旧msg:", this.props.msg)
    // console.log("新msg", nextProps.msg)

    return nextProps.msg === this.props.msg &&
      nextState.homeData === this.state.homeData
      ? false
      : true
  }

  render() {
    console.log("Home render")
    const { msg } = this.props
    return (
      <div>
        <h2>Home page-{msg}</h2>
      </div>
    )
  }
}

export default Home
```

### 6.数据不可变的力量

>在使用PureComponent，是不能对state直接进行修改的

```jsx
// import React, { Component } from "react"
import React, { PureComponent } from "react"

export default class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      books: [
        { name: "水浒传", price: 55, count: 1 },
        { name: "红楼梦", price: 255, count: 3 },
        { name: "三国演义", price: 39, count: 4 },
        { name: "西游记", price: 73, count: 2 }
      ]
    }
  }
    
  addBook() {
    const newBook = { name: "道德经", price: 89, count: 3 }

    // 继承PureComponent时 不能直接对state进行修改
    // this.state.books.push(newBook)
    // this.setState({
    //   books: this.state.books
    // })

    // 改用以下操作
    const books = [...this.state.books]
    books.push(newBook)
    this.setState({
      books
    })
  }

  addCount(index) {
    // 同上
    const books = [...this.state.books]
    books[index].count++
    this.setState({ books })
  }

  render() {
    const { books } = this.state
    return (
      <div>
        <h2>书籍列表</h2>
        <ul>
          {books.map((item, index) => (
            <li key={index}>
              <span>
                书名： {item.name} 价格： {item.price} 数量： {item.count}
              </span>
              <button onClick={() => this.addCount(index)}>+1</button>
            </li>
          ))}
        </ul>
        <button onClick={() => this.addBook()}>添加新书</button>
      </div>
    )
  }
}
```

### 7.ref获取DOM和组件元素

```jsx
// 获取DOM
import React, { createRef, PureComponent } from "react"

export default class GetDOM extends PureComponent {
  constructor() {
    super()
    this.motto2 = createRef()
    this.motto3 = null
  }
  getNativeDOM() {
    // 1.在React元素上绑定ref字符串(不推荐)
    // console.log(this.refs.motto)
    // 2.提前创建ref对象(createRef) 绑定指定元素(推荐)
    console.log(this.motto2.current)
    // 3.将元素传入回调函数
    // console.log(this.motto3)
  }
  render() {
    return (
      <div>
        <h2 ref="motto1">知易行难</h2>
        <h2 ref={this.motto2}>高屋建瓴</h2>
        <h2 ref={(el) => (this.motto3 = el)}>逆水行舟</h2>
        <button onClick={() => this.getNativeDOM()}>查看DOM元素</button>
      </div>
    )
  }
}
```

```jsx
// 获取类组件元素
import React, { createRef, PureComponent } from "react"

class HelloWorld extends PureComponent {
  constructor() {
    super()
    this.state = {
      msg: "你好哇"
    }
  }
  sayHi() {
    console.log(this.state.msg)
  }
  render() {
    const { msg } = this.state
    return <div>{msg}</div>
  }
}

export default class GetClassComponent extends PureComponent {
  constructor() {
    super()
    this.hwRef = createRef()
  }
  getComponent() {
    // console.log(this.getcomRef.current)
    this.hwRef.current.sayHi()
  }
  render() {
    return (
      <div>
        GetComponent
        <HelloWorld ref={this.hwRef} />
        <button onClick={() => this.getComponent()}>获取组件元素</button>
      </div>
    )
  }
}
```



>函数组件没有实例，需要引用forwardRef

```jsx
// 获取函数组件元素
import React, { createRef, PureComponent, forwardRef } from "react"

const HelloWorld = forwardRef(function (props, ref) {
  return (
    <div>
      {/* 此时获取到的就是绑定ref的元素 */}
      <h2 ref={ref}>你好哇</h2>
    </div>
  )
})

export default class GetFnComponent extends PureComponent {
  constructor() {
    super()
    this.hwRef = createRef()
  }
  getComponent() {
    console.log(this.hwRef.current)
  }
  render() {
    return (
      <div>
        GetComponent
        <HelloWorld ref={this.hwRef} />
        <button onClick={() => this.getComponent()}>获取组件元素</button>
      </div>
    )
  }
}
```

### 8.Portals

>Portal 提供了一种将子节点渲染到存在于父组件以外的 DOM 节点的优秀的方案。

```jsx
import React, { PureComponent } from "react"
import { createPortal } from "react-dom"

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <h1>App H1</h1>
        {createPortal(<h2>App H2</h2>, document.querySelector("#why"))}
      </div>
    )
  }
}

```

### 9.Fragments

>Fragments 允许你将子列表分组，而无需向 DOM 添加额外节点。

```jsx
import React, { Fragment, PureComponent } from "react"

export default class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      goods: ["cloth", "shoe", "bag", "cellphone"]
    }
  }
  render() {
    const { goods } = this.state
    return (
      <>
        {goods.map((item) => {
          // key 是唯一可以传递给 Fragment 的属性
          return <Fragment key={item}>{item} /</Fragment>
        })}
      </>

      // 更简便的写法(空标签) 但它并不支持 key 或属性
      // <>
      //   <h1>标题</h1>
      //   <p>内容</p>
      // </>
    )
  }
}

```

### 10.React动画

```jsx
import React, { PureComponent } from "react"
import {
  CSSTransition,
  SwitchTransition,
  TransitionGroup
} from "react-transition-group"
import "./style.css"

export default class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      isShow: true,
      isLogin: true,
      students: [
        { id: 1, name: "jason", age: 23 },
        { id: 2, name: "lucy", age: 26 },
        { id: 3, name: "peter", age: 21 }
      ]
    }
  }
  addOne() {
    const students = [...this.state.students]
    students.push({ id: new Date().getTime(), name: "geerdan", age: 8 })
    this.setState({ students })
  }
  removeOne(index) {
    let students = [...this.state.students]
    students.splice(index, 1)
    this.setState({ students })
  }

  render() {
    const { isShow, isLogin, students } = this.state

    return (
      <div>
        <button onClick={() => this.setState({ isShow: !isShow })}>
          显示/隐藏
        </button>
        {/* 1.CSSTransition */}
        <CSSTransition
          in={isShow}
          unmountOnExit
          classNames="demo"
          timeout={1000}
          // 以下是进阶属性
          appear
          onEnter={() => console.log("进入动画开始")}
          onEntering={() => console.log("进入动画中")}
          onEntered={() => console.log("进入动画结束")}
          onExit={() => console.log("离开动画开始")}
          onExiting={() => console.log("离开动画中")}
          onExited={() => console.log("离开动画结束")}
        >
          <h2>你看不见我</h2>
        </CSSTransition>
        {/* 2.SwitchTransition */}
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={isLogin ? "login" : "exit"}
            classNames="login"
            timeout={1000}
          >
            <button onClick={() => this.setState({ isLogin: !isLogin })}>
              {isLogin ? "退出" : "登录"}
            </button>
          </CSSTransition>
        </SwitchTransition>
        {/* 3.TransitionGroup */}
        <TransitionGroup component="ul">
          <button onClick={() => this.addOne()}>添加新同学</button>
          {students.map((item, index) => (
            <CSSTransition key={item.id} classNames="student" timeout={1000}>
              <li>
                <span>
                  {item.name}————{item.age}
                </span>
                <button onClick={(e) => this.removeOne(index)}>删除</button>
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    )
  }
}

/* 
style.css
.demo-appear,
.demo-enter {
  opacity: 0;
}
.demo-appear-active,
.demo-enter-active {
  opacity: 1;
  transition: opacity 1s;
}
.demo-exit {
  opacity: 1;
}
.demo-exit-active {
  opacity: 0;
  transition: opacity 1s;
}

.login-enter {
  transform: translateX(100px);
  opacity: 0;
}
.login-enter-active {
  transform: translateX(0);
  opacity: 1;
  transition: all 1s ease;
}
.login-exit {
  transform: translateX(0);
  opacity: 1;
}
.login-exit-active {
  transform: translateX(-100px);
  opacity: 0;
}
.student-enter {
  transform: translateX(100px);
  opacity: 0;
}
.student-enter-active {
  transform: translateX(0);
  opacity: 1;
  transition: all 1s ease;
}
.student-exit {
  transform: translateX(0);
  opacity: 1;
}
.student-exit-active {
  transform: translateX(100px);
  opacity: 0;
  transition: all 1s ease;
}
*/
```

### 11.ReactCSS

>内联样式和普通引入不再赘述

#### CSS_Modules

```jsx
import React, { PureComponent } from "react"
import AppStyle from "./App.module.css"

export default class App extends PureComponent {
  render() {
    return (
      <div>
        {/* 类名不能有-  */}
        <h2 className={AppStyle.title}>标题</h2>
        <p className={AppStyle.content}>内容...</p>
      </div>
    )
  }
}

// App.module.css
/* .title {
  color: pink;
  font-style: italic;
}
.content {
  color: skyblue;
  font-style: oblique;
}
 */
```



#### CSS_in_JS(推荐)

```jsx
import React, { PureComponent } from "react"
import { AppWrapper, SectionWrapper } from "./style"

export default class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      color: "purple",
      size: 60
    }
  }
  render() {
    const { color, size } = this.state
    return (
      <AppWrapper>
        <SectionWrapper color={color} size={size}>
          <h2 className="title">标题</h2>
          <div className="content">
            蒹葭苍苍
            <span className="main">心如止水</span>
          </div>
        </SectionWrapper>

        <div className="footer">高下立判</div>
      </AppWrapper>
    )
  }
}

// style.js
/* import styled from "styled-components"

// 1.基本使用
export const AppWrapper = styled.div`
  .footer {
    color: red;
  }
`

// 2.子元素单独抽取到一个样式组件
// 3.可以接受外部传入的 props
export const SectionWrapper = styled.div`
  .title {
    color: ${(props) => props.color};
    font-size: ${(props) => props.size};
    :hover {
      background-color: skyblue;
    }
  }
  .content {
    .main {
      border: 2px solid pink;
    }
    font-size: 30px;
  }
`
 */
```



#### classnames库

```jsx
import React, { PureComponent } from "react"
import classNames from "classnames" 

export default class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      isCb: true,
      isCc: false
    }
  }
  render() {
    const { isCb, isCc } = this.state
    return (
      <div>
        <h2 className={classNames("ca", { cb: isCb, cc: isCc })}>测试文本</h2>
      </div>
    )
  }
}

```



## 状态管理

### redux



#### redux-devtool

##### 基本使用

```js
// store/index.js
import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./features/counter"
import homeReducer from "./features/home"

const store = configureStore({
  reducer: {
    counter: counterReducer,
    home: homeReducer
  }
})
export default store
```

```js
// features/counter.js
import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 999
  },
  reducers: {
    // 每个键值对相当于switch里的case
    addNum(state, action) {
      state.count += action.payload
    },
    subNum(state, action) {
      state.count -= action.payload
    }
  }
})

export const { addNum, subNum } = counterSlice.actions

export default counterSlice.reducer
```

```js
// features/home/js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchHomeMultidataAction = createAsyncThunk(
  "fetch/homemultidata",
  async (extraInfo, store) => {
    const res = await axios.get("http://123.207.32.32:8000/home/multidata")
    const banners = res.data.data.banner.list
    const recommends = res.data.data.recommend.list

    // 也可以不按照官方推荐 直接在这里派发
    store.dispatch(changeBanners(banners))
    store.dispatch(changeRecommends(recommends))

    // return res.data
  }
)

const homeSlice = createSlice({
  name: "home",
  initialState: {
    banners: [],
    recommends: []
  },
  reducers: {
    changeBanners(state, action) {
      state.banners = action.payload
    },
    changeRecommends(state, action) {
      state.recommends = action.payload
    }
  }
  // 异步的reducer 也可以在这里监听 官方推荐
  // extraReducers: {
  //   // pending状态
  //   // [fetchHomeMultidataAction.pending](state, action) {
  //   //   console.log("pending", state)
  //   // },
  // fullfilled状态
  // [fetchHomeMultidataAction.fulfilled](state, action) {
  //   // console.log("fulfilled", state, action.payload)
  //   state.banners = action.payload.data.banner.list
  //   state.recommends = action.payload.data.recommend.list
  // }
  //   // rejected状态
  //   // [fetchHomeMultidataAction.rejected](state, action) {
  //   //   console.log("rejected", state)
  //   // }
  // }
})

export const { changeBanners, changeRecommends } = homeSlice.actions
export default homeSlice.reducer
```

```jsx
import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { addNum, subNum } from "../../../store/features/counter"
import { fetchHomeMultidataAction } from "../../../store/features/home"

export class Profile extends PureComponent {
  componentDidMount() {
    this.props.fetchHomemultidata()
  }
  handleAddNum(num) {
    const { addNum } = this.props
    addNum(num)
  }
  handleSubNum(num) {
    const { subNum } = this.props
    subNum(num)
  }
  render() {
    const { count, banners, recommends } = this.props
    return (
      <div>
        <h2>使用官方connect方法</h2>
        <h2>Profile count: {count}</h2>
        <button onClick={(e) => this.handleAddNum(5)}>+5</button>
        <button onClick={(e) => this.handleSubNum(10)}>-10</button>

        <div className="banner">
          <h2>轮播图</h2>
          <ul>
            {banners.map((item, index) => (
              <li key={index}>{item.title}</li>
            ))}
          </ul>
        </div>
        <div className="recommend">
          <h2>推荐</h2>
          <ul>
            {recommends.map((item, index) => (
              <li key={index}>{item.title}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  count: state.counter.count,
  banners: state.home.banners,
  recommends: state.home.recommends
})
const mapDispatchToProps = (dispatch) => ({
  addNum(num) {
    dispatch(addNum(num))
  },
  subNum(num) {
    dispatch(subNum(num))
  },
  fetchHomemultidata() {
    dispatch(fetchHomeMultidataAction())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
```

##### connect原理

```jsx
// hoc/connect.js 
import { PureComponent } from "react"
import store from "../../../store"

// 手写实现connect函数
export default function connect(mapStateToProps, mapDispatchToProps) {
  // 返回一个高阶组件(函数)
  return function (WrapperComponent) {
    class NewComponent extends PureComponent {
      constructor(props) {
        super(props)
        this.state = mapStateToProps(store.getState())
      }
      componentDidMount() {
        // 监听数据改变
        this.unsubscribe = store.subscribe(() => {
          this.setState(mapStateToProps(store.getState()))
        })
      }
      componentWillUnmount() {
        // 卸载前取消订阅
        this.unsubscribe()
      }
      render() {
        const stateObj = mapStateToProps(store.getState())
        const dispatchObj = mapDispatchToProps(store.dispatch)

        return (
          <WrapperComponent {...this.props} {...stateObj} {...dispatchObj} />
        )
      }
    }

    return NewComponent
  }
}
```





## 项目实践

### [配置别名](https://ant.design/docs/react/use-with-create-react-app-cn)

```
npm install @craco/craco@alpha -D
```

```js
// craco.config.js
const path = require("path")

const resolve = (pathname) => path.resolve(__dirname, pathname)

module.exports = {
  webpack: {
    alias: {
      "@": resolve("src"),
      utils: resolve("src/utils"),
      components: resolve("src/components")
      // ...
    }
  }
}
```

之后修改package.json中的scripts

```json
"scripts": {
  "start": "craco start",
  "build": "craco build",
  "test": "craco test",
  "eject": "react-scripts eject"
},
```




# [Vite](https://vitejs.cn/)

> 新一代构建工具

## [常用配置](https://vitejs.cn/config/)

```js
// vite.config.js
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // 将公共路径替换成 "@"
      "@": path.resolve(__dirname, "src")
    }
  },
  server: {
    // 使用代理跨域
    proxy: {
      // 字符串简写写法
      "/foo": "https://echarts.apache.org/examples",
      // 选项写法
      "/api": {
        target: "https://echarts.apache.org/examples",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  }
})
```





## [环境变量](https://vitejs.cn/guide/env-and-mode.html)

> Vite 在一个特殊的 **import.meta.env** 对象上暴露环境变量。这里有一些在所有情况下都可以使用的内建变量：
>
> - **import.meta.env.MODE**: {string} 应用运行的[模式](https://vitejs.cn/guide/env-and-mode.html#modes)。
> - **import.meta.env.BASE_URL**: {string} 部署应用时的基本 URL。他由[`base` 配置项](https://vitejs.cn/config/#base)决定。
> - **import.meta.env.PROD**: {boolean} 应用是否运行在生产环境。
> - **import.meta.env.DEV**: {boolean} 应用是否运行在开发环境 (永远与 `import.meta.env.PROD`相反)。



# 工具库

## [ECharts](https://echarts.apache.org/zh/index.html)

> 示例(vue3)

```vue
<template>
  <div ref="echartsDom" id="echarts"></div>
</template>

<script setup>
import * as echarts from "echarts"
import { ref, onMounted } from "vue"

const echartsDom = ref(null)

onMounted(() => {
  const myChart = echarts.init(echartsDom.value)

  // 此处的option一般由外界引入，示例为基础折线图
  const option = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: "line"
      }
    ]
  }

  option && myChart.setOption(option)
})
</script>

<style>
/* 注意给容器设置宽高 */
#echarts {
  width: 1000px;
  height: 500px;
}
</style>
```

### 常用方法

#### resize

>在有些场景下，我们希望当容器大小改变时，图表的大小也相应地改变。比如，图表容器是一个高度为 400px、宽度为页面 100% 的节点，你希望在浏览器宽度改变的时候，始终保持图表宽度是页面的 100%。这种情况下，可以监听页面的 `window.onresize` 事件获取浏览器大小改变的事件，然后调用[`echartsInstance.resize`](https://echarts.apache.org/api.html#echartsInstance.resize) (myChart)改变图表的大小。

```html
<style>
  #main,
  html,
  body {
    width: 100%;
  }

  #main {
    height: 400px;
  }
</style>
<div id="main"></div>
<script type="text/javascript">
  var myChart = echarts.init(document.getElementById('main'));
  window.onresize = function () {
    myChart.resize();
  };
</script>
```

> tips: 除了直接调用 `resize()` 不含参数的形式之外，还可以指定宽度和高度，实现图表大小不等于容器大小的效果。

```js
myChart.resize({
  width: 800,
  height: 400
});
```

#### dispose

> 在容器节点被销毁时，总是应调用 echartsInstance.dispose 以销毁实例释放资源，避免内存泄漏。
> 正确的做法是，在图表容器被销毁之后，调用 [`echartsInstance.dispose`](https://echarts.apache.org/api.html#echartsInstance.dispose) 销毁实例，在图表容器重新被添加后再次调用 [echarts.init](https://echarts.apache.org//api.html#echarts.init) 初始化。




## [axios](https://axios-http.com/zh/)


- 常用配置

```js
// 1.axios实例
// 用于自定义配置，如设置baseURL等
const instance = axios.create({
  baseURL: "https://some-domain.com/api/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" }
})

// 2.请求拦截器和响应拦截器
// 请求拦截器可自动向header头统一添加token  自动验证用户身份
// 响应拦截器可对请求函数统一做进一步的处理(提示响应状态信息等)
```

- 使用示例

```js
import axios from "axios"
import { getToken, showNotification } from "~/utils"
const CyAxios = axios.create({
  baseURL: "/api"
})

// 添加请求拦截器
CyAxios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    // 向header头自动添加token
    const token = getToken()
    if (token) {
      config.headers["token"] = token
    }

    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
CyAxios.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response.data.data
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    showNotification("error", error)
    return Promise.reject(error)
  }
)

export default CyAxios
```






## nprogress

> 展示全屏 loading 效果

- 安装


- 全局引入css

```js
// request.js

// 导入nprogress及其样式
import nprogress from "nprogress"
import "nprogress/nprogress.css"

	// ......
	// 请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // loading
        nprogress.start()
        return config
      },
      (err) => {
        return Promise.reject(err)
      }
    )

    // 响应拦截器
    this.instance.interceptors.response.use(
      (res) => {
        
        // end loading
        nprogress.done()
        return res.data
      },
      (err) => {
        return Promise.reject(err)
      }
    )
  
    // ......
```

- 自定义进度条样式

```css
/* loading.css */
/* 导入到全局index.js */

#nprogress .bar {
  background: red !important;
}

/* ...... */
```

详细用法见[npm/nprogress](https://www.npmjs.com/package/nprogress)



## gsap

> 应用：高性能动画(如数字过渡等)

```vue
// CountTo.vue
<template>
  <!-- 可以只保留整数 -->
  {{ data.num.toFixed(0) }}
</template>
<script setup>
import gsap from "gsap"
import { reactive, watch } from "vue"

const props = defineProps({
  value: {
    type: Number,
    default: 0
  }
})

const data = reactive({
  num: 0
})

function animateToValue() {
  gsap.to(data, {
    duration: 0.5,
    num: props.value
  })
}

animateToValue()

// 监听到值变化时 再次执行动画
watch(
  () => props.value,
  () => animateToValue()
)
</script>

// 另一个vue文件的 template
<CountTo :value="targetValue" />
```



## VueUse

- useCookies(调用cookie方法)

- useResizeObserver(监听屏幕尺寸)



## tinymce

> 富文本编辑器

### 1.安装 tinymce 


```
npm i tinymce
npm i @tinymce/tinymce-vue
```

### 2.复制样式文件到 public 目录下

```
// 文件在node_modules/tinymce
|public

|-- tinymce
|---- langs 语言目录
|------ zh-Hans.js 
|---- skins 皮肤目录
|------ content 
|------ ui
|---- tinymce.min.js


tip 中文语言包 zh-Hans.js 下载地址👇
https://www.tiny.cloud/get-tiny/language-packages/ 
```

### 3.新增 Editor 组件

```vue
// /src/components/Editor.vue

<template>
  <editor v-model="content" tag-name="div" :init="init" />
</template>
<script setup>
import tinymce from "tinymce/tinymce"
import Editor from "@tinymce/tinymce-vue"
import { ref, watch } from "vue"
import "tinymce/themes/silver/theme" // 引用主题文件
import "tinymce/icons/default" // 引用图标文件
import "tinymce/models/dom"
// tinymce插件可按自己的需要进行导入
// 更多插件参考：https://www.tiny.cloud/docs/plugins/
import "tinymce/plugins/advlist"
import "tinymce/plugins/anchor"
import "tinymce/plugins/autolink"
import "tinymce/plugins/autoresize"
import "tinymce/plugins/autosave"
import "tinymce/plugins/charmap" // 特殊字符
import "tinymce/plugins/code" // 查看源码
import "tinymce/plugins/codesample" // 插入代码
import "tinymce/plugins/directionality"
import "tinymce/plugins/emoticons"
import "tinymce/plugins/fullscreen" //全屏
import "tinymce/plugins/help"
import "tinymce/plugins/image" // 插入上传图片插件
import "tinymce/plugins/importcss" //图片工具
import "tinymce/plugins/insertdatetime" //时间插入
import "tinymce/plugins/link"
import "tinymce/plugins/lists" // 列表插件
import "tinymce/plugins/media" // 插入视频插件
import "tinymce/plugins/nonbreaking"
import "tinymce/plugins/pagebreak" //分页
import "tinymce/plugins/preview" // 预览
import "tinymce/plugins/quickbars"
import "tinymce/plugins/save" // 保存
import "tinymce/plugins/searchreplace" //查询替换
import "tinymce/plugins/table" // 插入表格插件
import "tinymce/plugins/template" //插入模板
import "tinymce/plugins/visualblocks"
import "tinymce/plugins/visualchars"
import "tinymce/plugins/wordcount" // 字数统计插件

// v-model
const props = defineProps({
  modelValue: String
})
const emit = defineEmits(["update:modelValue"])
// 配置
const init = {
  language_url: "/tinymce/langs/zh-Hans.js", // 中文语言包路径
  language: "zh-Hans",
  skin_url: "/tinymce/skins/ui/oxide", // 编辑器皮肤样式
  content_css: "/tinymce/skins/content/default/content.min.css",
  menubar: false, // 隐藏菜单栏
  autoresize_bottom_margin: 50,
  max_height: 500,
  min_height: 450,
  // height: 320,
  toolbar_mode: "none",
  plugins:
    "wordcount visualchars visualblocks template searchreplace save quickbars preview pagebreak nonbreaking media insertdatetime importcss image help fullscreen directionality codesample code charmap link code table lists advlist anchor autolink autoresize autosave",
  toolbar:
    "formats undo redo fontsizeselect fontselect ltr rtl searchreplace media | outdent indent aligncenter alignleft alignright alignjustify lineheight underline quicklink h2 h3 blockquote numlist bullist table removeformat forecolor backcolor bold italic strikethrough hr link preview fullscreen help ",
  content_style: "p {margin: 5px 0; font-size: 14px}",
  fontsize_formats: "12px 14px 16px 18px 24px 36px 48px 56px 72px",
  font_formats:
    "微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;苹果苹方= PingFang SC, Microsoft YaHei, sans- serif; 宋体 = simsun, serif; 仿宋体 = FangSong, serif; 黑体 = SimHei, sans - serif; Arial = arial, helvetica, sans - serif;Arial Black = arial black, avant garde;Book Antiqua = book antiqua, palatino; ",
  branding: false,
  elementpath: false,
  resize: false, // 禁止改变大小
  statusbar: false // 隐藏底部状态栏
}
tinymce.init // 初始化
const content = ref(props.modelValue)
watch(props, (newVal) => (content.value = newVal.modelValue))
watch(content, (newVal) => emit("update:modelValue", newVal))
</script>
<style>
.tox-tinymce-aux {
  z-index: 9999 !important;
}
</style>
```

### 4.自定义按钮(可选)

```vue
// /src/components/Editor.vue

<script setup>
// ...
const init = {
  // ...
  toolbar: " imageUpload ",
  // ...
  // 自定义按钮
  setup: (editor) => {
    editor.ui.registry.addButton("imageUpload", {
      tooltip: "插入图片",
      icon: "image",
      onAction: (e) => {
        let url = "url地址"
        editor.insertContent(
          `&nbsp;<img src="${url}"      style="width:100%;">&nbsp;`
        )
      }
    })
  }
}
</script>

```


## nanoid

>返回一个随机ID(string)

```js
import { nanoid } from "nanoid"

const id = nanoid(5) // 参数为ID的长度，默认21位
console.log(id) // "liBDJ"
```



## [styled-components](https://styled-components.com/docs/basics)

>CSS-in-JS



### 语法

- hover

```js
export const LeftWrapper = styled.div`
  .contianer{
      // ...

	
	&:hover {
      // 当鼠标悬停
	  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
    }
  }
`
```

- 动态传递参数

```jsx
// data可以是服务器返回的数据 
<ItemWrapper color={data.color}><ItemWrapper/>
```

```js
import styled from "styled-components"

const ItemWrapper = styled.div`
  .desc {
    font-weight: 700;
    background-color: ${(props) => props.color};
  }
`

export default ItemWrapper
```



### 配置主题

- 编写主题

```js
// assets/theme
const theme = {
  color: {
    primary: "#ff385c",
    secondary: "#00848a"
  }
}

export default theme
```

- 全局引入主题

```js
// index.js
// ...
import { ThemeProvider } from "styled-components"

// ...
import theme from "./assets/theme"


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <HashRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </HashRouter>
)
```

- 使用主题

```js
// style.js
import styled from "styled-components"

export const LeftWrapper = styled.div`
  color: ${(props) => props.theme.color.primary};
`
```

  

# 思想方法
## Recursion（递归）

一种函数调用自身的操作。递归被用于处理包含有更小的子问题的一类问题。一个递归函数可以接受两个输入参数：一个最终状态（终止递归）或一个递归状态（继续递归）。

```js
// 基本案例
function foo(x) {
  // 实现一个递归,递增直到能被10整除
  if (x % 10) {
    x++
    return foo(x) // 每个分支都要return
  } else {
    return x
  }
}

const result = foo(12)
console.log(result) // 20

// 拓展案例 特别注意循环条件
function getRandomId(arr) {
  var id = Math.ceil(Math.random() * 5)
  // 判断是否终止递归(一定要有终止递归的条件)
  var isDone = true
  arr.forEach((item) => {
    if (item.id == id) {
     // return getRandomId(arr) ❌ 
      console.log("重复了", item.id, id)
      isDone = false
    }
  })

  if (isDone) {
    return id
  } else {
    return getRandomId(arr) // 👍
  }
}
```


