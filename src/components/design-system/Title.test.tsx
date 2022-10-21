import { render } from '@testing-library/react';
import {Title, TitleTag} from './Title';

const variants: TitleTag[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

variants.forEach((variant) => {
    describe('Title', () => {
        describe('with titleLinkTo self', () => {
            const title = 'Composed Title';
            const anchorHash = title.toLowerCase().replace(/ /g, '-');

            it('should return a link to itself', () => {
                const { getByRole, getByText } = render(<Title title={title} variant={variant} titleLinkTo='self' />);
                expect(getByRole('link')).toHaveAttribute('href', '#composed-title');
                expect(getByText(title)).toHaveAttribute('id', anchorHash);
            });

            it('should return the corrrect hierarchy of title (correct title tag and style variant)', () => {
                const {getByText } = render(<Title title={title} variant={variant} titleLinkTo='self' />);
                expect(getByText('#')).toHaveClass(variant);
                expect(getByText(title).tagName).toBe((variant).toUpperCase());
            });

            describe('accessibility', () => {
                it('should be accessible', () => {
                    const { getByRole, getByText } = render(<Title title={title} variant={variant} titleLinkTo='self' />);
                    expect(getByRole('link')).toHaveAttribute('aria-label', `Link to current section`);
                    expect(getByText('#')).toHaveAttribute('aria-hidden', 'true');
                });
            });
        });

        describe('with titleLinkTo a section', () => {
            const sectionId = 'section'
            const title = 'Section Title';

            it('should return a link to itself', () => {
                const { getByRole, getByText } = render(<section id={sectionId}><Title title={title} variant={variant} titleLinkTo={sectionId} /></section>);
                expect(getByRole('link')).toHaveAttribute('href', '#section');
                expect(getByText(title)).not.toHaveAttribute('id');
            });

            it('should return the corrrect hierarchy of title (correct title tag and style variant)', () => {
                const {getByText } = render(<Title title={title} variant={variant} titleLinkTo={sectionId} />);
                expect(getByText('#')).toHaveClass(variant);
                expect(getByText(title).tagName).toBe((variant).toUpperCase());
            });

            describe('accessibility', () => {
                it('should be accessible', () => {
                    const { getByRole, getByText } = render(<Title title={title} variant={variant} titleLinkTo={sectionId} />);
                    expect(getByRole('link')).toHaveAttribute('aria-label', `Link to current section`);
                    expect(getByText('#')).toHaveAttribute('aria-hidden', 'true');
                });
            });
        });

        describe('without link', () => {
            const title = 'Composed Title';
            const variant = 'h2';

            it('should return a title tag of the correct variant ', () => {
                const { getByText } = render(<Title title={title} variant={variant} />);
                expect(getByText(title).tagName).toBe((variant).toUpperCase());
            });

            it('should not return any other additional tags', () => {
                const { queryByRole } = render(<Title title={title} variant={variant} />);
                expect(queryByRole('link')).toBeNull();
                expect(queryByRole('span')).toBeNull();
            });
        });
    });
});