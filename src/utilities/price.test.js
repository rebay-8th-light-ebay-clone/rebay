import { pennyToDollarConverter, dollarToPennyConverter } from './price';

describe('Price Formatting', () => {
    it('formats price from pennies to dollar value', () => {
        expect(pennyToDollarConverter(1)).toEqual("0.01");
        expect(pennyToDollarConverter(2)).toEqual("0.02");
        expect(pennyToDollarConverter(10)).toEqual("0.10");
        expect(pennyToDollarConverter(100)).toEqual("1.00");
        expect(pennyToDollarConverter(200)).toEqual("2.00");
        expect(pennyToDollarConverter(999)).toEqual("9.99");
        expect(pennyToDollarConverter(1000)).toEqual("10.00");
        expect(pennyToDollarConverter(10000)).toEqual("100.00");
        expect(pennyToDollarConverter(100000)).toEqual("1000.00");
    })

    it('convert dollars to pennies', () => {
        expect(dollarToPennyConverter(0.01)).toEqual(1);
        expect(dollarToPennyConverter(0.10)).toEqual(10);
        expect(dollarToPennyConverter(1)).toEqual(100);
        expect(dollarToPennyConverter(2)).toEqual(200);
        expect(dollarToPennyConverter(10)).toEqual(1000);
        expect(dollarToPennyConverter(500)).toEqual(50000);
    })
})

