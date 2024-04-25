import './PieDePagina.css';

export default function PieDePagina() {
    return (
<>
  {/* ============================================ */}
  {/*                  Footer                      */}
  {/* ============================================ */}
  <footer id="footer-1147">
    <div className="cs-container">
      <div className="cs-top">
        <a aria-label="go back to home" className="cs-logo" href="">
          <img
            className="cs-logo-img"
            loading="lazy"
            decoding="async"
            src="https://gooova.com/wp-content/uploads/2021/03/cheems.png"
            alt="logo"
            width={168}
            height={48}
          />
        </a>
        <ul className="cs-ul">
          <li className="cs-li">
            <a href="" className="cs-link">
              Home
            </a>
          </li>
          <li className="cs-li">
            <a href="" className="cs-link">
              About
            </a>
          </li>
          <li className="cs-li">
            <a href="" className="cs-link">
              Services
            </a>
          </li>
          <li className="cs-li">
            <a href="" className="cs-link">
              Donations
            </a>
          </li>
          <li className="cs-li">
            <a href="" className="cs-link">
              Events
            </a>
          </li>
          <li className="cs-li">
            <a href="" className="cs-link">
              Blog
            </a>
          </li>
          <li className="cs-li">
            <a href="" className="cs-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="cs-bottom">
        {/*Social*/}
        <ul className="cs-social">
          <li className="cs-social-li">
            <a
              href=""
              className="cs-social-link"
              aria-label="facebook"
              target="_blank"
              rel="noopener"
            >
              <img
                className="cs-social-icon cs-default"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/facebook-white.svg"
                alt="icon"
                loading="lazy"
                decoding="async"
                width={12}
                height={12}
                aria-hidden="true"
              />
            </a>
          </li>
          <li className="cs-social-li">
            <a
              href=""
              className="cs-social-link"
              aria-label="twitter"
              target="_blank"
              rel="noopener"
            >
              <img
                className="cs-social-icon cs-default"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/twitter-white.svg"
                alt="icon"
                loading="lazy"
                decoding="async"
                width={12}
                height={12}
                aria-hidden="true"
              />
            </a>
          </li>
          <li className="cs-social-li">
            <a
              href=""
              className="cs-social-link"
              aria-label="instagram"
              target="_blank"
              rel="noopener"
            >
              <img
                className="cs-social-icon cs-default"
                src="https://gooova.com/wp-content/uploads/2021/03/cheems.png"
                alt="icon"
                loading="lazy"
                decoding="async"
                width={12}
                height={12}
                aria-hidden="true"
              />
            </a>
          </li>
          <li className="cs-social-li">
            <a
              href=""
              className="cs-social-link"
              aria-label="twitter"
              target="_blank"
              rel="noopener"
            >
              <img
                className="cs-social-icon cs-default"
                src="https://gooova.com/wp-content/uploads/2021/03/cheems.png"
                alt="icon"
                loading="lazy"
                decoding="async"
                width={12}
                height={12}
                aria-hidden="true"
              />
            </a>
          </li>
        </ul>
        <span className="cs-copyright">
          © Copyright 2023 -{" "}
          <a href="" className="cs-copyright-link">
            Stitch Non-profit Charity
          </a>
        </span>
      </div>
    </div>
    {/*Background*/}
    <picture className="cs-background">
      {/*Mobile Image*/}
      <source
        media="(max-width: 600px)"
        srcSet="https://gooova.com/wp-content/uploads/2021/03/cheems.png"
      />
      {/*Tablet and above Image*/}
      <source
        media="(min-width: 601px)"
        srcSet="https://gooova.com/wp-content/uploads/2021/03/cheems.png"
      />
      <img
        loading="lazy"
        decoding="async"
        src="https://gooova.com/wp-content/uploads/2021/03/cheems.png"
        alt="kids"
        width={1280}
        height={568}
      />
    </picture>
  </footer>
</>
    )
}