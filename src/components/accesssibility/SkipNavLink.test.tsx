import { isInaccessible, render } from '@testing-library/react';

import { SkipNavLink } from "./SkipNavLink";


describe('SkipNavLink', () => {
    let link: HTMLElement;

    beforeEach(async () => {
        const { getByRole } = await render(<SkipNavLink/>);
        link = await getByRole('link', { name: 'skip-navigation-link' });        
    });

    it('should render', () => {
        expect(link).toBeInTheDocument();
    });
    
    describe("accessibility", () => {  

        describe("when focused", () => { 
            beforeEach(() => {
                link.focus();
            });   
            
            it("should be visible and should be in the accessibility tree", async() => {
                expect(link).toHaveFocus();
                expect(link).toHaveClass('sr-only');
                expect(isInaccessible(link)).toBe(false);
            });
        });

        describe("when not focused", () => {
            beforeEach(() => {
                link.blur();
            });

            it("should not be visible, but should be in the accessibility tree", async() => {
                expect(link).not.toHaveFocus();
                expect(link).toHaveClass('sr-only');
                expect(isInaccessible(link)).toBe(false);
            });
        });
      });

});