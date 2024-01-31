import React, { useState, useEffect } from 'react';
import './Footer.css';

function Footer() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const scriptURL = 'https://script.google.com/macros/s/AKfycbyCKYEI-G8UiVkKKRJE0ICNF9nFMkWPAE8rqAzVHxdbLOF5mPJrg9zrUj0ZwuOlEhQv/exec';

  useEffect(() => {
    const form = document.forms['submit-to-google-sheet'];

    const handleSubmit = async (e) => {
      e.preventDefault();
      

      try {
        setIsLoading(true);
        const response = await fetch(scriptURL, { method: 'POST', body: new FormData(form) });

        if (response.ok) {
          setIsSuccess(true);
          form.reset();
          setTimeout(() => {
            setIsSuccess(false);
            setErrorMsg('');
          }, 5000);
        } else {
          setIsSuccess(false);
          setErrorMsg('Error submitting the form. Please try again.');
        }

        console.log('Success!', response);
      } catch (error) {
        setIsSuccess(false);
        setErrorMsg('An error occurred. Please try again later.');
        console.error('Error!', error.message);
      } finally {
        setIsLoading(false);
      }
    };

    form.addEventListener('submit', handleSubmit);

    // Cleanup event listener when the component is unmounted
    return () => {
      form.removeEventListener('submit', handleSubmit);
    };
  }, [scriptURL]);

  return (
    
    <footer className="new_footer_area bg_color">
      <div className="new_footer_top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="f_widget company_widget wow fadeInLeft">
              <h3 className="f-title f_600 t_color f_size_18" style={{
                  fontWeight: 'bold',    // Make the text bold
                  fontStyle: 'italic',    // Add italic style
                  textDecoration: 'underline',  // Add underline style
                  color: '#3498db'        // Change the text color
                }}>
                  Get in Touch
                </h3>

                <p style={{
                    background: '#f8d7da',    // Background color for the banner
                    color: '#721c24',         // Text color
                    padding: '10px',          // Padding to provide some space around the text
                    borderRadius: '5px',      // Optional: Round corners
                    border: '1px solid #f5c6cb', // Optional: Border for better visibility
                    margin: '10px 0',         // Add margin for better spacing
                    textAlign: 'center',      // Center-align text
                    fontSize: '16px',         // Font size for mobile
                    lineHeight: '1.5',        // Line height for better readability
                    '@media (max-width: 768px)': {  // Media query for mobile devices
                      fontSize: '14px',       // Adjust font size for smaller screens
                      padding: '8px',         // Adjust padding for smaller screens
                    }
                  }}>
                    🎁 This is a beta version right now; feel free to request any corrections or channel requests. 🎁
                </p>


                <form name="submit-to-google-sheet"
                >
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" name="name" className="form-control" placeholder="Your Name" required/>
                  <br />

                  <label htmlFor="email">Email:</label>
                  <input type="text" id="email" name="email" className="form-control" placeholder="Your Email" required />
                  <br />

                  <label htmlFor="message">Message:</label>
                  <textarea id="message" name="message" className="form-control" placeholder="Your Message" required></textarea>
                  
                  <button className="btn btn_get btn_get_two"style={{fontWeight: 'bold'}} type="submit" disabled={isLoading}>
                    {isLoading ? 'Sending...(Please Wait)' : 'Submit'}
                  </button>
                  {isSuccess && <p className="success-message" style={{color:"green"}}>Message sent successfully!</p>}
                  {errorMsg && <p className="error-message">{errorMsg}</p>}
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="f_widget about-widget pl_70 wow fadeInLeft">
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="f_widget about-widget pl_70 wow fadeInLeft">
                <h3 className="f-title f_600 t_color f_size_18">"Welcome to our TV channel! 📺 Currently in beta mode, stay tuned for exciting premium features coming soon! 🚀"</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="f_widget about-widget pl_70 wow fadeInLeft">
                <h3 className="f-title f_600 t_color f_size_18">MixvistaTV</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="f_widget about-widget pl_70 wow fadeInLeft">
                <h3 className="f-title f_600 t_color f_size_18">This is only for fun</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
            </div>
          </div>
        </div>
        <div className="footer_bg">
          <div className="footer_bg_one" />
          <div className="footer_bg_two" />
        </div>
      </div>
      <div className="footer_bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-7">
              <p className="mb-0 f_400 highlighted-text">
                © Abhi Production Inc.. 2024 All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
