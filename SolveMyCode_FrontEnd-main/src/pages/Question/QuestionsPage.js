import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL, API_URL_ANSWSER } from "../../config/utils";
import "../../style/style.css";
import AddQuestion from "../../components/AddQuestion";
import FooterCop from "../../components/FooterCop";
import Navbar from "../../components/Header";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A5027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: "black",
}));

const QuestionsPage = () => {
  const [questions, setQuestions] = useState([]);
  const [totalPages, setTotalPages] = useState(0); // New addition
  const [loading, setLoading] = useState(true);
  const [answers, setAnswers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  useEffect(() => {
    const fetchAnswers = async () => {
      try {
        const response = await axios.get(API_URL_ANSWSER);
        setAnswers(response.data["hydra:member"]);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAnswers();
  }, []);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleDelete = async (questionId) => {
    if (window.confirm("vous etes sur desupprimer cette question?")) {
      try {
        await axios.delete(`${API_URL}/${questionId}`);
        setQuestions((prevQuestions) =>
          prevQuestions.filter((question) => question.id !== questionId)
        );
      } catch (error) {
        console.error(error);
      }
    }
  };

  const fetchData = async (page) => {
    try {
      const response = await axios.get(`${API_URL}/?page=${page}`);
      setQuestions(response.data["hydra:member"]);
      setTotalPages(response.data["hydra:view"]["hydra:last"].split("=")[1]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ backgroundColor: "#f6f6f6" }}>
      <div className="container mt-3">
  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
  <Grid item xs={6} >
  <h1 className="mt-4">Ajouter question</h1>
    <Item><AddQuestion /></Item>
  </Grid>
  <Grid item xs={6}>
  {loading ? (
          <div className="d-flex justify-content-center" style={{marginTop:"50vh"}}>
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="row d-flex justify-content-start">
            <h1 className="mt-5 fw-bold">Liste des questions</h1>
            
          </div>
        )}
    <Item>
    {questions.map((question) => (
                <div className="" key={question.id}>
                  <div className="px-3 py-2 mb-3  rounded-3 bg-white">
                    <div>
                      <div className="d-flex justify-content-between align-items-center">
                        <h5
                          className="fw-bold mt-2 d-flex justify-content-center align-items-center"
                          style={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            maxWidth: "100%",
                          }}
                        >
                          {question.title}{" "}
                          <div className="ms-2">
                            {question.answers.length > 0 ? (
                              <i
                                className="fa-solid fa-circle-check text-success"
                                style={{ fontSize: "17px" }}
                              ></i>
                            ) : (
                              <i
                                className="fa-regular fa-circle-check text-danger"
                                style={{ fontSize: "17px" }}
                              ></i>
                            )}
                          </div>
                        </h5>
                        <div className="dropdown">
                        
                            <button className="btn btn-success">
                                <Link
                                  Link
                                  to={"/edit/" + question.id}
                                  className="text-dark text-decoration-none"
                                >
                                  edit
                                </Link>                              
                            </button>
                         
                              <button className="btn btn-danger">
                                <Link
                                  className="text-dark text-decoration-none"
                                  onClick={() => handleDelete(question.id)}
                                >
                                  delete
                                </Link>
                              </button>
                    
                       <button  className="btn btn-dark" >
                        <Link
                          to={`/detail/${question.id}`}
                          
                        >
                          Plus d'info
                
                        </Link>
                        </button> 
                  
                        
                        </div>
                      </div>

                      <p
                        className=""
                        style={{
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          maxWidth: "100%",
                        }}
                      >
                        {question.content}
                      </p>

                    
                    </div>
                  </div>
                </div>
              ))}  
    </Item>
  </Grid>
  </Grid>
   
      </div>
      <FooterCop />
    </div>
  );
};
export default QuestionsPage;
