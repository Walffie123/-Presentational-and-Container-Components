import React from 'react';

import {Card, CardText, CardBody, CardImg, CardTitle, CardSubtitle} from 'reactstrap';

function RenderCard({item}) {
    return (
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.desgination ? <CardSubtitle>{item.desgination}</CardSubtitle>: null}
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}

function Home(props) {
    return (
        <div className="container">
            <div className="row align-items-start">
                <div className ="col-12 col-md">
                    <RenderCard item = {props.dish} />
                </div>
                <div className ="col-12 col-md">
                    <RenderCard item = {props.promotion} />
                </div>
                <div className ="col-12 col-md">
                    <RenderCard item = {props.leader} />
                </div>
            </div>
        </div>
    );
}

export default Home;