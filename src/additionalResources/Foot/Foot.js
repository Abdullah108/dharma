import React from 'react';
import { Link } from 'react-router-dom';

const Foot = () => {
  return (
    <div>
      <footer className="footer" style={{ paddingTop: '20px' }}>
        <div className="container">
          <div className="row fer .navigae .nav-linksooter-upper">
            <div className="col-6 col-lg-3 col-xl-2">
              <div className="navigate">
                <h3>Navigate</h3>
                <ul className="nav-links">
                  <li className="nav-item">
                    <Link to="/">Twitter</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/careers">Careers</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/">Discord</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/terms">Terms</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-lg">
              <h3>Contact</h3>
              <ul className="contact-container">
                <li className="contact-item">
                  <svg
                    className="icon"
                    id="marker"
                    height="24px"
                    style={{ width: '33px', fill: 'white' }}
                    version="1.1"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg">
                    <g
                      fill="white"
                      style={{ backgroundColor: 'white' }}
                      fill-rule="evenodd"
                      stroke="none"
                      stroke-width="1">
                      <rect
                        height="24"
                        style={{ backgroundColor: 'white' }}
                        opacity="0"
                        width="24"
                        x="0"
                        y="0"></rect>
                      <path
                        d="M5,10.5 C5,6 8,3 12.5,3 C17,3 20,6.75 20,10.5 C20,12.8325623 17.8236613,16.03566 13.470984,20.1092932 C12.9154018,20.6292577 12.0585054,20.6508331 11.4774555,20.1594925 C7.15915182,16.5078313 5,13.2880005 5,10.5 Z M12.5,12 C13.8807119,12 15,10.8807119 15,9.5 C15,8.11928813 13.8807119,7 12.5,7 C11.1192881,7 10,8.11928813 10,9.5 C10,10.8807119 11.1192881,12 12.5,12 Z"
                        fill="white"
                        fill-rule="nonzero"></path>
                    </g>
                  </svg>
                  <p
                    style={{
                      fontSize: '1rem !important',
                      fontWeight: '500 !important'
                    }}>
                    348 Greenpoint Avenue Brooklyn, NY
                  </p>
                </li>
                <li className="contact-item">
                  <svg
                    className="icon"
                    height="24px"
                    style={{ width: '33px', color: 'white' }}
                    version="1.1"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg">
                    <title>Icon For Call#1</title>
                    <g
                      fill="none"
                      fill-rule="evenodd"
                      stroke="none"
                      stroke-width="1">
                      <rect
                        height="24"
                        opacity="0"
                        width="24"
                        x="0"
                        y="0"></rect>
                      <path
                        d="M11.914857,14.1427403 L14.1188827,11.9387145 C14.7276032,11.329994 14.8785122,10.4000511 14.4935235,9.63007378 L14.3686433,9.38031323 C13.9836546,8.61033591 14.1345636,7.680393 14.7432841,7.07167248 L17.4760882,4.33886839 C17.6713503,4.14360624 17.9879328,4.14360624 18.183195,4.33886839 C18.2211956,4.37686904 18.2528214,4.42074752 18.2768552,4.46881498 L19.3808309,6.67676638 C20.2253855,8.3658756 19.8943345,10.4059034 18.5589765,11.7412615 L12.560151,17.740087 C11.1066115,19.1936265 8.95659008,19.7011777 7.00646221,19.0511351 L4.5919826,18.2463085 C4.33001094,18.1589846 4.18843095,17.8758246 4.27575484,17.613853 C4.30030124,17.5402138 4.34165566,17.4733009 4.39654309,17.4184135 L7.04781491,14.7671417 C7.65653544,14.1584211 8.58647835,14.0075122 9.35645567,14.3925008 L9.60621621,14.5173811 C10.3761935,14.9023698 11.3061364,14.7514608 11.914857,14.1427403 Z"
                        fill="white"></path>
                    </g>
                  </svg>
                  <div>
                    <p>+61 3928 3324</p>
                    <p className="small" style={{ fontSize: '14px' }}>
                      Mon - Fri 9am - 5pm
                    </p>
                  </div>
                </li>
                <li className="contact-item">
                  <svg
                    className="icon"
                    height="24px"
                    style={{ width: '33px', color: 'white' }}
                    version="1.1"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg">
                    <title>Icon For Mail</title>
                    <g
                      fill="white"
                      fill-rule="evenodd"
                      stroke="none"
                      stroke-width="1">
                      <rect
                        height="24"
                        opacity="0"
                        width="24"
                        x="0"
                        y="0"></rect>
                      <path
                        d="M5,6 L19,6 C20.1045695,6 21,6.8954305 21,8 L21,17 C21,18.1045695 20.1045695,19 19,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,8 C3,6.8954305 3.8954305,6 5,6 Z M18.1444251,7.83964668 L12,11.1481833 L5.85557487,7.83964668 C5.4908718,7.6432681 5.03602525,7.77972206 4.83964668,8.14442513 C4.6432681,8.5091282 4.77972206,8.96397475 5.14442513,9.16035332 L11.6444251,12.6603533 C11.8664074,12.7798822 12.1335926,12.7798822 12.3555749,12.6603533 L18.8555749,9.16035332 C19.2202779,8.96397475 19.3567319,8.5091282 19.1603533,8.14442513 C18.9639747,7.77972206 18.5091282,7.6432681 18.1444251,7.83964668 Z"
                        fill="#000000"></path>
                    </g>
                  </svg>
                  <div id="mail">
                    <p>
                      <a href="mailto:hello@company.io">hello@company.io</a>
                    </p>
                  </div>
                </li>
                <li className="contact-item"></li>
              </ul>
            </div>
            <div className="col-lg-5 col-xl-4 mt-3 mt-lg-0">
              <div className="subscribe">
                <h3>Subscribe</h3>
                <p>
                  The latest Uptime news, articles, and resources, sent straight
                  to your inbox every month.
                </p>
                <input type="email" placeholder="Enter Your Email Address" />
                <button>Notify Me</button>
                <p className="small" style={{ fontSize: '12px' }}>
                  We will never share your details. See our
                  <Link to="/terms" style={{ opacity: 1, fontWeight: 800 }}>
                    {' '}
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="social">
          <ul className="social-container">
            <li className="social-item">
              <a href="#">
                <svg
                  className="icon"
                  fill="white"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <title>Instagram icon</title>
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"></path>
                </svg>
              </a>
            </li>
            <li className="social-item">
              <a href="#">
                <svg
                  fill="white"
                  className="icon"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <title>Twitter icon</title>
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"></path>
                </svg>
              </a>
            </li>
            <li className="social-item">
              <a href="#">
                <svg
                  fill="white"
                  className="icon"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <title>YouTube icon</title>
                  <path
                    className="a"
                    d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"></path>
                </svg>
              </a>
            </li>
            <li className="social-item">
              <a href="#">
                <svg
                  fill="white"
                  className="icon"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <title>Medium icon</title>
                  <path d="M0 0v24h24V0H0zm19.938 5.686L18.651 6.92a.376.376 0 0 0-.143.362v9.067a.376.376 0 0 0 .143.361l1.257 1.234v.271h-6.322v-.27l1.302-1.265c.128-.128.128-.165.128-.36V8.99l-3.62 9.195h-.49L6.69 8.99v6.163a.85.85 0 0 0 .233.707l1.694 2.054v.271H3.815v-.27L5.51 15.86a.82.82 0 0 0 .218-.707V8.027a.624.624 0 0 0-.203-.527L4.019 5.686v-.27h4.674l3.613 7.923 3.176-7.924h4.456v.271z"></path>
                </svg>
              </a>
            </li>
            <li className="social-item">
              <a href="#">
                <svg
                  fill="white"
                  className="icon"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <title>Facebook icon</title>
                  <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <p className="copyright" style={{ fontSize: '12px' }}>
          &copy; 2020
        </p>
      </footer>
    </div>
  );
};

export default Foot;
