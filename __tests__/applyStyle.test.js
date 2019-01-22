import $ from 'jquery';

import applyStyle from '../src/modules/applyStyle';

jest.mock('jquery');

it('loads jQuery with a selector', () => {
    const fakeSelector = '.fake-selector';

    applyStyle(fakeSelector);

    expect($).toHaveBeenCalledWith(fakeSelector);
});

it('sets the style attribute value', () => {
    const fakeAttr = jest.fn();

    $.mockReturnValue({
        attr: fakeAttr,
    });

    const fakeInlineStyle = 'display: block; width: 50%; height: 30px';

    applyStyle(null, fakeInlineStyle);

    expect(fakeAttr).toHaveBeenCalledWith('style', fakeInlineStyle);
});
