import React from 'react';
import {Link} from 'react-router-dom';
import {
	Nav,
	UncontrolledDropdown,
	DropdownToggle,
	Media,
	DropdownMenu,
	DropdownItem,
} from 'reactstrap';

const UserMenu = (props) => {
	return(
		<Nav className="align-items-center d-lg-none">
            <UncontrolledDropdown nav>
                <DropdownToggle nav>
                    <Media className="align-items-center">
                        <span className="avatar avatar-sm rounded-circle">
                            <img
                                alt="..."
                                src="/assets/img/theme/team-1-800x800.jpg"
                            />
                        </span>
                    </Media>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-arrow" right>
                    <DropdownItem
                        className="noti-title"
                        header
                        tag="div"
                    >
                        <h6 className="text-overflow m-0">Welcome!</h6>
                    </DropdownItem>
                    <DropdownItem to="/admin/user-profile" tag={Link}>
                        <i className="ni ni-single-02" />
                        <span>My profile</span>
                    </DropdownItem>
                    <DropdownItem to="/admin/user-profile" tag={Link}>
                        <i className="ni ni-settings-gear-65" />
                        <span>Settings</span>
                    </DropdownItem>
                    <DropdownItem to="/admin/user-profile" tag={Link}>
                        <i className="ni ni-calendar-grid-58" />
                        <span>Activity</span>
                    </DropdownItem>
                    <DropdownItem to="/admin/user-profile" tag={Link}>
                        <i className="ni ni-support-16" />
                        <span>Support</span>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                    >
                        <i className="ni ni-user-run" />
                        <span>Logout</span>
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        </Nav>
	)
}

export default UserMenu;