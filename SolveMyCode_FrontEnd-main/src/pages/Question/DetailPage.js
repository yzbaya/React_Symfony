import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {API_URL,API_URL_ANSWSER,} from "../../config/utils";
import {} from "react-router-dom";
import axios from "axios";
import CodeBlock from "../../components/CodeBlock";

// import axios from "axios";

export default function Detail() {
  // get id from url
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [content, setContent] = useState("");

  // fecthing data
  useEffect(() => {
    fetch(`${API_URL}/${id}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, [id]);

  useEffect(() => {
    const fetchAnswers = async () => {
      try {
        const response = await fetch(`${API_URL}/${id}/answers`);
        const responseData = await response.json();
        setAnswers(responseData["hydra:member"]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAnswers();
  }, [id]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const now = new Date();
    now.setHours(now.getHours() + 1);
    try {
      const response = await axios.post(API_URL_ANSWSER, {
        content: content,
        dateOfCreation: now,
        question: `/api/questions/${id}`,
      });
      console.log(response.data);

      if (response.status === 201) {
        const newAnswer = response.data;
        setAnswers([...answers, newAnswer]);
        setContent("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (!data) {
    return (
      <div class="text-center my-5">
        <div class="spinner-border my-5" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }


  return (
    <div className="container mt-5">
    
<div className="row">
        <div className="col mt-5">
          <nav
            style={{ "--bs-breadcrumb-divider": ">" }}
            aria-label="breadcrumb"
          >

          </nav>
        </div>

        <div className="row">
          <div className="col">
            <div className="box">
              <div className="d-flex align-items-start justify-content-between">
                <div className="text-start">
                  <h4 className="fw-bold">{data.title}</h4>
                  
                </div>

                <div>
                  <button
                    className="btn btn-outline-dark"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    Repondre a cette Question
                  </button>
                </div>
              </div>

              <hr></hr>

              <div className="">
                <CodeBlock code={data.content} />
              </div>
              <hr className="my-2" />

              <div className="float-start col-12">
                <div className="m-2">
                  <h5 className="fw-bold my-3">Reponse : </h5>
                  {answers.length > 0 ? (
                    answers.map((answer) => (
                      <div key={answer["@id"]}>
                        <div className="d-flex text-secondary fst-normal">

                        </div>
                        <CodeBlock code={answer.content} />
                      </div>
                    ))
                  ) : (
                    <div class="alert alert-dark" role="alert">
                      Pas de Reponse.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title fw-bold" id="staticBackdropLabel">
                  Repondre a cette question
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="m-3">
                  <label className="mb-3">Ajouter Question :</label>
                  <textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="form-control"
                    required={true}
                    style={{ whiteSpace: "pre-wrap" }}
                    rows={10}
                  />
                </div>
                <div className="text-end mx-3">
                  <button type="submit" className="btn btn-success mb-3">
                    Ajouter cette question
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>        

      
    </div>
  );
}
