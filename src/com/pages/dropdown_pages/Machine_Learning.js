import React, { useEffect } from 'react'
import { FaRegCircleCheck } from "react-icons/fa6";

import { FaCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Footer from '../Footer';
function Machine_Learning() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className='home_area home_page_img'>

                <div className='about_home'>
                    <h1 className='about_us' data-aos="zoom-in" data-aos-duration="500">Machine Learning</h1>
                </div>
            </div>
            <section className='course_section'>
                <div className="container">
                    <div className="about_row">
                        <div className="about_img" data-aos="fade-right"
                            data-aos-duration="3000">

                            <img src="./img/machine_learning.jpg" alt="" />
                        </div>
                        <div className="about_details" data-aos="fade-left"
                            data-aos-duration="3000">
                            <h2>Machine Learning</h2>
                            <p>Machine learning is an area of artificial intelligence and computer science that comprises supervised and unsupervised learning and includes the development of software and algorithms that can make predictions based on data.</p>
                            <div className='course_button'>
                                <button>Course Duration <span>12 Months</span></button>
                                <button>Daily Time <span>2 Hours</span></button>
                            </div>
                            <div className='include_course'>
                                <h5>Included In This Course:</h5>
                                <ul>
                                    <li><FaCheck />Job Support</li>
                                    <li><FaCheck />Rich Learning Content</li>
                                    <li><FaCheck />Taught by Experienced Prof.</li>
                                    <li><FaCheck />Industry Oriented Projects</li>
                                </ul>
                            </div>
                            <Link to="https://wa.me/9104790039" target="_blank"><button className='button'>Inquiry Now</button></Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className='courses_icon'>
                <div className='container'>
                    <ul className='courses_icon_img'>
                        <li><img src="./img/c.jpg" alt="" /><p>C</p></li>
                        <li><img src="./img/c++.jpg" alt="" /><p>C++</p></li>
                        <li><img src="./img/java.webp" alt="" /><p>Java</p></li>

                    </ul>

                </div>
            </section> */}

            <section className='subject_section' data-aos="fade-up"
                            data-aos-duration="3000">
                <div className='container'>
                    <div className="offer_title course_module_title">
                        <h2>Course Modules</h2>

                    </div>

                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Data Preprocessing
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p><FaRegCircleCheck />Data Cleaning: Handling missing values, removing duplicates, correcting errors.</p>
                                    <p><FaRegCircleCheck />Feature Engineering: Creating new features from existing ones to improve model performance.</p>
                                    <p><FaRegCircleCheck />Normalization/Standardization: Scaling features to a standard range.</p>
                                    <p><FaRegCircleCheck />Encoding Categorical Variables: Converting categorical data into numerical format. </p>



                                </div>
                            </div>

                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Exploratory Data Analysis (EDA)
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p><FaRegCircleCheck />Descriptive Statistics: Mean, median, mode, variance, etc.</p>
                                    <p><FaRegCircleCheck />Data Visualization: Histograms, scatter plots, box plots, etc.</p>
                                    <p><FaRegCircleCheck />Correlation Analysis: Understanding relationships between variables.</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Model Selection
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p><FaRegCircleCheck />Supervised Learning: Regression (e.g., Linear Regression, Decision Trees), Classification (e.g., Logistic Regression, SVM).</p>
                                    <p><FaRegCircleCheck />Unsupervised Learning: Clustering (e.g., K-Means, DBSCAN), Dimensionality Reduction (e.g., PCA, t-SNE).</p>
                                    <p><FaRegCircleCheck />Reinforcement Learning: Learning policies to maximize cumulative reward.</p>
                                   
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapseThree">
                                Model Training
                                </button>
                            </h2>
                            <div id="collapsefour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p><FaRegCircleCheck />Training Algorithms: Gradient Descent, Stochastic Gradient Descent, etc.</p>
                                    <p><FaRegCircleCheck />Hyperparameter Tuning: Grid Search, Random Search, Bayesian Optimization.</p>
                                    <p><FaRegCircleCheck />Cross-Validation: K-Fold Cross Validation to prevent overfitting.</p>


                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
                                Model Evaluation
                                </button>
                            </h2>
                            <div id="collapsefive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p><FaRegCircleCheck />Metrics for Regression: Mean Squared Error (MSE), Mean Absolute Error (MAE), R-squared.</p>
                                    <p><FaRegCircleCheck />Metrics for Classification: Accuracy, Precision, Recall, F1-Score, ROC-AUC.</p>
                                    <p><FaRegCircleCheck />Validation Techniques: Split dataset into training and testing sets.</p>
                                   



                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
                                Model Deployment
                                </button>
                            </h2>
                            <div id="collapsesix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p><FaRegCircleCheck />Serialization: Saving the model using Pickle, Joblib, etc.</p>
                                    <p><FaRegCircleCheck />APIs: Serving the model using REST APIs (e.g., Flask, FastAPI).</p>
                                    <p><FaRegCircleCheck />Monitoring: Tracking model performance over time, handling model drift.</p>
                                 

                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseseven" aria-expanded="false" aria-controls="collapseseven">
                                Model Interpretation
                                </button>
                            </h2>
                            <div id="collapseseven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p><FaRegCircleCheck />Feature Importance: Understanding which features contribute most to predictions.</p>
                                    <p><FaRegCircleCheck />Model Explainability: Tools like SHAP, LIME to interpret model decisions.</p>
  
                                </div>
                            </div>

                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseeight" aria-expanded="false" aria-controls="collapseeight">
                                Libraries and Frameworks
                                </button>
                            </h2>
                            <div id="collapseeight" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p><FaRegCircleCheck />cikit-Learn: General-purpose machine learning library.</p>
                                    <p><FaRegCircleCheck />TensorFlow: Framework for building deep learning models.</p>
                                    <p><FaRegCircleCheck />Keras: High-level API for building neural networks.</p>
                                    <p><FaRegCircleCheck />PyTorch: Deep learning framework known for its flexibility and dynamic computation graph.</p>
                                    <p><FaRegCircleCheck />Pandas: Data manipulation and analysis.</p>
                                    <p><FaRegCircleCheck />NumPy: Numerical computing.</p>
                                
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsenine" aria-expanded="false" aria-controls="collapsenine">
                                Advanced Topics
                                </button>
                            </h2>
                            <div id="collapsenine" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p><FaRegCircleCheck />Deep Learning: Neural networks, Convolutional Neural Networks (CNNs), Recurrent Neural Networks (RNNs).</p>
                                    <p><FaRegCircleCheck />Natural Language Processing (NLP): Text preprocessing, embeddings, sequence models.</p>
                                    <p><FaRegCircleCheck />Time Series Analysis: ARIMA, Prophet, LSTM for forecasting.</p>
                                    <p><FaRegCircleCheck />Anomaly Detection: Techniques for identifying rare events or outliers.</p>
                          

                                </div>
                            </div>
                        </div>




                        
                    </div>

                

                </div>
            </section>
            <Footer />
        </>
    )
}

export default Machine_Learning
