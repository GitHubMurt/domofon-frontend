import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardTitle from 'material-ui/lib/card/card-title';

const CategoryButton = React.createClass({
    render: function () {
        return (
            <Card>
                <CardTitle title={this.props.initialName} subtitle=""/>
            </Card>
        );
    }
});

export default CategoryButton