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
        .then(action => {
            if (action) {
                this.props.initialize(action.data);
            }
        });
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

        let simple_text_fields = [
            'Street',
            'City',
            'State',
            'Zip',
            'Phone',
            'Monday', 
            'Tuesday', 
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
        ];

        simple_text_fields = simple_text_fields.map(field => {
            return <Field
                key={field}
                name={field.toLowerCase()}
                type="text"
                component={Input}
                label={field}
            />;
        });

        const services_checkboxes = [];

        for (let i = 0; i < this.props.services.keys.length; i++) {
            services_checkboxes.push(
                    <Field
                    key={this.props.services.keys[i]}
                    name={this.props.services.keys[i]}
                    type="checkbox"
                    component={Input}
                    label={this.props.services.strings[i]}
                />
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
                    name="email"
                    type="email"
                    component={Input}
                    label="Email address"
                    validate={[required, nonEmpty, email]}
                />
                {simple_text_fields}
                {services_checkboxes}
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
    initialValues: state.protectedData.data,
    services: state.shop.services
});

ServicesForm = reduxForm({
    form: 'services',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('services', Object.keys(errors)[0]))
})(ServicesForm);

export default connect(mapStateToProps)(ServicesForm);

