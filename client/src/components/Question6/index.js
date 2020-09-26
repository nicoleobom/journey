import React from 'react';
import './index.css';
import swal from 'sweetalert';

export default class Question6 extends React.Component {
    back = (event) => {
        event.preventDefault();
        this.props.prevStep();
    }

    nextQuestion = (event) => {

        if (this.props.values.startDate) {
            if (!this.props.values.endDate) {
                swal("Please enter an end date");
                return;
            }
        }

        if (this.props.values.endDate) {
            if (!this.props.values.startDate) {
                swal("Please enter a start date");
                return;
            }
        }

        if (!this.props.values.startDate && !this.props.values.endDate) {
            swal("Please select dates.");
            return;
        }


        event.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values } = this.props;
        const today = new Date();
        let date = today.getDate();
        let month = today.getMonth() + 1;
        let year = today.getFullYear();

        if (month < 10) {
            month = "0" + month
        }

        let dateString = year + '-' + month + '-' + date;

        return (
            <div className="row home-pg-2" id="q6">
                <form className="col-sm-12 q-header bg-q">
                    <h3>When would you like to go?</h3>
                    <label htmlFor="start">Start date:</label><br />
                    <input id="start" type="date" min={dateString} onChange={this.props.handleChange('startDate')} defaultValue={values.startDate} />
                    <br />
                    <label htmlFor="end">End date:</label><br />
                    <input id="end" type="date" min={this.props.values.startDate} onChange={this.props.handleChange('endDate')} defaultValue={values.endDate} />
                </form>
                <div className="col-sm-12">
                    <div className="row">
                        <div className="col" style={{ paddingTop: "15px" }}>
                            <button className="back" style={{ display: "block", margin: "auto" }} onClick={this.back}><i className="fas fa-angle-left fa-2x"></i></button>
                        </div>
                        <div className="col" style={{ paddingTop: "15px" }}>
                            <button className="next" style={{ display: "block", margin: "auto" }} onClick={this.nextQuestion}><i className="fas fa-angle-right fa-2x"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}