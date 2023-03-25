export default interface IContact {
    id: any,
    contactName: string,
    phone: string,
    email: string,
    fullAddress: {
        country: string,
        city: string,
        address: string,
        zip: string
    }
}