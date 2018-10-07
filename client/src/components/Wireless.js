import React, {Component} from "react";
import {connect} from "react-redux";
import {getTags} from "../actions";
import { Link } from "react-router-dom";

class Wireless extends Component {
    componentDidMount() {
        this.props.getTags("wireless");
    }

    renderTagsList = () => {
        return this.props.tags.map((tag) => {
            const name = tag.name;
            const vendor = tag.vendor;
            const generalLocation = tag.generalLocation;
            const active = tag.active.toString();

            return (
                <tr key={tag._id}>
                    <td>{name}</td>
                    <td>{vendor}</td>
                    <td>
                        <Link to={`/wireless/${generalLocation}`}>
                            {generalLocation}
                        </Link>
                    </td>
                    <td>{active}</td>
                </tr>
            )
        })
    };

    render() {
        return (
            <div className="container">
                <h1>Wireless Tags</h1>

                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Vendor</th>
                            <th>generalLocation</th>
                            <th>active</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.renderTagsList() }
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        test: state.test,
        tags: state.tags
    }
}

export default connect(mapStateToProps, {getTags})(Wireless);