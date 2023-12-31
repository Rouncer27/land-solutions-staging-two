import { css } from "styled-components"
import { B2Blue, colors } from "../../styles/helpers"

export const ListStyles = css`
  ${B2Blue};
  cursor: pointer;

  @media (min-width: 768px) {
    margin: 0 0.5rem;
  }

  @media (min-width: 1025px) {
    margin: 0 2rem;
  }

  a {
    ${B2Blue};
    padding: 1rem;
    box-shadow: 0 2px 0 0 transparent;
    transition: all 0.3s ease-out;

    &:hover {
      color: ${colors.colorPrimary};
      box-shadow: 0 4px 0 0 ${colors.colorPrimary};
    }

    &[aria-current="page"] {
      color: ${colors.colorAccent};
      box-shadow: 0 4px 0 0 ${colors.colorAccent};
    }
  }

  .item-span-wrap {
    display: inline-block;
    position: relative;
    padding-right: 1rem;
  }

  .sub-indicator {
    position: absolute;
    top: 1.1rem;
    right: 0;
    display: inline-block;
    margin-left: 0.5rem;
    transform: rotate(-90deg);
    font-size: 2rem;
    font-weight: bold;
    line-height: 0;
  }

  .sub-menu {
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    position: absolute;
    top: 150%;
    left: 7rem;
    right: 0;
    padding: 3rem;
    background-color: ${colors.white};
    cursor: initial;
    z-index: 100;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-out;
    border: 1px solid green;

    &__title {
      width: 25%;

      &--icon {
        display: inline-block;
        margin-right: 1.5rem;
        width: 3rem;

        img {
          width: 100%;
        }
      }

      p {
        ${B2Blue};
        display: flex;
        align-items: center;
        margin: 0;
        font-weight: bold;
        text-transform: uppercase;

        a {
          ${B2Blue};
          display: flex;
          align-items: center;
          margin: 0;
          padding: 0;
          font-weight: bold;
          text-transform: uppercase;
        }
      }
    }

    &__wrap {
      width: 25%;
      padding: 0 3rem;
      border-left: 0.1rem solid ${colors.colorAccent};

      ul {
        width: 100%;
        height: 100%;
        padding: 0;
        margin-bottom: 1.5rem;
        flex-direction: column;
        justify-content: flex-start;

        .sub-menu__item {
          a {
            display: flex;

            .sub-menu__item--icon {
              display: inline-block;
              width: calc(20% - 1rem) !important;
              margin-right: 1rem;
            }
            .sub-menu__title--text {
              display: inline-block;
              width: 80% !important;
            }
          }
        }

        li {
          width: 100%;
          padding: 0;
          margin-bottom: 2rem;

          a {
            display: block;
            padding: 0;
            text-transform: uppercase;
          }
        }
      }
    }

    &__active {
      opacity: 1;
      visibility: visible;
      z-index: 9999999999;
    }
  }
`
