import React, { Component } from 'react';
import _ from 'lodash'
import { JoinPaths } from './ZigZagUtil'
import Svg,{ Path } from 'react-native-svg'

export function NodeCurves(links)
{
  const nodePath =  _.map(links,function (d,i) {
                      return <Path key={'curves_' + i} d={ JoinPaths(d) } fill="none" stroke={'#000'} />
                  })
                  
  return nodePath                
}