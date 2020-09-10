import React from 'react';
import Checkbox from '../Checkboxes/index';
import './index.css';
import CheckboxContainer from '../CheckboxContainer';

export default class Question7 extends React.Component {
    back = (event) => {
        event.preventDefault();
        this.props.prevStep();
    }

    nextQuestion = (event) => {
        event.preventDefault();
        this.props.nextStep();
    }

    

    render() {
        const { values } = this.props;
        // const options = ["National Parks", "Top-rated restaurants", "Dog-friendly areas", "Museums and art exhibits", "Best coffee", "Beaches and parks", "Food trucks", "Walking trails and bike paths"]
        return(
            <div className="row" id="q7">
                <form className="col-sm-12 header bg-q">
                    <h3>What types of places do you want to stop at?</h3>
<<<<<<< HEAD
                    <CheckboxContainer />
                    {/* <input id="national-parks" name="national-parks" type="checkbox" onChange={this.props.handleChange('stops')} />
=======
                    <input id="national-parks" name="national-parks" value="national-parks" type="checkbox" onClick={this.props.handleChange('stops')} />
>>>>>>> 341316e7af504c748c85211cf6ee0551d7ec6aa5
                        <label htmlFor="national-parks">National Parks</label>
                    
                    <input id="restaurants" name="restaurants" value="restaurants" type="checkbox" onChange={this.props.handleChange('stops')} />
                        <label htmlFor="restaurants">Top-rated restaurants</label>

                    <input id="dog-friendly" name="dog-friendly" value="dog-friendly" type="checkbox" onChange={this.props.handleChange('stops')} />
                        <label htmlFor="dog-friendly">Dog-friendly areas</label>

                    <input id="museums" name="museums" value="museums" type="checkbox" onChange={this.props.handleChange('stops')} />
                        <label htmlFor="museums">Museums and art exhibits</label>

                    <input id="coffee" name="coffee" value="coffee" type="checkbox" onChange={this.props.handleChange('stops')} />
                        <label htmlFor="coffee">Best coffee</label>

                    <input id="beaches-parks" name="beaches-parks" value="beaches-parks" type="checkbox" onChange={this.props.handleChange('stops')} />
                        <label htmlFor="beaches-parks">Beaches and parks</label>

                    <input id="food-trucks" name="food-trucks" value="food-trucks" type="checkbox" onChange={this.props.handleChange('stops')} />
                        <label htmlFor="food-trucks">Food trucks</label>

<<<<<<< HEAD
                    <input id="trails" name="trails" type="checkbox" onChange={this.props.handleChange('stops')} />
                        <label htmlFor="trails">Walking trails and bike paths</label> */}
=======
                    <input id="trails" name="trails" value="trails" type="checkbox" onChange={this.props.handleChange('stops')} />
                        <label htmlFor="trails">Walking trails and bike paths</label>
>>>>>>> 341316e7af504c748c85211cf6ee0551d7ec6aa5

                 </form>
                <button className="next" onClick={this.nextQuestion}>Go</button>
                <button className="back" onClick={this.back}>Back</button>
            </div>
        );
    }
}