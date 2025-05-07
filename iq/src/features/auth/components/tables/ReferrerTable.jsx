import React from 'react';
import { useTable } from 'react-table';

const ReferrerTable = () => {
  // Dữ liệu mẫu
  const data = React.useMemo(
    () => [
      { name: 'John Doe', age: 28, country: 'USA' },
      { name: 'Jane Smith', age: 34, country: 'UK' },
      { name: 'Sam Johnson', age: 23, country: 'Canada' },
    ],
    []
  );

  // Các cột bảng
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name', // tên trường trong data
      },
      {
        Header: 'Age',
        accessor: 'age', // tên trường trong data
      },
      {
        Header: 'Country',
        accessor: 'country', // tên trường trong data
      },
    ],
    []
  );

  // Sử dụng useTable hook từ react-table
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
   <div className=' mt-5 container'>
   <h4 style={{     marginLeft: "323px" }}>Người giới thiệu</h4>
     <div className=" d-flex justify-content-center">
      <table className="table-small" {...getTableProps()} style={{ width: '50%', borderCollapse: 'collapse' }}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    padding: '8px',
                    border: '1px solid #ddd',

                    textAlign: 'left',
                  }}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: '8px',
                        border: '1px solid #ddd',
                        textAlign: 'left',
                      }}
                    >
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
   </div>
  );
};

export default ReferrerTable;
