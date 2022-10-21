import {isInaccessible, render } from '@testing-library/react';
import { Illustration } from "./Illustration";
import { Illustrations } from "../../assets/illustrations";



describe('Illustration', () => {

    const {illustration, description} = Illustrations['bad-path'];

    it('should render correct image', () => {
        const { getByRole } = render(<Illustration img='bad-path' />);
        const img = getByRole('img');

        expect (img).toBeInTheDocument();
        expect(img).toHaveAttribute('src', illustration);
    });

    describe("with Subtitle", () => {

        it('should render subtitle', () => {
            const { getByText } = render(<Illustration img='bad-path' subtitle='Subtitle' />);
            expect(getByText('Subtitle')).toBeInTheDocument();
        });
    });
    
    describe("accessibility", () => {  

        it("should be have correct alt text", () => {
            const { getByRole } = render(<Illustration img='bad-path' subtitle='Subtitle' />);
            expect (getByRole('img').getAttribute('alt')).toBe(description);
        });

        describe("with Subtitle", () => {
            it("subtitle should be in the accessibility tree", () => {
                const { getByText } = render(<Illustration img='bad-path' subtitle='Subtitle' />);
                expect(isInaccessible(getByText('Subtitle'))).toBe(false);
            });
        });

    });
    
});