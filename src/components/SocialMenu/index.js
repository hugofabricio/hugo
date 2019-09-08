import React from "react"
import PropTypes from "prop-types"

import Icons from "./Icons"
import links from "./content"

import * as S from "./styled"

const SocialMenu = ({ showTitle, size, margin, fixed }) => (
  <S.SocialLinksWrapper fixed={fixed} margin={margin}>
    <S.SocialLinksTitle showTitle={showTitle}>Follow me</S.SocialLinksTitle>
    <S.SocialLinksList fixed={fixed}>
      {links.map((link, i) => {
        const Icon = Icons[link.label]

        return (
          <S.SocialLinksItem key={i}>
            <S.SocialLinksLink
              href={link.url}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <S.SocialIconWrapper size={size}>
                <Icon />
              </S.SocialIconWrapper>
            </S.SocialLinksLink>
          </S.SocialLinksItem>
        )
      })}
    </S.SocialLinksList>
  </S.SocialLinksWrapper>
)

SocialMenu.propTypes = {
  showTitle: PropTypes.bool,
  size: PropTypes.number,
  margin: PropTypes.string,
  fixed: PropTypes.bool,
}

export default SocialMenu
