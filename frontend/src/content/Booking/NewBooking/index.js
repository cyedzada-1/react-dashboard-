import React from "react";
import Header from "./Components/Header";
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Helmet } from 'react-helmet-async';
import { Grid } from '@mui/material';
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";
import Textfield from "./Components/FormsUI/Textfield";
import Select from "./Components/FormsUI/Select";
import DateTimePicker from "./Components/FormsUI/DataTimePicker";
import Checkbox from "./Components/FormsUI/Checkbox";
import Button from "./Components/FormsUI/Button";
import countries from "./data/countries.json";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
}));
const cabin = ["V", "U", "L", "I", "O", "N", "T", "M", "K", "Y", "P"];
const gender = ["Male", "Female", "Others"];
const receipt = ["Bank Deposit", "Cash Deposit", "Others"];
const agent = [
  "Khadim",
  "Kazim",
  "Asghar",
  "Ibrahim ",
  "Zaheer ",
  "Ali Naqi",
  "Jawed ",
  "Mujtaba ",
  "Taqi",
  "Not Specify",
];
const INITIAL_FORM_STATE = {
  gender: "",
  name: "",
  surName: "",
  dob: "",
  cnic: "",
  passportNumber: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  country: "",
  pnr: "",
  ticket: "",
  to: "",
  from: "",
  issueBy: "",
  ledger: "",
  issueDate: "",
  travelDate: "",
  class: "",
  infant: false,
  basicFare: "",
  taxes: "",
  sc: "",
  discount: "",
  totalAmount: "",
  receipt: "",
  verifyDetails: false,
};

const FORM_VALIDATION = Yup.object().shape({
  gender: Yup.string().required("Specify Gender Please!"),
  name: Yup.string().required("Name Required"),
  surName: Yup.string().required("SurName Required"),
  dob: Yup.string().required("Please Mention DOB"),
  cnic: Yup.number()
    .integer()
    .typeError("Please enter a valid National Identity Card Number")
    .required("CNIC is Required"),
  passportNumber: Yup.string(),
  email: Yup.string().email("Invalid email."),
  phone: Yup.number()
    .integer()
    .typeError("Please enter a valid phone number")
    .required("Phone Number is Required"),
  address: Yup.string(),
  city: Yup.string().required("Required"),
  state: Yup.string(),
  country: Yup.string().required("Required"),

  pnr: Yup.string().required("PNR is Required"),
  ticket: Yup.number()
    .integer()
    .typeError("Invalid Ticket Number")
    .required("Please enter Ticket Number"),
  to: Yup.string().required("Required"),
  from: Yup.string().required("Required"),
  issueBy: Yup.string().required("Required"),
  issueDate: Yup.date().required("Required"),
  travelDate: Yup.date().required("Required"),
  ledger: Yup.string(),
  cabin: Yup.string(),
  infant: Yup.boolean(),

  basicFare: Yup.number()
    .integer()
    .typeError("Invalid Fare Amount")
    .required("Required"),
  taxes: Yup.number().integer().typeError("Invalid Amount"),
  sc: Yup.number().integer().typeError("Invalid Amount"),
  discount: Yup.number().integer().typeError("Invalid Amount"),
  totalAmount: Yup.number()
    .integer()
    .typeError("Please enter Total Amount")
    .required("Required"),
  receipt: Yup.string().required("Required"),
  verifyDetails: Yup.boolean()
    .oneOf([true], "The terms and conditions must be accepted.")
    .required("The terms and conditions must be accepted."),
});

const Booking = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid
        sx={{
          px: 4
        }}
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={4}
      >
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <Container maxWidth="md">
            <div className={classes.formWrapper}>
              <Formik
                initialValues={{
                  ...INITIAL_FORM_STATE
                }}
                validationSchema={FORM_VALIDATION}
                onSubmit={(values, actions) => {
                  setTimeout(() => {
                    axios
                      .post(
                        'http://localhost:8800/api/bookings',
                        values,
                        actions
                      )
                      .then((response) => {
                        console.log(response);
                      })
                      .catch((error) => {
                        console.log(error.response.data);
                      });

                    actions.setSubmitting(false);
                  }, 400);
                }}
              >
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="h4">Passenger's details</Typography>
                    </Grid>

                    <Grid item xs={2}>
                      <Select name="gender" label="Gender" options={gender} />
                    </Grid>
                    <Grid item xs={4}>
                      <Textfield name="name" label="Name" />
                    </Grid>

                    <Grid item xs={4}>
                      <Textfield name="surName" label="SurName" />
                    </Grid>
                    <Grid item xs={2}>
                      <DateTimePicker name="dob" label="Date Of Birth" />
                    </Grid>
                    <Grid item xs={4}>
                      <Textfield name="cnic" label="CNIC" />
                    </Grid>
                    <Grid item xs={4}>
                      <Textfield
                        name="passportNumber"
                        label="Passport Number"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Textfield name="phone" label="Phone" />
                    </Grid>
                    <Grid item xs={4}>
                      <Textfield name="email" label="Email" />
                    </Grid>

                    <Grid item xs={8}>
                      <Textfield name="address" label="Address" />
                    </Grid>

                    <Grid item xs={4}>
                      <Textfield name="city" label="City" />
                    </Grid>

                    <Grid item xs={4}>
                      <Textfield name="state" label="State/Province" />
                    </Grid>

                    <Grid item xs={4}>
                      <Select
                        name="country"
                        label="Country"
                        options={countries}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Typography variant="h4">Booking information</Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Textfield name="pnr" label="PNR" />
                    </Grid>
                    <Grid item xs={3}>
                      <Textfield name="ticket" label="Ticket #" />
                    </Grid>

                    <Grid item xs={3}>
                      <Textfield name="to" label="To" />
                    </Grid>
                    <Grid item xs={3}>
                      <Textfield name="from" label="From" />
                    </Grid>

                    <Grid item xs={4}>
                      <Select
                        name="issueBy"
                        label="Issue/Process By"
                        options={agent}
                      />
                    </Grid>

                    <Grid item xs={4}>
                      <DateTimePicker
                        name="issueDate"
                        label="Ticket Issue/Process Date"
                      />
                    </Grid>

                    <Grid item xs={4}>
                      <DateTimePicker
                        name="travelDate"
                        label="Date of Travel"
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <Textfield name="ledger" label="Ledger" />
                    </Grid>
                    <Grid item xs={2}>
                      <Select name="class" label="Class" options={cabin} />
                    </Grid>
                    <Grid item xs={2}>
                      <Checkbox
                        name="infant"
                        legend="1 infant allowed"
                        label="INFANT "
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h4">Fare Calculation</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Textfield name="basicFare" label="Basic Fare " />
                    </Grid>
                    <Grid item xs={2}>
                      <Textfield name="taxes" label="Taxes " />
                    </Grid>
                    <Grid item xs={2}>
                      <Textfield name="discount" label="Discount " />
                    </Grid>
                    <Grid item xs={2}>
                      <Textfield name="sc" label="Commission" />
                    </Grid>
                    <Grid item xs={2}>
                      <Textfield name="totalAmount" label="Total Amount " />
                    </Grid>
                    <Grid item xs={2}>
                      <Select
                        name="receipt"
                        label="Payment"
                        options={receipt}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Checkbox
                        name="verifyDetails"
                        legend="Verify Details"
                        label="I agree"
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Button>Confirm Booking</Button>
                    </Grid>
                  </Grid>
                </Form>
              </Formik>
            </div>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};

export default Booking;
