import basket_icon from './basket_icon.svg'
import logo from './logo.svg'
import search_icon from './search_icon.svg'
import menu_1 from './menu_1.png'
import menu_2 from './menu_2.png'
import menu_3 from './menu_3.png'
import menu_4 from './menu_4.png'
import menu_5 from './menu_5.png'
import menu_6 from './menu_6.png'
import menu_7 from './menu_7.png'
import menu_8 from './menu_8.png'

import shoyu_1 from './shoyu_1.png'
import shoyu_2 from './shoyu_2.png'
import shoyu_3 from './shoyu_3.png'
import shoyu_4 from './shoyu_4.png'
import miso_1 from './miso_1.png'
import miso_2 from './miso_2.png'
import tsukemen from './tsukemen.png'
import tantanmen from './tantanmen.png'
import veggie_1 from './veggie_1.png'
import veggie_2 from './veggie_2.png'
import veggie_3 from './veggie_3.png'
import side_1 from './side_1.png'
import side_2 from './side_2.png'
import side_3 from './side_3.png'
import dessert_1 from './dessert_1.png'
import dessert_2 from './dessert_2.png'

import beverage_1 from './beverage_1.png'
import beverage_2 from './beverage_2.png'
import beverage_3 from './beverage_3.png'
import beverage_4 from './beverage_4.png'

import add_icon_white from './add_icon_white.svg'
import add_icon_green from './add_icon_green.svg'
import remove_icon_red from './remove_icon_red.svg'
import app_store from './app_store.png'
import play_store from './play_store.png'
import linkedin_icon from './linkedin_icon.svg'
import facebook_icon from './facebook_icon.svg'
import twitter_icon from './twitter_icon.svg'
import cross_icon from './cross_icon.svg'
import rating_starts from './rating_starts.svg'

export const assets = {
    logo,
    basket_icon,
    search_icon,
    rating_starts,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    app_store,
    play_store,
    linkedin_icon,
    facebook_icon,
    twitter_icon,
    cross_icon,
}

export const menu_list = [
    {
        menu_name: "Shoyu",
        menu_image: menu_1
    },
    {
        menu_name: "Miso",
        menu_image: menu_2
    },
    {
        menu_name: "Tsukemen",
        menu_image: menu_3
    },
    {
        menu_name: "Tantanmen",
        menu_image: menu_4
    },
    {
        menu_name: "Veggie",
        menu_image: menu_5
    },
    {
        menu_name: "accompagnants",
        menu_image: menu_6
    },
    {
        menu_name: "Desserts",
        menu_image: menu_7
    },
    {
        menu_name: "Boissons",
        menu_image: menu_8
    }]

export const food_list = [
    {
        _id: "1",
        name: "Shoyu",
        image: shoyu_1,
        price: 12,
        description: "Ce shoyu traditionnel est l'essence même des ramens japonais.",
        category: "Shoyu"
    },
    {
        _id: "2",
        name: "Usukuchi",
        image: shoyu_2,
        price: 12,
        description: "Délicat et équilibré, ce shoyu apporte une subtile touche d'umami.",
        category: "Shoyu"
    }, {
        _id: "3",
        name: "Tamari",
        image: shoyu_3,
        price: 12,
        description: "Intense et riche, il offre une expérience gustative velouté.",
        category: "Shoyu"
    }, {
        _id: "4",
        name: "Saishikomi",
        image: shoyu_4,
        price: 13,
        description: "Sauce vieilli avec soin avec des notes sucrées et complexes.",
        category: "Shoyu"
    }, {
        _id: "5",
        name: "Miso",
        image: miso_1,
        price: 14,
        description: "Bouillon à base de pates de 3 miso lui donnant une saveur riche et onctueuse.",
        category: "Miso"
    }, {
        _id: "6",
        name: "Spicy Miso",
        image: miso_2,
        price: 14,
        description: "Variante épicée du Miso ramen. Attention ça pique !",
        category: "Miso"
    }, {
        _id: "9",
        name: "Tsukemen",
        image: tsukemen,
        price: 13,
        description: "Le tsukemen est un ramen servi avec un bouillon de côté pour y tremper les nouilles.",
        category: "Tsukemen"
    },{
        _id: "13",
        name: "Tantanmen",
        image: tantanmen,
        price: 14,
        description: "Authentique ramen avec un bouillon épicé au sésame accompagné de viande de poulet.",
        category: "Tantanmen"
    }, {
        _id: "17",
        name: "Veggie Shoyu",
        image: veggie_1,
        price: 12,
        description: "Shoyu avec un bouillon de légumes et du tofu.",
        category: "Veggie"
    }, {
        _id: "18",
        name: "Veggie Miso",
        image: veggie_2,
        price: 13,
        description: "Revisite veggie du miso ramen avec bouillon de légumes et tofu.",
        category: "Veggie"
    }, {
        _id: "19",
        name: "Spicy Veggie",
        image: veggie_3,
        price: 13,
        description: "Un ramen vététarien qui a du piquant ! Tout droit sorti des portes de l'enfer.",
        category: "Veggie"
    }, {
        _id: "21",
        name: "Gyoza",
        image: side_1,
        price: 9,
        description: "Les gyozas sont de délicieux raviolis saisis puis cuits à l’étouffée.",
        category: "accompagnants"
    }, {
        _id: "22",
        name: "Edamame",
        image: side_2,
        price: 5,
        description: "Nos fèves de soja Edamame sont parfaites pour être consommer en apéro.",
        category: "accompagnants"
    }, {
        _id: "23",
        name: "Karaage",
        image: side_3,
        price: 7,
        description: "Morceaux de cuisse de poulet plongés dans une marinade de sauce soja.",
        category: "accompagnants"
    }, {
        _id: "25",
        name: "Daifuku",
        image: dessert_1,
        price: 6,
        description: "Pâte de riz enveloppé de crême d'haricots rouges.",
        category: "Desserts"
    }, {
        _id: "26",
        name: "Yokan",
        image: dessert_2,
        price: 5,
        description: "Pâte anko fruitée avec de l'agar-agar.",
        category: "Desserts"
    }, {
        _id: "29",
        name: "Kirin",
        image: beverage_1,
        price: 4,
        description: "La lager la plus emblématique du pays du soleil levant.",
        category: "Boissons"
    }, {
        _id: "30",
        name: "Asahi",
        image: beverage_2,
        price: 4,
        description: "Une bière désalterante parfaite pour accompagner un ramen.",
        category: "Boissons"
    }, {
        _id: "31",
        name: "Ramune",
        image: beverage_3,
        price: 4,
        description: "Limonade Classique et très populaire, attention à l'ouverture !",
        category: "Boissons"
    }, {
        _id: "32",
        name: "Calpis",
        image: beverage_4,
        price: 5,
        description: "Boisson à base d'eau et d'acide lactique non alcoolisée et pétillante.",
        category: "Boissons"
    }
]
