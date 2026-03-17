import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { Header } from './header/header';
import { BackToTop } from './back-to-top/back-to-top';
import { MyCustomCursor } from './my-custom-cursor/my-custom-cursor';
import { PageLoader } from './page-loader/page-loader';
import { UiToasts } from './components/toasts/ui-toasts/ui-toasts';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, BackToTop, MyCustomCursor, PageLoader, UiToasts],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  ngOnInit() {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }
}
