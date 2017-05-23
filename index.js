import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  ScrollView,
  Dimensions
} from 'react-native';

import Svg,{ Circle, G, Path, Text, Rect } from 'react-native-svg'
import * as d3 from "d3";
import _ from 'lodash'
import { flatten } from './FlatNodes'
import { NodeCurves } from './ConstructCurves'
import { DeployNodes } from './DeployNodes'
import { SiblingCurves } from './SiblingCurves'


var {height, width} = Dimensions.get('window');
var margin = {
top: 10,
right: 10,
bottom: 10,
left: 10
},
curves,siblingpath,rectNodes

export default class AwesomeHierarchyGraph extends Component {

  drawTree()
  {
    const { root, siblings } = this.props
// var root = {
//     name: "",
//     id: 1,
//     hidden: true,
//     children: [ {
//             name: "Q",
//             id: 16,
//             no_parent: true
//         },
//         {
//         name: "",
//         id: 2,
//         no_parent: true,
//         hidden: true,
//         children: [{
//             name: "J",
//             id: 12,
// 
//         }, {
//             name: "L",
//             id: 13,
//             no_parent: true
//         }, {
//             name: "C",
//             id: 3
//         }, {
//             name: "",
//             id: 4,
//             hidden: true,
//             no_parent: true,
//             children: [{
//                 name: "D",
//                 id: 5,
//             }, {
//                 name: "",
//                 id: 14,
//                 hidden: true,
//                 no_parent: true,
//                 children: [{
//                     name: "P",
//                     id: 15,
//                 }]
//             }, {
//                 name: "E",
//                 id: 6,
//             }]
//         }, {
//             name: "K",
//             id: 11
//         }, {
//             name: "G",
//             id: 7,
//             children: [{
//                 name: "H",
//                 id: 8,
//             }, {
//                 name: "I",
//                 id: 9,
//             }]
//         }]
//     }, {
//         name: "M",
//         id: 10,
//         no_parent: true,
//         children: [
//           
//         ]
//     },
//     {
//         name: "anoop",
//         id: 155,
//         no_parent: true,
//         children: [{
//             name: "H",
//             id: 8,
//         }, {
//             name: "I",
//             id: 9,
//         },
//         {
//             name: "I",
//             id: 9,
//         },
//         {
//             name: "I",
//             id: 9,
//         },
//         {
//             name: "I",
//             id: 9,
//         },
//         
//       ]
//     },
//     {
//             name: "x",
//             id: 16,
//             no_parent: true
//         }
//   
//   ]
// }

// var root = {
//   name: "",
//   id: 1,
//   hidden: true,
//   children: [{
//     name: "Mistress",
//     id: 9000,
//     no_parent: true
//   }, {
//     name: "",
//     id: 100,
//     no_parent: true,
//     hidden: true,
//     children: [{
//       name: "Hidden Son",
//       id: 9001
//     }]
//   }, {
//     name: "John",
//     id: 16,
//     no_parent: true
//   }, {
//     name: "",
//     id: 2,
//     no_parent: true,
//     hidden: true,
//     children: [
// 
// 
//       {
//         name: "Jeezy",
//         id: 12,
// 
//       }, {
//         name: "Leo",
//         id: 13,
//         no_parent: true
//       }, {
//         name: "Chopper",
//         id: 3
//       }, {
//         name: "",
//         id: 4,
//         hidden: true,
//         no_parent: true,
//         children: [{
//           name: "Dino",
//           id: 5,
//         }, {
//           name: "",
//           id: 14,
//           hidden: true,
//           no_parent: true,
//           children: [{
//             name: "Percy",
//             id: 15,
//           }]
//         }, {
//           name: "EazyE",
//           id: 6,
//         }]
//       }, {
//         name: "Khalid",
//         id: 11
//       }, {
//         name: "GFunk",
//         id: 7,
//         children: [{
//           name: "Hobo",
//           id: 8,
//         }, {
//           name: "Illiac",
//           id: 9,
//         }]
//       }
//     ]
//   }, {
//     name: "Megan",
//     id: 10,
//     no_parent: true,
//     children: [
// 
//     ]
//   }]
// }
var allNodes = flatten(root);

//This maps the siblings together mapping uses the ID using the blue line
// var siblings = [{
//     source: {
//         id: 3,
//         name: "C"
//     },
//     target: {
//         id: 11,
//         name: "K"
//     }
// }, {
//     source: {
//         id: 12,
//         name: "L"
//     },
//     target: {
//         id: 13,
//         name: "J"
//     }
// }, {
//     source: {
//         id: 5,
//         name: "D"
//     },
//     target: {
//         id: 6,
//         name: "E"
//     }
// }, {
//     source: {
//         id: 16,
//         name: "Q"
//     },
//     target: {
//         id: 10,
//         name: "M"
//     }
// }];

var tree = d3.layout.tree().size([1000, height]),
    nodes = tree.nodes(root),
    links = tree.links(nodes);


curves = NodeCurves(links)

siblingpath = SiblingCurves(siblings,allNodes)


rectNodes = DeployNodes(nodes)

    
}
  
  render() {
      this.drawTree()
    return (
      <ScrollView>
      <ScrollView horizontal>
        <Svg width={1000} height={1000}>
            <G>
                { siblingpath }
                { rectNodes }
                { curves }                
            </G>
        </Svg>
     </ScrollView>      
     </ScrollView>
        // {/*<Chart 
        //   points={[{x:100,y:15,id:0}, {x:300,y:115,id:1}, {x:300,y:15,id:2}]} 
        //   border = {true} 
        //   radius = {10}
        //   borderWidth = {4}
        //   lineWidth = {3}
        //   borderColor = 'black'
        //   selectedColor = 'blue'
        //   backgroundColor = 'white'
        //   height = {600}
        //   width = {600}
        //   yValues = {[20,15]}
        //   yText = ""
        //   textColor = "black"
        //   onClick = {this.pointClick.bind(this)}
        //   getData = {this.nextPointClick.bind(this)}
        //   />
        //   
        //   <Text>
        //       {this.state.touch}
        //     </Text>*/}
    

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('chartDemo', () => chartDemo);