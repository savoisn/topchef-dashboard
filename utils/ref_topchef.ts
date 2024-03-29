import { shows as shows2024 } from './ref-2024/2024.js';
import { shows as shows2023 } from './ref-2023/2023.js';
import { get2022 as shows2022 } from './ref-2022/2022.js';
import { get2021 as shows2021 } from './ref-2021/2021.js';
export type Year = 2024 | 2023 | 2022 | 2021 | 2020;
export type Brigades = Brigade[];
export type Brigade = {
    name: String,
    leader: String,
    border: String,
    background: String,
    chefs: Chef[],
}

export type Chef = {
    name: String,
    img: String,
    dishes: Dishes[],
}

export type Dishes = {
    name: String,
    img: String,
    chef?: Chef[],
    show?: number,
    year?: number,
    heart: boolean
}

export type Show = {
    id: number,
    date: String,
    data: Brigades
}
export type Shows = {
    year: number,
    shows: Show[],
}

export type Ref = Shows[]

export function ref_topchef(): Object {

    const allRef: Ref = [
        shows2024(),
        shows2023(),
        shows2022(),
        shows2021(),
    ];

    const getBrigadesStatusByYearAndByShow = (year: number, showid: number): Brigades => {
        return allRef
            .find((shows: Shows) => { return shows.year == year })
            .shows
            .find((show: Show) => { return show.id == showid })
            .data;

    };
    const getBrigadesLatestStatus = (year: Year) => {
        return allRef
            .find((shows: Shows) => { return shows.year == year })
            .shows
            .find((show: Show) => { return show.id == countShowsForYear(year) })
            .data;
    };

    const countShowsForYear = (year: Year) => {
        return Object.keys(allRef
            .find((shows: Shows) => { return shows.year == year })
            .shows).length
    }
    const getLatestShowDate = (year: Year) => {
        return allRef
            .find((shows: Shows) => { return shows.year == year })
            .shows
            .find((show: Show) => { return show.id == countShowsForYear(year) })
            .date;
    }

    const getChefs = (year: Year) => {
        const brigades = allRef
            .find((shows: Shows) => { return shows.year == year })
            .shows
            .find((show: Show) => { return show.id == 2 })
            .data;

        const chefs = brigades.reduce(
            (accumulator, currentValue) => {
                return accumulator.concat(currentValue.chefs)
            },
            []
        );
        return chefs;
    }

    const getDishesByCandidats = (year: Year) => {
        const shows =
            allRef
                .find((shows: Shows) => { return shows.year == year })
                .shows

        const chefs: Chef[] = shows.reduce((shows_acc: Chef[], show: Show) => {

            const chef_for_show = show.data.reduce(
                (accumulator, brigade) => {
                    return accumulator.concat(brigade.chefs)
                },
                []
            );
            return shows_acc.concat(chef_for_show)

        }, [])


        const ret_dishes = chefs.reduce((acc_Dishes: Dishes[], chef: Chef) => {
            const dishes_for_chef = chef.dishes.map(dish => {
                const ret_dish = { ...dish, chef: [{ name: chef.name, img: chef.img }] }
                return ret_dish
            });

            if (!dishes_for_chef) {
                console.log(chef)
                return acc_Dishes
            }

            return acc_Dishes.concat(dishes_for_chef)
        }, [] as Dishes[])

        const ret_dishes_grouped = ret_dishes.reduce((acc_Dishes: Dishes[], dish: Dishes) => {
            const ret_dish = { ...dish }

            const found_dish = acc_Dishes.find((d: Dishes) => {
                return d.name === dish.name
            })

            if (found_dish) {
                found_dish.chef = found_dish.chef?.concat(dish.chef)
                return acc_Dishes
            }

            return [...acc_Dishes, ret_dish]
        }, [] as Dishes[])

        return ret_dishes_grouped;
    }

    return {
        getBrigadesStatusByYearAndByShow,
        getBrigadesLatestStatus,
        countShowsForYear,
        getLatestShowDate,
        getChefs,
        getDishesByCandidats,
    };
}
