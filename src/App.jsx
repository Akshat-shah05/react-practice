import './app.css'

{/* 

<Fragment key={person.id}> 

when you want to add a key to a whole section of returned code, but want to return the code inside a fragment,
you can use this syntax, by importing: import { Fragment } from 'react'
note that <></> and <Fragment> </Fragment> are equivalent, but Fragment takes in a key (useful for dynamic rendering)
//# also, note that fragments disappear from the DOM tree

//^ if your data is coming from a database, the data usually comes w a key that you can use
//* If you made your own data, you can use uuid() to generate a random key!

//!Rules of keys 
- Keys must be unique among siblings. However, it’s okay to use the same keys for JSX nodes in different arrays.
- Keys must not change or that defeats their purpose! Don’t generate them while rendering (don't use Math.random())
- Also AVOID using the array index as the key, as if the array is sorted, or smth is inserted, it messes up the keys in a subtle manner, making hard to find bugs


*/}

function List(props) {

  if (!props.animals) {
    return <div>Loading...</div>
  }

  else if (props.animals.length === 0) {
    return <div> There are no animals in the list! </div>
  }

  return (
    <>
      <ul>
        {props.animals.map((animal) => {
          return animal.startsWith("l") && <li key={animal}>{animal}</li>;
        })}
      </ul>
    </>
  );
}

function App() {
  const animals = ['lion', 'tiger', 'hippo', 'lizard'];

  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />
    </div>
  );
}

export default App
