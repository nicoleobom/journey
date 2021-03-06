import React from 'react';
import './index.css';
import swal from 'sweetalert';

export default class Question3 extends React.Component {
    constructor(props) {
        super(props);
        this.checkBudget = this.checkBudget.bind(this);
    }
    back = (event) => {
        event.preventDefault();
        this.props.prevStep();
    }

    checkBudget() {
        const budget = this.props.values.budget;
        if (budget < 500) {
            swal('Budget must be at least $500.');
        } else { 
            this.props.nextStep();
        }
    }

    onKeyPress(e) {
        if (e.which >= 8 && e.which <= 46) {
            e.preventDefault();
        } else if (e.which >= 65 && e.which <= 222) {
            e.preventDefault();
        }
    }

    render() {
        const { values } = this.props;

        return (
            <div className="row home-pg-2" id="q3">
                <form className="col-sm-12 q-header bg-q" onKeyPress={this.onKeyPress}>
                    <h3>What's your budget?</h3>
                    <span className="d-s">$</span><input id="budgetinput" type="number" min="500" step="100" onChange={this.props.handleChange('budget')} defaultValue={values.budget}></input>
                </form>
                <div className="col-sm-12">
                    <div className="row">
                        <div className="col" style={{ paddingTop: "15px" }}>
                            <button className="back" style={{ display: "block", margin: "auto" }} onClick={this.back}><i className="fas fa-angle-left fa-2x"></i></button>
                        </div>
                        <div className="col" style={{ paddingTop: "15px" }}>
                            <button id="next" type="submit" className="next" style={{ display: "block", margin: "auto" }} onClick={this.checkBudget}><i className="fas fa-angle-right fa-2x"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}