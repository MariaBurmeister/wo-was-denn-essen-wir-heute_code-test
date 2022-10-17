import {isInaccessible, render } from '@testing-library/react';
import { Restaurant, RestaurantLoader } from './Restaurant';

describe('Restaurant', () => {
    
  it('should render', () => {
    const { getByLabelText } = render(<Restaurant name='Restaurant' distance='1' price='1' veggies='1' category='Category' address='Address'/>);
    expect(getByLabelText('Restaurant')).toBeInTheDocument();
  });
  
  it('should render restaurant info', () => {
    const { getByLabelText } = render(<Restaurant name='Restaurant' distance='1' price='1' veggies='1' category='Category' address='Address'/>);
    expect(getByLabelText('restaurant-info')).toBeInTheDocument();
    expect(getByLabelText('restaurant')).toHaveTextContent('Restaurant');
    expect(getByLabelText('category')).toHaveTextContent('Category');
    expect(getByLabelText('address')).toHaveTextContent('Address');
  });

  it('should render restaurant ratings', () => {
    const { getByLabelText } = render(<Restaurant name='Restaurant' distance='1' price='1' veggies='1' category='Category' address='Address'/>);
    expect(getByLabelText('ratings')).toBeInTheDocument();
    expect(getByLabelText('Entfernung')).toBeInTheDocument();
    expect(getByLabelText('Preis')).toBeInTheDocument();
    expect(getByLabelText('Veggie Tauchlich')).toBeInTheDocument();
  });
});

describe('RestaurantLoader', () => {

    it('should render', () => {
        const { getByTestId, getAllByTestId } = render(<RestaurantLoader />);
        expect(getByTestId('restaurant-loader')).toBeInTheDocument();
        expect(getByTestId('loading-restaurant')).toHaveTextContent('Loading...');
        expect(getByTestId('loading-category')).toHaveTextContent('Loading...');
        expect(getByTestId('loading-address')).toHaveTextContent('Loading...');
        
        getAllByTestId('emoji-rating').forEach((rating) => {
            expect(rating).toHaveTextContent('...');
        });

    });

    describe("RestaurantLoader - accessibility", () => {  
    
        it("should be visible but not in the accessibility tree", () => {
            const { getByTestId } = render(<RestaurantLoader />);
            expect(getByTestId('restaurant-loader')).toBeVisible();
            expect(isInaccessible(getByTestId('restaurant-loader'))).toBe(true);
        });
      });

});