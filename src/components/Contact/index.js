import React from "react"
import PropTypes from "prop-types"

import SocialMenu from "../SocialMenu"

import * as S from "./styled"

const Contact = ({ title, slogan, email, phone }) => (
  <S.ContactWrapper>
    <S.ContactHeader>
      <S.ContactTitle>{title}</S.ContactTitle>
      <S.ContactSlogan dangerouslySetInnerHTML={{ __html: slogan }} />
    </S.ContactHeader>
    <S.ContactContent>
      <S.ContactCard>
        <S.ContactCardTitle>E-mail</S.ContactCardTitle>
        <S.ContactCardLink href={`mailto:${email}`} title={email}>
          {email}
        </S.ContactCardLink>
      </S.ContactCard>
      <S.ContactCard>
        <S.ContactCardTitle>Phone</S.ContactCardTitle>
        <S.ContactCardLink
          href={`tel:${phone.replace(/[^0-9]/g, "")}`}
          title={phone}
        >
          {phone}
        </S.ContactCardLink>
      </S.ContactCard>
      <S.ContactCard>
        <SocialMenu showTitle={true} margin="0" size={26} />
      </S.ContactCard>
    </S.ContactContent>
  </S.ContactWrapper>
)

Contact.propTypes = {
  title: PropTypes.string.isRequired,
  slogan: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
}

export default Contact
