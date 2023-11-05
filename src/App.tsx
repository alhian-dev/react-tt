import DailyReportTable from "./components/DailyReportTable";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />

      {/* Body */}
      <div className="p-4">
        <DailyReportTable />
      </div>
    </>
  );
}

export default App;
