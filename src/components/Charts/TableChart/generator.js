import randomSeed from './random';

export const data = {
    product: ['Sneakers'],
    store: ['Adidas'],
    address: ['Krylatskaya street'],
    creationdate: ['24.10.2021'],
    price: [1000],
    category: ['Sportswear'],
    remains: [40],
    weightvolume: ['5kg'],

};

export function generateRows({
   columnValues = [],
   length,
   random = randomSeed(329972281),
   }) {
    const data = [];
    const columns = Object.keys(columnValues);

    for (let i = 0; i < length; i += 1) {
        const record = {};

        columns.forEach((column) => {
            let values = columnValues[column];

            const value = values[Math.floor(random() * values.length)];
            if (typeof value === 'object') {
                record[column] = { ...value };
            } else {
                record[column] = value;
            }
        });

        data.push(record);
    }

    return data;
}
