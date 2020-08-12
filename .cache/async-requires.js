// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-components-js": () => import("./../src/pages/components.js" /* webpackChunkName: "component---src-pages-components-js" */),
  "component---src-templates-about-js": () => import("./../src/templates/about.js" /* webpackChunkName: "component---src-templates-about-js" */),
  "component---src-templates-contact-js": () => import("./../src/templates/contact.js" /* webpackChunkName: "component---src-templates-contact-js" */),
  "component---src-templates-download-js": () => import("./../src/templates/download.js" /* webpackChunkName: "component---src-templates-download-js" */),
  "component---src-templates-landing-page-js": () => import("./../src/templates/landing-page.js" /* webpackChunkName: "component---src-templates-landing-page-js" */),
  "component---src-templates-pricing-js": () => import("./../src/templates/pricing.js" /* webpackChunkName: "component---src-templates-pricing-js" */)
}

