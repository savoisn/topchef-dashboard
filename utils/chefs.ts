export type Chefs = {
    chefs : Chef[]
}

export type Chef = {
    id: string,
    name : string,
    season : number,
    picture : string,
    brigade: Brigade,
}

export type Dishes = {
    dishes : Dish[]
}

export type Dish = {
    id: string,
    name: string,
    chef_id: string,
    picture: string,
}

export type Brigade = {
    name: string,
    leader: string,
    borderColor: string,
    backgroundColor: string,
}

export type Season = {
    id: number,
    date: Date,
}

