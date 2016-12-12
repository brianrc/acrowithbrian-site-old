import React, { PropTypes, Component } from "react"
import { Link } from "phenomic"
import Svg from "react-svg-inline"

import twitterSvg from "../icons/iconmonstr-twitter-1.svg"
import gitHubSvg from "../icons/iconmonstr-github-1.svg"

import styles from "./index.css"

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = { didScroll: false }
    this.handleScroll = this.handleScroll.bind(this)
  }

  handleScroll(){
    if( window.pageYOffset > 50 )
      this.setState({didScroll: true})
    else
      this.setState({didScroll: false})
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

   componentWillUnmount(){
     window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { pkg } = this.context.metadata

    return (
      <header className={ styles.header + (this.state.didScroll ? ' ' + styles.scrolled : '') }>
        <div className={ styles.logo }>
          <Link
            className={ styles.link }
            to={ "/" }
          >
            { "Acro With Brian" }
          </Link>
        </div>
        <nav className={ styles.nav }>
          <div className={ styles.navPart1 }>
            <Link
              className={ styles.link }
              to={ "/about" }
            >
              { "About" }
            </Link>
            <Link
              className={ styles.link }
              to={ "/photos" }
            >
              { "Photos" }
            </Link>
            <Link
              className={ styles.link }
              to={ "/blog" }
            >
              { "Blog" }
            </Link>
            <Link
              className={ styles.link }
              to={ "/events" }
            >
              { "Events" }
            </Link>
            <Link
              className={ styles.link }
              to={ "/contact" }
            >
              { "Contact" }
            </Link>
          </div>
          <div className={ styles.navPart2 }>
            {
              pkg.twitter &&
              <a
                href={ `https://twitter.com/${pkg.twitter}` }
                className={ styles.link }
              >
                <Svg svg={ twitterSvg } cleanup />
                { "Twitter" }
              </a>
            }
            {
              pkg.repository &&
              <a
                href={ pkg.repository }
                className={ styles.link }
              >
                <Svg svg={ gitHubSvg } cleanup />
                { "GitHub" }
              </a>
            }
          </div>
        </nav>
      </header>
    )
  }
}

Header.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Header
