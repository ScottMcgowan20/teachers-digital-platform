import React from "react";

import C from "../../constants.js"

export default class ContentCriterionPage extends React.Component {
    changeCriterionAnswer(key, checkedValue) {
        this.props.changeCriterionAnswer(C.CONTENT_PAGE, key, checkedValue);
    }   

    changeCriterionNotes(key, textValue) {        
        this.props.changeCriterionNotes(C.CONTENT_PAGE, key, textValue);
    }  

    clearLocalStorage() {
        this.props.clearLocalStorage();
    }

    handleSummaryButtonClick() {
        this.props.setDistinctiveComplete(C.CONTENT_PAGE);
        //TODO: navigate to Content Summary Page
    }

    render() {
        return (
          <div>
            <hr className="hr
                        u-mb45
                        u-mt30" />
            <h2 className="h1">
                <span className="a-icon a-icon__large"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1200" className="cf-icon-svg"><path d="M379.9 493.6c-.7 0-1.5 0-2.2-.1-.7 0-1.5-.1-2.2-.2s-1.5-.2-2.2-.3c-.7-.1-1.5-.2-2.2-.4-.7-.1-1.4-.3-2.2-.5l-2.1-.6c-.7-.2-1.4-.4-2.1-.7-.7-.2-1.4-.5-2.1-.8s-1.3-.6-2-.9-1.3-.6-2-1c-.6-.3-1.3-.7-1.9-1.1s-1.3-.8-1.9-1.2c-.6-.4-1.2-.8-1.8-1.3-.6-.4-1.2-.9-1.8-1.4-.6-.5-1.1-.9-1.7-1.4-.5-.5-1.1-1-1.6-1.5s-1-1.1-1.5-1.6-1-1.1-1.4-1.7c-.5-.6-.9-1.2-1.4-1.7-.4-.6-.9-1.2-1.3-1.8-.4-.6-.8-1.2-1.2-1.9-.4-.6-.7-1.3-1.1-1.9-.3-.6-.7-1.3-1-2s-.6-1.3-.9-2-.5-1.4-.8-2c-.2-.7-.5-1.4-.7-2.1l-.6-2.1c-.2-.7-.3-1.4-.5-2.2-.1-.7-.3-1.4-.4-2.2-.1-.7-.2-1.5-.3-2.2-.1-.7-.1-1.5-.2-2.2 0-.7-.1-1.5-.1-2.2s0-1.5.1-2.2c0-.7.1-1.5.2-2.2s.2-1.5.3-2.2c.1-.7.2-1.4.4-2.2.2-.7.3-1.4.5-2.1l.6-2.1c.2-.7.5-1.4.7-2.1s.5-1.4.8-2.1.6-1.4.9-2c.3-.7.7-1.3 1-2 .3-.6.7-1.3 1.1-1.9s.8-1.3 1.2-1.9c.4-.6.8-1.2 1.3-1.8.4-.6.9-1.2 1.4-1.7.5-.6 1-1.1 1.4-1.7.5-.5 1-1.1 1.5-1.6s1.1-1 1.6-1.5 1.1-1 1.7-1.4c.6-.5 1.2-.9 1.8-1.4.6-.4 1.2-.9 1.8-1.3.6-.4 1.2-.8 1.9-1.2.6-.4 1.3-.7 1.9-1.1.6-.3 1.3-.7 2-1s1.3-.6 2-.9 1.4-.5 2.1-.8c.7-.2 1.4-.5 2.1-.7l2.1-.6c.7-.2 1.4-.3 2.2-.5.7-.1 1.5-.3 2.2-.4s1.5-.2 2.2-.3c.7-.1 1.5-.1 2.2-.2 1.5-.1 3-.1 4.4 0 .7 0 1.5.1 2.2.2s1.5.2 2.2.3c.7.1 1.5.2 2.2.4.7.1 1.4.3 2.2.5l2.1.6c.7.2 1.4.5 2.1.7s1.4.5 2 .8c.7.3 1.4.6 2 .9.7.3 1.3.6 2 1 .6.3 1.3.7 1.9 1.1s1.2.8 1.9 1.2c.6.4 1.2.8 1.8 1.3.6.4 1.2.9 1.8 1.4.6.5 1.1 1 1.7 1.4.5.5 1.1 1 1.6 1.5s1 1.1 1.5 1.6 1 1.1 1.5 1.7.9 1.1 1.4 1.7c.4.6.9 1.2 1.3 1.8.4.6.8 1.2 1.2 1.9.4.6.7 1.3 1.1 1.9.3.6.7 1.3 1 2s.6 1.3.9 2 .5 1.4.8 2.1c.2.7.5 1.4.7 2.1l.6 2.1c.2.7.3 1.4.5 2.1.1.7.3 1.5.4 2.2s.2 1.5.3 2.2c.1.7.1 1.5.2 2.2 0 .7.1 1.5.1 2.2s0 1.5-.1 2.2c0 .7-.1 1.5-.2 2.2s-.2 1.5-.3 2.2c-.1.7-.2 1.5-.4 2.2-.1.7-.3 1.4-.5 2.2l-.6 2.1c-.2.7-.4 1.4-.7 2.1-.2.7-.5 1.4-.8 2-.3.7-.6 1.4-.9 2-.3.7-.6 1.3-1 2-.3.7-.7 1.3-1.1 1.9s-.8 1.3-1.2 1.9c-.4.6-.8 1.2-1.3 1.8-.4.6-.9 1.2-1.4 1.7-.5.6-1 1.1-1.5 1.7s-1 1.1-1.5 1.6-1.1 1-1.6 1.5-1.1 1-1.7 1.4c-.6.5-1.2.9-1.8 1.4-.6.4-1.2.9-1.8 1.3-.6.4-1.2.8-1.9 1.2-.6.4-1.3.7-1.9 1.1-.7.3-1.3.7-2 1s-1.3.6-2 .9-1.4.5-2 .8c-.7.2-1.4.5-2.1.7l-2.1.6c-.7.2-1.4.3-2.2.5-.7.1-1.5.3-2.2.4s-1.5.2-2.2.3c-.7.1-1.5.1-2.2.2-.7.1-1.5.1-2.2.1zM331.6 681.2h329.3v40H331.6z"/><circle cx="380.1" cy="448.8" r="45.2"/><path d="M331.6 782.8h329.3v40H331.6zM331.6 579.5h329.3v40H331.6z"/><path d="M500 105.2c-276.1 0-500 223.9-500 500s223.9 500 500 500 500-223.9 500-500-223.9-500-500-500zm230.8 794.5c0 11-9 20-20 20H290.3c-11 0-20-9-20-20V312.4c0-11 9-20 20-20l239.2.2v166.3c0 16.8 13.8 30.6 30.6 30.6h171.3l-.6 410.2zm.6-456.5H575.8V292.7l155.5 150.1v.4h.1z"/></svg></span>
                &nbsp;Content
            </h2>
            <p className="lead-paragraph">
                This dimension assesses whether the curriculum content helps students develop knowledge, skills, and behaviors that are important for financial capability. Evaluation criteria are based on research and major national and state education standards.
            </p>
            <h3 className="h2">Instructions</h3>
            <ul>
                <li>Read through the scope and sequence of the curriculum.</li>
                <li>Skim the lesson plans.</li>
                <li>Select <b><em>yes</em></b> for the components that are addressed, and <b><em>no</em></b> for those that are not.</li>
            </ul>
            <div className="m-notification
                        m-notification__visible
                        u-mb30
                        u-mt30">
                <div className="m-notification_content">
                    <div className="m-notification_message">
                        <h4>This dimension has <em>essential</em> and <em>beneficial</em> components.</h4>
                        <p><b><em>Essential components</em></b> have been shown to positively impact student learning.<br /><b><em>Beneficial components</em></b> hold promise for positive impact on student learning, but may be more relevant and useful for some reviewers. Beneficial components are marked with a note; all others are essential. You must answer all components.</p>
                    </div>
                </div>
            </div>
            <hr className="hr
                        u-mb30
                        u-mt30" />
            <div className="block block__flush-top">
                <h3 className="h2">
                    <span className="a-icon a-icon__large a-icon__green"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1200" className="cf-icon-svg"><path d="M500 105.2c-276.1 0-500 223.9-500 500s223.9 500 500 500 500-223.9 500-500-223.9-500-500-500zm259 284.2L481.4 870.3c-8.2 14.1-22.7 23.4-39 24.8-1.4.1-2.9.2-4.3.2-14.8 0-28.9-6.6-38.4-18L244.4 690.9c-17.9-21-15.4-52.6 5.7-70.5 21-17.9 52.6-15.4 70.5 5.7.2.3.5.5.7.8l109.4 131.4 241.8-418.8c13.6-24 44.2-32.4 68.2-18.8 24 13.6 32.4 44.2 18.8 68.2l-.5.5z"/></svg></span>
                    Criterion 1: Completed criterion <span className="u-fc-gray">(complete)</span>
                </h3>
                <p className="lead-paragraph">
                    Does the curriculum address grade-level appropriate topics for saving and investing?
                </p>
                <ol className="m-list__unstyled">
                    <li className="o-survey">
                        <div className="o-survey_number">
                            <h4 className="h3">1.1</h4>
                        </div>
                        <div className="o-survey_indicator">
                            <h5 className="h3">Indicator</h5>
                            <p>People save for the future, and might have different goals for saving and make different choices about how to save.</p>
                        </div>
                        <div className="o-survey_components">
                            <h5 className="h3">Component</h5>
                            <div className="o-survey_component">
                                <div className="o-survey_question">
                                    <p>One can save money in various ways, including home in a piggy bank or at a commercial union, or savings and loan institution.</p>
                                </div>
                                <div className="o-survey_answer">
                                    <div className="m-form-field
                                                m-form-field__radio
                                                m-form-field__lg-target">
                                        <input className="a-radio" id="crt-question_1a" type="radio" name="crt-question-1" value="1" 
                                            checked={this.props.criterionAnswers["content-crt-quesion-1.1"] === 'yes'}
                                            onChange={() => {this.changeCriterionAnswer('content-crt-quesion-1.1', 'yes')}} />
                                        <label className="a-label" htmlFor="crt-question_1a">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="m-form-field
                                                m-form-field__radio
                                                m-form-field__lg-target">
                                        <input className="a-radio" id="crt-question_1b" type="radio" name="crt-question-1" value="0" 
                                            checked={this.props.criterionAnswers["content-crt-quesion-1.1"] === 'no'}
                                            onChange={() => {this.changeCriterionAnswer('content-crt-quesion-1.1', 'no')}} />
                                        <label className="a-label" htmlFor="crt-question_1b">
                                            No
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="o-survey_component">
                                <div className="o-survey_question">
                                    <p>Saving helps individuals act on future opportunities, meet short-term and long-term goals, and address financial emergencies.</p>
                                    <p className="o-survey_question-helper">Beneficial, but not essential.</p>
                                </div>
                                <div className="o-survey_answer">
                                    <div className="m-form-field
                                                m-form-field__radio
                                                m-form-field__lg-target">
                                        <input className="a-radio" id="crt-question_2a" type="radio" name="crt-question-2" value="1" 
                                            checked={this.props.criterionAnswers["content-crt-quesion-1.2"] === 'yes'}
                                            onChange={() => {this.changeCriterionAnswer('content-crt-quesion-1.2', 'yes')}} />
                                        <label className="a-label" htmlFor="crt-question_2a">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="m-form-field
                                                m-form-field__radio
                                                m-form-field__lg-target">
                                        <input className="a-radio" id="crt-question_2b" type="radio" name="crt-question-2" value="0" 
                                            checked={this.props.criterionAnswers["content-crt-quesion-1.2"] === 'no'}
                                            onChange={() => {this.changeCriterionAnswer('content-crt-quesion-1.2', 'no')}}/>
                                        <label className="a-label" htmlFor="crt-question_2b">
                                            No
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="o-survey">
                        <div className="o-survey_number">
                            <h4 className="h3">1.2</h4>
                        </div>
                        <div className="o-survey_indicator">
                            <h5 className="h3">Indicator</h5>
                            <p>Compound interest affects the value of savings.</p>
                        </div>
                        <div className="o-survey_components">
                            <h5 className="h3">Component</h5>
                            <div className="o-survey_component">
                                <div className="o-survey_question">
                                    <p>Saving money in a bank or credit union allows the money to earn interest.</p>
                                </div>
                                <div className="o-survey_answer">
                                    <div className="m-form-field
                                                m-form-field__radio
                                                m-form-field__lg-target">
                                        <input className="a-radio" id="crt-question_3a" type="radio" name="crt-question-3" value="1" 
                                            checked={this.props.criterionAnswers["content-crt-quesion-1.3"] === 'yes'}
                                            onChange={() => {this.changeCriterionAnswer('content-crt-quesion-1.3', 'yes')}} />
                                        <label className="a-label" htmlFor="crt-question_3a">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="m-form-field
                                                m-form-field__radio
                                                m-form-field__lg-target">
                                        <input className="a-radio" id="crt-question_3b" type="radio" name="crt-question-3" value="0" 
                                            checked={this.props.criterionAnswers["content-crt-quesion-1.3"] === 'no'}
                                            onChange={() => {this.changeCriterionAnswer('content-crt-quesion-1.3', 'no')}} />
                                        <label className="a-label" htmlFor="crt-question_3b">
                                            No
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="o-survey">
                        <div className="o-survey_number">
                            <h4 className="h3">1.3</h4>
                        </div>
                        <div className="o-survey_indicator">
                            <h5 className="h3">Indicator</h5>
                            <p>Investments involve purchase of financial assets to increase wealth.</p>
                        </div>
                        <div className="o-survey_components">
                            <h5 className="h3">Component</h5>
                            <div className="o-survey_component">
                                <div className="o-survey_question">
                                    <p>The goal of savings is to set aside income for future spending, whereas the goal of investing is to increase wealth over time.</p>
                                </div>
                                <div className="o-survey_answer">
                                    <div className="m-form-field
                                                m-form-field__radio
                                                m-form-field__lg-target">
                                        <input className="a-radio" id="crt-question_4a" type="radio" name="crt-question-4" value="1" 
                                            checked={this.props.criterionAnswers["content-crt-quesion-1.4"] === 'yes'}
                                            onChange={() => {this.changeCriterionAnswer('content-crt-quesion-1.4', 'yes')}} />
                                        <label className="a-label" htmlFor="crt-question_4a">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="m-form-field
                                                m-form-field__radio
                                                m-form-field__lg-target">
                                        <input className="a-radio" id="crt-question_4b" type="radio" name="crt-question-4" value="0" 
                                            checked={this.props.criterionAnswers["content-crt-quesion-1.4"] === 'no'}
                                            onChange={() => {this.changeCriterionAnswer('content-crt-quesion-1.4', 'no')}} />
                                        <label className="a-label" htmlFor="crt-question_4b">
                                            No
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ol>
                <div className="m-form-field m-form-field__textarea">
                    <label className="a-label a-label__heading" htmlFor="crt-notes-1">
                        My notes
                        <small className="a-label_helper">(optional)</small>
                        <small className="a-label_helper a-label_helper__block">
                                Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, pho number, email address, Social Security number, etc.
                        </small>
                    </label>
                    <textarea className="a-text-input
                                    a-text-input__full"
                                id="crt-notes-1"
                                rows="6"
                                value={this.props.criterionNotes['content-crt-notes-1']} 
                                onChange={e=>this.changeCriterionNotes('content-crt-notes-1', e.target.value)} >
                    </textarea>
                </div>
            </div>
            <div className="block block__flush-top">
                <h3 className="h2">Criterion 2: In progress criterion</h3>
                <p className="lead-paragraph">
                    Does the curriculum address grade-level appropriate topics for earning, income, and careers?
                </p>
                <ol className="m-list__unstyled">
                    <li className="o-survey">
                        <div className="o-survey_number">
                            <h4 className="h3">2.1</h4>
                        </div>
                        <div className="o-survey_indicator">
                            <h5 className="h3">Indicator</h5>
                            <p>Sources of income include wages, salaries, and benefits, as well as interest, rent, and profits.</p>
                        </div>
                        <div className="o-survey_components">
                            <h5 className="h3">Component</h5>
                            <div className="o-survey_component">
                                <div className="o-survey_question">
                                    <p>Income is money earned from employment and investments.</p>
                                </div>
                                <div className="o-survey_answer">
                                    <div className="m-form-field
                                                m-form-field__radio
                                                m-form-field__lg-target">
                                        <input className="a-radio" id="crt-question_5a" type="radio" name="crt-question-5" value="1" 
                                            checked={this.props.criterionAnswers["content-crt-quesion-1.5"] === 'yes'}
                                            onChange={() => {this.changeCriterionAnswer('content-crt-quesion-1.5', 'yes')}} />
                                        <label className="a-label" htmlFor="crt-question_5a">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="m-form-field
                                                m-form-field__radio
                                                m-form-field__lg-target">
                                        <input className="a-radio" id="crt-question_5b" type="radio" name="crt-question-5" value="0" 
                                            checked={this.props.criterionAnswers["content-crt-quesion-1.5"] === 'no'}
                                            onChange={() => {this.changeCriterionAnswer('content-crt-quesion-1.5', 'no')}} />
                                        <label className="a-label" htmlFor="crt-question_5b">
                                            No
                                        </label>
                                    </div>
                                    <div className="m-form-field
                                                m-form-field__radio
                                                m-form-field__lg-target">
                                        <input className="a-radio" id="crt-question_5c" type="radio" name="crt-question-5" value="0" 
                                            checked={this.props.criterionAnswers["content-crt-quesion-1.5"] === 'na'}
                                            onChange={() => {this.changeCriterionAnswer('content-crt-quesion-1.5', 'na')}} />
                                        <label className="a-label" htmlFor="crt-question_5c">
                                            N/A
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="o-survey">
                        <div className="o-survey_number">
                            <h4 className="h3">2.2</h4>
                        </div>
                        <div className="o-survey_indicator">
                            <h5 className="h3">Indicator</h5>
                            <p>People can change their income by acquiring more education, work experience, and skills.</p>
                        </div>
                        <div className="o-survey_components">
                            <h5 className="h3">Component</h5>
                            <div className="o-survey_component">
                                <div className="o-survey_question">
                                    <p>Various jobs and careers provide different levels of income and require different kinds of skills.</p>
                                </div>
                                <div className="o-survey_answer">
                                    <div className="m-form-field
                                                m-form-field__radio
                                                m-form-field__lg-target">
                                        <input className="a-radio" id="crt-question_6a" type="radio" name="crt-question-6" value="1" 
                                            checked={this.props.criterionAnswers["content-crt-quesion-1.6"] === 'yes'}
                                            onChange={() => {this.changeCriterionAnswer('content-crt-quesion-1.6', 'yes')}} />
                                        <label className="a-label" htmlFor="crt-question_6a">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="m-form-field
                                                m-form-field__radio
                                                m-form-field__lg-target">
                                        <input className="a-radio" id="crt-question_6b" type="radio" name="crt-question-6" value="0" 
                                            checked={this.props.criterionAnswers["content-crt-quesion-1.6"] === 'no'}
                                            onChange={() => {this.changeCriterionAnswer('content-crt-quesion-1.6', 'no')}} />
                                        <label className="a-label" htmlFor="crt-question_6b">
                                            No
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ol>
                <div className="m-form-field m-form-field__textarea">
                    <label className="a-label a-label__heading" htmlFor="crt-notes-2">
                        My notes <small className="a-label_helper">(optional)</small>
                    </label>
                    <p className="u-mb15"><small>Anything you want to note about this criterion? Please do not share any Personally Identifiable Information (PII), including, but not limited to, your name, address, pho number, email address, Social Security number, etc.</small></p>
                    <textarea className="a-text-input
                                    a-text-input__full
                                    u-mw670"
                                id="crt-notes-2"
                                rows="6"
                                value={this.props.criterionNotes['content-crt-notes-2']} 
                                onChange={e=>this.changeCriterionNotes('content-crt-notes-2', e.target.value)} >
                    </textarea>
                </div>
            </div>
            <div className="block block__flush-top">
                <h3 className="h2">
                    <button className="a-btn
                                    a-btn__heading">
                        <span className="a-icon a-icon__large"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1200" className="cf-icon-svg"><path d="M500 105.2c-276.1 0-500 223.9-500 500s223.9 500 500 500 500-223.9 500-500-223.9-500-500-500zm263.1 550.7H549.6v213.6c0 27.6-22.4 50-50 50s-50-22.4-50-50V655.9H236c-27.6 0-50-22.4-50-50s22.4-50 50-50h213.6V342.3c0-27.6 22.4-50 50-50s50 22.4 50 50v213.6h213.6c27.6 0 50 22.4 50 50s-22.5 50-50.1 50z"/></svg></span>
                        Criterion 3: Unopened criterion
                    </button>
                </h3>
            </div>
            <div className="l-survey-top"><a href="#">Can I save my work?</a></div>
                <h2 className="h4">You’re Reviewing: <b>Head Start Financial Literacy Curriculum</b></h2>
            </div>
        );
    }
}
