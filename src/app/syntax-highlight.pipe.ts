import { Pipe, PipeTransform, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'syntaxHighlight',
  standalone: true
})
export class SyntaxHighlightPipe implements PipeTransform {
  private sanitizer = inject(DomSanitizer);

  transform(value: string | null | undefined): SafeHtml {
    if (!value) return '';

    let html = value;

    // Convert basic HTML brackets
    html = html.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    
    // Tokenize mapping logic (same as used in the card component originally)
    html = html.replace(/(&lt;!--[\s\S]*?--&gt;)/g, '@@C@@$1@@/C@@'); // Comments
    html = html.replace(/("[^"]*")/g, '@@S@@$1@@/S@@');             // Double-quotes strings
    html = html.replace(/('[^']*')/g, '@@S@@$1@@/S@@');             // Single-quotes strings
    html = html.replace(/([a-zA-Z0-9-\[\]]+)(?==)/g, '@@A@@$1@@/A@@'); // Attributes
    html = html.replace(/(&lt;\/?)(div|h5|p|span|a|ul|li|button|ngb-toast|ng-container|ng-template|svg|path|g|circle)(?=\s|&gt;)/g, '$1@@T@@$2@@/T@@'); // Standard tags
    html = html.replace(/(&lt;\/?)(app-[\w-]+|ui-[\w-]+)(?=\s|&gt;)/g, '$1@@CT@@$2@@/CT@@'); // Custom Angular Components
    
    // Brackets and Equal 
    html = html.replace(/(&lt;|&gt;)/g, '@@B@@$1@@/B@@');

    // Resolve Spans into syntax-colored span chunks
    html = html.replace(/@@C@@/g, '<span style="color: #6a9955;">');
    html = html.replace(/@@\/C@@/g, '</span>');
    html = html.replace(/@@S@@/g, '<span style="color: #ce9178;">');
    html = html.replace(/@@\/S@@/g, '</span>');
    html = html.replace(/@@A@@/g, '<span style="color: #9cdcfe;">');
    html = html.replace(/@@\/A@@/g, '</span>');
    html = html.replace(/@@T@@/g, '<span style="color: #569cd6;">');
    html = html.replace(/@@\/T@@/g, '</span>');
    html = html.replace(/@@CT@@/g, '<span style="color: #4ec9b0;">');
    html = html.replace(/@@\/CT@@/g, '</span>');
    html = html.replace(/@@B@@/g, '<span style="color: #808080;">');
    html = html.replace(/@@\/B@@/g, '</span>');

    // Bypass security and return the SafeHtml
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
