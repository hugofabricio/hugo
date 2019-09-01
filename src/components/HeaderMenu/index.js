import React from "react"

import Button from "../Button"

import links from "./content"
import * as S from "./styled"

const HeaderMenu = () => (
  <S.HeaderMenuWrapper>
    <S.HeaderMenuList>
      {links.map((link, i) => (
        <S.HeaderMenuItem key={i}>
          <S.HeaderMenuLink
            to={link.url}
            activeClassName="active"
            title={link.label}
          >
            {link.label}
          </S.HeaderMenuLink>
        </S.HeaderMenuItem>
      ))}
      <S.HeaderMenuItem>
        <Button url="/contact" label="Let's Talk">
          Let's Talk
        </Button>
      </S.HeaderMenuItem>
    </S.HeaderMenuList>
  </S.HeaderMenuWrapper>
)

export default HeaderMenu
