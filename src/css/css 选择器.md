# 选择器

---

## 基本选择器

- `*`, 通用元素选择器
- `div`, 标签选择器
- `.test`, class选择器
- `#test`, id选择器

## 组合选择

- `x, y` 多元素选择器
- `x y` 后代元素选择器
- `x > y`, 子元素选择器
- `x + y`, 毗邻元素选择器

css3 新增

- `x ~ y`,  x 后的所有 y 兄弟元素

## 属性选择

- `[att]`, 匹配所有具有att属性的元素
- `[att=val]`, 匹配所有att属性等于 val 的元素
- `[att~=val]`, 匹配所有att属性具有多个空格分隔的值、其中一个值等于 val 的E元素
- `[att|=val]`, 匹配所有att属性具有多个连字号`-`分隔（hyphen-separated）的值、其中一个值以 val 开头的

css3 新增

- `[foo^="bar"]`, 属性值以 bar 开头的元素
- `[foo$="bar"]`, 属性值以 bar 结尾的元素
- `[foo*="bar"]`, 属性值包含 bar 的元素

## 伪类选择

- :first-child
- :hover
- :focus
- :link, 匹配所有未被点击的链接
- :visited, 匹配所有已被点击的链接
- :active, 匹配鼠标已经其上按下、还没有释放的元素
- :lang(c), 匹配lang属性等于c的元素

css3 新增

- :not()
- :target, 匹配文档中特定 id 点击后的效果
- :enabled, 匹配表单中激活的元素
- :disabled, 匹配表单中禁用的元素
- :checked, 匹配表单中被选中的radio（单选框）或checkbox（复选框）元素
- :selection, 匹配用户当前选中的元素
- :root, 匹配文档的根元素，对于HTML文档，就是HTML元素
- :nth-child(n)
- :nth-last-child(n)
- :nth-of-type(n), 与:nth-child()作用类似，但是仅匹配使用同种标签的元素
- :nth-last-of-type(n), 与:nth-last-child() 作用类似，但是仅匹配使用同种标签的元素
- :last-child
- :first-of-type, 匹配父元素下使用同种标签的第一个子元素，等同于:nth-of-type(1)
- :last-of-type, 匹配父元素下使用同种标签的最后一个子元素，等同于:nth-last-of-type(1)
- :only-child, 匹配父元素下仅有的一个子元素，等同于:first-child:last-child或 :nth-child(1):nth-last-child(1)
- :only-of-type, 匹配父元素下使用同种标签的唯一一个子元素，等同于:first-of-type:last-of-type或 :nth-of-type(1):nth-last-of-type(1)
- :empty, 匹配一个不包含任何子元素的元素，注意，文本节点也被看作子元素


### 伪元素

- ::first-line
- ::first-letter
- ::before
- ::after
