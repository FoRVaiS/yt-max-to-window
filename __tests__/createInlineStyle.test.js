import createInlineStyles from '../src/modules/createInlineStyle';

it('transform an object into an inline style', () => {
    const styleObj = {
        display: 'block',
        width: '50%',
        height: '30px',
    };

    expect(createInlineStyles(styleObj)).toBe('display: block; width: 50%; height: 30px');
});
