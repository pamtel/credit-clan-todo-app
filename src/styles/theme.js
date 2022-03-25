import theme from 'styled-theming';

import bgDesktopDark from '../assets/images/bg-desktop-dark.jpg' // 1440x300
import bgMobileDark from '../assets/images/bg-mobile-dark.jpg' // 375x200
import bgDesktopLight from '../assets/images/bg-desktop-light.jpg'
import bgMobileLight from '../assets/images/bg-mobile-light.jpg'

// const colors = {
//     dark: {
//         // colors
//         veryDarkBlue: "hsl(235, 21%, 11%)",
//         veryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
//         lightGrayishBlue: "hsl(234, 39%, 85%)",
//         lightGrayishBlueHover: "hsl(236, 33%, 92%)",
//         darkGrayishBlue: "hsl(234, 11%, 52%)",
//         veryDarkGrayishBlue: "hsl(233, 14%, 35%)",
//         veryDarkGrayishBlueHover: "hsl(237, 14%, 26%)"
//     },
//
//     light: {
//         // colors
//         veryLightGray: "hsl(0, 0%, 98%)",
//         veryLightGrayishBlue: "hsl(236, 33%, 92%)",
//         lightGrayishBlue: "hsl(233, 11%, 84%)",
//         darkGrayishBlue: "hsl(236, 9%, 61%)",
//         veryDarkGrayishBlue: "hsl(235, 19%, 35%)"
//     }
// }


export const bgImageDesktop = theme('mode', {
    light: bgDesktopLight,
    dark: bgDesktopDark
});

export const bgImageMobile = theme('mode', {
    light: bgMobileLight,
    dark: bgMobileDark
});

export const backgroundColor = theme('mode', {
    light: "hsl(0, 0%, 98%)", // veryLightGray
    dark: "hsl(235, 21%, 11%)" // veryDarkBlue
});

export const bgColorComponents = theme('mode', {
    light: "hsl(0, 0%, 98%)",
    dark: "hsl(235, 24%, 19%)"
});

export const textColor = theme('mode', {
    light: "hsl(235, 19%, 35%)",
    dark: "hsl(234, 39%, 85%)"
});

export const placeholderColor = theme('mode', {
    light: "hsl(233, 14%, 35%)",
    dark: "hsl(234, 11%, 52%)"
});

export const auxiliarColor = theme('mode', {
    light: "hsl(233, 11%, 84%)",
    dark: "hsl(233, 14%, 35%)"
});

export const inactiveColor = theme('mode', {
    light: "hsl(236, 9%, 61%)",
    dark: "hsl(234, 11%, 52%)"
});

export const hoverEffect = theme('mode', {
    light: "hsl(235, 19%, 35%)",
    dark: "hsl(236, 33%, 92%)"
})