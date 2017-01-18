import React, { PropTypes } from "react"
import Helmet from "react-helmet"
import warning from "warning"
import { BodyContainer, joinUri } from "phenomic"


import Loading from "../../components/Loading"
import PageHero from "../../components/PageHero"

import styles from "./index.css"

const Page = ({
    isLoading,
    __filename,
    __url,
    head,
    body,
    header,
    footer,
    children,
  },
//  { metadata: { pkg } }
 ) => {

  warning(
    typeof head.title === "string",
    `Your page '${ __filename }' needs a title`
  )

  const metaTitle = head.metaTitle ? head.metaTitle : head.title

  const meta = [
    { property: "og:locale", content: "en_US" },
    { property: "og:site_name", content: "Brian Cruikshank Acro" },
    { property: "og:type", content: "article" },
    { property: "og:title", content: metaTitle },
    {
      property: "og:url",
      content: joinUri(process.env.PHENOMIC_USER_URL, __url),
    },
    { property: "og:description", content: head.description },
    { property: "og:image", content: joinUri(process.env.PHENOMIC_USER_URL, head.hero).split('../').join('') },
    { property: "article:publisher", content: "https://www.facebook.com/brianrc" },
    // { name: "twitter:card", content: "summary" },
    // { name: "twitter:title", content: metaTitle },
    // { name: "twitter:creator", content: `@${ pkg.twitter }` },
    // { name: "twitter:description", content: head.description },
    { name: "description", content: head.description },
  ]

  return (
    <div className={ styles.page }>
      <Helmet
        title={ metaTitle + ' - Brian Cruikshank Acro' }
        meta={ meta }
      />
      {
        head.layout != "Homepage" && <PageHero head={head} />
      }

      <div className={ styles.wrapper + " " + styles.pageContent }>
        { header }
        <div className={ styles.body }>
          {
            isLoading
            ? <Loading />
            : <BodyContainer>{ body }</BodyContainer>
          }
        </div>
        { children }
        { footer }
      </div>
    </div>
  )
}

Page.propTypes = {
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

Page.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Page
