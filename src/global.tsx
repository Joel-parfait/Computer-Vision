import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-poppins: Poppins;
--font-manrope: Manrope;

/* font sizes */
--font-size-xs-9: 0.744rem;
--font-size-xs-6: 0.725rem;
--font-size-smi-7: 0.794rem;
--font-size-9xl: 1.75rem;
--font-size-3xl: 1.375rem;
--font-size-17xl: 2.25rem;
--font-size-10xl: 1.813rem;
--font-size-smi-9: 0.806rem;
--font-size-xl: 1.25rem;
--font-size-base: 1rem;
--font-size-33xl: 3.25rem;
--font-size-mini: 0.938rem;
--font-size-5xs-7: 0.481rem;
--font-size-smi-3: 0.769rem;
--font-size-sm: 0.875rem;
--font-size-19xl: 2.375rem;
--font-size-mini-6: 0.913rem;
--font-size-29xl: 3rem;

/* Colors */
--color-gray-100: #fafafa;
--color-gray-200: #192242;
--color-gray-300: #050b14;
--color-gray-400: #00041a;
--color-gray-500: #00020e;
--color-gray-600: rgba(0, 0, 0, 0.1);
--color-dodgerblue-100: #1f86ff;
--color-dodgerblue-200: rgba(31, 134, 255, 0.6);
--color-cornflowerblue: #38a1ff;
--color-white: #fff;
--color-gold-100: #ffdc24;
--color-gold-200: #e6c20a;
--color-gold-300: rgba(255, 220, 36, 0.15);
--color-gold-400: rgba(230, 194, 10, 0.09);
--color-silver: #b4bbc6;
--color-tomato-100: #ea4137;
--color-tomato-200: rgba(255, 81, 81, 0.1);
--color-darkgray-100: #b2b2b2;
--color-darkgray-200: #a8adb8;
--color-black: #000;
--color-whitesmoke: #efefef;

/* Gaps */
--gap-mid: 1.062rem;
--gap-14xl: 2.062rem;
--gap-33xl: 3.25rem;
--gap-7xl: 1.625rem;
--gap-2xl-6: 1.35rem;
--gap-2xl: 1.312rem;
--gap-3xs-4: 0.587rem;
--gap-3xs-3: 0.581rem;
--gap-xl: 1.25rem;
--gap-8xl: 1.687rem;
--gap-mini-9: 0.931rem;
--gap-mini-8: 0.925rem;
--gap-3xl: 1.375rem;
--gap-3xs-7: 0.606rem;
--gap-37xl: 3.5rem;
--gap-4xs-6: 0.537rem;
--gap-5xl-8: 1.55rem;
--gap-mid-1: 1.068rem;
--gap-11xs: 0.125rem;
--gap-12xl: 1.937rem;
--gap-47xl: 4.125rem;
--gap-base: 1rem;
--gap-11xl: 1.875rem;
--gap-32xl: 3.187rem;
--gap-6xl: 1.562rem;
--gap-2xl-9: 1.368rem;
--gap-4xs-3: 0.518rem;
--gap-126xl-3: 9.081rem;
--gap-12xs-1: 0.006rem;
--gap-20xl-6: 2.475rem;
--gap-mini: 0.937rem;
--gap-5xl: 1.5rem;
--gap-8xl-6: 1.725rem;
--gap-26xl: 2.812rem;
--gap-smi-1: 0.756rem;

/* Paddings */
--padding-73xl: 5.75rem;
--padding-41xl: 3.75rem;
--padding-5xs-1: 0.443rem;
--padding-26xl: 2.812rem;
--padding-xl: 1.25rem;
--padding-7xs: 0.375rem;
--padding-6xs: 0.437rem;
--padding-4xl-6: 1.475rem;
--padding-65xl-8: 5.3rem;
--padding-36xl: 3.437rem;
--padding-12xs: 0.062rem;
--padding-smi: 0.812rem;
--padding-lgi: 1.187rem;
--padding-sm: 0.875rem;
--padding-4xs: 0.562rem;
--padding-lg: 1.125rem;
--padding-2xs: 0.687rem;
--padding-9xs-4: 0.212rem;
--padding-40xl: 3.687rem;
--padding-24xl: 2.687rem;
--padding-3xl: 1.375rem;
--padding-5xs-4: 0.462rem;
--padding-30xl: 3.062rem;
--padding-5xs-5: 0.468rem;
--padding-6xs-7: 0.418rem;
--padding-3xs: 0.625rem;
--padding-6xs-6: 0.412rem;
--padding-31xl: 3.125rem;
--padding-8xs: 0.312rem;
--padding-xs: 0.75rem;
--padding-6xl: 1.562rem;
--padding-5xl: 1.5rem;
--padding-45xl: 4rem;
--padding-127xl: 9.125rem;
--padding-8xl: 1.687rem;
--padding-43xl: 3.875rem;
--padding-23xl: 2.625rem;
--padding-76xl: 5.937rem;
--padding-122xl-7: 8.856rem;
--padding-10xs: 0.187rem;
--padding-base: 1rem;
--padding-12xl: 1.937rem;
--padding-11xl: 1.875rem;
--padding-9xl: 1.75rem;
--padding-base-1: 1.006rem;
--padding-79xl-3: 6.143rem;
--padding-mini: 0.937rem;
--padding-10xs-6: 0.162rem;
--padding-9xs: 0.25rem;
--padding-5xs: 0.5rem;
--padding-10xs-3: 0.143rem;
--padding-11xs: 0.125rem;
--padding-11xs-6: 0.1rem;
--padding-12xs-2: 0.012rem;
--padding-mid: 1.062rem;
--padding-11xs-8: 0.112rem;
--padding-12xs-1: 0.006rem;
--padding-10xs-5: 0.156rem;
--padding-11xs-5: 0.093rem;
--padding-12xs-3: 0.018rem;
--padding-37xl: 3.5rem;
--padding-base-4: 1.025rem;
--padding-14xl: 2.062rem;
--padding-21xl-2: 2.512rem;
--padding-2xl: 1.312rem;
--padding-xl-1: 1.256rem;

/* Border radiuses */
--br-9xs-7: 3.7px;
--br-sm-3: 13.3px;
--br-5xs-5: 7.5px;
--br-7xs-2: 5.2px;
--br-5xs-7: 7.7px;
--br-5xs: 8px;
--br-41xl: 60px;
--br-base-7: 16.7px;

}
`;
