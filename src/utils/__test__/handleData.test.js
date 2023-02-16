/* eslint-disable no-undef */
import {
    numberToDotString,
    deepMergeObj
} from '../handleData'

test('numberToDotString', () => {
    expect(
        numberToDotString(1620123456, 6, 3)
    ).toBe(
        '1620.123'
    )

    expect(
        numberToDotString(1620000000, 6, 3)
    ).toBe(
        '1620.000'
    )

    expect(
        numberToDotString(10000, 3, 3)
    ).toBe(
        '10.000'
    )

    expect(
        numberToDotString('4644', 2, 2)
    ).toBe(
        '46.44'
    )
})
