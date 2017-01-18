import React, { PropTypes, Component } from "react"
import { Link } from "phenomic"
import Svg from "react-svg-inline"

import handleClickAway from '../../utils/handleClickAway'

import twitterSvg from "../icons/iconmonstr-twitter-1.svg"
import gitHubSvg from "../icons/iconmonstr-github-1.svg"

import styles from "./index.css"

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      didScroll: false,
      sideNavOpen: false
    }
    this.handleScroll = this.handleScroll.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.closeNav = this.closeNav.bind(this)
  }

  handleScroll(){
    // only handle scroll state if menu closed
    if (!this.state.sideNavOpen) {
      if( window.pageYOffset > 50 )
        this.setState({didScroll: true})
      else
        this.setState({didScroll: false})
    }
  }

  closeNav(e) {
      const toggleNode = this.refs.toggle
      const isOutsideClick = handleClickAway(toggleNode, e)
      if (toggleNode && isOutsideClick) {
        this.setState({
          sideNavOpen: false
        })
      }
    }
    handleClick() {
      this.setState({
        sideNavOpen: !this.state.sideNavOpen
      })
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
    document.body.addEventListener('click', this.closeNav)
  }

   componentWillUnmount(){
     window.removeEventListener('scroll', this.handleScroll);
     document.body.removeEventListener('click', this.closeNav)
  }

  render() {
    const { pkg } = this.context.metadata
//    const { fullWidth } = this.props
    const { sideNavOpen } = this.state
    const mobileNav = (sideNavOpen) ? styles.open : ''
    const openClass = (sideNavOpen) ? styles.animate : ''
//    const containerStyle = (fullWidth) ? styles.fullWidth : ''

    return (
      <header className={ styles.header + (this.state.didScroll ? ' ' + styles.scrolled : '') }>
        <div className={ styles.logo }>
          <Link
            className={ styles.link }
            to={ "/" }
          >
            { "Brian Cruikshank Acro" }
          </Link>
        </div>

        <div ref='toggle' onClick={this.handleClick} className={styles.toggle}>
          <div className={styles.ham}>
            <div className={`${styles.bar} ${openClass}`} />
          </div>
        </div>

        <nav className={ `${styles.nav} ${mobileNav}` }>
          {/* <div className={ styles.navPart1 }> */}
          <ul className={styles.navItems}>
            <li className={styles.navItem}>
              <Link
                className={ styles.link }
                to={ "/about/" }
              >
                { "About" }
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                className={ styles.link }
                to={ "/photos/" }
              >
                { "Photos" }
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                className={ styles.link }
                to={ "/events/" }
              >
                { "Events" }
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                className={ styles.link }
                to={ "/blog/" }
              >
                { "Blog" }
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link
                className={ styles.link }
                to={ "/contact/" }
              >
                { "Contact" }
              </Link>
            </li>
          </ul>
          {/* </div> */}
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
