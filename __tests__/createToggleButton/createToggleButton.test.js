import $ from 'jquery';
import createInlineStyle from '../../src/modules/createInlineStyle';

import createToggleButton from '../../src/components/createToggleButton';

jest.mock('jquery');
jest.mock('../../src/modules/createInlineStyle');

beforeEach(() => {
    jest.clearAllMocks();
});

it('applies classes', () => {
    const mockAddClass = jest.fn();

    $.mockReturnValue({
        addClass: mockAddClass,
        attr: () => {},
        text: () => {},
        click: () => {},
        prepend: () => {},
    });

    createToggleButton({});

    expect(mockAddClass).toHaveBeenCalled();
});

it('gets prepended to a parent', () => {
    const fakePrepend = jest.fn();
    $.mockReturnValue({
        addClass: () => {},
        attr: () => {},
        text: () => {},
        click: () => {},
        prepend: fakePrepend,
    });

    createToggleButton({});

    expect(fakePrepend).toHaveBeenCalled();
});

it('applies a 14px offset from the bottom', () => {
    const fakeAttr = jest.fn();

    $.mockReturnValue({
        addClass: () => {},
        attr: fakeAttr,
        text: () => {},
        click: () => {},
        prepend: () => {},
    });

    createToggleButton({});

    expect(fakeAttr.mock.calls[1][0]).toBe('style');
    expect(createInlineStyle).toBeCalledWith({ bottom: '14px' });
});
