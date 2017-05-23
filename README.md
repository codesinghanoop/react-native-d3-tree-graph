# react-native-d3-tree-graph
An implementation of d3 graph to construct flow chart(d3 topological graph(tree)).

**Getting Started**

 - Step 1- npm install react-native-d3-tree-graph --save
 - Step 2- react-native link react-native-svg
 - Step 3- Build the project and watch the beauty.
 
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

 -  Props to handle styling of nodes.

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
