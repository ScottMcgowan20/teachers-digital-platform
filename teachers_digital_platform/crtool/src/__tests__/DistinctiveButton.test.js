import React from 'react';
import C from '../js/constants';
import DistinctiveButton from '../js/components/distinctives/DistinctiveButton';
import renderer from 'react-test-renderer';

test('DistinctiveButton uses state to populate values', () => {
  const distinctiveProps = {
    title:"Quality",
    criteria:"5 criteria",
    estimatedtime:"Est. time 30 min",
    description:"Accurate and well presented",
    distinctive:C.QUALITY_DISTINCTIVE,
    inProgress:"",
  }

  function distinctiveClicked() {
    console.log('distinctiveClicked');
  }

  const component = renderer.create(
    <DistinctiveButton distinctiveClicked={distinctiveClicked.bind(this)} {...distinctiveProps}/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onClick(C.QUALITY_DISTINCTIVE);
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});