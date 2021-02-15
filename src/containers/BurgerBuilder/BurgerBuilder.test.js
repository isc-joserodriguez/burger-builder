import React from 'react';
import { configure, shallow } from 'enzyme';
import configureMockStore from "redux-mock-store";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import BurgerBuilder from './BurgerBuilder';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

configure({ adapter: new Adapter() });
const mockStore = configureMockStore();
const store = mockStore({
    burgerBuilder: {
        ingredients: {
            salad: 0
        },
        totalPrice: 0,
        error: ''
    },
    auth: {
        token: true
    }
});


describe('<BurgerBuilder />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<BurgerBuilder store={store} onInitIngredients={() => { }} />);
    });

    it('Should render <BuildControls /> when receving ingredients', () => {
        wrapper.setProps({ ings: { salad: 0 } });
        expect(wrapper.find(BuildControls)).toHaveLength(0);
    });
});


