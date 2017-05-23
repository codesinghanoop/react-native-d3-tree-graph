import React, { Component } from 'react';
import _ from 'lodash'
import { tx, ty, kx, ky } from './CoordinatePoints'
import Svg,{ G, Text, Rect } from 'react-native-svg'

export function DeployNodes(nodes)
{
  const rectNodes =    _.map(nodes,function (n,index) {
                              let text
                              if(n.name)
                              {
                                text = <Text
                                         fontSize={10}
                                         x={tx(n)} y={ty(n)} >{ n.name }</Text>
                                 return (<G key={'tree_' + index}>
                                          <Rect
                                            x={kx(n)}
                                            y={ky(n)}
                                            width="40"
                                            height="20"
                                            stroke="red"
                                            fill="white"
                                        /> 
                                        {text}
                                      </G>)
                              }        
                            })
                            
  return rectNodes                            
}