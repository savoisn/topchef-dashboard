import { Show, Shows } from '../ref_topchef'
import { data as data1 } from './2024-1'
import { data as data2 } from './2024-2'

export function shows(): Shows {
    return {
        year: 2024,
        shows: [
            data1,
            data2,
        ],
    }
}


