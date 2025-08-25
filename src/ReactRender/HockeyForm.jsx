import React, { useState } from 'react';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';

const HockeyForm = () => {
  const [records, setRecords] = useState([]);

  // ✅ Validation Schema
  const validationSchema = Yup.object({
    playerName: Yup.string().matches(/^[A-Za-z ]+$/, 'Only alphabets allowed').min(3).max(40).required(),
    jerseyNumber: Yup.number().integer().min(1).max(99).required(),
    position: Yup.string().oneOf(['Forward', 'Defense', 'Goalie']).required(),
    stickHand: Yup.string().oneOf(['Left', 'Right']).required(),
    dateOfBirth: Yup.date().required().test('age', 'Age must be between 10 and 55', function (value) {
      const dob = new Date(value);
      const age = new Date().getFullYear() - dob.getFullYear();
      return age >= 10 && age <= 55;
    }),
    nationality: Yup.string().required(),
    email: Yup.string().email().required(),
    phone: Yup.string().matches(/^[6-9][0-9]{9}$/,'Invalid phone number').required(),
    playerId: Yup.string().matches(/^HOCK-\d{4}$/, 'Format: HOCK-XXXX').required(),
    guardianName: Yup.string().when('dateOfBirth', (dob, schema) => {
      if (dob) {
        const age = new Date().getFullYear() - new Date(dob).getFullYear();
        if (age < 18) return schema.required('Guardian name required for < 18');
      }
      return schema;
    }),
    teamName: Yup.string().required(),
    leagueLevel: Yup.string().oneOf(['Amateur', 'College', 'Pro']).required(),
    tournamentName: Yup.string().required(),
    startDate: Yup.date().required(),
    endDate: Yup.date().required().min(Yup.ref('startDate'), 'End date must be after start date'),
    jerseySize: Yup.string().when('position', {
      is: (val) => val !== 'Goalie',
      then: (schema) => schema.required('Jersey size required'),
    }),
    padSize: Yup.string().when('position', {
      is: 'Goalie',
      then: (schema) => schema.required('Pad size required'),
    }),
    hasMedicalCondition: Yup.boolean(),
    medicalCertNumber: Yup.string().when('hasMedicalCondition', {
      is: true,
      then: (schema) => schema.matches(/^MED-\d{4}$/, 'Format: MED-XXXX').required('Required'),
    }),
    consent: Yup.boolean().oneOf([true], 'Consent required'),
    pastTeams: Yup.array().of(
      Yup.object({
        clubName: Yup.string().min(2).max(30).required(),
        years: Yup.number().integer().min(1).max(20).required(),
      })
    ).max(3),
  });

  // ✅ Initial Values
  const initialValues = {
    playerName: '', jerseyNumber: '', position: '', stickHand: '', dateOfBirth: '',
    nationality: '', email: '', phone: '', playerId: '', guardianName: '',
    teamName: '', leagueLevel: '', tournamentName: '', startDate: '', endDate: '',
    jerseySize: '', padSize: '', hasMedicalCondition: false, medicalCertNumber: '',
    consent: false, pastTeams: []
  };

  // ✅ Handle Submit
  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    console.log('Form Data:', values);
    setRecords([...records, values]);
    resetForm();
    setSubmitting(false);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Hockey Tournament Registration</h2>

      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ values, isSubmitting }) => (
          <Form className="row g-3">

            {/* Player Name */}
            <div className="col-md-6">
              <label>Player Name</label>
              <Field name="playerName" className="form-control" />
              <ErrorMessage name="playerName" component="div" className="text-danger" />
            </div>

            {/* Jersey Number */}
            <div className="col-md-6">
              <label>Jersey Number</label>
              <Field name="jerseyNumber" type="number" className="form-control" />
              <ErrorMessage name="jerseyNumber" component="div" className="text-danger" />
            </div>

            {/* Position */}
            <div className="col-md-6">
              <label>Position</label>
              <Field as="select" name="position" className="form-control">
                <option value="">Select</option>
                <option value="Forward">Forward</option>
                <option value="Defense">Defense</option>
                <option value="Goalie">Goalie</option>
              </Field>
              <ErrorMessage name="position" component="div" className="text-danger" />
            </div>

            {/* Stick Hand */}
            <div className="col-md-6">
              <label>Stick Hand</label>
              <Field as="select" name="stickHand" className="form-control">
                <option value="">Select</option>
                <option value="Left">Left</option>
                <option value="Right">Right</option>
              </Field>
              <ErrorMessage name="stickHand" component="div" className="text-danger" />
            </div>

            {/* DOB */}
            <div className="col-md-6">
              <label>Date of Birth</label>
              <Field type="date" name="dateOfBirth" className="form-control" />
              <ErrorMessage name="dateOfBirth" component="div" className="text-danger" />
            </div>

            {/* Guardian Name */}
            <div className="col-md-6">
              <label>Guardian Name</label>
              <Field name="guardianName" className="form-control" />
              <ErrorMessage name="guardianName" component="div" className="text-danger" />
            </div>

            {/* Email */}
            <div className="col-md-6">
              <label>Email</label>
              <Field type="email" name="email" className="form-control" />
              <ErrorMessage name="email" component="div" className="text-danger" />
            </div>

            {/* Phone */}
            <div className="col-md-6">
              <label>Phone</label>
              <Field name="phone" className="form-control" />
              <ErrorMessage name="phone" component="div" className="text-danger" />
            </div>

            {/* Player ID */}
            <div className="col-md-6">
              <label>Player ID</label>
              <Field name="playerId" className="form-control" />
              <ErrorMessage name="playerId" component="div" className="text-danger" />
            </div>

            {/* Team Info */}
            <div className="col-md-6">
              <label>Team Name</label>
              <Field name="teamName" className="form-control" />
              <ErrorMessage name="teamName" component="div" className="text-danger" />
            </div>

            <div className="col-md-6">
              <label>League Level</label>
              <Field as="select" name="leagueLevel" className="form-control">
                <option value="">Select</option>
                <option value="Amateur">Amateur</option>
                <option value="College">College</option>
                <option value="Pro">Pro</option>
              </Field>
              <ErrorMessage name="leagueLevel" component="div" className="text-danger" />
            </div>

            {/* Tournament */}
            <div className="col-md-6">
              <label>Tournament Name</label>
              <Field name="tournamentName" className="form-control" />
              <ErrorMessage name="tournamentName" component="div" className="text-danger" />
            </div>

            {/* Start / End Date */}
            <div className="col-md-6">
              <label>Start Date</label>
              <Field type="date" name="startDate" className="form-control" />
              <ErrorMessage name="startDate" component="div" className="text-danger" />
            </div>

            <div className="col-md-6">
              <label>End Date</label>
              <Field type="date" name="endDate" className="form-control" />
              <ErrorMessage name="endDate" component="div" className="text-danger" />
            </div>

            {/* Jersey / Pad Size */}
            {values.position !== 'Goalie' && (
              <div className="col-md-6">
                <label>Jersey Size</label>
                <Field name="jerseySize" className="form-control" />
                <ErrorMessage name="jerseySize" component="div" className="text-danger" />
              </div>
            )}

            {values.position === 'Goalie' && (
              <div className="col-md-6">
                <label>Pad Size</label>
                <Field name="padSize" className="form-control" />
                <ErrorMessage name="padSize" component="div" className="text-danger" />
              </div>
            )}

            {/* Medical Condition */}
            <div className="col-md-6">
              <label>
                <Field type="checkbox" name="hasMedicalCondition" /> Has Medical Condition
              </label>
              <ErrorMessage name="hasMedicalCondition" component="div" className="text-danger" />
            </div>

            {values.hasMedicalCondition && (
              <div className="col-md-6">
                <label>Medical Certificate Number</label>
                <Field name="medicalCertNumber" className="form-control" />
                <ErrorMessage name="medicalCertNumber" component="div" className="text-danger" />
              </div>
            )}

            {/* Consent */}
            <div className="col-md-12">
              <label>
                <Field type="checkbox" name="consent" /> I agree to participate
              </label>
              <ErrorMessage name="consent" component="div" className="text-danger" />
            </div>

            {/* Past Teams */}
            <div className="col-md-12">
              <label>Past Teams</label>
              <FieldArray name="pastTeams">
                {({ push, remove }) => (
                  <div>
                    {values.pastTeams.map((_, index) => (
                      <div key={index} className="row mb-2">
                        <div className="col-md-5">
                          <Field name={`pastTeams[${index}].clubName`} placeholder="Club Name" className="form-control" />
                          <ErrorMessage name={`pastTeams[${index}].clubName`} component="div" className="text-danger" />
                        </div>
                        <div className="col-md-5">
                          <Field type="number" name={`pastTeams[${index}].years`} placeholder="Years" className="form-control" />
                          <ErrorMessage name={`pastTeams[${index}].years`} component="div" className="text-danger" />
                        </div>
                        <div className="col-md-2">
                          <button type="button" onClick={() => remove(index)} className="btn btn-danger">Remove</button>
                        </div>
                      </div>
                    ))}
                    {values.pastTeams.length < 3 && (
                      <button type="button" onClick={() => push({ clubName: '', years: '' })} className="btn btn-primary mt-2">
                        Add Team
                      </button>
                    )}
                  </div>
                )}
              </FieldArray>
            </div>

            {/* Submit */}
            <div className="col-md-12">
              <button type="submit" className="btn btn-success mt-3" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </Form>
        )}
      </Formik>

      {/* Records Table */}
      {records.length > 0 && (
        <div className="mt-5">
          <h3>Registered Players</h3>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Player Name</th>
                <th>Jersey Number</th>
                <th>Position</th>
                <th>Team</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {records.map((rec, i) => (
                <tr key={i}>
                  <td>{rec.playerName}</td>
                  <td>{rec.jerseyNumber}</td>
                  <td>{rec.position}</td>
                  <td>{rec.teamName}</td>
                  <td>{rec.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default HockeyForm;
