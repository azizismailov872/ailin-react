import React from "react";
import { Link } from "react-router-dom";
//import {useHistory} from 'react-router-dom';
//import {useSelector,useDispatch} from 'react-redux';
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Navbar,
  Nav,
  Container,
  Media
} from "reactstrap";

const AdminNavbar = () =>  {

    //const dispatch = useDispatch();

    //const history = useHistory();

    //const email = useSelector(state => state.auth.user.email);
    
    //const id = useSelector(state => state.auth.user.id);

    /*const logout = async() => {
        let response = await dispatch(logoutUser());
        if(response){
            history.push('/admin');
        }
    } */

    return (
        <>
        <Navbar className="navbar-top navbar-dark" expand="lg" id="navbar-main">
            <Container className="justify-content-end" fluid>
                <Nav className="align-items-center d-none d-lg-flex" navbar>
                    <UncontrolledDropdown nav>
                        <DropdownToggle className="pr-0" nav>
                            <Media className="align-items-center">
                                <span className="avatar avatar-sm rounded-circle">
                                    <img
                                      alt="..."
                                      src="/assets/img/theme/team-1-800x800.jpg"
                                    />
                                </span>
                                <Media className="ml-2 d-none d-lg-block">
                                    <span className="mb-0 text-sm font-weight-bold">
                                        Email
                                    </span>
                                </Media>
                            </Media>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem className="noti-title" header tag="div">
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
                            <DropdownItem onClick={e => e.preventDefault()}>
                                <i className="ni ni-user-run" />
                                <span>Logout</span>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </Container>
      </Navbar>
    </>
  );
}

export default AdminNavbar;
