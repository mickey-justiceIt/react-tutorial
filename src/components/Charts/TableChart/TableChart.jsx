import React, { useState } from 'react';
import   './TableChart.scss'
import {Grid, Table, TableHeaderRow} from '@devexpress/dx-react-grid-material-ui';
import Paper from '@material-ui/core/Paper';
import {generateRows, data} from './generator';
import {IconButton} from "material-ui";
import {Button} from "@material-ui/core";
const getRowId = row => row.id;

const TableChart =  () => {
    // const EditButton = ({ onExecute }) => (
    //     <IconButton onClick={onExecute} title="Edit row">
    //         <EditIcon />
    //     </IconButton>
    // );
    //
    // const DeleteButton = ({ onExecute }) => (
    //     <IconButton
    //         onClick={() => {
    //             // eslint-disable-next-line
    //             if (window.confirm('Are you sure you want to delete this row?')) {
    //                 onExecute();
    //             }
    //         }}
    //         title="Delete row"
    //     >
    //         <DeleteIcon />
    //     </IconButton>
    // );

    const [columns] = useState([
        { name: 'store', title: 'Store' },
        { name: 'product', title: 'Product name' },
        { name: 'price', title: 'Price' },
        { name: 'address', title: 'Address' },
        { name: 'category', title: 'Category' },
        { name: 'creationdate', title: 'Creation Date' },
        { name: 'price', title: 'Price' },
        { name: 'remains', title: 'Remains' },
        { name: 'weightvolume', title: 'Weight/Volume' },
        { name: 'actions', title: 'Actions' },
    ]);
    const [rows, setRows] = useState(generateRows({
        columnValues: { id: ({ index }) => index, ...data },
        length: 12,
    }));
    return (
        <Paper>
            <Grid
                rows={rows}
                columns={columns}
                getRowId={getRowId}
            >
                <Table columnExtensions={columns}/>
                <TableHeaderRow  />
            </Grid>
        </Paper>
    );
};

export default TableChart
