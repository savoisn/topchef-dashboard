import { Show, Shows } from '../ref_topchef'
import { data as data1 } from './2023-1'
import { data as data2 } from './2023-2'

export function shows() :Shows {
    return {
        year: 2023,
        shows: [
            data1,
            data2,
        ],
    }
}


