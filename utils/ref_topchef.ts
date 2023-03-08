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
    const getBrigadesLatestStatus = () => {
        return allRef[latestYear].shows.slice(-1)[0].data;
    };
    
    const countShowsForYear = (year: Year) => {
        return Object.keys(allRef[year].shows).length
    }


    return {
        getBrigadesStatusByYearAndByShow,
        getBrigadesLatestStatus,
        countShowsForYear
    };
}
