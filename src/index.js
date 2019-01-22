import $ from 'jquery';

import createToggleButton from './components/createToggleButton';

import maximizeVideo from './components/videoView/videoView.maximize';
import minimizeVideo from './components/videoView/videoView.minimize';

createToggleButton({
    parent: '.ytp-right-controls',
    onclick: ({ toggled }) => {
        if (toggled) {
            maximizeVideo();
            $('body').css('overflow-y', 'hidden');
        } else {
            minimizeVideo();
            $('body').css('overflow-y', 'auto');
        }

        window.dispatchEvent(new Event('resize'));
    },
});
