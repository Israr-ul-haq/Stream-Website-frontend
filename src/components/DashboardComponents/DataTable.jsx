import DataTable from "react-data-table-component";

function Datatable({
  incomingData,
  columns,
  totalRows,
  handlePerRowsChange,
  handlePageChange,
  loading,
}) {
  return (
    <>
      <DataTable
        title=""
        columns={columns}
        data={incomingData}
        pagination
        // paginationServer
        // paginationTotalRows={totalRows}
        // onChangeRowsPerPage={handlePerRowsChange}
        // onChangePage={handlePageChange}
        progressPending={loading}
        theme="dark"
      />
    </>
  );
}

export default Datatable;
