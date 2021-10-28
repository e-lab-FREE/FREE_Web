import React, { useEffect, useState } from 'react'
import { Slider } from 'react-semantic-ui-range'
import { Segment, Grid, Label, Table, Button } from 'semantic-ui-react'
import ButtonFunction from './button'


// The /**/ before the function name is important.
// It serves as an annotation to export the react component to use in django.
/**/function PendulumReactComponent(props) {
    const [value, setValue] = useState([10, 10])
    const parameters = props.config.protocols[0].exp_paremeters

    useEffect(() => {
        // console.log(props.config)
        console.log(parameters)
    }, [props])

    const handleOnChange = (newvalue, index) => {
        console.log(newvalue, index)
        let newValue = [...value]
        newValue[index] = newvalue
        setValue(newValue)
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
            <Table.Row key={index}>
                <Table.Cell >
                    <a href={'/'+ dataItem.fields.name}>{dataItem.fields.name}</a>
                </Table.Cell>
                <Table.Cell>{dataItem.fields.description}</Table.Cell>
                <Table.Cell>{dataItem.fields.scientific_area}</Table.Cell>
            </Table.Row>
        )
    }

    const SliderInput = (parameterList) => {

        return parameterList.map((parameterItem, index) =>
            <Grid.Row key={index}>
                <Grid.Column width={16}>
                    <Segment>
                        <h1>{parameterItem.nome}</h1>

                        <Slider color="grey" inverted={false}
                            settings={{
                            start: value[index],
                            min: parseInt(parameterItem.min_val, 10),
                            max: parseInt(parameterItem.max_val, 10),
                            step: parseInt(parameterItem.step, 10),
                            onChange: e => handleOnChange(e, index)
                        }} />

                        <Label color="red">{value[index]}</Label>
                    </Segment>
                </Grid.Column>
            </Grid.Row>
        )
    }

    return (
        <> 
           <h3> Pendulum TODO </h3>
           <Grid >
                { SliderInput(parameters) }
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Segment color='green' style={{ height: '80px'}}>
                            <Button floated='left' fluid  onClick={handleOnChange}>Start</Button>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column width={16}>
                        <Segment color='green' style={{ height: '160px'}}>
                            <ButtonFunction />
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </>
    )
}