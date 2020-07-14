
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Menu, MenuItem } from '@progress/kendo-react-layout';

class MenuNavContainer extends React.Component {
    render() {
        return (
            <div>
                <Menu onSelect={this.onSelect}>
                    <MenuItem text="Home" data={{ route: '/' }} />
                    <MenuItem text="Products" data={{ route: '/products' }} />
                    <MenuItem text="About" data={{ route: '/about' }}>
                        <MenuItem text="Team" data={{ route: '/about/team' }} />
                    </MenuItem>
                </Menu>
                <div style={{ padding: 10 }}>{this.props.children}</div>
            </div>
        );
    }

    onSelect = (event) => {
        this.props.history.push(event.item.data.route);
    }
}

export default withRouter(MenuNavContainer);

