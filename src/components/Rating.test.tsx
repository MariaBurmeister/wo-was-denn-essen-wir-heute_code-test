import {isInaccessible, render } from '@testing-library/react';
import { Rating } from "./Rating";



describe("Rating", () => {
  const {findByTestId} = render(<Rating name='veggies' emoji='🥦' rating='3'/>);
  let ratingComponent: HTMLElement;
  let ratingName: HTMLElement;
  let emojiRating: HTMLElement;
  let rating: HTMLElement;

  beforeAll(async() => {
    ratingComponent = await findByTestId('rating-component');
    ratingName = await findByTestId('rating-name');
    emojiRating = await findByTestId('emoji-rating');
    rating = await findByTestId('rating');
  });

  it("should render correct content", () => {
    expect(ratingComponent).toBeInTheDocument();
    expect(ratingName).toBeInTheDocument();
    expect(emojiRating).toBeInTheDocument();
    expect(rating).toBeInTheDocument();
    
    expect(ratingName).toHaveTextContent('veggies');
    expect(emojiRating).toHaveTextContent('🥦🥦🥦');
    expect(rating).toHaveTextContent('3 Sterne');
  });
  
  describe("Rating - accessibility", () => {  
    
    it("emoji rating should be visible but not in the accessibility tree", () => {
      expect(emojiRating).toBeVisible();
      expect(isInaccessible(emojiRating)).toBe(true);
    });
    
    it("text-aid should not be visible, but should be in the accessibility tree", () => {
      expect(rating).not.toBeVisible();
      expect(isInaccessible(rating)).toBe(false);
    });
  });

});
