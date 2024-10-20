// const Header = (props) => {
//   return (
//     <>
//     <h1>{props.name}</h1>
//     </>
//   )
// } 

// const Part = (props) => {
//   return (
//     <>
//       <p>
//         {props.name} {props.exercises}
//       </p>
//     </>
//   )
// }

// const Content = (props) => {
//   return (
//     <>
     
//       <Part name={props.parts[0]['name']} exercises={props.parts[0]['exercises']} />
//       <Part name={props.parts[1]['name']} exercises={props.parts[1]['exercises']} />
//       <Part name={props.parts[2]['name']} exercises={props.parts[2]['exercises']} />
      
//     </>
//   )
// }

// const Total = (props) => {
//   let sum = 0
//   props.parts.forEach(value => sum += value['exercises'])
//   return (
//     <>
//       {/* <h2>Number of exercises {props.parts[0]['exercises'] + props.parts[1]['exercises'] + props.parts[2]['exercises']}</h2> */}
//       <h1>Number of exercises {sum}</h1>
//     </>
//   )
// }



// const App = () => {
//   const course = 'Half Stack application development'
//   const parts = [
//   {
//     name: 'Fundamentals of React',
//     exercises: 10
//   },
//   {
//     name: 'Using props to pass data',
//     exercises: 7
//   },
//   {
//     name: 'State of a component',
//     exercises: 14
//   }
// ]

//   return (
//     <div>
//       <Header name={course} />
      
//       {/* <Content part={part1} exercises={exercises1} />
//       <Content part={part2} exercises={exercises2} />
//       <Content part={part3} exercises={exercises3} /> */}
      
//       <Content parts = {parts} />  


//       <Total parts={parts} />
//     </div>
//   )
// }


// everything above is upto exercise 1.4, working correctly



const Header = (props) => {
  return (
    <>
    <h1>{props.name}</h1>
    </>
  )
} 

const Part = (props) => {
  return (
    <>
      <p>
        {props.name} {props.exercises}
      </p>
    </>
  )
}

const Content = (props) => {
  return (
    <>
     
      <Part name={props.parts[0]['name']} exercises={props.parts[0]['exercises']} />
      <Part name={props.parts[1]['name']} exercises={props.parts[1]['exercises']} />
      <Part name={props.parts[2]['name']} exercises={props.parts[2]['exercises']} />
      
    </>
  )
}

const Total = (props) => {
  let sum = 0
  props.parts.forEach(value => sum += value['exercises'])
  return (
    <>
      {/* <h2>Number of exercises {props.parts[0]['exercises'] + props.parts[1]['exercises'] + props.parts[2]['exercises']}</h2> */}
      <h1>Number of exercises {sum}</h1>
    </>
  )
}



const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header name={course['name']} />
  
      
      <Content parts = {course['parts']} />  


      <Total parts={course['parts']} />
    </div>
  )
}



export default App