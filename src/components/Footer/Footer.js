import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div>
      <footer class="footer">
        <div class="footer-content">
          <div class="social-words">
            <p class="copyright">Copyright &copy; 2021,</p>
            <p class="copyright">Bridge of Hope Association</p>
            <p class="copyright">All Rights Reserved</p>
          </div>
          <div class="social-words">
            <ul class="working-hours">
              <p class="words">
                <i id="my-icons">Contact Us</i>
              </p>
              <p class="words">+25775160879</p>
              <p class="words">bridgeofhas@gmail.com</p>
            </ul>
          </div>
          <div class="social-list">
            <p>Follow us on social Media </p>
            <br />
            <a
              href="https://www.facebook.com/Bridge-of-Hope-Association-102675555102137"
              target="_blank"
            >
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/bridgeofhas/" target="_blank">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com/bridgeofhas" target="_blank">
              <i class="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/bridge-of-hope-association-010752220/"
              target="_blank"
            >
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
