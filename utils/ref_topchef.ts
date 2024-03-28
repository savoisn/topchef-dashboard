import { shows as shows2024 } from './ref-2024/2024.js';
import { shows as shows2023 } from './ref-2023/2023.js';
import { get2022 as shows2022 } from './ref-2022/2022.js';
import { get2021 as shows2021 } from './ref-2021/2021.js';
import { warn } from 'nuxt/dist/app/compat/capi.js';
import { Dish } from './chefs.js';
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
    id: String,
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

    const getChef = (year: number, chef_id: string): Chef | undefined => {
        const raw_chefs = allRef
            ?.find((shows: Shows) => { return shows.year == year })
            ?.shows
            ?.reduce(
                (accumulator, currentValue) => {
                    const chefs = currentValue.data.reduce((chefs, brigade) => {
                        return chefs.concat(brigade.chefs)
                    }, [] as Chef[])

                    return accumulator.concat(chefs)
                }, [] as Chef[])
        console.log("raw_chef", raw_chefs)


        const found_chefs = raw_chefs?.filter((chef: Chef) => {
            return chef.id == chef_id;
        })

        const found_chef = found_chefs?.reduce((acc, chef)=>{
            console.log(acc)
            if(acc.dishes){
               acc.dishes = acc.dishes.concat(chef.dishes)
               return acc
            }
            return chef
        }, {} as Chef)

        return found_chef;
    }

    const getBrigadesStatusByYearAndByShow = (year: number, showid: number): Brigades | undefined => {
        return allRef
            ?.find((shows: Shows) => { return shows.year == year })
            ?.shows
            ?.find((show: Show) => { return show.id == showid })
            ?.data;

    };
    const getBrigadesLatestStatus = (year: Year): Brigades | undefined => {
        return allRef.find((shows: Shows) => { return shows.year == year })
            ?.shows
            ?.find((show: Show) => { return show.id == countShowsForYear(year) })
            ?.data;
    };

    const countShowsForYear = (year: Year): Number => {
        return Object.keys(allRef
            ?.find((shows: Shows) => { return shows.year == year })
            ?.shows as Show[]).length
    }
    const getLatestShowDate = (year: Year): String | undefined => {
        return allRef
            ?.find((shows: Shows) => { return shows.year == year })
            ?.shows
            ?.find((show: Show) => { return show.id == countShowsForYear(year) })
            ?.date;
    }

    const getChefs = (year: Year): Chef[] | undefined => {
        const brigades: Brigades | undefined = allRef
            ?.find((shows: Shows) => { return shows.year == year })
            ?.shows
            ?.find((show: Show) => { return show.id == 2 })
            ?.data;

        const chefs = brigades?.reduce(
            (accumulator, currentValue) => {
                return accumulator.concat(currentValue.chefs)
            },
            [] as Chef[]
        );
        return chefs;
    }

    const getDishesByCandidats = (year: Year) => {
        const shows =
            allRef
                ?.find((shows: Shows) => { return shows.year == year })
                ?.shows

        const chefs: Chef[] | undefined = shows?.reduce((shows_acc: Chef[], show: Show) => {

            const chef_for_show = show.data.reduce(
                (accumulator, brigade) => {
                    return accumulator.concat(brigade.chefs)
                },
                [] as Chef[]
            );
            return shows_acc.concat(chef_for_show)

        }, [])


        const ret_dishes = chefs?.reduce((acc_Dishes: Dishes[], chef: Chef) => {
            const dishes_for_chef = chef.dishes.map(dish => {
                const ret_dish = { ...dish, chef: [{ name: chef.name, img: chef.img }] } as Dishes
                return ret_dish
            });

            if (!dishes_for_chef) {
                console.log(chef)
                return acc_Dishes
            }

            return acc_Dishes.concat(dishes_for_chef)
        }, [] as Dishes[])

        const ret_dishes_grouped: Dishes[] | undefined = ret_dishes?.reduce((acc_Dishes: Dishes[], dish: Dishes) => {
            const ret_dish = { ...dish } as Dishes

            const found_dish: Dishes | undefined = acc_Dishes.find((d: Dishes) => {
                return d.name === dish.name
            })

            if (found_dish) {
                found_dish.chef = found_dish.chef?.concat(dish.chef as Chef[])
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
        getChef,
        getDishesByCandidats,
    };
}
