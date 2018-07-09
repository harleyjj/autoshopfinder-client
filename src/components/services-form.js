import React from 'react';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import Input from './input';
import {required, nonEmpty, email} from '../validators';

export class ServicesForm extends React.Component {
    onSubmit(values) {
        return fetch('/api/protected', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json'
            }
        })
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
                    validate={[required, nonEmpty]}
                />
                <Field
                    name="street"
                    type="text"
                    component={Input}
                    label="Street"
                    validate={[required, nonEmpty]}
                />
                <Field
                    name="city"
                    type="text"
                    component={Input}
                    label="City"
                    validate={[required, nonEmpty]}
                />
                <Field
                    name="state"
                    type="text"
                    component={Input}
                    label="State"
                    validate={[required, nonEmpty]}
                />
                <Field
                    name="zip"
                    type="text"
                    component={Input}
                    label="Zip"
                    validate={[required, nonEmpty]}
                />
                <Field
                    name="phone"
                    type="text"
                    component={Input}
                    label="Phone"
                    validate={[required, nonEmpty]}
                />
                <Field
                    name="monday"
                    type="text"
                    component={Input}
                    label="Monday"
                    validate={[required, nonEmpty]}
                />
                <Field
                    name="tuesday"
                    type="text"
                    component={Input}
                    label="Tuesday"
                    validate={[required, nonEmpty]}
                />
                <Field
                    name="wednesday"
                    type="text"
                    component={Input}
                    label="Wednesday"
                    validate={[required, nonEmpty]}
                />
                <Field
                    name="thursday"
                    type="text"
                    component={Input}
                    label="Thursday"
                    validate={[required, nonEmpty]}
                />
                <Field
                    name="friday"
                    type="text"
                    component={Input}
                    label="Friday"
                    validate={[required, nonEmpty]}
                />
                <Field
                    name="saturday"
                    type="text"
                    component={Input}
                    label="Saturday"
                    validate={[required, nonEmpty]}
                />
                <Field
                    name="sunday"
                    type="text"
                    component={Input}
                    label="Sunday"
                    validate={[required, nonEmpty]}
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
                    name="batteryInstallation"
                    type="checkbox"
                    component={Input}
                    label="Battery installation"
                />
                <Field
                    name="filterReplacement"
                    type="checkbox"
                    component={Input}
                    label="Filter Replacement"
                />
                <Field
                    name="fluidExchanges"
                    type="checkbox"
                    component={Input}
                    label="Fluid Exchanges"
                />
                <Field
                    name="fuelSystemServices"
                    type="checkbox"
                    component={Input}
                    label="Fuel System Services"
                />
                <Field
                    name="scheduledOEServices"
                    type="checkbox"
                    component={Input}
                    label="Scheduled OE Services"
                />
                <Field
                    name="winterPrepPackage"
                    type="checkbox"
                    component={Input}
                    label="Winter Prep Package"
                />
                <Field
                    name="summerPrepPackage"
                    type="checkbox"
                    component={Input}
                    label="Summer Prep Package"
                />
                <Field
                    name="wheelAlignment"
                    type="checkbox"
                    component={Input}
                    label="Wheel Alignment"
                />
                <Field
                    name="tireRepair"
                    type="checkbox"
                    component={Input}
                    label="Tire Repair"
                />
                <Field
                    name="tireInstallation"
                    type="checkbox"
                    component={Input}
                    label="Tire Installation"
                />
                <Field
                    name="acHeat"
                    type="checkbox"
                    component={Input}
                    label="Air Conditioning and Heat"
                />
                <Field
                    name="beltsAndHoses"
                    type="checkbox"
                    component={Input}
                    label="Belts and Hoses"
                />
                <Field
                    name="brakeServices"
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
                    name="checkEngine"
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
                    name="carAudio"
                    type="checkbox"
                    component={Input}
                    label="Car Audio"
                />
                <Field
                    name="stateInspection"
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

export default reduxForm({
    form: 'services',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('services', Object.keys(errors)[0]))
})(ServicesForm);