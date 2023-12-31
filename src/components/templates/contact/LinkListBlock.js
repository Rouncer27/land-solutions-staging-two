import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  B1OffBlack,
  H3Blue,
  H2White,
  B1White,
  Btn1Three,
  standardWrapper,
  Btn1One,
  colors,
} from "../../../styles/helpers"

const LinkListBlock = ({ data }) => {
  const imageDisplay = getImage(
    data.pageListBesideBlockImage.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.pageListBesideBlockImage.altText
  return (
    <StyledSection>
      <div className="wrapper">
        <div className="links">
          <h2>{data.pageListBesideBlockTitle}</h2>

          <ul>
            {data.pageListBesideBlockLinkList.map((link, index) => {
              return (
                <li key={index}>
                  <a href={`mailto:${link.slug}?subject=${link.text}`}>
                    {link.text} <span>&#8594;</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="block">
          <div className="icon">
            <GatsbyImage
              image={imageDisplay}
              alt={imageAlt}
              layout="fullWidth"
              formats={["auto", "webp", "avif"]}
            />
          </div>
          <div className="content">
            <div className="content__inner">
              <h2>{data.pageListBesideBlockBlockTitle}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.pageListBesideBlockBlockContent,
                }}
              />
              <div className="content__link">
                <Link to={`/${data.pageListBesideBlockBlockButtonSlug}`}>
                  {data.pageListBesideBlockBlockButtonText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.section`
  .wrapper {
    ${standardWrapper};
  }

  .links {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(50% - 2rem);
      margin: 2rem 1rem;
    }

    h2 {
      ${H3Blue};
    }

    ul {
      width: 100%;

      li {
        ${B1OffBlack};
        margin-bottom: 1rem;

        @media (min-width: 768px) {
          margin-bottom: 0;
        }

        a {
          ${B1OffBlack};

          span {
            color: #336a6a;
            font-weight: bold;
          }

          &:hover {
            color: ${colors.colorAccent};

            span {
              color: ${colors.colorAccent};
            }
          }
        }
      }
    }
  }

  .block {
    position: relative;
    width: 100%;
    margin: 2rem auto;

    @media (min-width: 768px) {
      width: calc(50% - 1rem);
      margin: 2rem 0.5rem;
    }

    .icon {
      @media (min-width: 768px) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        .gatsby-image-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: calc(100%);
          height: 100%;

          img {
            width: 100% !important;
          }
        }
      }
    }

    .content {
      @media (min-width: 768px) {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        position: absolute;
        top: 0;
        right: 0;
        width: 75%;
        height: 100%;
        padding-left: 20%;
        background: linear-gradient(
          255deg,
          rgba(31, 82, 127, 1) 81%,
          rgba(0, 0, 0, 0) 81%
        );
      }

      &__inner {
        padding-top: 3rem;
        padding-right: 2rem;
      }

      &__link {
        position: absolute;
        bottom: 2rem;
        right: 4rem;

        a {
          ${Btn1One};
          text-transform: uppercase;

          @media (min-width: 768px) {
            ${Btn1Three};
          }
        }
      }

      h2 {
        ${H2White};
        font-weight: 300;
      }

      p {
        ${B1White};
      }
    }
  }
`

export default LinkListBlock
