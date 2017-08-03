import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'keepHtml',
  pure: false
})
export class KeepHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(content: string): SafeHtml {
    const txt = document.createElement('textarea');
    txt.innerHTML = content;
    return this.sanitizer.bypassSecurityTrustHtml(txt.value);
  }
}
