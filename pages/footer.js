import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
<>
<footer>
  <div class="footer-gray">
    <div class="footer-custom">
      <div class="footer-lists">
        <div class="footer-list-wrap">
          <h6 class="ftr-hdr">Quick Links</h6>
          <ul class="ftr-links-sub">
          <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
          </ul>
        </div>
        <div class="footer-list-wrap">
          <h6 class="ftr-hdr">Social</h6>
          <ul class="ftr-links-sub">
            <li><a href="/asp/aboutus/default-asp/_/posters.htm" rel="nofollow">Instagram</a></li>
            <li><a href="http://corporate.art.com/careers" rel="nofollow">Facebook</a></li>
            <li><a href="/asp/landing/artistrising" rel="nofollow">Youtube</a></li>
            <li><a href="/~/art-for-business" rel="nofollow">Linkedin</a></li>
          </ul>
        </div>
        <div class="footer-list-wrap">
          <h6 class="ftr-hdr">Contact Us</h6>
          <ul class="ftr-links-sub">
              <li class="ftr-Login"><span class="link login-trigger">+91-7801002139</span></li>
              <li><span class="link">+91-7801002139</span></li>
              <li class="ftr-Login"><span class="link ftr-access-my-account">+91-7801002139</span></li>
          </ul>
        </div>
      </div>
      <div class="footer-email">
        <h6 class="ftr-hdr">Subscribe us</h6>
        <div id="ftr-email" class="ftr-email-form">
          <form id="ftrEmailForm" method="post" action="">
            <div class="error">Please enter a valid email address</div>
            <input type="text" name="email_address_" id="ftrEmailInput" class="input" placeholder="Enter email address" />
            <input type="submit" class="button" value="SUBMIT" />
            <input type="hidden" name="country_iso2" value=""/>
            <input type="hidden" name="language_iso2" value="en"/>
            <input type="hidden" name="site_domain" value="art.com"/>
            <input type="hidden" name="email_acq_source" value="01-000001"/>
            <input type="hidden" name="email_acq_date" value="" id="ftr-email-date"/>
            <input type="hidden" name="brand_id" value="ART"/>
            <input type="hidden" name="_ri_" value="X0Gzc2X%3DWQpglLjHJlYQGnp51yrMf2qXdC9tjU8pzgMtwfYzaVwjpnpgHlpgneHmgJoXX0Gzc2X%3DWQpglLjHJlYQGnyLSq2fzdkuzdzglHMsUhgeNzaSgkk"/>
          </form>
        </div>
        <div class="ftr-email-privacy-policy"></div>
      </div>
      <div class="footer-social">
        <h6 class="ftr-hdr">Follow Us</h6>
        <ul>
          <li>
            <a href="https://www.facebook.com/art.com" title="Facebook" onclick="_gaq.push(['_trackSocial', 'Facebook', 'Follow', 'Footer', 'undefined', 'True']);">
              <img width="24" height="24" alt="Like us on Facebook" src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/fb.png"/>
            </a>
          </li>
          <li>
            <a href="https://plus.google.com/108089796661280870153" title="Google+" onclick="_gaq.push(['_trackSocial', 'GooglePlus', 'Follow', 'Footer', 'undefined', 'True']);">
              <img width="24" height="24" alt="Follow us on Google+" src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/gplus.png"/>
            </a>
          </li>
          <li>
            <a href="https://pinterest.com/artdotcom/" target="_blank">
              <img width="24" height="24" alt="Follow us on Pinterest" src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/pin-badge.png"/>
            </a>
          </li>
          <li>
            <a target="_blank" href="http://instagram.com/artdotcom/">
              <img width="24" height="24" alt="Follow us on Instagram" src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/instagram-badge.png"/>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/artdotcom" title="Twitter" onclick="_gaq.push(['_trackSocial', 'Twitter', 'Follow', 'Footer', 'undefined', 'True']);">
              <img width="67" alt="Follow us on Twitter" src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/twitter.png"/>
            </a>
          </li>
        </ul>
      </div>
      <div class="footer-legal">
        <p>&copy; medpro360.com Inc. All Rights Reserved. | <a href="/" rel="nofollow">Privacy Policy</a> | <a href="/" rel="nofollow">Terms of Use</a> | <a href="/" rel="nofollow">Terms of Sale</a></p>
        <p>medpro360.com, and Photos [to] Art are trademarks or registered trademarks of medpro360.com Inc.</p>
        <p>Various aspects of this website are covered by issued US patent No. 7,973,796 and other pending patent applications.</p>
      </div>
    </div>
  </div>
</footer>
</>    )
  }
}
export default Footer;