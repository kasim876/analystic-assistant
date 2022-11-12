const buildFolder = `./build`;
const srcFolder = `./src`;

export const path = {
  build: {
    markup: `${buildFolder}/`,
    styles: `${buildFolder}/styles`,
    scripts: `${buildFolder}/scripts`,
    images: `${buildFolder}/images`,
    resources: `${buildFolder}/resources`,
    sprite: `${buildFolder}/images`
  },
  src: {
    markup: `${srcFolder}/*.html`,
    styles: [`${srcFolder}/styles/style.scss`, `${srcFolder}/styles/pages/*.scss`],
    scripts: `${srcFolder}/scripts/*.js`,
    images: {
      "copy": `${srcFolder}/images/**/*`,
      "generate": `${srcFolder}/images/**/*.{jpg,jpeg,png}`
    },
    resources: `${srcFolder}/resources/**/*.*`,
    sprite: `${srcFolder}/images/svg/*`,
  },
  watch: {
    markup: `${srcFolder}/**/*.html`,
    styles: `${srcFolder}/**/*.scss`,
    scripts: `${srcFolder}/**/*.js`,
    images: `${srcFolder}/images/**/*`,
    resources: `${srcFolder}/resources/**/*`,
    sprite: `${srcFolder}/images/svg/*`
  },
  alias: {
    '@shared': './src/shared',
    '@partials': './src/partials',
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  zip: `${buildFolder}/**/*`
}