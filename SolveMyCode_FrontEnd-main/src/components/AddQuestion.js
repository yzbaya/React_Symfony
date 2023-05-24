import axios from "axios";
import { API_URL } from "../config/utils";
import React, { useState } from "react";
import "../style/style.css";


export default function AddQuestion() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(false);
  const [done, setDone] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const now = new Date();

    try {
      const response = await axios.post(API_URL, {
        title: title,
        content: content,
        dateOfCreation: now,
      });

      if (response.status === 201) {
        setDone(true);
        setError(false);
        setTitle("");
        setContent("");
      } else {
        setError(true);
      }
    } catch (error) {
      console.error(error);
      setError(true);
      setDone(false);
    }
  };
  return (
    <div>
        
      <div>
       
        <form onSubmit={handleSubmit} className="">
          <div className="modal-body">
            <div className="">
              {done && (
                <div className="alert alert-success" role="alert">
                  question ajouter avec succes!
                </div>
              )}
              {error && (
                <div className="alert alert-danger" role="alert">
                  attention il y'a un erreur
                </div>
              )}
              <div>
                <label className="">Title:</label>
                <input
                  type="text" id="title" value={title}onChange={(e) => setTitle(e.target.value)} className="form-control" required={true}/>
              </div>

              <div>
                <label className="mt-2">Content:</label>
                <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} className="form-control" required={true} rows={10}/>
              </div>
            </div>
          </div>
          <div className="modal-footer mt-4">
            <button type="submit" className="btn btn-dark w-100">
              Ajouter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
