import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PageIntro from "../components/templates/shared/PageIntro"
import PageHeroWysiwyg from "../components/templates/shared/PageHeroWysiwyg"
import PageSimpleWysiwyg from "../components/templates/shared/PageSimpleWysiwyg"
import PageHeroContained from "../components/templates/shared/PageHeroContained"

const Environmental = props => {
  const seoInfo = props.data.seoInfo
  const pageIntro = props.data.pageIntro.template.pageEnvironmental
  const pageHeroWysiwyg = props.data.pageHeroWysiwyg.template.pageEnvironmental
  const pageSimpleWysiwyg =
    props.data.pageSimpleWysiwyg.template.pageEnvironmental
  const pageHeroContained =
    props.data.pageHeroContained.template.pageEnvironmental

  return (
    <Layout
      title={seoInfo.seoFields.swbThemeMetaTitle}
      description={seoInfo.seoFields.swbThemeDescription}
      //metaImg={seoInfo.seoFields.swbThemeImage.localFile.relativePath}
      location={props.location.pathname}
    >
      <Seo
        title={seoInfo.seoFields.swbThemeMetaTitle}
        description={seoInfo.seoFields.swbThemeDescription}
        //metaImg={seoInfo.seoFields.swbThemeImage.localFile.relativePath}
        location={props.location.pathname}
      />
      <PageIntro data={pageIntro} />
      <PageHeroWysiwyg data={pageHeroWysiwyg} />
      <PageSimpleWysiwyg data={pageSimpleWysiwyg} />
      <PageHeroContained data={pageHeroContained} />
    </Layout>
  )
}

export const environmentalTempQuery = graphql`
  query environmentalTempPage($id: String!) {
    seoInfo: wpPage(id: { eq: $id }) {
      seoFields {
        swbThemeDescription
        swbThemeMetaTitle
        swbThemeImage {
          localFile {
            relativePath
          }
        }
      }
    }

    pageIntro: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Environmental {
          pageEnvironmental {
            pageIntroMainTitle
            pageIntroSubTitle
            pageIntroBlueContent
            pageIntroContent
            pageIntroLinkText
            pageIntroLinkSlug
            pageIntroIcon {
              altText
              sourceUrl
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1000)
                }
              }
            }
            pageIntroSideImage {
              altText
              sourceUrl
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 1000)
                }
              }
            }
          }
        }
      }
    }

    pageHeroWysiwyg: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Environmental {
          pageEnvironmental {
            pageHeroWithWysiwygTitle
            pageHeroWithWysiwygIntroContent
            pageHeroWithWysiwygWysiwyg
            pageHeroWithWysiwygBackgroundImage {
              altText
              sourceUrl
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 2500)
                }
              }
            }
          }
        }
      }
    }

    pageSimpleWysiwyg: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Environmental {
          pageEnvironmental {
            pageSimpleWysiwygTitle
            pageSimpleWysiwygWysiwyg
          }
        }
      }
    }

    pageHeroContained: wpPage(id: { eq: $id }) {
      template {
        ... on WpTemplate_Environmental {
          pageEnvironmental {
            pageHeroContainedImage {
              altText
              localFile {
                url
                childImageSharp {
                  gatsbyImageData(width: 2500)
                }
              }
            }
            pageHeroContainedContent
            pageHeroContainedButtonText
            pageHeroContainedSlug
          }
        }
      }
    }
  }
`

export default Environmental
