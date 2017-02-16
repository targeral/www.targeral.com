import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//pipe
import { getKeysPipe } from './pipe/get-keys.pipe';
import { getValuesPipe } from './pipe/get-values.pipe';
import { getEntriesPipe } from './pipe/get-entries.pipe';
import { BlogMsgPipe } from './pipe/blogmsg.pipe';
import { IconPipe } from './pipe/icon.pipe';
import { MarkdownToHtmlPipe } from 'markdown-to-html-pipe';

@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [
    getKeysPipe,
    getValuesPipe,
    getEntriesPipe,
    BlogMsgPipe,
    IconPipe,
    MarkdownToHtmlPipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    getKeysPipe,
    getValuesPipe,
    getEntriesPipe,
    BlogMsgPipe,
    IconPipe,
    MarkdownToHtmlPipe
  ]
})

export class ShareModule { }
