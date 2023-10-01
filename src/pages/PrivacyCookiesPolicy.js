import React from 'react';
import { useEffect } from 'react';



const PrivacyCookiePolicy = () => {
    useEffect(() => {
        const loader = () => {
          const s = document.createElement("script");
          const tag = document.getElementsByTagName("script")[0];
          s.src = "https://cdn.iubenda.com/iubenda.js";
          tag.parentNode.insertBefore(s, tag);
        };
    
        if (window.addEventListener) {
          window.addEventListener("load", loader, false);
        } else if (window.attachEvent) {
          window.attachEvent("onload", loader);
        } else {
          window.onload = loader;
        }
      }, []);

  return (
    <main className="page-conversioni">
      <div className="page-title-wrap mb-0 mb-xl-3">
        <div className="container">
          <div className="row">
            <h1 className="page-title fw-bold" id="entry-title">
            Privacy e cookie policy
            </h1>
          </div>
        </div>
      </div>
      <br></br>
      <div className='container'>
        <div className='row'>

       <a
        href="https://www.iubenda.com/privacy-policy/18645684"
        className="iubenda-nostyle no-brand iubenda-embed iub-body-embed"
        title="Privacy Policy"
      >
        Privacy Policy
      </a>
        </div>
      </div>


    </main>
  );
};

export default PrivacyCookiePolicy;
