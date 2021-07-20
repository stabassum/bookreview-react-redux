import React from 'react';

import { Icon } from 'semantic-ui-react'

const Logout = ({ logout }) => {

    return (
        <form onSubmit={logout}>
            <button></button>
        </form>
    )

}

export default connect(null, { logout })(Logout)