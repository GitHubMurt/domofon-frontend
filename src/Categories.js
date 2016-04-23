import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import CategoryButton from './CategoryButton';
import {GridList, GridTile} from 'material-ui/lib/grid-list';
// import GridTile from 'material-ui/lib/grid-list';

const Categories = React.createClass({
    
    renderCategory:function (element) {
        var id = element.id;
        var name = element.name;
        var isIndividual = element.isIndividual;
        return <GridTile
          key={id}
          title={name}/>
    },
    
//   getInitialState: function () {
//     return {categoriesArray: this.props.categoriesArray};
//   },
    
  render: function () {
    var categoriesArray = this.props.categoriesArray;
    var numberOfColumns = 2;
    var xIter = 0;
    var yIter = 0;
    var categoryGridArray = [];
    // var niepotrzebne = categoriesArray.forEach(function(element) {
    //     if ( categoryGridArray[yIter] == undefined) {
    //       categoryGridArray[yIter] = [];
    //     }
    //     categoryGridArray[yIter][xIter] = renderCategory(element);
    //     xIter++;
    //     if(xIter%2 == 0){
    //         yIter++;
    //         xIter=0;
    //     }
    // }, this);
    
    var buttons = categoriesArray.map(function(element) {
        return this.renderCategory(element);
    }.bind(this));
    
    return (<GridList>{buttons}</GridList>)
    // return (
    //     <div>
    //         <CategoryButton initialName={this.getInitialCaterogie(i)} />
    //         <CategoryButton initialName={title} />
    //     </div>
    // );
  }
});

export default Categories;