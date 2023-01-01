import React, { useEffect, useState } from "react";
import Datatable from "../../../components/DashboardComponents/DataTable";
import {
  deleteSomething,
  get,
} from "../../../services/DashbaordServices/UserService";
import { columns } from "../../../TableData/UsersData";

function Users() {
  const [loader, setLoader] = useState(false);

  //UseEffect
  useEffect(() => {
    getData();
  }, [loader]); //eslint-disable-line

  const [data, setData] = useState();

  const getData = async () => {
    const response = await get();

    if (response.status === 200) {
      setData(response.data);
    }
  };

  return (
    <>
      <div id="content-page" className="content-page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="iq-card">
                <div className="iq-card-header d-flex justify-content-between">
                  <div className="iq-header-title">
                    <h4 className="card-title">User Lists</h4>
                  </div>
                </div>
                <div className="iq-card-body">
                  <div className="table-view">
                    <Datatable
                      columns={columns(data, deleteSomething, setLoader)}
                      incomingData={data}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Users;
