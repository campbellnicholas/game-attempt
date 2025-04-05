const greenHill = {
    name: 'Green Hill',
    obstacles: {
        tree: [
                '5/8', '4/8', '3/8', '2/8', '1/8', 
                '5/7', '4/7', '3/7', '2/7', '1/7', 
                '5/6', '4/6', '3/6', '2/6', '1/6', 
                '5/5', '4/5', '3/5', '2/5', '1/5', 
                '5/4', '4/4', '3/4', '2/4', '1/4'
            ],
        rock: ['12/12'],
    },
    flourishes: {
        crabgrass: ['12/11', '12/13', '11/12', '13/12'],
        sweet: ['6/9'],
    },
    background: '#009900',
    season: 'spring',
    passages: [
        {
            position: '15/3',
            type: 'hole',
            to: 'underHill',
            alert: '🕳️ You fell in a hole!',
            alertType: 'warning'
        }
    ]
}

const underHill = {
    name: 'Under Hill', 
    background: '#9b7653',
    passages: [
        {
            position: '3/13',
            type: 'stairs',
            to: 'greenHill',
            alert: '🪜 You found some stairs!',
            alertType: 'success'
        }
    ]
}

export const Maps = {
    greenHill,
    underHill
}