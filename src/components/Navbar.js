import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { Link } from 'gatsby';
import {
    Dropdown,
    Icon,
    Image,
    Menu,
    Responsive,
    Segment,
    Visibility,
} from 'semantic-ui-react'


const Navbar = () => (
    <>
        <Menu.Menu>
            <Menu.Item as={Link} to='/'
                style={{
                    height: '4em'
                }}>
                <Image
                    size='mini'
                    src='/logo.png'
                    style={{
                        marginRight: '1.5em',
                        marginTop: '2em'
                    }} />
                HanhNgiox
            </Menu.Item>
        </Menu.Menu>

        <Menu.Menu position='right'>
            <Menu.Item as={Link} to='/install'>
                <Icon name='compass' />
                開始
            </Menu.Item>
            <Menu.Item as={Link} to='/schema'>
                <Icon name='th' />
                拼音方案
            </Menu.Item>
            <Menu.Item as={Link} to='/blog'>
                <Icon name='book' />
                雜談
            </Menu.Item>
            <Menu.Item as={Link} to='/about'>
                <Icon name='question circle' />
                關於
            </Menu.Item>
            <Dropdown item simple direction='left' text='界面語言'>
                <Dropdown.Menu color='blue'>
                    <Dropdown.Item>國語（普通話）繁體</Dropdown.Item>
                    <Dropdown.Item>国语（普通话）简体</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>粵語 繁體</Dropdown.Item>
                    <Dropdown.Item>粤语 简体</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Menu>
    </>
)


Navbar.propTypes = {
    mobile: PropTypes.bool,
}

export default Navbar;