import React from "react"

import styles from "./index.css"

const Footer = () => (
  <footer className={ styles.footer }>
    { /* If you like Phenomic, this is a way to share the love ;) */ }
    <p>
      { "Website by "}
      <a
        href="https://www.brianswebstudio.com/"
        className={ styles.footerLink }>
        { "Brian's Web Studio" }
      </a>
      { ". Made with " }
      <strong>{ "love" }</strong>
      { " and " }
      <a
        href={ process.env.PHENOMIC_HOMEPAGE }
        className={ styles.footerLink }
      >
        { `<${ process.env.PHENOMIC_NAME} />` }
      </a>
    </p>
  </footer>
)

export default Footer
