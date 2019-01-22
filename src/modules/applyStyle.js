import $ from 'jquery';

export default (selector, inlineStyle) => $(selector).attr('style', inlineStyle);
