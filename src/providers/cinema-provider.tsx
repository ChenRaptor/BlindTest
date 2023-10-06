"use client"

import {
    createContext,
    useContext,
    useState,
} from "react"

type CinemaContextType = {
    cinema: any,
    setCinema: any
}

const CinemaContext = createContext<CinemaContextType>({cinema: null, setCinema: null})

export const useCinema = () => {
    return useContext(CinemaContext);
}


export const CinemaProvider = ({
    children
}: {
    children: React.ReactNode
}) => {
    const [cinema, setCinema] = useState<any>({
        aleatoires: [
            '/films/oppenheimer.jpg'
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
        ]
});

    return (
        <CinemaContext.Provider value={{ cinema, setCinema }}>
            {children}
        </CinemaContext.Provider>
    )
}