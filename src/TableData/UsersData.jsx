import { Link } from "react-router-dom";
import DeleteItem from "../components/DashboardComponents/DeleteItem";

export const columns = (data, service, setLoader) => {
  return [
    {
      name: "Sr#",
      cell: (row, index) => {
        if (index < 9) {
          return "0" + (index + 1);
        } else {
          return index + 1;
        }
      },
      sortable: true,
      width: "150px",
      maxWidth: "150px",
    },

    {
      name: "Full Name",
      cell: (row) => row?.first_name + " " + row?.last_name,
      sortable: true,
    },

    {
      name: "Email",
      cell: (row) => row["email"],
      sortable: true,
    },
    {
      name: "Phone Number",
      cell: (row) => row["phoneNumber"],
      sortable: true,
    },
    {
      name: "Actions",
      button: true,
      cell: (row) => (
        <>
          <div>
            <div className="data_table_icons">
              <Link to={`edit/${row._id}`}>
                <img src="../../images/dashboard/icons/edit.svg" alt="" />
              </Link>
              <div
                onClick={() =>
                  DeleteItem(
                    row._id,
                    data,
                    service,
                    row?.first_name + " " + row?.last_name,
                    setLoader,
                    "Users"
                  )
                }
              >
                <img src="../../images/dashboard/icons/Delete.svg" alt="" />
              </div>
            </div>
          </div>
        </>
      ),
    },
  ];
};
