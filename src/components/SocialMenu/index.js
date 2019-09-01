import React from "react"
import PropTypes from "prop-types"

import Icons from "./Icons"
import links from "./content"

import * as S from "./styled"

const SocialMenu = ({ size }) => (
  <S.SocialLinksWrapper>
    <S.SocialLinksList>
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
  size: PropTypes.number,
}

export default SocialMenu
