import React, {PropTypes} from "react"
import Helmet from "react-helmet"
import { BodyContainer, joinUri, Link } from "phenomic"
import Loading from "../../components/Loading"
import Button from "../../components/Button"
import LatestPosts from "../../components/LatestPosts"
import styles from "./index.css"

import Gallery from 'react-grid-gallery'
const IMAGES = require('../../../content/assets/home-gallery/images.js').IMAGES;

const Homepage = (props, { metadata: { pkg } }) => {
  const { isLoading, __url, head, body, footer  } = props;

  const metaTitle = head.metaTitle ? head.metaTitle : head.title

  const meta = [
    { property: "og:type", content: "article" },
    { property: "og:title", content: metaTitle },
    {
      property: "og:url",
      content: joinUri(process.env.PHENOMIC_USER_URL, __url),
    },
    { property: "og:description", content: head.description },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: metaTitle },
    { name: "twitter:creator", content: `@${ pkg.twitter }` },
    { name: "twitter:description", content: head.description },
    { name: "description", content: head.description },
  ]

  return (
    <div className={ styles.page }>
      <Helmet
        title={ metaTitle }
        meta={ meta }
      />
      <section
        className={ styles.hero }
        style={ head.hero && {
          background: `#111 url(${ head.hero }) 50% 50% / cover`,
        } }
      >
        <div className={ styles.wrapper }>
          <h1 className={ styles.heading }>{ head.title }</h1>
        </div>
      </section>
      <section className={ styles.aboutSection }>
        <div className={ styles.wrapper }>
          <div className={ styles.body }>
            {
              isLoading
              ? <Loading />
              : <div className= {styles.aboutContainer}>
                  <h2>About</h2>
                  <BodyContainer>{ body }</BodyContainer>
                </div>
            }
          </div>
        </div>
      </section>
      <section className={ styles.photosSection }>
        <h2>Photos</h2>
          {/* <div className={ styles.photoGrid }>
            <img src="https://dummyimage.com/400x400/000/fff" />
            <img src="https://dummyimage.com/400x400/000/fff" />
            <img src="https://dummyimage.com/400x400/000/fff" />
            <img src="https://dummyimage.com/400x400/000/fff" />
          </div> */}
          <div className={ styles.gallery }>

            <Gallery images={IMAGES} enableImageSelection={false} backdropClosesModal={true} rowHeight={320} />

          </div>
          <Link to='photos' className={styles.buttonLink}>
            <Button>More Photos</Button>
          </Link>
      </section>
      <section className={ styles.eventsSection }>
        <div className={ styles.wrapper }>
          <h2>Events</h2>
          <p>My name is Brian. I’m a certified Acro Revolution teacher based
             in Washington, D.C. I’ve been training and visiting cities around
              the U.S. for 5+ years and can’t get enough!</p>
        </div>
        <Link to='events' className={styles.buttonLink}>
          <Button>More Events</Button>
        </Link>
      </section>

      <section className={ styles.blogSection }>
        <LatestPosts/>
        <Link to='blog' className={styles.buttonLink}>
          <Button>More Posts</Button>
        </Link>
      </section>

      <section className={ styles.contactSection }>
        <div className={ styles.wrapper }>
          <h2>Contact</h2>
          <Link to='contact' className={styles.buttonLink}>
            <Button>Contact me</Button>
          </Link>
        </div>
      </section>

      <section className={ styles.footerSection }>
        { footer }
      </section>
    </div>
  )
}

Homepage.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  __filename: PropTypes.string,
  __url: PropTypes.string,
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
  header: PropTypes.element,
  footer: PropTypes.element,
  layout: PropTypes.string,
}

Homepage.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Homepage
