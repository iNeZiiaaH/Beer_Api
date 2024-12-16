export interface Beer {
    id_beer: number;
    name: string;
    description?: string;
    abv: number;
    brewery_id: number;
    category_id: number;
    created_at?: Date;
    updated_at?: Date;
}