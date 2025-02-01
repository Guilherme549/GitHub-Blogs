import { css } from 'styled-components'

export const mixins = {
    fonts: {
        titleL: css`
            font-family: "Nunito", serif;
            font-weight: bold;
            line-height: 130%;
            font-size: 24px;
        `,

        titleM: css`
            font-family: "Nunito", serif;
            font-weight: bold;
            line-height: 160%;
            font-size: 20px;
        `,

        titleS: css`
            font-family: "Nunito", serif;
            font-weight: bold;
            line-height: 160%;
            font-size: 18px;
        `,

        textM: css`
            font-family: "Nunito", serif;
            font-weight: 400;
            line-height: 160%;
            font-size: 16px;
        `,

        textS: css`
            font-family: "Nunito", serif;
            font-weight: 400;
            line-height: 160%;
            font-size: 14px;
        `,

        link: css`
            font-family: "Nunito", serif;
            font-weight: bold;
            line-height: 160%;
            font-size: 12px;
        `,

        code: css`
        font-family: "Fira Code", serif;
        font-weight: 500;
        line-height: 160%;
        font-size: 16px;
        `
    }
}