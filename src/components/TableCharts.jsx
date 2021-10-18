//
// import React, { useRef, useCallback } from 'react';
// import Paper from '@material-ui/core/Paper';
// import { GridExporter } from '@devexpress/dx-react-grid-export';
// import {
//     Grid,
//     VirtualTable,
//     TableHeaderRow,
//     Toolbar,
//     ExportPanel,
// } from '@devexpress/dx-react-grid-material-ui';
//
//  const orders = [{
//     id: 1,
//     product: 'Sneakers',
//     store: 'Adidas',
//     address: 'Krylatskaya street',
//     creationdate: '24.10.2021',
//     price: 1000,
//     category: 'Sportswear',
//     remains: 40,
//     weightvolume: '5kg',
// }];
//
// const columns = [
// { name: 'store', title: 'Store' },
// { name: 'product', title: 'Product name' },
// { name: 'price', title: 'Price' },
// { name: 'address', title: 'Address' },
// { name: 'category', title: 'Category' },
// { name: 'creationdate', title: 'Creation Date' },
// { name: 'price', title: 'Price' },
// { name: 'remains', title: 'Remains' },
// { name: 'weightvolume', title: 'Weight/Volume' }]
//
// const TableCharts = (props) => {
//     return (
//         <Paper>
//             <Grid
//                 rows={orders}
//                 columns={columns}
//             >
//                 <VirtualTable />
//                 <TableHeaderRow />
//                 <Toolbar />
//             </Grid>
//
//             <GridExporter
//                 rows={orders}
//                 columns={columns}
//             />
//         </Paper>
//     );
// };
//
// export default TableCharts