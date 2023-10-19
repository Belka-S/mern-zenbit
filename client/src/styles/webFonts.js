import WebFont from 'webfontloader';

const families = ['Merriweather:400,500,600,700', 'Lato:400,500,600,700'];

export const loadWebFonts = () => WebFont.load({ google: { families } });
