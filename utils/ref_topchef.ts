import { get2023 } from './2023.js';
import { get2022 } from './2022.js';
import { get2021 } from './2021.js';
export type Year = 2023 | 2022 | 2021 | 2020;
export function ref_topchef() {

    const allRef: Object = {
        2023: get2023(),
        2022: get2022(),
        2021: get2021(),
    };
    const latestYear: number = 2023

    const getBrigadesStatusByYearAndByShow = (year: Year, show: number) => {
        return allRef[year].shows[show].data;
    };
    const getBrigadesLatestStatus = (year: Year) => {
        return allRef[year].shows[countShowsForYear(year)].data;
    };
    
    const countShowsForYear = (year: Year) => {
        return Object.keys(allRef[year].shows).length
    }
    const getLatestShowDate = (year: Year) => {
        return allRef[year].shows[countShowsForYear(year)].date;
    }

    const getChefs = (year: Year) => {
        const brigades = allRef[year].shows[2].data;
        const chefs = brigades.reduce(
          (accumulator, currentValue) => {
              return accumulator.concat(currentValue.chefs)
          },
          [] 
        );
        return chefs;
    }

    return {
        getBrigadesStatusByYearAndByShow,
        getBrigadesLatestStatus,
        countShowsForYear,
        getLatestShowDate,
        getChefs,
    };
}
