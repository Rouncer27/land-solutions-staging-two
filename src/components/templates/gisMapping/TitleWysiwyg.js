import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import {
  B1Black,
  H2White,
  fonts,
  H1White,
  colors,
  H2Blue,
  standardWrapper,
  H3LightGreen,
} from "../../../styles/helpers"

const TitleWysiwyg = ({ data }) => {
  return (
    <SectionStyled>
      <div className="wrapper">
        <div className="title">
          <h2>{data.titleBesideSimpleContentTitle}</h2>
          <Link to={`/${data.titleBesideSimpleContentUrl}`}>
            {data.titleBesideSimpleContentButtonText}
          </Link>
        </div>
        <div className="content">
          <div
            className="content__wysiwyg"
            dangerouslySetInnerHTML={{
              __html: data.titleBesideSimpleContentWysiwyg,
            }}
          />
        </div>
      </div>
    </SectionStyled>
  )
}

const SectionStyled = styled.section`
  margin: 5rem auto;

  @media (min-width: 768px) {
    margin: 7.5rem auto;
  }

  @media (min-width: 1025px) {
    margin: 10rem auto;
  }

  .wrapper {
    ${standardWrapper};
  }

  .title {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(40% - 2rem);
      margin-right: 2rem;
      text-align: right;
    }

    @media (min-width: 1025px) {
      width: calc(40% - 5rem);
      margin-right: 5rem;
    }

    h2 {
      ${H2Blue};
      margin-top: 0;
    }

    a {
      ${H3LightGreen};
      font-weight: 300;
      text-decoration: underline;

      &:hover {
        color: ${colors.colorAccent};
      }
    }
  }

  .content {
    width: 100%;

    @media (min-width: 768px) {
      width: calc(60% - 2rem);
      margin-left: 2rem;
    }

    @media (min-width: 1025px) {
      width: calc(60% - 9rem);
      margin-left: 5rem;
      margin-right: 4rem;
    }

    &__wysiwyg {
      width: 100%;
      max-width: 100rem;
      margin-top: 1rem;
      margin-right: auto;
      margin-bottom: 2.5rem;
      margin-left: auto;

      &::after {
        display: table;
        clear: both;
        content: "";
      }

      .post-edit-link {
        font-size: 1.6rem;
      }

      blockquote {
        display: block;
        width: 95%;
        margin: 1.5rem auto 2rem;
        padding: 0 2.25rem;
        border-right: 5px solid ${colors.grey};
        border-left: 5px solid ${colors.grey};
        font-size: 1.6rem;
        font-style: $italic;

        @media (min-width: 768px) {
          width: 80%;
          margin: 5em auto;
          padding: 0 3rem;
        }

        p {
          margin-bottom: 0;

          &::before,
          &::after {
            font-family: ${fonts.fontAwesome};
            color: rgba($color-secondary, 1);
          }

          &::before {
            padding-right: 0.25em;
            content: "\f10d";
          }

          &::after {
            padding-left: 0.25em;
            content: "\f10e";
          }
        }
      }

      hr {
        display: block;
        height: 0.25em;
        background-color: ${colors.colorSecondary};
      }

      ul {
        margin-bottom: 2.5rem;

        li {
          ${B1Black};
          position: relative;
          margin-bottom: 0.25em;
          padding-left: 0.75em;
          font-size: 1.6rem;

          &::before {
            font-family: ${fonts.fontAwesome};
            position: absolute;
            top: 1.2em;
            left: 0;
            padding-right: 0.75em;
            color: rgba($grey, 0.75);
            font-size: 0.75rem;
            content: "\f111";
          }
        }
      }

      ol {
        margin-bottom: 2.5rem;
        margin-left: 1.75rem;
        font-size: 1.6rem;

        li {
          ${B1Black};
          position: relative;
          margin-bottom: 0.75em;
          font-size: 1.6rem;
          margin-bottom: 0.25rem;
          list-style-position: outside;
          list-style-type: decimal;
        }
      }

      strong {
        font-weight: bold;
      }

      em {
        font-style: $italic;
      }

      h1,
      h2 {
        ${H1White};
        margin-top: 10rem;
      }

      h3 {
        ${B1Black};
        margin-bottom: 5rem;
      }

      h4 {
        ${H2White}
      }

      h5 {
        ${H2White}
      }

      h6 {
        ${H2White}
      }

      p {
        ${B1Black};

        a {
          ${B1Black};
          transition: all 0.3s;
          color: #636466;
          font-weight: bold;
          font-size: 1em;

          &:hover {
            color: ${colors.colorSecondary};
          }
        }
      }

      a {
        ${B1Black};
        transition: all 0.3s;
        color: #636466;
        font-weight: bold;
        font-size: 1em;

        &:hover {
          color: ${colors.colorPrimary};
        }
      }

      del {
        color: ${colors.colorSecondary};
      }

      /* WordPress Core */
      .alignnone {
        margin: 5px 20px 20px 0;
      }

      .aligncenter,
      div.aligncenter {
        display: block;
        margin: 2rem auto;
      }

      .alignright {
        float: right;
        margin: 5px 0 20px 20px;
      }

      .alignleft {
        float: left;
        margin: 5px 20px 20px 0;
      }

      a img.alignright {
        float: right;
        margin: 5px 0 20px 20px;
      }

      a img.alignnone {
        margin: 5px 20px 20px 0;
      }

      a img.alignleft {
        float: left;
        margin: 5px 20px 20px 0;
      }

      a img.aligncenter {
        display: block;
        margin-left: auto;
        margin-right: auto;
      }

      .wp-caption {
        background: #fff;
        border: 1px solid #f0f0f0;
        max-width: 96%; /* Image does not overflow the content area */
        padding: 5px 3px 10px;
        text-align: center;
      }

      .wp-caption.alignnone {
        margin: 5px 20px 20px 0;
      }

      .wp-caption.alignleft {
        margin: 5px 20px 20px 0;
      }

      .wp-caption.alignright {
        margin: 5px 0 20px 20px;
      }

      .wp-caption img {
        border: 0 none;
        height: auto;
        margin: 0;
        max-width: 98.5%;
        padding: 0;
        width: auto;
      }

      .wp-caption p.wp-caption-text {
        font-size: 1.1rem;
        line-height: 17px;
        margin: 0;
        padding: 0 4px 5px;
      }

      /* Text meant only for screen readers. */
      .screen-reader-text {
        clip: rect(1px, 1px, 1px, 1px);
        position: absolute !important;
        height: 1px;
        width: 1px;
        overflow: hidden;
      }

      .screen-reader-text:focus {
        background-color: #f1f1f1;
        border-radius: 3px;
        box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.6);
        clip: auto !important;
        color: #21759b;
        display: block;
        font-size: 14px;
        font-size: 0.875rem;
        font-weight: bold;
        height: auto;
        left: 5px;
        line-height: normal;
        padding: 15px 23px 14px;
        text-decoration: none;
        top: 5px;
        width: auto;
        z-index: 100000; /* Above WP toolbar. */
      }

      img {
        width: auto;
      }
    }
  }
`

export default TitleWysiwyg
