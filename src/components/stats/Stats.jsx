import { useEffect, useState } from "react";
import dataToTables from "../functions/stats";
import getData from "../functions/Api";
import Table from "../utilities/tables/Table";
import { useDispatch } from "react-redux";

const Stats = () => {
  // Estado para almacenar los eventos y los datos de las tablas
  const [eventos, setEventos] = useState(null);
  const [tablesData, setTablesData] = useState(null);
  const table1 = ["Categorias", "Revenue", "Percentage of attendance"];
  console.log(tablesData)
  useEffect(() => {
    // Verifica si los eventos se encuentran en el almacenamiento local
      getData("http://localhost:3000/eventos/", (response) => {
      setEventos(response);
        setTablesData(dataToTables(response));
        // Almacena los datos en el almacenamiento local para su uso posterior
        console.log(tablesData)
      });
  }, []);

  return (
    <div className="stats">
      <div className="table-content">
        <div className="table-container">
          <div className="table">
            <h2>Events Statistics</h2>
            <table>
              <thead>
                <tr>
                  <th>Events with the highest percentage of attiendance</th>
                  <th>Events with the lowest percentage of attiendance</th>
                  <th>Event with larger capacity</th>
                </tr>
              </thead>
              <tbody>
                
                {tablesData === null ? (
                  <h1>No hay datos</h1>
                ) : (
                  <tr>
                    <td>{tablesData.arrayPerc[0]?.nombre }</td>
                    <td>
                      {
                        tablesData.arrayPerc[tablesData.arrayPerc.length - 1]
                          ?.nombre
                      }
                    </td>
                    <td>{tablesData.arrayCap[0]?.nombre}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="table-container">
          {tablesData === null ? (
            <h1>No hay datos</h1>
          ) : (
            <Table
              title="Upcoming events statistics by category"
              theads={table1}
              data={tablesData.objectsUpcoming}
            />
          )}
        </div>
        <div className="table-container">
          {tablesData === null ? (
            <h1>No hay datos</h1>
          ) : (
            <Table
              title="Past events statistics by category"
              theads={table1}
              data={tablesData.objectsPast}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Stats;
