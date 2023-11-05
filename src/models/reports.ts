export type DailyReport = {
  invoiceId: string;
  roomNumber: string;
  agency: 'book' | 'self'
  clientName: string;
  numberOfGuests: number;
  arrangement: 'bb' | 'bo';
  checkInDate: string;
  checkOutDate: string;
  outstandingAmount: number;
}
