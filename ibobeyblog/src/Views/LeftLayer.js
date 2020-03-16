import React, { Component } from 'react';
import "../assets/_less/leftLayer.css";
import data from "../assets/json/leftMenu.json";


export default class LeftLayer extends Component {

    render() {
        return (
          <section className="leftLayer">
            {data.map((leftMenuData) => {
              return <span>{leftMenuData.title}</span>
            })}
          </section>
        );
      }
}
