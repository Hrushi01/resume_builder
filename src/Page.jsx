import React, { useRef } from "react";
import { Form, Formik, Field, ErrorMessage, FieldArray } from "formik";
import { signUpSchema } from "./schema";
import { useReactToPrint } from "react-to-print";

export default function Page() {
  const componentRef = useRef();

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    gender: "",

    accept: false,
    address: [
      {
        country: "",
        city: "",
        location: "",
      },
    ],
  };
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className=" w-1/2 fixed flex flex-col justify-center  align-middle m-5  p-3 overflow-scroll h-full  bg-neutral-800 ">
      <div className="  flex flex-col align-middle justify-center transition rounded-md p-3 text-white ">
        <br />
        <h1>My Form</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            handlePrint();
          }}
          validationSchema={signUpSchema}>
          {(props) => (
            <Form className="flex flex-col" ref={componentRef}>
              <Field
                type="text"
                label="Name"
                name="name"
                placeholder="Name"
                className=" p-3 m-1 rounded bg-neutral-700 "
              />

              {props.errors.name && props.touched.name ? (
                <p className=" text-red-600">{props.errors.name}</p>
              ) : null}

              {/* Email Field Below  */}
              {/* Email Field Below  */}
              {/* Email Field Below  */}
              {/* Email Field Below  */}

              <Field
                type="text"
                name="email"
                placeholder="Email"
                className=" p-3 m-1 rounded bg-neutral-700 "
              />
              {props.errors.email && props.touched.email ? (
                <p className="  text-red-600">{props.errors.email}</p>
              ) : null}

              {/* Phone number Field Below  */}
              {/* Phone number Field Below  */}
              {/* Phone number Field Below  */}
              {/* Phone number Field Below  */}

              <Field
                type="number"
                name="phone"
                placeholder="Phone"
                className=" p-3 m-1 rounded bg-neutral-700"
              />
              {props.errors.phone && props.touched.phone ? (
                <p className="  text-red-600">{props.errors.phone}</p>
              ) : null}

              {/* Gender Field Below  */}
              {/* Gender Field Below  */}
              {/* Gender Field Below  */}
              {/* Gender Field Below  */}

              <div className=" p-3 m-1 ">
                Gender:
                <label>
                  <Field
                    type="radio"
                    name="gender"
                    value="Male"
                    className=" p-3 m-1 bg-neutral-700 "
                  />
                  Male
                </label>
                <label>
                  <Field
                    type="radio"
                    name="gender"
                    value="Female"
                    className=" p-3 m-1 bg-neutral-700 "
                  />
                  Female
                </label>
                <label>
                  <Field
                    type="radio"
                    name="gender"
                    value="Others"
                    className=" p-3 m-1 bg-neutral-700 "
                  />
                  Others
                </label>
                {props.errors.gender && props.touched.gender ? (
                  <p className="  text-red-600">{props.errors.gender}</p>
                ) : null}
              </div>

              {/* Address Field below */}
              {/* Address Field below */}
              {/* Address Field below */}
              {/* Address Field below */}

              <div className="">
                <h1> Add Multiple Address</h1>
                <FieldArray
                  name="address"
                  render={(arrayhelpers) => {
                    return (
                      <div>
                        {props.values.address.map((item, index) => {
                          return (
                            <div
                              className="mt-2  border-solid border-2 rounded-lg border-black"
                              key={index}>
                              {index > 0 && (
                                <div>
                                  <button
                                    type="button"
                                    className="float-right text-xl "
                                    onClick={() => arrayhelpers.remove(index)}>
                                    ❌
                                  </button>
                                </div>
                              )}
                              <div className="p-5">
                                <div className="flex justify-start   ">{`Address ${
                                  index + 1
                                }`}</div>
                                <div className="card-body p-2">
                                  <div className="flex flex-col justify-start">
                                    <label
                                      htmlFor={`address.${index}.city`}
                                      className="flex justify-start  ">
                                      Country:
                                    </label>
                                    <Field
                                      as="select"
                                      name={`address.${index}.country`}
                                      className=" p-3  m-1 rounded bg-neutral-700 ">
                                      <option value="">Select</option>

                                      <option value="India">India</option>
                                      <option value="US">US</option>
                                      <option value="UK">UK</option>
                                    </Field>
                                    <ErrorMessage
                                      component="span"
                                      className="text-red-600"
                                      name={`address.${index}.country`}
                                    />
                                  </div>

                                  <div className="flex flex-col ">
                                    <label
                                      htmlFor={`address.${index}.city`}
                                      className="flex justify-start  ">
                                      City:
                                    </label>
                                    <Field
                                      type="text"
                                      name={`address.${index}.city`}
                                      id={`address.${index}.city`}
                                      className=" p-3 m-1 rounded bg-neutral-700"
                                      placeholder="City"
                                    />
                                    <ErrorMessage
                                      component="span"
                                      className="text-red-600"
                                      name={`address.${index}.city`}
                                    />
                                  </div>
                                  <div className="flex flex-col ">
                                    <label
                                      htmlFor={`address.${index}.city`}
                                      className="flex justify-start  ">
                                      Location:
                                    </label>
                                    <Field
                                      type="text"
                                      name={`address.${index}.location`}
                                      id={`address.${index}.location`}
                                      className=" p-3 m-1 rounded bg-neutral-700"
                                      placeholder="Location"
                                    />
                                    <ErrorMessage
                                      component="span"
                                      className="text-red-600"
                                      name={`address.${index}.location`}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                        <button
                          type="button"
                          className="float-right text-5xl text-green-500  rounded-full"
                          onClick={() => {
                            arrayhelpers.insert(
                              props.values.address.length + 1,
                              {
                                country: "",
                                city: "",
                                location: "",
                              }
                            );
                            console.log("gdgd");
                          }}>
                          +
                        </button>
                      </div>
                    );
                  }}
                />
                <br />
              </div>

              {/* Accept checkbox start here */}
              {/* Accept checkbox start here */}
              {/* Accept checkbox start here */}
              {/* Accept checkbox start here */}

              <label className=" p-3  m-1 rounded">
                <Field type="checkbox" name="accept" className=" p-3 " />
                Accept all terms and conditions
              </label>
              {props.errors.accept && props.touched.accept ? (
                <p className="  text-red-400">{props.errors.accept}</p>
              ) : null}

              <button
                type="submit"
                onClick={(values, actions) => {
                  console.log("Submitted", props);
                }}
                className=" bg-blue-600 text-white rounded p-2 w-20">
                Submi
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}