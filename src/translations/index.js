import i18next from "i18next";

import common_en from "@translations/en/common.json";
import common_es from "@translations/es/common.json";

i18next.init({
    interpolation: { escapeValue: false },
    lng: 'en',
    resources: {
        en: {
            common: common_en
        },
        es: {
            common: common_es
        },
    },
});

export default i18next;
