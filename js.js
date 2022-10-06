var colors = prompt('Выберите цвет ("зеленый" "желтый", "красный"')

if (colors.toLocaleLowerCase() === 'зеленый') {
    console.log('идти!');
} else if (colors.toLocaleLowerCase() === 'желтый') {
    console.log('жди !')
} else if (colors.toLocaleLowerCase() === 'красный') {
    console.log('стой!')
} else {
    console.log('такого варианта нет !') 
}