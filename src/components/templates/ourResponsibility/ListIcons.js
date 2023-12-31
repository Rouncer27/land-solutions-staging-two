import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { B1Black, colors, medWrapper } from "../../../styles/helpers"
import { Link } from "gatsby"

const ListIcons = ({ data }) => {
  return (
    <StyledSection>
      <div className="wrapper">
        {data.listWithIcons.map((item, index) => {
          const imageDisplay = getImage(
            item.icon.localFile.childImageSharp.gatsbyImageData
          )
          const imageAlt = item.icon.altText
          return (
            <ItemDiv key={index}>
              <div className="icon">
                <GatsbyImage
                  image={imageDisplay}
                  alt={imageAlt}
                  layout="fullWidth"
                  formats={["auto", "webp", "avif"]}
                />
              </div>
              <div className="content">
                <h2>{item.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: item.content }} />
                {item.linkRequired && (
                  <div className="content__link">
                    <Link to={`/${item.linkSlug}`}>{item.linkText}</Link>
                  </div>
                )}
              </div>
            </ItemDiv>
          )
        })}
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  padding: 2.5rem 0;

  .wrapper {
    ${medWrapper};
  }
`

const ItemDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin-bottom: 5rem;

  .icon {
    width: 100%;
    max-width: 10rem;
    margin-right: auto;
    margin-left: 0;
    padding-bottom: 3rem;

    @media (min-width: 768px) {
      width: 20%;
      max-width: 100%;
      padding: 2rem 4rem;
    }

    @media (min-width: 1025px) {
      width: 12.5%;
    }
  }

  .content {
    width: 100%;

    @media (min-width: 768px) {
      width: 80%;
    }

    @media (min-width: 1025px) {
      width: 87.5%;
    }

    h2 {
      ${B1Black};
      margin: 0;
      font-weight: bold;
    }

    p {
      ${B1Black};
    }

    &__link {
      width: 100%;

      a {
        ${B1Black};
        color: ${colors.colorPrimary};
        text-decoration: underline;

        &:hover {
          color: ${colors.colorAccent};
        }
      }
    }
  }
`

export default ListIcons
