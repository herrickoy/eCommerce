import {
    SET_USER_PURCHASES
} from './types';

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                amount: 8.02,
                orderNumber: 'A0048248343',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Koy Herrick',
                    shippingAddress: '1234 West State'
                }
            },
            {
                _id: 1,
                amount: 19.40,
                orderNumber: 'B0048248352',
                orderDate: new Date(),
                creditCard: '-0001',
                user: {
                    name: 'Gracie Herrick',
                    shippingAddress: '12 skiptomyloo Street'
                }
            },
            {
                _id: 2,
                amount: 12.72,
                orderNumber: 'C0048248367',
                orderDate: new Date(),
                creditCard: '-0002',
                user: {
                    name: 'Lance Fred',
                    shippingAddress: '78 n Street Road'
                }
            },
            {
                _id: 3,
                amount: 28.61,
                orderNumber: 'A0048248343',
                orderDate: new Date(),
                creditCard: '-0003',
                user: {
                    name: 'Huy Nguyen',
                    shippingAddress: '58 n Albany Way'
                }
            },
            {
                _id: 4,
                amount: 3.46,
                orderNumber: 'D0048248371',
                orderDate: new Date(),
                creditCard: '-0004',
                user: {
                    name: 'Gage Han',
                    shippingAddress: '411 w 10 n'
                }
            },
            {
                _id: 5,
                amount: 78.84,
                orderNumber: 'E0048248385',
                orderDate: new Date(),
                creditCard: '-0005',
                user: {
                    name: 'Spencer Scholle',
                    shippingAddress: '678 Easy Street'
                }
            },
            {
                _id: 6,
                amount: 25.87,
                orderNumber: 'F0048248399',
                orderDate: new Date(),
                creditCard: '-0006',
                user: {
                    name: 'Cait Brennan',
                    shippingAddress: '24 West Street'
                }
            },
            {
                _id: 7,
                amount: 11.27,
                orderNumber: 'G0048248407',
                orderDate: new Date(),
                creditCard: '-0007',
                user: {
                    name: 'Arlo Herrick',
                    shippingAddress: '234 East Street'
                }
            }
        ]
    })
}