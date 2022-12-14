"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fakerFactory = void 0;
function fakerFactory(locale) {
    switch (locale) {
        case 'az':
            return Promise.resolve().then(() => require('@faker-js/faker/locale/az'));
        case 'ar':
            return Promise.resolve().then(() => require('@faker-js/faker/locale/ar'));
        case 'cz':
            return Promise.resolve().then(() => require('@faker-js/faker/locale/cz'));
        case 'de':
            return Promise.resolve().then(() => require('@faker-js/faker/locale/de'));
        case 'de_AT':
            return Promise.resolve().then(() => require('@faker-js/faker/locale/de_AT'));
        case 'de_CH':
            return Promise.resolve().then(() => require('@faker-js/faker/locale/de_CH'));
        case 'en':
            return Promise.resolve().then(() => require('@faker-js/faker/locale/en'));
        case 'en_AU':
            return Promise.resolve().then(() => require('@faker-js/faker/locale/en_AU'));
        case 'en_AU_ocker':
            return Promise.resolve().then(() => require('@faker-js/faker/locale/en_AU_ocker'));
        case 'en_BORK':
            return Promise.resolve().then(() => require('@faker-js/faker/locale/en_BORK'));
        case 'en_CA':
            return Promise.resolve().then(() => require('@faker-js/faker/locale/en_CA'));
        case 'en_GB':
            return Promise.resolve().then(() => require('@faker-js/faker/locale/en_GB'));
        case 'en_IE':
            return Promise.resolve().then(() => require('@faker-js/faker/locale/en_IE'));
        case 'en_IND':
            return Promise.resolve().then(() => require('@faker-js/faker/locale/en_IND'));
        case 'en_US':
            return Promise.resolve().then(() => require('@faker-js/faker/locale/en_US'));
        case 'en_ZA':
            return Promise.resolve().then(() => require('@faker-js/faker/locale/en_ZA'));
        case 'es':
            return Promise.resolve().then(() => require('@faker-js/faker/locale/es'));
        case 'es_MX':
            return Promise.resolve().then(() => require('@faker-js/faker/locale/es_MX'));
        case 'fa':
            return Promise.resolve().then(() => require('@faker-js/faker/locale/fa'));
        case 'fi':
            return Promise.resolve().then(() => require('@faker-js/faker/locale/fi'));
        case 'fr':
            return Promise.resolve().then(() => require('@faker-js/faker/locale/fr'));
        case 'fr_CA':
            return Promise.resolve().then(() => require('@faker-js/faker/locale/fr_CA'));
        case 'fr_CH':
            return Promise.resolve().then(() => require('@faker-js/faker/locale/fr_CH'));
        case 'ge':
            return Promise.resolve().then(() => require('@faker-js/faker/locale/ge'));
        case 'id_ID':
            return Promise.resolve().then(() => require('@faker-js/faker/locale/id_ID'));
        case 'it':
            return Promise.resolve().then(() => require('@faker-js/faker/locale/it'));
        case 'ja':
            return Promise.resolve().then(() => require('@faker-js/faker/locale/ja'));
        case 'ko':
            return Promise.resolve().then(() => require('@faker-js/faker/locale/ko'));
        case 'nb_NO':
            return Promise.resolve().then(() => require('@faker-js/faker/locale/nb_NO'));
        case 'ne':
            return Promise.resolve().then(() => require('@faker-js/faker/locale/ne'));
        case 'nl':
            return Promise.resolve().then(() => require('@faker-js/faker/locale/nl'));
        case 'nl_BE':
            return Promise.resolve().then(() => require('@faker-js/faker/locale/nl_BE'));
        case 'pl':
            return Promise.resolve().then(() => require('@faker-js/faker/locale/pl'));
        case 'pt_BR':
            return Promise.resolve().then(() => require('@faker-js/faker/locale/pt_BR'));
        case 'pt_PT':
            return Promise.resolve().then(() => require('@faker-js/faker/locale/pt_PT'));
        case 'ro':
            return Promise.resolve().then(() => require('@faker-js/faker/locale/ro'));
        case 'ru':
            return Promise.resolve().then(() => require('@faker-js/faker/locale/ru'));
        case 'sk':
            return Promise.resolve().then(() => require('@faker-js/faker/locale/sk'));
        case 'sv':
            return Promise.resolve().then(() => require('@faker-js/faker/locale/sv'));
        case 'tr':
            return Promise.resolve().then(() => require('@faker-js/faker/locale/tr'));
        case 'uk':
            return Promise.resolve().then(() => require('@faker-js/faker/locale/uk'));
        case 'vi':
            return Promise.resolve().then(() => require('@faker-js/faker/locale/vi'));
        case 'zh_CN':
            return Promise.resolve().then(() => require('@faker-js/faker/locale/zh_CN'));
        case 'zh_TW':
            return Promise.resolve().then(() => require('@faker-js/faker/locale/zh_TW'));
        default:
            return Promise.resolve().then(() => require('@faker-js/faker/locale/en'));
    }
}
exports.fakerFactory = fakerFactory;
//# sourceMappingURL=faker-factory.js.map