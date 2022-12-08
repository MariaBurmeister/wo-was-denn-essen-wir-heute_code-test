import { render } from '@testing-library/react';
import { Restaurants } from "./Restaurants";
import {RestaurantResult} from '../hooks';


const mockResultLoading: RestaurantResult = {
    status: 'LOADING',
    restaurants: []
}
const mockResultError: RestaurantResult = {
    status: 'ERROR',
    restaurants: []
}
const mockResultEmpty: RestaurantResult = {
    status: 'READY',
    restaurants: []
}
const mockResultSuccess: RestaurantResult = {
    status: 'READY',
    restaurants: [
        {
            name: 'Test Restaurant 1',
            distance: '1',
            price: '2',
            veggies: '1',
            category: 'Alles',
            address: 'Test Address 1'
        },
        {
            name: 'Test Restaurant 2',
            distance: '1',
            price: '2',
            veggies: '2',
            category: 'Burger',
            address: 'Test Address 2'
        },
        {
            name: 'Test Restaurant 3',
            distance: '1',
            price: '2',
            veggies: '3',
            category: 'Pizza / Pasta',
            address: 'Test Address 3'
        }
    ]
}

describe("Restaurants", () => {
    let results: HTMLElement;
    
    describe("when loading", () => {
        let loaders: HTMLElement[];
        beforeAll(async() => {
            const {findByLabelText, findAllByTestId} = render(<Restaurants results={mockResultLoading}/>);
            results = await findByLabelText('restaurants');
            loaders = await findAllByTestId('restaurant-loader');
        });
        
        it("should show the loading state", async() => {
            expect(results).toBeInTheDocument();
            expect(loaders).toHaveLength(3);
        });
    });

    describe("when error", () => {
        let error: HTMLElement;
        beforeAll(async() => {
            const {findByLabelText, findByText} = render(<Restaurants results={mockResultError}/>);
            results = await findByLabelText('restaurants');
            error = await findByText('Something went wrong! Please try refreshing page.');
        });
        
        it("should show the error state", async() => {
            expect(results).toBeInTheDocument();
            expect(error).toBeInTheDocument();
        });
    });
    
    describe("when empty", () => {
        let empty: HTMLElement;
        beforeAll(async() => {
            const {findByLabelText, findByText} = render(<Restaurants results={mockResultEmpty}/>);
            results = await findByLabelText('restaurants');
            empty = await findByText('No results seem to match the filtered criteria at the moment.');
        });
        
        it("should show the empty state", async() => {
            expect(results).toBeInTheDocument();
            expect(empty).toBeInTheDocument();
        });
    });

    describe("when success", () => {
        let restaurants: HTMLElement[];
        beforeAll(async() => {
            const {findByLabelText, findAllByLabelText} = render(<Restaurants results={mockResultSuccess}/>);
            results = await findByLabelText('restaurants');
            restaurants = await findAllByLabelText('restaurant');
        });
        
        it("should show a list of restaurant results", async() => {
            expect(results).toBeInTheDocument();
            expect(restaurants).toHaveLength(3);
        });
    });
    
});
