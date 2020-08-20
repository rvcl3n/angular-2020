import { ICategory } from '../models/ICategory';
import { IHotel } from '../models/IHotel';
import { hotelsList } from './list';

export const contentCategories: ICategory<IHotel>[] = [{
    categoryName: 'Hotel',
    categoryHotels: hotelsList
},
{
    categoryName: 'Fishing',
    categoryHotels: []
},
{
    categoryName: 'Tours',
    categoryHotels: []
},
{
    categoryName: 'Weather',
    categoryHotels: []
},
];