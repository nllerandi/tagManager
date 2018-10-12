import React, {Component} from "react";
import {connect} from "react-redux";
import {getTags} from "../actions";
// import { Link } from "react-router-dom";
import "./WirelessTagList.css";

import TagDetail from "./TagDetail";

class WirelessTagList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTag: {}
        };
    }

    componentDidMount() {
        this.props.getTags("Wireless");
    }

    renderTagsList = () => {
        return this.props.tags.map((tag) => {
            const name = tag.name;
            const vendor = tag.vendor;
            const generalLocation = tag.generalLocation.toString();
            const purpose = tag.purpose;

            let className = "";
            if (tag.active === true) {
                className = "tag_row_active";
            } else if (tag.active === false) {
                className = "tag_row_inactive";
            }

            return (
                <tr className={className}
                    key={tag._id}
                    onClick={() => {
                        console.log(tag);
                        this.setState({selectedTag: tag});
                    }}>
                    <td>{name}</td>
                    <td>{vendor}</td>
                    <td>{generalLocation}</td>
                    <td>{purpose}</td>
                </tr>
            )
        })
    };

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8">
                        <h1>Wireless Tags</h1>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Vendor</th>
                                    <th>Location</th>
                                    <th>Purpose</th>
                                </tr>
                            </thead>
                            <tbody>
                                { this.renderTagsList() }
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-4">
                        <TagDetail selectedTag={this.state.selectedTag}/>
                    </div>
                </div>
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

export default connect(mapStateToProps, {getTags})(WirelessTagList);