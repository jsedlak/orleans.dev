import type { CookieConsentConfig } from '@jop-software/astro-cookieconsent';

export const cookieConfig: CookieConsentConfig = {
  guiOptions: {
    consentModal: {
      layout: 'box',
      position: 'bottom right',
      equalWeightButtons: false,
    },
    preferencesModal: {
      layout: 'bar wide',
      position: 'right',
      equalWeightButtons: false,
    },
  },
  categories: {
    necessary: {
      enabled: true,
      readOnly: true,
    },
    analytics: {
      enabled: true,
      readOnly: false,
    },
  },
  language: {
    default: 'en',
    autoDetect: 'document',
    translations: {
      en: {
        consentModal: {
          title: 'This site uses cookies',
          description:
            'We use cookies to enhance your browsing experience, analyze site traffic, and improve our services. By clicking "Accept all," you consent to our use of cookies.',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          showPreferencesBtn: 'Manage preferences',
          footer:
            '<a href="https://go.microsoft.com/fwlink/?LinkId=521839">Privacy & Cookies</a>',
        },
        preferencesModal: {
          title: 'Cookie preferences',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          savePreferencesBtn: 'Save preferences',
          closeIconLabel: 'Close',
          sections: [
            {
              title: 'Cookie usage',
              description:
                'We use cookies to provide essential website functionality and improve your experience.',
            },
            {
              title: 'Strictly necessary <span class="pm__badge">Always Enabled</span>',
              description:
                'Required for the website to function properly. These cannot be disabled.',
              linkedCategory: 'necessary',
            },
            {
              title: 'Analytics',
              description:
                'Help us understand how visitors interact with our website. All data is anonymized.',
              linkedCategory: 'analytics',
            },
            {
              title: 'More information',
              description:
                'For questions about our cookie policy, please <a href="https://support.microsoft.com/contactus/">contact us</a>.',
            },
          ],
        },
      },
    },
  },
};
