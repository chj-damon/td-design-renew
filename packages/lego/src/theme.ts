import createLinearGradient from './utils/createLinearGradient';

const theme = {
  typography: {
    h0: {
      fontSize: 48,
      lineHeight: 55,
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontFamily: 'PangMenZhengDao-3',
    },
    h1: {
      fontSize: 38,
      lineHeight: 45,
      fontWeight: 'bold',
      fontStyle: 'normal',
      fontFamily: 'Roboto',
    },
    h2: {
      fontSize: 32,
      lineHeight: 37,
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontFamily: 'PangMenZhengDao-3',
    },
    h3: {
      fontSize: 24,
      lineHeight: 27,
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontFamily: 'PangMenZhengDao-3',
    },
    h4: {
      fontSize: 20,
      lineHeight: 23,
      fontWeight: 'bold',
      fontStyle: 'normal',
      fontFamily: 'Roboto',
    },
    h5: {
      fontSize: 18,
      lineHeight: 21,
      fontWeight: 'bold',
      fontStyle: 'normal',
      fontFamily: 'Roboto',
    },
    p0: {
      fontSize: 18,
      lineHeight: 25,
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontFamily: 'Alibaba PuHuiTi',
    },
    p1: {
      fontSize: 16,
      lineHeight: 22,
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontFamily: 'Alibaba PuHuiTi',
    },
    p2: {
      fontSize: 14,
      lineHeight: 19,
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontFamily: 'Alibaba PuHuiTi',
    },
    p3: {
      fontSize: 12,
      lineHeight: 16,
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontFamily: 'Alibaba PuHuiTi',
    },
  },
  colors: {
    primary50: ['#3FA4FF', '#60F5FF'],
    primary100: ['#413ED6', '#728DED'],
    primary200: ['#46E081', '#0DFFB7'],
    primary300: ['#FEB01E', '#F2F756'],
    primary400: ['#FF3657', '#FF72A6'],
    primary500: ['#A13ED6', '#CF72ED'],
    func50: '#FF4D4D',
    gray50: '#ffffff',
    gray100: '#cccccc',
    gray200: 'rgba(255,255,255,0.15)',
    assist50: createLinearGradient(['#24689E', '#1C3D62']),
    assist100: '#CC9F08',
    assist200: '#85C5FF',
    assist300: createLinearGradient([
      'rgba(13, 255, 187, 0)',
      'rgba(70, 224, 129, 0.4)',
    ]),
    assist400: createLinearGradient([
      'rgba(63, 164, 255, 0)',
      'rgba(96, 154, 255, 0.4)',
    ]),
    assist500: '#1968FF',
    assist600: '#47FFC6',
    assist700: '#00ABFF',
    assist800: '#FDB522',
    assist900: createLinearGradient(['#FEB01E', '#ECD542'], false),
    assist1000: '#50DFFF',
    assist1100: createLinearGradient(['#3BFFBA', '#0F2623'], false),
  },
} as any;

export default theme;
export type Theme = typeof theme;
