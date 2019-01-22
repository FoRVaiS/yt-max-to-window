import videoViewMaximize from '../../src/components/videoView/videoView.maximize';
import applyStyle from '../../src/modules/applyStyle';

jest.mock('../../src/modules/applyStyle');

it('calls applyStyle on three elements', () => {
    videoViewMaximize();

    expect(applyStyle.mock.calls.map(args => args[0])).toEqual([
        '#masthead-container',
        '#page-manager',
        '#container.style-scope.ytd-player',
    ]);
});
