# react-native-d3-tree-graph
An implementation of d3 graph to construct flow chart(d3 topological graph(tree)).

**Latest version Release note**

 - Now images can be added in place of rectangles in all nodes.
 - Annoying issue with the previous version was collision between react-native-svg versions and it's resolved now.
 - New props are available to style node which will be included along with node object like below.
   ```{
            name: "J",
            id: 12,
            imageUrl: { href: { uri: "https://facebook.github.io/react-native/docs/assets/favicon.png"}}, //new prop
            nodeImageStyle: { imageHeight: 60 , imageWidth: 60, opacity: 1 }, //new prop
            nodeTextStyle: { fontSize: 12 } //new prop
   }```
 - Example is upgraded to latest version of react native i.e 0.59.9 and react-native-svg i.e 9.5.1
 
**A big thanks to SUI for giving me this idea of upgrading library to show images**


**Try the example app

![](https://github.com/codesinghanoop/react-native-d3-tree-graph/blob/master/Images/androidExample.png)

![](https://github.com/codesinghanoop/react-native-d3-tree-graph/blob/master/Images/iOSExample.png)
 
**Getting Started**

 - Step 1- npm install react-native-d3-tree-graph --save
 - Step 2 - npm install react-native-svg --save
 - Step 3- react-native link react-native-svg
 - Step 4- Build the project and watch the beauty.
 
----------

**Usage**
Note: For proper understanding see the [example][1]

    import AwesomeHierarchyGraph from 'react-native-d3-tree-graph'
    
    var root = {
        name: "",
        id: 1,
        hidden: true,
        children: [ {
                name: "Q",
                id: 16,
                no_parent: true
            }]
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
     }]
     
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

----------

**Properties**

|  Name         | Type          |
| ------------- |:-------------:| 
| root   | PropTypes.object|
| siblings      | propTypes.array |

----------

**Todo list:-**    

 -  Callbacks.

 -  Add animation to the graph

 -  Add test    

----------

**Author**

    Anoop Singh (codesingh)
    Email: anoop100singh@gmail.com
    Stack Overflow: codesingh(username)
    
----------    

**License**
    
MIT


  [1]: https://github.com/codesinghanoop/react-native-d3-tree-graph/tree/master/example
