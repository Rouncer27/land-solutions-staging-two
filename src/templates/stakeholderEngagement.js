import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PageIntro from "../components/templates/shared/PageIntro"
import PageHeroWysiwyg from "../components/templates/shared/PageHeroWysiwyg"

const StakeholderEngagement = props => {
  const pageIntro = props.data.pageIntro.template.pageStakeholderEngagement
  const pageHeroWysiwyg =
    props.data.pageHeroWysiwyg.template.pageStakeholderEngagement

  return (
    <Layout>
      <Seo />
      <PageIntro data={pageIntro} />
      <PageHeroWysiwyg data={pageHeroWysiwyg} />
    </Layout>
  )
}

export const stakeholderEngagementTempQuery = graphql`
  query stakeholderEngagementTempPage($id: String!) {
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
        ... on WpTemplate_StakeholderEngagement {
          pageStakeholderEngagement {
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
        ... on WpTemplate_StakeholderEngagement {
          pageStakeholderEngagement {
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
  }
`
export default StakeholderEngagement