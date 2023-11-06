import DailyReportTable from "./components/DailyReportTable";
import Header from "./components/Header";
import Accordion from "./components/Accordion";

function App() {
  return (
    <>
      <Header />

      {/* Body */}
      <div className="p-4">
        <DailyReportTable />
        <Accordion />
      </div>
    </>
  );
}

export default App;
