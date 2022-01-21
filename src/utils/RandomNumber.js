const randomNumber = (min, max) => {
    return min + Math.floor(Math.random() * (max - min));
}

export default randomNumber;