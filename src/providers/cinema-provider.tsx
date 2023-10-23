"use client"

import json from '/public/database/infos.json'

import { createContext, useContext, useState} from "react"

type CinemaContextType = {
    cinema: any,
    setCinema: any
}


const CinemaContext = createContext<CinemaContextType>({cinema: null, setCinema: null})

export const useCinema = () => {
    return useContext(CinemaContext);
}


json.aleatoire = [...json.films, ...json.series, ...json.animes];
const test = json.aleatoire.map((el, index) => el.poster);

console.log(test);

const affiches:number[] = [];

while (affiches.length < 7) {
    const number = Math.floor(Math.random() * test.length);
    let exist = false;
    if (affiches.includes(number)) {
        exist = true;
    } else {
        affiches.push(number);
    }
}

console.log(affiches);

for (let index = 0; index < affiches.length; index++) {
    console.log(test[affiches[index]])
}


export const CinemaProvider = ({
    children
}: {
    children: React.ReactNode
}) => {
    const [cinema, setCinema] = useState<any>({
        aleatoires: [
            '/films/oppenheimer.jpg',
            '/series/halo.jpg',
            '/series/westworld.jpg',
            '/series/vikings.jpg',
            '/series/the_witcher.jpg',
            '/series/peaky_blinders.jpg',
            '/series/prison_break.jpg'
        ],
        repliques_films: [
            '/films/avenger.jpg',
            '/films/barbie.jpg',
            '/films/oppenheimer.jpg',
            '/films/fast_and_furious.jpg',
            '/films/pirates_of_caribeans.jpg',
            '/films/spiderman.jpg',
            '/films/wolf_of_wall_street.jpg'
        ],
        repliques_series: [
            '/series/got.jpg',
            '/series/halo.jpg',
            '/series/westworld.jpg',
            '/series/vikings.jpg',
            '/series/the_witcher.jpg',
            '/series/peaky_blinders.jpg',
            '/series/prison_break.jpg'
        ],
        repliques_animes: [
            '/animes/bleach.jpg',
            '/animes/demon_slayer.jpg',
            '/animes/naruto.jpg',
            '/animes/dragon_ball.jpg',
            '/animes/one_piece.jpg',
            '/animes/wakfu.jpg',
            '/animes/trigun_stamped.jpg'
        ],
        musiques_films: [
            '/films/avenger.jpg',
            '/films/barbie.jpg',
            '/films/oppenheimer.jpg',
            '/films/fast_and_furious.jpg',
            '/films/pirates_of_caribeans.jpg',
            '/films/spiderman.jpg',
            '/films/wolf_of_wall_street.jpg'
        ],
        musiques_series: [
            '/series/got.jpg',
            '/series/halo.jpg',
            '/series/westworld.jpg',
            '/series/vikings.jpg',
            '/series/the_witcher.jpg',
            '/series/peaky_blinders.jpg',
            '/series/prison_break.jpg'
        ],
        musiques_animes: [
            '/animes/bleach.jpg',
            '/animes/demon_slayer.jpg',
            '/animes/naruto.jpg',
            '/animes/dragon_ball.jpg',
            '/animes/one_piece.jpg',
            '/animes/wakfu.jpg',
            '/animes/trigun_stamped.jpg'
        ],
        test: [

        ]
});

    return (
        <CinemaContext.Provider value={{ cinema, setCinema }}>
            {children}
        </CinemaContext.Provider>
    )
}