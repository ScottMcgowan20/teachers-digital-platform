import React from "react";

import C from "../../constants";
import ContentCriterionPage from "./ContentCriterionPage";
import UtilityCriterionPage from "./UtilityCriterionPage";
import QualityCriterionPage from "./QualityCriterionPage";
import EfficacyCriterionPage from "./EfficacyCriterionPage";
import StartCriterionPage from "./StartCriterionPage";

export default class SurveyPageContainer extends React.Component {

    render() {
        const pageProps = {
            currentPage:this.props.currentPage,
            criterionAnswers:this.props.criterionAnswers,
            criterionNotes:this.props.criterionNotes,
            changeCriterionAnswer:this.props.changeCriterionAnswer,
            changeCriterionNotes:this.props.changeCriterionNotes,
            clearLocalStorage:this.props.clearLocalStorage, 
            setDistinctiveComplete:this.props.setDistinctiveComplete, 
            curriculumTitle:this.props.curriculumTitle,
            publicationDate:this.props.publicationDate,
            gradeRange:this.props.gradeRange,
          };

        if (this.props.currentPage === C.CONTENT_PAGE) {
            return (<ContentCriterionPage {...pageProps} />);
        } else if (this.props.currentPage === C.UTILITY_PAGE) {
            return (<UtilityCriterionPage {...pageProps} /> );
        } else if (this.props.currentPage === C.QUALITY_PAGE) {
            return (<QualityCriterionPage {...pageProps} />);
        } else if (this.props.currentPage === C.EFFICACY_PAGE) {
            return (<EfficacyCriterionPage {...pageProps} />);
        } else {
            return (<StartCriterionPage  {...pageProps} />);
        }
    }
}
