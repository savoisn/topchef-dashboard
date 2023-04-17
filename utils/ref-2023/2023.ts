import { Show, Shows } from '../ref_topchef'
import { data as data1 } from './2023-1'
import { data as data2 } from './2023-2'
import { data as data3 } from './2023-3'
import { data as data4 } from './2023-4'
import { data as data5 } from './2023-5'
import { data as data6 } from './2023-6'
import { data as data7 } from './2023-7'

export function shows(): Shows {
    return {
        year: 2023,
        shows: [
            data1,
            data2,
            data3,
            data4,
            data5,
            data6,
            data7,
        ],
    }
}


