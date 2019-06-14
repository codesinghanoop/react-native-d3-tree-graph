import React, { Component } from 'react';
import _ from 'lodash'
import { tx, ty, kx, ky } from './CoordinatePoints'
import Svg,{ G, Text, Rect, Image } from 'react-native-svg'

export function DeployNodes(nodes)
{
  const rectNodes =    _.map(nodes,function (n,index) {
                              let text, imageWidth, imageHeight;
                              imageWidth = n.nodeImageStyle ? n.nodeImageStyle.imageWidth : 50
                              imageHeight = n.nodeImageStyle ? n.nodeImageStyle.imageHeight : 50
                              if(n.name)
                              {
                                text = <Text
                                         x={tx(n)} y={ty(n) + imageHeight} {...n.nodeTextStyle} >{ n.name }</Text>
                                 return (<G key={'tree_' + index}>
                                          <Image
                                              x={kx(n)}
                                              y={ky(n)}
                                              width={imageWidth}
                                              height={imageHeight}
                                              {...n.nodeImageStyle}
                                              {...n.imageUrl}
                                          />
                                          {text}
                                      </G>)
                              }
                            })
  return rectNodes
}
