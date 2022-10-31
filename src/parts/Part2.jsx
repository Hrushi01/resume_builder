import React from "react";
import { Form, Formik, Field, ErrorMessage, FieldArray } from "formik";
import { part1 } from "../schema/schema1";
import { FaArrowRight, FaPlus } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ai";

function Part1(props) {
  const { information, setPart2, setPart3, setInfoP2 } = props;

  const change = () => {
    console.log("changes");

    setPart2(false);
    setPart3(true);
  };

  return (
    <div className=" ">
      <div className="flex flex-col justify-center text-center">
        <Formik
          initialValues={information}
          onSubmit={(values, actions) => {
            console.log("submit clicked done");
            change();
          }}>
          {(props) => (
            <Form className="flex flex-col justify-center text-center align-middle">
              <div className="flex flex-col">
                <div className="flex flex-col justify-start mb-6">
                  <label className="flex justify-start pl-1">Title:</label>
                  <Field
                    type="text"
                    label="Name"
                    name="title"
                    placeholder="Basic Information"
                    className=" p-3 m-1   rounded border-2 "
                  />
                </div>
                <div className="">
                  <h1> Add Multiple Work Experience</h1>
                  <FieldArray
                    name="work"
                    render={(arrayhelpers) => {
                      return (
                        <div>
                          {props.values?.work ? (
                            [0] &&
                            props.values.work?.map((item, index) => {
                              return (
                                <div
                                  className="mt-2  border-solid shadow-2xl mb-5 rounded-lg "
                                  key={index}>
                                  {index > 0 && (
                                    <div>
                                      <button
                                        type="button"
                                        className="float-right text-xl "
                                        onClick={() =>
                                          arrayhelpers.remove(index)
                                        }>
                                        ❌
                                      </button>
                                    </div>
                                  )}
                                  <div className="p-5">
                                    <div className="flex justify-start  italic w-fit p-1 text-slate-400   ">{`Experience ${
                                      index + 1
                                    }`}</div>
                                    <div className="card-body p-2">
                                      {/* Position and Company name below  */}
                                      {/* Position and Company name below  */}
                                      {/* Position and Company name below  */}

                                      <div className="flex justify-between ">
                                        <div className=" flex-col  w-1/2  flex">
                                          <label
                                            className="flex justify-start pl-1"
                                            htmlFor={`work.${index}.position`}>
                                            Position:
                                          </label>

                                          <Field
                                            name={`work.${index}.position`}
                                            className=" p-2 m-1   rounded border-2 "
                                            type="text"
                                            placeholder="Position"
                                          />
                                          {/* {props.errors.email &&
                                          props.touched.email ? (
                                            <p className="  text-red-600">
                                              {props.errors.email}
                                            </p>
                                          ) : null} */}
                                        </div>

                                        <div className="w-1/2 flex flex-col">
                                          <label
                                            className="flex justify-start pl-1"
                                            htmlFor={`work.${index}.company`}>
                                            Company Name:
                                          </label>

                                          <Field
                                            name={`work.${index}.company`}
                                            className=" p-2 m-1   rounded border-2 "
                                            type="text"
                                            placeholder="Position"
                                          />
                                          {/* {props.errors.phone &&
                                          props.touched.phone ? (
                                            <p className="  text-red-600">
                                              {props.errors.phone}
                                            </p>
                                          ) : null} */}
                                        </div>
                                      </div>

                                      {/* Certificate and location below  */}
                                      {/* Certificate and location below  */}
                                      {/* Certificate and location below  */}
                                      {/* Certificate and location below  */}

                                      <div className="flex justify-between ">
                                        <div className=" flex-col  w-1/2  flex">
                                          <label
                                            className="flex justify-start pl-1"
                                            htmlFor={`work.${index}.certificate`}>
                                            Certificate Link:
                                          </label>

                                          <Field
                                            name={`work.${index}.certificate`}
                                            className=" p-2 m-1   rounded border-2 "
                                            type="text"
                                            placeholder="Certificate"
                                          />
                                          {/* {props.errors.email &&
                                          props.touched.email ? (
                                            <p className="  text-red-600">
                                              {props.errors.email}
                                            </p>
                                          ) : null} */}
                                        </div>

                                        <div className="w-1/2 flex flex-col">
                                          <label
                                            className="flex justify-start pl-1"
                                            htmlFor={`work.${index}.location`}>
                                            Location:
                                          </label>

                                          <Field
                                            name={`work.${index}.location`}
                                            className=" p-2 m-1   rounded border-2 "
                                            type="text"
                                            placeholder="Location"
                                          />
                                          {/* {props.errors.phone &&
                                          props.touched.phone ? (
                                            <p className="  text-red-600">
                                              {props.errors.phone}
                                            </p>
                                          ) : null} */}
                                        </div>
                                      </div>

                                      {/* Start date and end date below  */}
                                      {/* Start date and end date below  */}
                                      {/* Start date and end date below  */}
                                      {/* Start date and end date below  */}

                                      <div className="flex justify-between ">
                                        <div className=" flex-col  w-1/2  flex">
                                          <label
                                            className="flex justify-start pl-1"
                                            htmlFor={`work.${index}.start`}>
                                            Start date:
                                          </label>

                                          <Field
                                            name={`work.${index}.start`}
                                            className=" p-2 m-1   rounded border-2 "
                                            type="date"
                                            placeholder="Date"
                                          />
                                          {/* {props.errors.email &&
                                          props.touched.email ? (
                                            <p className="  text-red-600">
                                              {props.errors.email}
                                            </p>
                                          ) : null} */}
                                        </div>

                                        <div className="w-1/2 flex flex-col">
                                          <label
                                            className="flex justify-start pl-1"
                                            htmlFor={`work.${index}.end`}>
                                            End Date:
                                          </label>

                                          <Field
                                            name={`work.${index}.end`}
                                            className=" p-2 m-1   rounded border-2 "
                                            type="date"
                                            placeholder="End date"
                                          />
                                          {/* {props.errors.phone &&
                                          props.touched.phone ? (
                                            <p className="  text-red-600">
                                              {props.errors.phone}
                                            </p>
                                          ) : null} */}
                                        </div>
                                      </div>

                                      <div className="flex flex-col justify-start">
                                        <label
                                          className="flex justify-start pl-1"
                                          htmlFor={`work.${index}.description`}>
                                          Description:
                                        </label>

                                        <Field
                                          type="text"
                                          label="description"
                                          name="description"
                                          placeholder="Description"
                                          className=" p-2 m-1   rounded border-2 "
                                        />

                                        {props.errors.name &&
                                        props.touched.name ? (
                                          <p className=" text-red-600">
                                            {props.errors.name}
                                          </p>
                                        ) : null}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            })
                          ) : (
                            <></>
                          )}
                          <button
                            type="button"
                            className="float-right flex   text-blue-600 p-1 italic rounded-xl"
                            onClick={() => {
                              arrayhelpers.insert(
                                props.values.work.length + 1,
                                {
                                  country: "",
                                  city: "",
                                  position: "SSD",
                                  company: "Google",
                                  certificate: "",
                                  location: "",
                                  start: "",
                                  end: "",
                                  description: "",
                                }
                              );
                              console.log("gdgd");
                            }}>
                            <div className="p-1 ">
                              <FaPlus />
                            </div>
                            New
                          </button>
                        </div>
                      );
                    }}
                  />
                  <br />
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    onSubmit={() => {
                      console.log("done");
                    }}
                    className=" bg-blue-600 text-white rounded p-2 w-fit m-2 pr-3 flex ">
                    <div className="p-1">
                      <FaArrowRight />
                    </div>
                    Next
                  </button>
                </div>
              </div>
              {setInfoP2(props.values)}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Part1;