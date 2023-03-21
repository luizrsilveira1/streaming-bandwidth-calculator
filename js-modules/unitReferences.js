const unitReferences = {
    system: {
        binary: {
            base: 2,
            exponentInterval: 10,
            magnitudeMultiplier: {
                unit: 0,
                kibi: 1,
                mebi: 2,
                gibi: 3,
                tebi: 4,
                pebi: 5,
                exbi: 6,
                zebi: 7,
                yobi: 8,
                auto: 'Ainda não implementado'
            }
        },
        decimal: {
            base: 10,
            exponentInterval: 3,
            magnitudeMultiplier: {
                unit: 0,
                kilo: 1,
                mega: 2,
                giga: 3,
                tera: 4,
                peta: 5,
                exa: 6,
                zetta: 7,
                yotta: 8,
                ronna: 9,
                quetta: 10,
                auto: 'Ainda não implementado'
            }
        },
    },
    types: {
        bit: 1,
        byte: 8
    }
}

export {unitReferences}