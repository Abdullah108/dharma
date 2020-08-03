import React from 'react';

import './Start.css';

const Start = () => {
  return (
    <div className="Start">
      <h2>Start saving today.</h2>
      <p>Join the thousands of people earning interest on Dharma today.</p>
      <div className="ButtonContainer">
        <button>
          <svg
            width="34px"
            height="41px"
            viewBox="0 0 34 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sc-ckVGcZ chumrb">
            <path
              d="M33.2874 31.9519C32.677 33.3843 31.9544 34.7029 31.1173 35.9151C29.9761 37.5677 29.0418 38.7117 28.3217 39.3469C27.2055 40.3896 26.0095 40.9236 24.7289 40.9539C23.8095 40.9539 22.7007 40.6882 21.4101 40.1491C20.1152 39.6126 18.9252 39.3469 17.8372 39.3469C16.696 39.3469 15.4722 39.6126 14.1631 40.1491C12.852 40.6882 11.7959 40.9691 10.9883 40.997C9.76024 41.0501 8.53613 40.5009 7.31426 39.3469C6.5344 38.656 5.55895 37.4716 4.3904 35.7937C3.13664 34.0019 2.10588 31.9241 1.29836 29.5553C0.433534 26.9966 0 24.519 0 22.1203C0 19.3727 0.584523 17.0028 1.75531 15.0169C2.67545 13.4218 3.89956 12.1635 5.43163 11.2397C6.9637 10.316 8.6191 9.84525 10.4018 9.81514C11.3773 9.81514 12.6564 10.1216 14.2461 10.7239C15.8312 11.3283 16.849 11.6348 17.2953 11.6348C17.6289 11.6348 18.7596 11.2764 20.6763 10.562C22.4889 9.89941 24.0188 9.62507 25.272 9.73314C28.668 10.0115 31.2194 11.3713 32.9162 13.8211C29.8789 15.6904 28.3765 18.3085 28.4064 21.6671C28.4338 24.2831 29.3682 26.4601 31.2045 28.1886C32.0366 28.9909 32.966 29.6109 34 30.0513C33.7758 30.7118 33.5391 31.3445 33.2874 31.9519ZM25.4988 0.820721C25.4988 2.87119 24.7613 4.7857 23.2912 6.55776C21.5172 8.66439 19.3715 9.8817 17.0446 9.68961C17.015 9.44362 16.9978 9.18472 16.9978 8.91266C16.9978 6.94421 17.8414 4.83758 19.3396 3.11513C20.0876 2.24302 21.0388 1.51788 22.1924 0.939414C23.3435 0.369582 24.4324 0.0544528 25.4564 0.000488281C25.4863 0.274604 25.4988 0.548736 25.4988 0.820695V0.820721Z"
              fill="white"></path>
          </svg>
          <div className="Text">
            Download on the <div className="StoreName">App Store</div>
          </div>
        </button>
        <button>
          <svg
            width="42px"
            height="47px"
            viewBox="0 0 42 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="sc-ckVGcZ fOWhcg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.817003 0.718937C0.299121 1.27646 0 2.12837 0 3.24342V42.7922C0 43.9072 0.299121 44.7591 0.834861 45.2943L0.97326 45.4148L23.1529 23.2564V22.7613L0.955403 0.598511L0.817003 0.718937Z"
              fill="white"></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30.5325 30.6648L23.1348 23.2742V22.7568L30.5325 15.3662L30.6932 15.4643L39.4436 20.433C41.9482 21.8424 41.9482 24.1707 39.4436 25.5979L30.6932 30.5666L30.5325 30.6648Z"
              fill="white"
              fill-opacity="0.8"></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30.6928 30.5666L23.1344 23.0155L0.816406 45.3121C1.63341 46.1863 3.00401 46.2845 4.53533 45.4326L30.6928 30.5666Z"
              fill="white"
              fill-opacity="0.7"></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30.6928 15.4644L4.53533 0.620756C3.00401 -0.253446 1.62895 -0.13302 0.816406 0.741183L23.1344 23.0155L30.6928 15.4644Z"
              fill="white"
              fill-opacity="0.9"></path>
            <path
              opacity="0.2"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30.5328 30.406L4.55389 45.1515C3.10293 45.9856 1.80822 45.9276 0.973361 45.1693L0.834961 45.3076L0.973361 45.428C1.80822 46.1818 3.10293 46.2443 4.55389 45.4102L30.7114 30.5666L30.5328 30.406Z"
              fill="white"
              fill-opacity="0.2"></path>
          </svg>
          <div className="Text">
            Get it on{' '}
            <div className="StoreName" style={{ fontSize: '20px' }}>
              Google Play
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Start;
