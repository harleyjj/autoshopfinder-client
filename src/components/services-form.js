import React from 'react';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import { connect } from 'react-redux';
import Input from './input';
import {fetchProtectedData, updateProtectedData} from '../actions/protected-data';
import {required, nonEmpty, email} from '../validators';

export class ServicesForm extends React.Component {
    constructor(props) {
        super(props);
        this.props.dispatch(fetchProtectedData())
        //.then(action => this.props.initialValues = action.data);
        .then(action => this.props.initialize(action.data));
        //.then(action => Object.keys(action.data).forEach(key => this.props.change(key, action.data[key])));
    }

    onSubmit(values) {
        return this.props.dispatch(updateProtectedData(values))
            .then(res => {
                if (!res.ok) {
                    if (
                        res.headers.has('content-type') &&
                        res.headers
                            .get('content-type')
                            .startsWith('application/json')
                    ) {
                        // It's a nice JSON error returned by us, so decode it
                        return res.json().then(err => Promise.reject(err));
                    }
                    // It's a less informative error returned by express
                    return Promise.reject({
                        code: res.status,
                        message: res.statusText
                    });
                }
                return;
            })
            .then(() => console.log('Submitted with values', values))
            .catch(err => {
                const {reason, message, location} = err;
                if (reason === 'ValidationError') {
                    // Convert ValidationErrors into SubmissionErrors for Redux Form
                    return Promise.reject(
                        new SubmissionError({
                            [location]: message
                        })
                    );
                }
                return Promise.reject(
                    new SubmissionError({
                        _error: 'Error submitting message'
                    })
                );
            });
    }

    render() {
        //console.log(this.props.initialValues);
        let successMessage;
        if (this.props.submitSucceeded) {
            successMessage = (
                <div className="message message-success">
                    Information submitted successfully
                </div>
            );
        }

        let errorMessage;
        if (this.props.error) {
            errorMessage = (
                <div className="message message-error">{this.props.error}</div>
            );
        }

        //console.log(this.props.protectedData.name);

        return (
            <form
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {successMessage}
                {errorMessage}
                <Field
                    name="name"
                    type="text"
                    component={Input}
                    label="Name"
                    value="Test Shop"
                    validate={[required, nonEmpty]}
                />
                <Field
                    name="street"
                    type="text"
                    component={Input}
                    label="Street"
                />
                <Field
                    name="city"
                    type="text"
                    component={Input}
                    label="City"
                />
                <Field
                    name="state"
                    type="text"
                    component={Input}
                    label="State"
                />
                <Field
                    name="zip"
                    type="text"
                    component={Input}
                    label="Zip"
                />
                <Field
                    name="phone"
                    type="text"
                    component={Input}
                    label="Phone"
                />
                <Field
                    name="monday"
                    type="text"
                    component={Input}
                    label="Monday"
                />
                <Field
                    name="tuesday"
                    type="text"
                    component={Input}
                    label="Tuesday"
                />
                <Field
                    name="wednesday"
                    type="text"
                    component={Input}
                    label="Wednesday"
                />
                <Field
                    name="thursday"
                    type="text"
                    component={Input}
                    label="Thursday"
                />
                <Field
                    name="friday"
                    type="text"
                    component={Input}
                    label="Friday"
                />
                <Field
                    name="saturday"
                    type="text"
                    component={Input}
                    label="Saturday"
                />
                <Field
                    name="sunday"
                    type="text"
                    component={Input}
                    label="Sunday"
                />
                <Field
                    name="email"
                    type="email"
                    component={Input}
                    label="Email address"
                    validate={[required, nonEmpty, email]}
                />
                <Field
                    name="oilchanges"
                    type="checkbox"
                    component={Input}
                    label="Oil changes"
                />
                <Field
                    name="batteryinstallation"
                    type="checkbox"
                    component={Input}
                    label="Battery installation"
                />
                <Field
                    name="filterreplacement"
                    type="checkbox"
                    component={Input}
                    label="Filter Replacement"
                />
                <Field
                    name="fluidexchanges"
                    type="checkbox"
                    component={Input}
                    label="Fluid Exchanges"
                />
                <Field
                    name="fuelsystemservices"
                    type="checkbox"
                    component={Input}
                    label="Fuel System Services"
                />
                <Field
                    name="scheduledoeservices"
                    type="checkbox"
                    component={Input}
                    label="Scheduled OE Services"
                />
                <Field
                    name="winterpreppackage"
                    type="checkbox"
                    component={Input}
                    label="Winter Prep Package"
                />
                <Field
                    name="summerpreppackage"
                    type="checkbox"
                    component={Input}
                    label="Summer Prep Package"
                />
                <Field
                    name="wheelalignment"
                    type="checkbox"
                    component={Input}
                    label="Wheel Alignment"
                />
                <Field
                    name="tirerepair"
                    type="checkbox"
                    component={Input}
                    label="Tire Repair"
                />
                <Field
                    name="tireinstallation"
                    type="checkbox"
                    component={Input}
                    label="Tire Installation"
                />
                <Field
                    name="acheat"
                    type="checkbox"
                    component={Input}
                    label="Air Conditioning and Heat"
                />
                <Field
                    name="beltsandhoses"
                    type="checkbox"
                    component={Input}
                    label="Belts and Hoses"
                />
                <Field
                    name="brakeservices"
                    type="checkbox"
                    component={Input}
                    label="Brake Services"
                />
                <Field
                    name="diagnostics"
                    type="checkbox"
                    component={Input}
                    label="Error Code Diagnostics"
                />
                <Field
                    name="checkengine"
                    type="checkbox"
                    component={Input}
                    label="Check Engine Light Dianostics"
                />
                <Field
                    name="suspension"
                    type="checkbox"
                    component={Input}
                    label="Shock Absorbers and Suspension"
                />
                <Field
                    name="performance"
                    type="checkbox"
                    component={Input}
                    label="Performance Part Installation"
                />
                <Field
                    name="caraudio"
                    type="checkbox"
                    component={Input}
                    label="Car Audio"
                />
                <Field
                    name="stateinspection"
                    type="checkbox"
                    component={Input}
                    label="State Mandated Inspections"
                />
                <Field
                    name="transmissions"
                    type="checkbox"
                    component={Input}
                    label="Transmission Rebuild and Replacement"
                />
                <button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Submit Shop Information
                </button>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    username: state.auth.currentUser.username,
    data: state.protectedData.data,
    initialValues: state.protectedData.data
});

ServicesForm = reduxForm({
    form: 'services',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('services', Object.keys(errors)[0]))
})(ServicesForm);

export default connect(mapStateToProps)(ServicesForm);

