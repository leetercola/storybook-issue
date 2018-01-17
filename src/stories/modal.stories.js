import React from 'react';
import { storiesOf } from '@storybook/react';
import ModalWrapper from '../modal';
import { specs, describe, it } from 'storybook-addon-specifications';
import { shallow } from 'enzyme';
import expect from 'expect';

const stories = storiesOf('Modal', module);

stories.addWithJSX('modal/opened', () => {
    const props = {
        title: "I'm a modal",
        icon: "error",
        contents:[],
        defaultOpen: true,
        footer: false,
        hasHeader: true
    };
    const wrapper = <ModalWrapper {...props} ><p>I'm modal body</p></ModalWrapper>;
    const wrapped = shallow(wrapper);
    specs(() => describe('Modal open', () => {
        it('should return open modal', () => {
            expect(wrapped).toBeTruthy();
        });
    }));

    return wrapper;
});

stories.addWithJSX('modal/closed', () => {
    const props = {
        title: "I'm a modal",
        icon: "error",
        contents:[],
        defaultOpen: false,
        footer: false,
        hasHeader: true
    };
    const wrapper = <ModalWrapper {...props} ><p>I'm modal body</p></ModalWrapper>;
    const wrapped = shallow(wrapper);
    specs(() => describe('Modal open', () => {
        it('should return open modal', () => {
            expect(wrapped).toBeTruthy();
        });
    }));

    return wrapper;
});
