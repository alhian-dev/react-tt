import { useMemo } from "react";
import { DailyReport } from "../models";

function DailyReportTable() {
  // 1st section

  const reports: DailyReport[] = [
    {
      invoiceId: "1917233",
      roomNumber: "101",
      agency: "book",
      clientName: "alhian med",
      numberOfGuests: 1,
      arrangement: "bb",
      checkInDate: "2023-11-01",
      checkOutDate: "2023-11-02",
      outstandingAmount: -10,
    },
    {
      invoiceId: "1917234",
      roomNumber: "102",
      agency: "book",
      clientName: "mohamed bouali",
      numberOfGuests: 1,
      arrangement: "bo",
      checkInDate: "2023-10-31",
      checkOutDate: "2023-11-02",
      outstandingAmount: -20,
    },
    {
      invoiceId: "1917235",
      roomNumber: "103",
      agency: "book",
      clientName: "abdi salam",
      numberOfGuests: 2,
      arrangement: "bo",
      checkInDate: "2023-11-01",
      checkOutDate: "2023-11-02",
      outstandingAmount: -30,
    },
    {
      invoiceId: "1917236",
      roomNumber: "104",
      agency: "book",
      clientName: "mahmoud paki",
      numberOfGuests: 3,
      arrangement: "bb",
      checkInDate: "2023-11-01",
      checkOutDate: "2023-11-02",
      outstandingAmount: -40,
    },
  ];

  const totalNumberOfGuests = useMemo(() => {
    let total = 0;

    for (let i = 0; i < reports.length; i++) {
      total += reports[i].numberOfGuests;
    }

    return total;
  }, [reports]);

  const outstandingAmountTotal = useMemo(() => {
    let total = 0;

    for (let i = 0; i < reports.length; i++) {
      total += reports[i].outstandingAmount;
    }

    return total;
  }, [reports]);

  // 2nd section

  // 3rd section
  return (
    <div className="w-full">
      {/* Create a heading for the table */}
      <div className="text-center">
        <p>LISTE DES FACTURES BACK</p>
        <p>CLIENTS RESIDENTS</p>
      </div>
      <div className="flex flex-row justify-between p-2">
        <p>Etat du : 01/11/23</p>
        <p>Page : 1</p>
      </div>

      {/* Table of contents */}
      <div className="w-full overflow-x-auto">
        <table className="table table-zebra table-xs">
          <thead>
            <tr className="text-base text-black">
              <th>Invoice ID</th>
              <th>Room No</th>
              <th>Agency</th>
              <th>Client Name</th>
              <th>No Guest</th>
              <th>Arrangment</th>
              <th>Check-in</th>
              <th>Check-out</th>
              <th>Outstanding Amount</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((dailyReport: DailyReport) => (
              <tr key={dailyReport.invoiceId} className="text-lg p-2">
                <td className="p-2">{dailyReport.invoiceId}</td>
                <td className="p-2">{dailyReport.roomNumber}</td>
                <td className="p-2 uppercase">{dailyReport.agency}</td>
                <td className="p-2 uppercase">{dailyReport.clientName}</td>
                <td className="p-2">{dailyReport.numberOfGuests}</td>
                <td className="p-2 uppercase">{dailyReport.arrangement}</td>
                <td className="p-2">{dailyReport.checkInDate}</td>
                <td className="p-2">{dailyReport.checkOutDate}</td>
                <td className="p-2">{dailyReport.outstandingAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Create the footer of the table with the sum of the values etc... */}
      <div className="flex flex-row justify-between p-2">
        <span>TOTAL AGENCY</span>
        <span>//</span>
        <span>ROOMS</span>
        <span>|</span>
        <span>{reports.length}</span>
        <span>//</span>
        <span>Pax</span>
        <span>|</span>
        <span>{totalNumberOfGuests}</span>
        <span>OUTSTANDING AMOUNT</span>
        <span>|</span>
        <span>{outstandingAmountTotal}</span>
      </div>
      
      
export default DailyReportTable;
