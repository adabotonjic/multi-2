import React, { useEffect } from 'react';

const IubendaCookieBanner = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.charset = 'UTF-8';
        script.async = true;
        script.src = '//cdn.iubenda.com/cs/iubenda_cs.js';
        document.head.appendChild(script);
    
        const iubScript = document.createElement('script');
        iubScript.type = 'text/javascript';
        iubScript.innerHTML = `
          var _iub = _iub || [];
          _iub.csConfiguration = {
              "gdprAppliesGlobally": false,
              "enableCcpa": true,
              "countryDetection": true,
              "preferenceCookie": { "expireAfter": 90 },
              "perPurposeConsent": true,
              "purposes": "1, 4, 5",
              "whitelabel": false,
              "lang": "it",
              "siteId": 1057047,
              "floatingPreferencesButtonDisplay": false,
              "consentOnContinuedBrowsing": true,
              "cookiePolicyId": 18645684,
              "footer": {},
              "cookiePolicyInOtherWindow": false,
              "banner": {
                  "brandBackgroundColor": "#fff",
                  "brandTextColor": "#000",
                  "logo": "https://www.ghirardellinicola.it/wp-content/uploads/2019/11/Logo-Ghiga-Pronto-Intervento.png",
                  "acceptButtonDisplay": true,
                  "customizeButtonDisplay": true,
                  "acceptButtonColor": "#999",
                  "acceptButtonCaptionColor": "white",
                  "customizeButtonColor": "#DADADA",
                  "customizeButtonCaptionColor": "#4D4D4D",
                  "rejectButtonDisplay": true,
                  "rejectButtonColor": "#999",
                  "rejectButtonCaptionColor": "white",
                  "position": "float-center",
                  "backgroundOverlay": true,
                  "textColor": "black",
                  "backgroundColor": "#ffffff",
                  "slideDown": false,
                  "prependOnBody": false
              },
              "callback": {
                  onPreferenceExpressedOrNotNeeded: function (preference) {
                      dataLayer.push({
                          iubenda_ccpa_opted_out: _iub.cs.api.isCcpaOptedOut()
                      });
                      if (!preference) {
                          dataLayer.push({
                              event: "iubenda_preference_not_needed"
                          });
                      } else {
                          if (preference.consent === true) {
                              dataLayer.push({
                                  event: "iubenda_consent_given"
                              });
                          } else if (preference.consent === false) {
                              dataLayer.push({
                                  event: "iubenda_consent_rejected"
                              });
                          } else if (preference.purposes) {
                              for (var purposeId in preference.purposes) {
                                  if (preference.purposes[purposeId]) {
                                      dataLayer.push({
                                          event: "iubenda_consent_given_purpose_" + purposeId
                                      });
                                  }
                              }
                          }
                      }
                  }
              }
          };
        `;
        document.head.appendChild(iubScript);
      }, []);
    
      return (
        <div>
          <style>
            {`
              #iubenda-iframe .purposes-top-right .iub-iframe-brand-button {
                display: none !important;
              }
              #iubenda-iframe #iubFooterBtnContainer button#iubFooterBtn {
                background-color: #999!important;
              }
              #iubenda-cs-banner .iubenda-cs-content .iubenda-cs-brand img {
                max-width: 100%!important;
              }
              #iubenda-cs-banner .iubenda-cs-container .iubenda-banner-content.iubenda-custom-content #iubenda-cs-title,
              #iubenda-cs-banner .iubenda-cs-container .iubenda-banner-content.iubenda-custom-content .iub-p {
                text-align: center !important;
              }
              @media (min-width: 800px) {
                #iubenda-iframe-content #purposes-content-container h1.purposes-header-title {
                  font-size: 24px!important;
                }
              }
            `}
          </style>
          <div>
            {/* Paste the provided HTML structure here */}
            <script>
          {`
            var iCallback = function() {};
            var _iub = _iub || {};

            if (typeof _iub.csConfiguration != 'undefined') {
              if ('callback' in _iub.csConfiguration) {
                if ('onConsentGiven' in _iub.csConfiguration.callback)
                  iCallback = _iub.csConfiguration.callback.onConsentGiven;

                _iub.csConfiguration.callback.onConsentGiven = function() {
                  iCallback();

                  /* separator */
                  jQuery('noscript._no_script_iub').each(function(a, b) {
                    var el = jQuery(b);
                    el.after(el.html());
                  });
                }
              }
            }
          `}
        </script>
          </div>
        </div>
      );
    };

export default IubendaCookieBanner;