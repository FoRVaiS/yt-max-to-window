import videoViewMinimize from '../../src/components/videoView/videoView.minimize';
import applyStyle from '../../src/modules/applyStyle';

jest.mock('../../src/modules/applyStyle');

it('calls applyStyle on three elements to empty styles', () => {
    videoViewMinimize();

    expect(applyStyle.mock.calls).toEqual([
        ['#masthead-container', ''],
        ['#page-manager', ''],
        ['#container.style-scope.ytd-player', ''],
    ]);
});
