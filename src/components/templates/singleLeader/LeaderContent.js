import React from "react"
import styled from "styled-components"
import {
  B1Black,
  B2LightGreen,
  Btn1One,
  colors,
  H2Green,
  medWrapper,
} from "../../../styles/helpers"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import arrowLeft from "../../../images/arrow-left.png"
import arrowRight from "../../../images/arrow-right.png"

const LeaderContent = ({ data, next, prev }) => {
  const imageDisplay = getImage(
    data.postLeadershipTeam.image.localFile.childImageSharp.gatsbyImageData
  )
  const imageAlt = data.postLeadershipTeam.image.altText
  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="bio-image">
          <div>
            <GatsbyImage
              image={imageDisplay}
              alt={imageAlt}
              layout="fullWidth"
              formats={["auto", "webp", "avif"]}
            />
          </div>
          <div className="bio-image__link">
            <Link to="/about/leadership-team/">Return to team</Link>
          </div>
        </div>
        <div className="bio-content">
          <h1>
            {data.postLeadershipTeam.firstName}{" "}
            {data.postLeadershipTeam.lastName}
            <span> &#8211; </span>
            {data.postLeadershipTeam.jobTitle}
          </h1>
          <div
            dangerouslySetInnerHTML={{
              __html: data.postLeadershipTeam.bioContent,
            }}
          />
          <div className="bio-content__nav">
            {next && (
              <div>
                <span>
                  <img src={arrowLeft} alt="" />
                </span>
                <Link to={`/about/leadership-team/${next}`}>
                  Prev Team Member
                </Link>
              </div>
            )}

            {prev && (
              <div>
                <Link to={`/about/leadership-team/${prev}`}>
                  Next Team Member
                </Link>
                <span>
                  <img src={arrowRight} alt="" />
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  .wrapper {
    ${medWrapper};
  }

  .bio-image {
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(25%);
    }

    @media (min-width: 1025px) {
      width: calc(25% - 4rem);
      margin-right: 4rem;
    }

    &__link {
      width: 100%;
      margin-bottom: 2.5rem;
      margin-top: 2.5rem;

      @media (min-width: 768px) {
        margin-bottom: 0;
      }

      a {
        ${Btn1One};
      }
    }
  }

  .bio-content {
    width: calc(100%);

    @media (min-width: 768px) {
      width: calc(75%);
    }

    @media (min-width: 1025px) {
      width: calc(75%);
    }

    h1 {
      ${H2Green};
      margin-top: 0;
    }

    p {
      ${B1Black};
    }

    &__nav {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;
      margin-top: 5rem;
      margin-bottom: 5rem;

      div {
        width: 100%;

        @media (min-width: 768px) {
          width: 50%;
        }

        &:first-of-type {
          margin-bottom: 2.5rem;
          text-align: center;

          @media (min-width: 768px) {
            margin-bottom: 0;
            text-align: left;
          }

          span {
            margin-left: 0 !important;
          }
        }

        &:last-of-type {
          text-align: center;

          @media (min-width: 768px) {
            text-align: right;
          }
        }
      }

      span {
        display: inline-block;
        width: 5rem;
        margin: 0 2rem;

        img {
          width: 100%;
        }
      }

      a {
        ${B2LightGreen};
        text-transform: uppercase;

        &:hover {
          color: ${colors.colorPrimary};
        }
      }
    }
  }
`

export default LeaderContent
