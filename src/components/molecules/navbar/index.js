import PropTypes from "prop-types"
import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import { Navbar, NavDropdown } from 'react-bootstrap'

import { LinksContainer, NavLink, Title, Brand } from './navbar.style'
import { secondaryColor } from '../../styledComponents/variables'

const linkStyle = {
  textDecoration: `none`,
  color: '#424242'
}

const Header = ({ siteTitle }) => (
  <StaticQuery
    query={graphql`
      query MyQuery {
        therapies {
          therapies {
            name
            slug
          }
        }
        events {
          events {
            name
            slug
          }
        }
      }
    `}
    render={data => (
      <Navbar bg="light" expand="lg" sticky='top'>
        <div className='container'>
          <Navbar.Brand>
            <Brand>
              <Link
                style={linkStyle}
                to='/'>
                <Title id='head-brand'>
                  {siteTitle}
                </Title>
              </Link>
            </Brand>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <LinksContainer className="mr-auto">
              <NavLink
                className='nav-link'
                to='/'
                activeStyle={{ color: secondaryColor }}
              >
                Home
              </NavLink>
              <NavDropdown 
                title="Events" 
                id="basic-nav-dropdown">
                {data.events.events.map((t, i) =>
                  <NavLink
                    key={i}
                    className='dropdown-item'
                    to={t.slug}
                    activeStyle={{ color: secondaryColor }}
                  >
                    {t.name}
                  </NavLink>)}
              </NavDropdown>
              <NavLink
                className='nav-link'
                to='/agenda'
                activeStyle={{ color: secondaryColor }}
              >
                Agenda
              </NavLink>
              <NavDropdown 
                title="Therapies" 
                id="basic-nav-dropdown">
                {data.therapies.therapies.map((t, i) =>
                  <NavLink
                    key={i}
                    className='dropdown-item'
                    to={t.slug}
                    activeStyle={{ color: secondaryColor }}
                  >
                    {t.name}
                  </NavLink>)}
              </NavDropdown>
              <NavLink
                className='nav-link'
                to='/about'
                activeStyle={{ color: secondaryColor }}
              >
                Over ons
              </NavLink>
            </LinksContainer>
          </Navbar.Collapse>
        </div>
      </Navbar>
    )}
  />
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
