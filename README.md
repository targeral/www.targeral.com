# www.targeral.com

make by angular2.0

## header-nav
All FrondEnd BackEnd Moblie Lift Other


## Blog
{ 
  id,
  Title,
  Msg : {
    author,
    date,
    comment_number
  },
  content,
  Label: {
    icon,
    classify,
    label
  }
}

## what did you learn today?

### 2017/02/15
#### css
text-transform

scroll样式

#### gn2
httpModule
#### es6
字符串模板 `${变量}`

### 2017/02/16
#### css
scroll样式（续）
自定义scroll样式在webkit中

自定义scroll的样式需要一些伪元素(pseudo elements)实现滚动条各部分的样式。

```css
::-webkit-scrollbar {/* 1 */}
::-webkit-scrollbar-button {/* 2 */}
::-webkit-scrollbar-track {/* 3 */}
::-webkit-scrollbar-track-piece {/* 4 */}
::-webkit-scrollbar-thumb {/* 5 */}
::-webkit-scrollbar-corner {/* 6 */}
::-webkit-resizer {/* 7 */}

```

* ::-webkit-scrollbar 滚动条整体部分
* ::-webkit-scrollbar-button 滚动条的轨道的两端按钮，允许通过点击微调小方块的位置。
* ::-webkit-scrollbar-track  滚动条的轨道（里面装有Thumb）
* ::-webkit-scrollbar-track-piece 内层轨道，滚动条中间部分（除去thumb剩下的部分）
* ::-webkit-scrollbar-thumb  滚动条里面的小方块，能向上向下移动（或往左往右移动，取决于是垂直滚动条还是水平滚动条）
* ::-webkit-scrollbar-corner 边角，即两个滚动条的交汇处
* ::-webkit-resizer 两个滚动条的交汇处上用于通过拖动调整元素大小的小控件

最后上一张图来解释：

![eg](./public/scrollbarparts.png)

来看一个栗子：

```css
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/  
::-webkit-scrollbar  
{  
    width: 16px;  
    height: 16px;  
    background-color: #F5F5F5;  
}  
  
/*定义滚动条轨道 内阴影+圆角*/  
::-webkit-scrollbar-track  
{  
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);  
    border-radius: 10px;  
    background-color: #F5F5F5;  
}  
  
/*定义滑块 内阴影+圆角*/  
::-webkit-scrollbar-thumb  
{  
    border-radius: 10px;  
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);  
    background-color: #555;  
}  
```

demo2:
http://www.xuanfengge.com/demo/201311/scroll/css3-scroll.html

扩展一
定义滚动条就是利用伪元素与伪类，那什么是伪元素与伪类呢？
伪类相比伪元素我们会更熟悉些:`:link`、`:focus`、`:hover`，此外css3中又新增了许多伪类选择器，如`:nth-child`、`:last-child`、`:nth-last-of-type()`等。

CSS中的伪元素大家以前看过：:first-line,:first-letter,:before,:after。那么在CSS3中，伪元素进行了调整，在以前的基础上增加了一个“：”也就是现在变成了“::first-letter,::first-line,::before,::after”，另外CSS3还增加
了一个“::selection”。两个“：：”和一个“：”在css3中主要用来区分伪类和伪元素。

扩展二
webkit的伪类和伪元素的实现很强，可以把滚动条当成一个页面元素来定义，再结合一些高级的CSS3属性，比如渐变、圆角、RGBa等等。然后如果有些地方要用图片，可以把图片也可以转换成Base64，不然每次都得加载那个多个图片，增加请求数。

下面是一些伪类:

```
:horizontal
:vertical
:decrement
:increment
:start
:end 
:double-button
:single-button
:no-button
:corner-present
:window-inactive
```

这些伪类像是不同的状态一样，使得滚动条表现出不同的样式。
`:horizontal` - 适用于任何水平方向上的滚动条
`:vertical` - 适用于任何垂直方向的滚动条
`:decrement` - 适用于按钮和轨道碎片。表示递减的按钮或轨道碎片，例如可以使区域向上或者向右移动的区域和按钮
`:increment` - 适用于按钮和轨道碎片。表示递增的按钮或轨道碎片，例如可以使区域向下或者向左移动的区域和按钮
`:start` - 适用于按钮和轨道碎片。表示对象（按钮 轨道碎片）是否放在滑块的前面
`:end` - 适用于按钮和轨道碎片。表示对象（按钮 轨道碎片）是否放在滑块的后面
`:double-button` - 适用于按钮和轨道碎片。判断轨道结束的位置是否是一对按钮。也就是轨道碎片紧挨着一对在一起的按钮。
`:single-button` - 适用于按钮和轨道碎片。判断轨道结束的位置是否是一个按钮。也就是轨道碎片紧挨着一个单独的按钮。  
`:no-button` - 表示轨道结束的位置没有按钮。
`:corner-present` - 表示滚动条的角落是否存在。
`:window-inactive` - 适用于所有滚动条，表示包含滚动条的区域，焦点不在该窗口的时候。 

把他们组合在一起使用：

```css
::-webkit-scrollbar-track-piece:start {
   /* Select the top half (or left half) or scrollbar track individually */
}

::-webkit-scrollbar-thumb:window-inactive {
   /* Select the thumb when the browser window isn't in focus */
}

::-webkit-scrollbar-button:horizontal:decrement:hover {
   /* Select the down or left scroll button when it's being hovered by the mouse */
}
```


### 2017/02/16

添加了一个MarkdownPipe，实现为：

```javascript
import { Pipe, PipeTransform } from '@angular/core';

let markdown = require('markdown').markdown;

@Pipe({name: 'markdown'})

export class MarkdownPipe implements PipeTransform {
  transform(content: string): string {
    let result = markdown.toHTML(content);
    console.log(result);
    return result;
  }
}
```

后发现虽然将markdown变为了html，但是ng2不会再次解析html标签。通过google发现已经有一个pipe，叫做`MarkdownToHtmlPipe`。并且很好用，so开始研究一下；
让我们看一下代码，发现：

```javascript
import {Pipe, PipeTransform} from '@angular/core';
import * as marked from 'marked';

@Pipe({
    name: 'MarkdownToHtml'
})

export class MarkdownToHtmlPipe implements PipeTransform {
    public transform(markdown: string, options?: MarkedOptions): string {
        if (markdown == null) return '';
        return marked(markdown, options);
    }

    public static setOptions(options: MarkedOptions): void {
        marked.setOptions(options);
    }
}
```

这和我的差不多嘛。。。。
后来，看他的demo发现了这个：
```javascript
import {Component} from '@angular/core';
import {MarkdownToHtmlPipe} from 'markdown-to-html-pipe';

@Component({
  selector: 'example',
  template: `<div [innerHTML]="content|MarkdownToHtml"></div>`,
  pipes: [MarkdownToHtmlPipe]
})
export class ExampleComponent {
  protected content: string = 'This will render **Markdown** content!';
}
```
发现多了一个`[innerHTML]`，机智的我明白这才是关键。于是乎，我使用自己写的Pipe，并且结合`[innerHTML]`，也能解析。

MarkdownToHtmlPipe使用的是[marked](https://github.com/chjj/marked，我使用的是[markdown](https://github.com/evilstreak/markdown-js)
