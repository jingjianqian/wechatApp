// @ts-nocheck
import { Component, triggerEvent } from '../_util/simply';
import { WelcomeProps } from './props';
Component({
    props: WelcomeProps,
    methods: {
        onContentTap: function (e) {
            triggerEvent(this, 'tap', e);
        },
    },
});
