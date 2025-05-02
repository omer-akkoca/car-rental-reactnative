interface ICar{
    id: string,
    model: string,
    distance: number,
    fuelCapacity: number,
    pricePerHour: number,
    image: string,
    location: {
        latitude: number,
        longitude: number,
    }
}

export default ICar;