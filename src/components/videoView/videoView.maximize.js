import applyStyle from '../../modules/applyStyle';
import createInlineStyle from '../../modules/createInlineStyle';

export default () => {
    applyStyle(
        '#masthead-container',
        createInlineStyle({
            display: 'none',
        }),
    );

    applyStyle(
        '#page-manager',
        createInlineStyle({
            margin: 0,
        }),
    );

    applyStyle(
        '#container.style-scope.ytd-player',
        createInlineStyle({
            position: 'fixed',
            'background-color': 'black',
            width: '100vw',
            height: '100vh',
            'z-index': 201,
        }),
    );
};
