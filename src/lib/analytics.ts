/**
 * Custom GA4 events. The measurement snippet in index.html owns page views.
 *
 * Page views are not sent from this module.
 *
 * `gtag('config', 'G-JWKWNM83ZT')` uses the default `send_page_view: true`,
 * so each full document load records one page_view. Prerendered shells copy
 * that snippet, and in-app links are normal `<a href>` navigations, so a
 * route change loads a new document and gets that one page_view.
 *
 * Same-document history changes (`pushState`, `replaceState`, `popstate`)
 * are left to GA4 enhanced measurement, "Page changes based on browser
 * history events", which is on by default. This app does not call
 * `history.pushState` or `history.replaceState`. `Router` only listens for
 * `popstate`. Sending `page_view` from React as well would count those
 * history hits twice, so nothing here emits `page_view` or sets
 * `send_page_view: false`.
 */

type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

export type StartProjectLocation = 'hero' | 'blog' | 'about';

export type ContactClickLocation = 'footer' | 'case_study' | 'contact_form';

function gtag(...args: unknown[]): void {
  if (typeof window.gtag !== 'function') return;
  window.gtag(...args);
}

export function trackStartProjectClick(location: StartProjectLocation): void {
  gtag('event', 'start_project_click', { location });
}

export function trackContactClick(location: ContactClickLocation): void {
  gtag('event', 'contact_click', { location });
}
