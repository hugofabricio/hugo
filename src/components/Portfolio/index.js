import React from "react"
import PropTypes from "prop-types"

import links from "./content"
import * as S from "./styled"

const Portfolio = ({ title, slogan }) => (
  <S.PortfolioWrapper>
    <S.PortfolioHeader>
      <S.PortfolioTitle>{title}</S.PortfolioTitle>
      <S.PortfolioSlogan>{slogan}</S.PortfolioSlogan>
    </S.PortfolioHeader>
    <S.PortfolioContent>
      <S.PortfolioList>
        {links.map((link, i) => {
          return (
            <S.PortfolioListItem key={i}>
              <S.PortfolioListLink
                href={link.url}
                title={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </S.PortfolioListLink>
            </S.PortfolioListItem>
          )
        })}
      </S.PortfolioList>
    </S.PortfolioContent>
  </S.PortfolioWrapper>
)

Portfolio.propTypes = {
  title: PropTypes.string.isRequired,
  slogan: PropTypes.string.isRequired,
}

export default Portfolio
