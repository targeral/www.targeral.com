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
