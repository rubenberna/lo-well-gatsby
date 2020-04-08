import PropTypes from "prop-types"
import React from "react"
import { Navbar, NavDropdown } from 'react-bootstrap'

import { LinksContainer, NavLink, Title, Brand } from './navbar.style'
import { secondaryColor } from '../../styledComponents/variables'

const onzeDienstLinks = [
  { key: 0, title: 'Aanbod', path: '/onze-dienst/aanbod' },
  { key: 1, title: 'Werking', path: '/onze-dienst/werking' },
]

const linkStyle = {
  textDecoration: `none`
}

const Header = ({ siteTitle }) => (
  <Navbar bg="light" expand="lg" sticky='top'>
    <div className='container'>
      <Navbar.Brand>
        <Brand>
          <NavLink
            style={linkStyle}
            to='/'>
            <Title id='head-brand'>
              {siteTitle}
            </Title>
          </NavLink>
        </Brand>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <LinksContainer className="mr-auto">
          <NavLink
            className='nav-link'
            to='/agenda'
            activeStyle={{ color: secondaryColor }}
          >
            Agenda
          </NavLink>
          <NavLink
            className='nav-link'
            to='/calendar'
            activeStyle={{ color: secondaryColor }}
          >
            Calendar
          </NavLink>
          <NavDropdown title="Therapies" id="basic-nav-dropdown">
            {onzeDienstLinks.map(l =>
              <NavLink
                key={l.key}
                className='dropdown-item'
                to={l.path}
                activeStyle={{ color: secondaryColor }}
              >
                {l.title}
              </NavLink>)}
          </NavDropdown>
          <NavLink
            className='nav-link'
            to='/contact'
            activeStyle={{ color: secondaryColor }}
          >
            Contact
          </NavLink>
        </LinksContainer>
      </Navbar.Collapse>
    </div>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
