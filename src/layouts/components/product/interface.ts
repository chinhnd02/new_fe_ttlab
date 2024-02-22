
export interface Product {
    // id?: string;
    name?: string;
    price?: number;
    quantity?: number;
    description?: string;
    image?: File | null;
}

export type ProductGetAll = {
    items: [];
    totalItems: number;
}