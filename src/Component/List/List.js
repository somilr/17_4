import React from 'react';
import { Card,  CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

function List({data}) {

    return (
        data.map((d , i) => {
            return(
                <div key={i} className='col-3 mt-5'>
                <Card>
                <CardBody>
                  <CardTitle>{d.name}</CardTitle>
                  <CardSubtitle>{d.price}</CardSubtitle>
                  <CardText>{d.expiry}</CardText>
                  <Button>order</Button>
                </CardBody>
              </Card>
              </div>
            )
        })
    );
}

export default List;