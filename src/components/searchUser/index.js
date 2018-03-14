import React from 'react';
import PropTypes from 'prop-types';

/**
 * Search user component - Dumb component
 * @param {object} param0 - has the value from the smart component
 *  by default is 'ceaia-tiberiu'
 * onChange - changes the value in input field
 * onSubmit - submits the form
 */
const SearchUser = ({ value, onChange, onSubmit }) => {
    return (
        <div className="search-user">
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    name="seachUser"
                    value={value}
                    onChange={e => onChange(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

SearchUser.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default SearchUser;
