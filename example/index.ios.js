/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import AwesomeHierarchyGraph from './AwesomeHierarchyGraph.js'

var root = {
    name: "",
    id: 1,
    hidden: true,
    children: [ {
            name: "Q",
            id: 16,
            no_parent: true
        },
        {
        name: "",
        id: 2,
        no_parent: true,
        hidden: true,
        children: [{
            name: "J",
            id: 12,

        }, {
            name: "L",
            id: 13,
            no_parent: true
        }, {
            name: "C",
            id: 3
        }, {
            name: "",
            id: 4,
            hidden: true,
            no_parent: true,
            children: [{
                name: "D",
                id: 5,
            }, {
                name: "",
                id: 14,
                hidden: true,
                no_parent: true,
                children: [{
                    name: "P",
                    id: 15,
                }]
            }, {
                name: "E",
                id: 6,
            }]
        }, {
            name: "K",
            id: 11
        }, {
            name: "G",
            id: 7,
            children: [{
                name: "H",
                id: 8,
            }, {
                name: "I",
                id: 9,
            }]
        }]
    }, {
        name: "M",
        id: 10,
        no_parent: true,
        children: [
          
        ]
    },
    {
        name: "anoop",
        id: 155,
        no_parent: true,
        children: [{
            name: "H",
            id: 8,
        }, {
            name: "I",
            id: 9,
        },
        {
            name: "I",
            id: 9,
        },
        {
            name: "I",
            id: 9,
        },
        {
            name: "I",
            id: 9,
        },
        
      ]
    },
    {
            name: "x",
            id: 16,
            no_parent: true
        }
  
  ]
}

var siblings = [{
    source: {
        id: 3,
        name: "C"
    },
    target: {
        id: 11,
        name: "K"
    }
}, {
    source: {
        id: 12,
        name: "L"
    },
    target: {
        id: 13,
        name: "J"
    }
}, {
    source: {
        id: 5,
        name: "D"
    },
    target: {
        id: 6,
        name: "E"
    }
}, {
    source: {
        id: 16,
        name: "Q"
    },
    target: {
        id: 10,
        name: "M"
    }
}];


export default class example extends Component {
  render() {
    return (
        <View style={styles.container}>
        <AwesomeHierarchyGraph
         root = {root}
         siblings = {siblings}
        />
       </View>
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

AppRegistry.registerComponent('example', () => example);
