import AreaTableAction from "./AreaTableAction";
import "./AreaTable.scss";

const TABLE_HEADS = [
  "Name",
  "Class",
  "Status",
];

const TABLE_DATA = [
  {
    name: "Ashfaque",
    class: "maxtric (X)",
    status: "good",
    id:"1"
  },
  {
    name: "Ashfaque",
    class: "maxtric (X)",
    status: "good",
    id:"1"
  },
  {
    name: "Ashfaque",
    class: "maxtric (X)",
    status: "good",
    id:"2"
  },
  {
    name: "Ashfaque",
    class: "maxtric (X)",
    status: "good",
    id:"3"
  },
  {
    name: "Ashfaque",
    class: "maxtric (X)",
    status: "good",
    id:"4"
  },
];

const AreaTable = () => {
  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <h4 className="data-table-title">Your Children Addmitted in College </h4>
      </div>
      <div className="data-table-diagram">
        <table>
          <thead>
            <tr>
              {TABLE_HEADS?.map((th, index) => (
                <th key={index}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_DATA?.map((dataItem) => {
              return (
                <tr key={dataItem.name}>
                  <td>{dataItem.name}</td>
                  <td>{dataItem.class}</td>
                  <td>
                    <div className="dt-status">
                      <span
                        className={`dt-status-dot dot-${dataItem.status}`}
                      ></span>
                      <span className="dt-status-text m-auto">{dataItem.status}</span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AreaTable;
