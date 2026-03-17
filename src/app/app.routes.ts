import { Routes } from '@angular/router';
import { LabGallery } from './lab-gallery/lab-gallery';
import { Accordion } from './components/accordion/accordion';
import { Alerts } from './components/alerts/alerts';
import { Badge } from './components/badge/badge';
import { ComponentPage } from './component-page/component-page';
import { Breadcrumb } from './components/breadcrumb/breadcrumb';
import { Buttons } from './components/buttons/buttons';
import { ButtonGroup } from './components/button-group/button-group';
import { Card } from './components/card/card';
import { Carousel } from './components/carousel/carousel';
import { Dropdowns } from './components/dropdowns/dropdowns';
import { Modal } from './components/modal/modal';
import { Navbar } from './components/navbar/navbar';
import { Tabs } from './components/tabs/tabs';
import { Offcanvas } from './components/offcanvas/offcanvas';
import { Pagination } from './components/pagination/pagination';
import { Placeholders } from './components/placeholders/placeholders';
import { Popovers } from './components/popovers/popovers';
import { Progress } from './components/progress/progress';
import { Spinners } from './components/spinners/spinners';
import { Toasts } from './components/toasts/toasts';
import { Tooltips } from './components/tooltips/tooltips';

export const routes: Routes = [
  { path: '', component: LabGallery },
  {
    path: 'component',
    component: ComponentPage,
    children: [
      { path: 'accordion', component: Accordion, data: { componentName: 'Accordion' } },
      { path: 'alerts', component: Alerts, data: { componentName: 'Alerts' } },
      { path: 'badge', component: Badge, data: { componentName: 'Badge' } },
      { path: 'breadcrumb', component: Breadcrumb, data: { componentName: 'Breadcrumb' } },
      { path: 'buttons', component: Buttons, data: { componentName: 'Buttons' } },
      { path: 'button-group', component: ButtonGroup, data: { componentName: 'Button group' } },
      { path: 'card', component: Card, data: { componentName: 'Card' } },
      { path: 'carousel', component: Carousel, data: { componentName: 'Carousel' } },
      { path: 'dropdowns', component: Dropdowns, data: { componentName: 'Dropdowns' } },
      { path: 'modal', component: Modal, data: { componentName: 'Modal' } },
      { path: 'navbar', component: Navbar, data: { componentName: 'Navbar' } },
      { path: 'tabs', component: Tabs, data: { componentName: 'Tabs' } },
      { path: 'offcanvas', component: Offcanvas, data: { componentName: 'Offcanvas' } },
      { path: 'pagination', component: Pagination, data: { componentName: 'Pagination' } },
      { path: 'placeholders', component: Placeholders, data: { componentName: 'Placeholders' } },
      { path: 'popovers', component: Popovers, data: { componentName: 'Popovers' } },
      { path: 'progress', component: Progress, data: { componentName: 'Progress' } },
      { path: 'spinners', component: Spinners, data: { componentName: 'Spinners' } },
      { path: 'toasts', component: Toasts, data: { componentName: 'Toasts' } },
      { path: 'tooltips', component: Tooltips, data: { componentName: 'Tooltips' } }
    ],
  },
];
