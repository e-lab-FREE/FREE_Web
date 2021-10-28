import React from 'react'
import { Table } from 'semantic-ui-react'

// The /**/ before the function name is important.
// It serves as an annotation to export the react component to use in django.
/**/function ExperimentReactComponent(props){
    const experiment = props.experiment

    const TableHeaderRow = (headerList) => {
        return <Table.Row>
                  { headerList.map((headerItem, index) => 
                    <Table.HeaderCell key={index}>{headerItem}</Table.HeaderCell>
                  ) }
                </Table.Row>;
    }
      
    const TableRow = (dataList) => {

        if (dataList.lenght == 0) {
            return <h3><strong>Empty List</strong></h3>
        }

        const dataFieldsKeys = Object.keys(dataList[0].fields)
        // console.log(dataFieldsKeys)
        return dataList.map((dataItem, index) =>
            <Table.Row  key={index}>
                <Table.Cell >
                    <a href={'/'+ dataItem.fields.name.toLowerCase()}>{dataItem.fields.name}</a>
                </Table.Cell>
                <Table.Cell>{dataItem.fields.description}</Table.Cell>
                <Table.Cell>{dataItem.fields.scientific_area}</Table.Cell>
            </Table.Row>
        )
    }

    return (
        <>
           <h3> Experiment List </h3>
           <Table celled>
                <Table.Header>
                    { TableHeaderRow(['Name', 'Description', 'Scientific Area']) }
                </Table.Header>
                <Table.Body>
                    { TableRow(experiment) }
                </Table.Body>
                <Table.Footer>
                </Table.Footer>    
           </Table>
        </>
    )
}