import React from "react";
import styled, { css } from "styled-components";
import { ellipsis } from "polished";

const getLetterSpacing = (tracking, fontSize) => css`
  letter-spacing: calc(${tracking} / (${fontSize} * 16) * 1em);
`;

const headline1 = css`
  font-size: 6rem;
  line-height: 6rem;
  font-weight: ${({ weights }) => weights.light};
  ${getLetterSpacing(-1.5, 6)};
  text-decoration: inherit;
  text-transform: inherit;
`;

const headline2 = css`
  font-size: 3.75rem;
  line-height: 3.75rem;
  font-weight: ${({ weights }) => weights.light};
  ${getLetterSpacing(-0.5, 3.75)};
  text-decoration: inherit;
  text-transform: inherit;
`;

const headline3 = css`
  font-size: 3rem;
  line-height: 3.125rem;
  font-weight: ${({ weights }) => weights.regular};
  letter-spacing: normal;
  text-decoration: inherit;
  text-transform: inherit;
`;

const headline4 = css`
  font-size: 2.125rem;
  line-height: 2.5rem;
  font-weight: ${({ weights }) => weights.regular};
  ${getLetterSpacing(0.25, 2.125)};
  text-decoration: inherit;
  text-transform: inherit;
`;

const headline5 = css`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: ${({ weights }) => weights.regular};
  letter-spacing: normal;
  text-decoration: inherit;
  text-transform: inherit;
`;

const headline6 = css`  
  font-size: 1.25rem;
  line-height: 2rem;
  font-weight: ${({ weights }) => weights.medium};
  ${getLetterSpacing(0.25, 1.25)};
  text-decoration: inherit;
  text-transform: inherit;
`;

const subtitle1 = css`
  font-size: 1rem;
  line-height: 1.75rem;
  font-weight: ${({ weights }) => weights.regular};
  ${getLetterSpacing(0.15, 1)};
  text-decoration: inherit;
  text-transform: inherit;
`;

const subtitle2 = css`
  font-size: .875rem;
  line-height: 1.375rem;
  font-weight: ${({ weights }) => weights.medium};
  ${getLetterSpacing(0.1, 0.875)};
  text-decoration: inherit;
  text-transform: inherit;
`;

const body1 = css`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: ${({ weights }) => weights.regular};
  ${getLetterSpacing(0.5, 1)};
  text-decoration: inherit;
  text-transform: inherit;
`;

const body2 = css`
  font-size: .875rem;
  line-height: 1.25rem;
  font-weight: ${({ weights }) => weights.regular};
  ${getLetterSpacing(0.25, 0.875)};
  text-decoration: inherit;
  text-transform: inherit;
`;

const caption = css`
  font-size: .75rem;
  line-height: 1.25rem;
  font-weight: ${({ weights }) => weights.regular};
  ${getLetterSpacing(0.4, 0.75)};
  text-decoration: inherit;
  text-transform: inherit;
`;

const button = css`
  font-size: .875rem;
  line-height: 2.25rem;
  font-weight: ${({ weights }) => weights.medium};
  ${getLetterSpacing(1.25, 0.875)};
  text-decoration: none;
  text-transform: uppercase;
`;

const overline = css`
  font-size: .75rem;
  line-height: 2rem;
  font-weight: ${({ weights }) => weights.medium};
  ${getLetterSpacing(2, 0.75)};
  text-decoration: none;
  text-transform: uppercase;
`;

const mapHeadlineTag = ({ variant, headlineMapping, children, ...props }) =>
  React.createElement(`${headlineMapping[variant]}`, props, children);

const Typography = styled(mapHeadlineTag)`
  font-family: 'Roboto', sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  ${({ variant }) => variant === "headline1" && headline1};
  ${({ variant }) => variant === "headline2" && headline2};
  ${({ variant }) => variant === "headline3" && headline3};
  ${({ variant }) => variant === "headline4" && headline4};
  ${({ variant }) => variant === "headline5" && headline5};
  ${({ variant }) => variant === "headline6" && headline6};
  ${({ variant }) => variant === "subtitle1" && subtitle1};
  ${({ variant }) => variant === "subtitle2" && subtitle2};
  ${({ variant }) => variant === "body2" && body2};
  ${({ variant }) => variant === "body1" && body1};
  ${({ variant }) => variant === "button" && button};
  ${({ variant }) => variant === "caption" && caption};
  ${({ variant }) => variant === "overline" && overline};
  ${props => props.noWrap && ellipsis("250px")}
  text-align: ${props => props.align && props.align}
`;

Typography.defaultProps = {
  noWrap: false,
  align: "inherit",
  variant: "body1",
  headlineMapping: {
    headline1: "h1",
    headline2: "h2",
    headline3: "h3",
    headline4: "h4",
    headline5: "h5",
    headline6: "h6",
    subtitle2: "h6",
    subtitle1: "h6",
    body2: "p",
    body1: "p",
    button: "span",
    caption: "span",
    overline: "span"
  },
  weights: {
    thin: 100,
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
    black: 900
  }
};

export default Typography;
