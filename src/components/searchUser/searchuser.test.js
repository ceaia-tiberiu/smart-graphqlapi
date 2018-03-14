import React from 'react';
import SearchUser from './index';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

const onChange = sinon.spy();
const onSubmit = sinon.spy();

describe('SearchUser component', () => {
    it('Renders the component with a given value', () => {
        const value = 'ceaia';
        const wrapper = shallow(
            <SearchUser
                value={value}
                onChange={onChange}
                onSubmit={onSubmit}
            />,
        );
        expect(wrapper.exists('<div className="search-user"></div>')).toBe(
            true,
        );
    });

    it('It should change the value', () => {
        const wrapper = shallow(
            <SearchUser
                value="ceaia-tiberiu"
                onChange={onChange}
                onSubmit={onSubmit}
            />,
        );
        wrapper.setProps({ value: 'tiberiu' });
        const input = wrapper.find('input');
        expect(input.get(0).props.value).toEqual('tiberiu');
    });
});
