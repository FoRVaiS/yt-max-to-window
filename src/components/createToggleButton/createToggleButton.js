import $ from 'jquery';

import createInlineStyle from '../../modules/createInlineStyle';

export default ({ onclick: clickHandler, parent }) => {
    const state = {
        toggled: false,
    };

    const toggleButton = document.createElement('button');
    $(toggleButton).addClass(['ytp-button'].join(' '));
    $(toggleButton).attr('aria-pressed', 'false');
    $(toggleButton).attr(
        'style',
        createInlineStyle({
            bottom: '14px',
        }),
    );
    $(toggleButton).text('YTM');
    $(toggleButton).click(() => {
        // Toggle state
        state.toggled = !state.toggled;

        clickHandler(state);
    });

    $(parent).prepend(toggleButton);

    return toggleButton;
};
