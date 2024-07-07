const getLongestInfluenceLength = require('../src/dwarfsAndGeants');

test('Exercice1:', () => {
    let input = [
        "1 2",
        "1 3",
        "3 4",
        "2 4",
        "2 5",
        "10 11",
        "10 1",
        "10 3"
    ];
    let expected = 4;
    expect(getLongestInfluenceLength(input)).toEqual(expected);


    input = [
        "1 2",
        "1 3",
        "3 4",
    ];
    expected = 3;
    expect(getLongestInfluenceLength(input)).toEqual(expected);

    input = [
        "7 2",
        "8 9",
        "1 6",
        "6 9",
        "1 7",
        "1 2",
        "3 9",
        "2 3",
        "6 3"
    ];
    expected = 5;
    expect(getLongestInfluenceLength(input)).toEqual(expected);
});
