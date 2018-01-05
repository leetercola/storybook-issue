import React from 'react';
import { storiesOf } from '@storybook/react';
import ModalWrapper from '../modal';
import { specs, describe, it } from 'storybook-addon-specifications';
import { mount } from 'enzyme';
import expect from 'expect';

const stories = storiesOf('Modal', module);

stories.addWithJSX('A Modal', () => {
    const props = {
        title: "I'm a modal",
        icon: "error",
        contents:[],
        isOpen: true,
        footer: false,
        hasHeader: true
    };

    return (
      <ModalWrapper {...props} ><p>I'm modal body</p></ModalWrapper>
    )
});
