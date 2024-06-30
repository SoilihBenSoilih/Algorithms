const inequalities = require('../src/inequalities');

test('Exercice1:', () => {
    let input = [
        "A > B",
        "B > C",
        "C > A"
    ];
    let expected = "contradiction";
    expect(inequalities(input)).toEqual(expected);


    input = [
        "L > Z",
        "Z > F",
        "F > E",
        "E > K",
        "L > E"
    ];
    expected = "consistent";
    expect(inequalities(input)).toEqual(expected);

    input = [
        "L > Z",
        "Z > F",
        "B > Z",
        "F > E",
        "E > K",
        "L > E",
        "Z > K",
        "K > B",
        "B > I",
        "P > I",
        "I > X"
    ];
    expected = "contradiction";
    expect(inequalities(input)).toEqual(expected);
});
