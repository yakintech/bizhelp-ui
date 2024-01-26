import React from 'react'
import { DataGrid, GridColDef, trTR } from '@mui/x-data-grid'


interface GridProps extends React.ComponentProps<typeof DataGrid> {
    //Add additional prop definitions here
    gridTitle: string
    gridHeight?: 400 | 600 | 800 | 1000

}

const BYZGrid = (props: GridProps) => {

    const { gridTitle, gridHeight = 400 } = props

    return (<>
        <div style={{ height: gridHeight, width: '100%' }}>
            <h1>{gridTitle}</h1>
            <DataGrid
                {...props}
                localeText={trTR.components.MuiDataGrid.defaultProps.localeText}
            />
        </div>

    </>

    )
}

export default BYZGrid


