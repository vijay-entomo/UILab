import { UiAccordion } from '../components/accordion/ui-accordion/ui-accordion';
import { UiAlerts } from '../components/alerts/ui-alerts/ui-alerts';
import { UiBadge } from '../components/badge/ui-badge/ui-badge';
import { UiBreadcrumb } from '../components/breadcrumb/ui-breadcrumb/ui-breadcrumb';
import { UiButtons } from '../components/buttons/ui-buttons/ui-buttons';
import { UiButtonGroup } from '../components/button-group/ui-button-group/ui-button-group';
import { UiCard } from '../components/card/ui-card/ui-card';
import { UiCarousel } from '../components/carousel/ui-carousel/ui-carousel';
import { UiDropdowns } from '../components/dropdowns/ui-dropdowns/ui-dropdowns';
import { UiModal } from '../components/modal/ui-modal/ui-modal';
import { UiNavbar } from '../components/navbar/ui-navbar/ui-navbar';
import { UiTabs } from '../components/tabs/ui-tabs/ui-tabs';
import { UiOffcanvas } from '../components/offcanvas/ui-offcanvas/ui-offcanvas';
import { UiPagination } from '../components/pagination/ui-pagination/ui-pagination';
import { UiPlaceholders } from '../components/placeholders/ui-placeholders/ui-placeholders';
import { UiPopovers } from '../components/popovers/ui-popovers/ui-popovers';
import { UiProgress } from '../components/progress/ui-progress/ui-progress';
import { UiSpinners } from '../components/spinners/ui-spinners/ui-spinners';
import { UiToasts } from '../components/toasts/ui-toasts/ui-toasts';
import { UiTooltips } from '../components/tooltips/ui-tooltips/ui-tooltips';

export const COMPONENT_DATA = [
  {
    componentImage: 'accordion.png',
    componentName: 'Accordion',
    componentDescription: 'Vertically stacked panels. Click to expand. Click to collapse.',
    routerLink: 'component/accordion',
    componentClass: UiAccordion,
  },
  {
    componentImage: 'alerts.png',
    componentName: 'Alerts',
    componentDescription: 'Inline system messages. Embedded in page flow. Static until dismissed.',
    routerLink: 'component/alerts',
    componentClass: UiAlerts,
  },
  {
    componentImage: 'badge.png',
    componentName: 'Badge',
    componentDescription: 'Status label. Shows counts. Highlights state. Read-only.',
    routerLink: 'component/badge',
    componentClass: UiBadge,
  },
  {
    componentImage: 'breadcrumb.png',
    componentName: 'Breadcrumb',
    componentDescription:
      'Horizontal navigation trail. Shows current location. Click to jump back.',
    routerLink: 'component/breadcrumb',
    componentClass: UiBreadcrumb,
  },
  {
    componentImage: 'buttons.png',
    componentName: 'Buttons',
    componentDescription: 'Interactive triggers. Initiates action. Submits data.',
    routerLink: 'component/buttons',
    componentClass: UiButtons,
  },
  {
    componentImage: 'button_group.png',
    componentName: 'Button group',
    componentDescription: 'Clustered buttons. Groups related actions. Locks elements together.',
    routerLink: 'component/button-group',
    componentClass: UiButtonGroup,
  },
  {
    componentImage: 'card.png',
    componentName: 'Card',
    componentDescription:
      'Content container. Groups related data. Self-contained structural block.',
    routerLink: 'component/card',
    componentClass: UiCard,
  },
  {
    componentImage: 'carousel.png',
    componentName: 'Carousel',
    componentDescription:
      'Horizontal slider. Cycles through images. Requires manual or auto-scroll.',
    routerLink: 'component/carousel',
    componentClass: UiCarousel,
  },
  {
    componentImage: 'dropdowns.png',
    componentName: 'Dropdowns',
    componentDescription: 'Hidden menu list. Click to reveal. Select an option.',
    routerLink: 'component/dropdowns',
    componentClass: UiDropdowns,
  },
  {
    componentImage: 'modal.png',
    componentName: 'Modal',
    componentDescription:
      'Foreground overlay. Blocks background interaction. Demands immediate attention.',
    routerLink: 'component/modal',
    componentClass: UiModal,
  },
  {
    componentImage: 'navbar.png',
    componentName: 'Navbar',
    componentDescription: 'Global header. Anchors the page. Houses primary routing.',
    routerLink: 'component/navbar',
    componentClass: UiNavbar,
  },
  {
    componentImage: 'tabs.png',
    componentName: 'Tabs',
    componentDescription: 'Horizontal content dividers. Switches active view. Keeps user on page.',
    routerLink: 'component/tabs',
    componentClass: UiTabs,
  },
  {
    componentImage: 'offcanvas.png',
    componentName: 'Offcanvas',
    componentDescription: 'Hidden side panel. Slides in on command. Overlays primary content.',
    routerLink: 'component/offcanvas',
    componentClass: UiOffcanvas,
  },
  {
    componentImage: 'pagination.png',
    componentName: 'Pagination',
    componentDescription: 'Numbered data navigation. Splits massive lists. Advances record sets.',
    routerLink: 'component/pagination',
    componentClass: UiPagination,
  },
  {
    componentImage: 'placeholders.png',
    componentName: 'Placeholders',
    componentDescription:
      'Skeleton wireframe. Reserves structural space. Prevents layout shift during load.',
    routerLink: 'component/placeholders',
    componentClass: UiPlaceholders,
  },
  {
    componentImage: 'popovers.png',
    componentName: 'Popovers',
    componentDescription: 'Floating info box. Triggered by click. Displays extended data.',
    routerLink: 'component/popovers',
    componentClass: UiPopovers,
  },
  {
    componentImage: 'progress.png',
    componentName: 'Progress',
    componentDescription: 'Linear indicator. Tracks task completion. Fills left to right.',
    routerLink: 'component/progress',
    componentClass: UiProgress,
  },
  {
    componentImage: 'spinners.png',
    componentName: 'Spinners',
    componentDescription: 'Endless looping graphic. Indicates processing state.',
    routerLink: 'component/spinners',
    componentClass: UiSpinners,
  },
  {
    componentImage: 'toasts.png',
    componentName: 'Toasts',
    componentDescription: 'Floating system alert. Confirms background actions. Auto-dismisses.',
    routerLink: 'component/toasts',
    componentClass: UiToasts,
  },
  {
    componentImage: 'tooltips.png',
    componentName: 'Tooltips',
    componentDescription: 'Micro text label. Triggered by hover. Explains icon meaning.',
    routerLink: 'component/tooltips',
    componentClass: UiTooltips,
  },
];
