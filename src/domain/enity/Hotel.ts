export interface Hotel {
    _id: Object;
    hotelName: string;
    hotelAddress: string,
    hotelDetail: {
        hotelImage: string;
        hotelDescription: string;
    };
    hotelRates: number;
    hotelViews: number;
    rooms: {
        roomPrice: number;
        roomType: string;
        roomImage: string;
    }[];
}