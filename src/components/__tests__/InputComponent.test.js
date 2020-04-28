import React from 'react';
import InputComponent from '../InputComponent';
import { shallow } from 'enzyme';
import { usePhotoActions } from '../../context';
jest.mock('../../context');

describe('InputComponent', () => {
    let fetchPhotos = jest.fn();
    beforeEach(() => {
        usePhotoActions.mockReturnValue({
            fetchPhotos
        });
        jest.spyOn(React, 'useEffect');
    });

    afterEach(() => jest.resetAllMocks());

    it('renders input component', () => {
        const wrapper = shallow(<InputComponent />);
        expect(wrapper).toMatchSnapshot()
    });

    it('renders search, input and button components', () => {
        const wrapper = shallow(<InputComponent />);
        expect(wrapper.find('.search')).toHaveLength(1);
        expect(wrapper.find('input')).toHaveLength(1);
        expect(wrapper.find('button')).toHaveLength(1);
    });

    it('fetches photos on component mount', () => {
        shallow(<InputComponent />);
        expect(React.useEffect.mock.calls[0][0]).toEqual(expect.any(Function));
        expect(React.useEffect.mock.calls[0][1]).toEqual([]);
    });

    it('fetches Photos when button is clicked', () => {
        const wrapper = shallow(<InputComponent />);
        wrapper.find('input').simulate('change', { target: { value: '3'}});
        wrapper.find('button').simulate('click');
        expect(fetchPhotos).toHaveBeenCalledWith(3);
    });
});
