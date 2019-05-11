import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types'
import styled from 'styled-components';

const TabsDiv = styled.div`
border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;`

  const TopicsDiv = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;`

  const TopicsTitleSpan = styled.span`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;`

const Tabs = props => {
  const tabItems = props.tabs.map(tab => 
    <Tab tab = {tab} selectedTab = {props.selectedTab} 
        selectTabHandler = {props.selectTabHandler} key={tab} />);
  return (
    <TabsDiv>
      <TopicsDiv>
        <TopicsTitleSpan>TRENDING TOPICS:</TopicsTitleSpan>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
            {tabItems}
      </TopicsDiv>
    </TabsDiv>
  );
};

// Make sure to use PropTypes to validate your types!
Tab.propTypes = {
  tab: PropTypes.arrayOf(PropTypes.string)
  }
export default Tabs;
