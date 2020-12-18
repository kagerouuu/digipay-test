import palette from './palette';
import "fontsource-exo-2";

export default {
    fontFamily: [
        "'Exo 2'",
        'Roboto',
        'sans-serif'
    ].join(','),
    h1: {
        color: palette.text.primary,
        fontWeight: 500,
        fontSize: '35px',
        letterSpacing: '-0.24px',
        lineHeight: 2.5
    },
    h2: {
        color: palette.text.primary,
        fontWeight: 500,
        fontSize: '29px',
        letterSpacing: '-0.24px',
        lineHeight: 2
    },
    h3: {
        color: palette.text.primary,
        fontWeight: 500,
        fontSize: '24px',
        letterSpacing: '-0.06px',
        lineHeight: 1.75
    },
    h4: {
        color: palette.text.primary,
        fontWeight: 500,
        fontSize: '20px',
        letterSpacing: '-0.06px',
        lineHeight: 1.5
    },
    h5: {
        color: palette.text.primary,
        fontWeight: 500,
        fontSize: '16px',
        letterSpacing: '-0.05px',
        lineHeight: 1.3
    },
    h6: {
        color: palette.text.primary,
        fontWeight: 500,
        fontSize: '14px',
        letterSpacing: '-0.05px',
        lineHeight: 1.3
    },
    subtitle1: {
        color: palette.text.primary,
        fontSize: '16px',
        letterSpacing: '-0.05px',
        lineHeight: 1.6
    },
    subtitle2: {
        color: palette.text.secondary,
        fontWeight: 400,
        fontSize: '14px',
        letterSpacing: '-0.05px',
        lineHeight: 1.313
    },
    body1: {
        color: palette.text.primary,
        fontSize: '14px',
        letterSpacing: '-0.05px',
        lineHeight: 1.313
    },
    body2: {
        color: palette.text.secondary,
        fontSize: '12px',
        letterSpacing: '-0.04px',
        lineHeight: 1.1
    },
    button: {
        color: palette.text.primary,
        fontSize: '14px'
    },
    caption: {
        color: palette.text.secondary,
        fontSize: '11px',
        letterSpacing: '0.33px',
        lineHeight: 0.813
    },
    overline: {
        color: palette.text.secondary,
        fontSize: '11px',
        fontWeight: 500,
        letterSpacing: '0.33px',
        lineHeight: 0.813,
        textTransform: 'uppercase'
    }
};
