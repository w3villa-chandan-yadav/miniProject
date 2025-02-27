import  i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import {initReactI18next} from "react-i18next"


i18n.use(LanguageDetector).use(initReactI18next).init({
    debug:true,
    fallbackLng:"en",
    returnObjects:true,
    resources:{
        en:{
        translation:{
            home:"Home",
            Trending :"Trending",
            Popular :"Popular",
            Explore :"Explore",
            Gallery : "Gallery",
            WatchLater : "Watch Later...",
            Favorite:"Favorite",
            Similar:"Similar Movies",
            Recommended:"Recommended Movies",
            Language:"Language",
            LatestRelease:"Latest Release",
            Rating :"Rating",
            WatchNow:"Watch Now"

        }
        },
        hi:{
            translation:{
                home:"होम",
                Trending :"ट्रेंडिंग",
                Popular :"पॉपुलर",
                Explore :"एक्सप्लोर",
                Gallery : "गैलरी",
                WatchLater : "बाद में देखें ",
                Favorite:"पसंदीदा" ,  
                Similar:"समान",
                Recommended:"अनुशंसित",
                Language:"भाषा",
                LatestRelease:"नवीनतम रिलीज़",
                Rating:"रेटिंग",
                WatchNow:"अभी देखें"
                     }
        },
        fr:{
            translation:{
                home:"Accueil",
                Trending :"Tendances",
                Popular :"Populaire",
                Explore :"Explorer  ",
                Gallery : "Galerie",
                WatchLater : "Regarder plus tard",
                Favorite:"Favoris",
                Similar:"Similaire",
                Recommended:"Recommandé",
                Language : "Langue",
                LatestRelease:"Dernière sortie",
                Rating:"Évaluation",
                WatchNow:"Regarder maintenant"
            }
        },
        es:{
        translation: {
            home: "Inicio",
            Trending: "Tendencias",
            Popular: "Popular",
            Explore: "Explorar",
            Gallery: "Galería",
            WatchLater: "Ver más tarde",
            Favorite: "Favoritos",
            Similar: "Similar",
            Recommended: "Recomendado",
            Language: "Idioma",
            LatestRelease: "Último estreno",
            Rating: "Calificación",
            WatchNow: "Ver ahora"
    }
}
    }
})


