import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class CategoryList extends Component {
  state = {
    categories: [
      { categortyId: 1, categoryName: 'Beverages' },
      { categortyId: 2, categoryName: 'Condiments' },
      { categortyId: 3, categoryName: 'Milkshake' }
    ],
    currentCategory:""
  };

  changeCategory = ()=>{}

  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <ListGroup>
          {this.state.categories.map(category => (
            <ListGroupItem onClick={()=>this.setState({currentCategory:category.categoryName})} key={category.categortyId}>
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
          <h4>{this.state.currentCategory}</h4>
      </div>
    );
  }
}
