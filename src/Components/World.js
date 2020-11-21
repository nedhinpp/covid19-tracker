import React, { Component } from 'react';
import axios from 'axios';
import {Navbar, Nav} from 'react-bootstrap';

class World extends Component {
    constructor() {
        super();
        this.state={
            data: []
        }
    }
componentDidMount(){
    axios.get("https://corona.lmao.ninja/v2/countries").then((response)=>{
        this.setState({data:response.data})
    });
}

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-bordered table-stripped">
                        <thead>
                            <tr>
                                <td>
                                    Country
                                </td>

                                <td>
                                    Total Cases
                                </td>

                                <td>
                                    Recovered
                                </td>

                                <td>
                                    Death
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.data.map((itm, k)=>
                                {
                                    return(
                                    <tr>
                                        <td>
                                            {itm.country}
                                        </td>
                                        <td>
                                            {itm.cases}
                                        </td>
                                        <td>
                                            {itm.recovered}
                                        </td>
                                        <td>
                                            {itm.deaths}
                                        </td>
                                    </tr>
                                    )}
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

}


export default World;