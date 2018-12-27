import React from 'react';
import { connect } from 'react-redux';
import { selectLaps } from './reducers/lapsGw';
import { fetchLaps } from './actions/lapsGw';
import ListView from './ListView';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { service: 'A' };
    }

    handleChange = (e) => {
        this.setState({ service: e.target.value });
    }

    onClickHandler = (e) => {
        this.props.fetchLaps(this.state.service); // Dispatch action
    }

    render() {

        const lapsList = this.props.getLaps(this.state.service);

        return (
            <React.Fragment>

                <div className="jumbotron text-center" style={{ marginBottom: 0, backgroundColor: 'transparent' }}>
                    <h2>Using ViewModels with React-Redux</h2>
                    <p>Fetch racing car laps from various sources.</p>
                </div>

                <div className="container-fluid">

                    <div className="row" style={{ margin: '0px 25px 0px 25px' }}>

                        <div className="col-md-12" style={{ backgroundColor: '#7975b2', padding: '10px 20px 0px 20px' }}>
                            <label>Select Laps Source:</label>
                            <select className="form-control" value={this.state.service} onChange={this.handleChange}>
                                <option value='A'>Service A</option>
                                <option value='B'>Service B</option>
                                <option value='C'>Service C</option>
                            </select>
                            <button type="button" 
                                className="btn btn-light"
                                onClick={this.onClickHandler}
                                style={{ margin: '5px 0px 10px 0px' }}
                                title='Click to fetch dummy remote data'>Fetch</button>
                        </div>

                    </div>

                    <div className="row" style={{ backgroundColor: 'transparent', margin: '5px' }}>
                        <div className="col-md-12">
                            <ListView laps={lapsList} />
                        </div>
                    </div>

                </div>

            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    getLaps: (service) => selectLaps(state, service),
});

const mapDispatchToProps = dispatch => ({
    fetchLaps: (service) => dispatch(fetchLaps(service)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
