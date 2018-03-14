import React from 'react';
import PropTypes from 'prop-types';

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
