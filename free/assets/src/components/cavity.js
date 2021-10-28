import React, { useState } from 'react'
import { Slider } from 'react-semantic-ui-range'
import { Segment, Grid, Label, Table, Button } from 'semantic-ui-react'

// The /**/ before the function name is important.
// It serves as an annotation to export the react component to use in django.
/**/function CavityReactComponent(props){
    const [value, setValue] = useState(4)

    const handleOnChange = (value) => {
        console.log(value)
        setValue(value)
    }

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
                    <a href={'/'+ dataItem.fields.name}>{dataItem.fields.name}</a>
                </Table.Cell>
                <Table.Cell>{dataItem.fields.description}</Table.Cell>
                <Table.Cell>{dataItem.fields.scientific_area}</Table.Cell>
            </Table.Row>
        )
    }

    return (
        <>
           <h3> Cavity TODO </h3>
           <Grid >
           <Grid.Row>
           <Grid.Column width={16}>
                <Segment>
                    <h1>Read Value</h1>

                    <Slider color="grey" inverted={false}
                        settings={{
                        start: value,
                        min: 0,
                        max: 20,
                        step: 1,
                        onChange: e => handleOnChange(e)
                     }} />

                    <Label color="red">{value}</Label>
                </Segment>
            </Grid.Column>
            </Grid.Row>
            <Grid.Row>
            <Grid.Column width={16}>
                <Segment color='green' style={{ height: '80px'}}>
                    <Button floated='left' fluid  onClick={handleOnChange}>Start</Button>
                </Segment>
            </Grid.Column>
            </Grid.Row>
            </Grid>
        </>
    )
}