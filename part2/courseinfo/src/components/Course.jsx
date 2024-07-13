const Course = ({ course }) => {
  return (
    <>
      <h1>Web development curriculum</h1>
      {course.map((item) => {
        const totalExercises = item.parts.reduce((acc, val) => acc + val.exercises, 0)
        ;
        return (
          <div key={item.id}>
            <h3>{item.name}</h3>
            {item.parts.map((names) => {
              return (
                <p key={names.id}>
                  {names.name} {names.exercises}
                </p>
              );
            })}
            <strong>total of {totalExercises} exercises</strong>
          </div>
        );
      })}
    </>
  );
};


export default Course;
