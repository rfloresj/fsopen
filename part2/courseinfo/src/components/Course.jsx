const Course = ({ course }) => {
  return (
    <>
      <h1>Web development curriculum</h1>
      {course.map((item) => {
        const totalExercises = item.parts.reduce((acc, val) => acc + val.exercises, 0)
        ;
        return (
          <>
            <h3 key={item.id}>{item.name}</h3>
            {item.parts.map((names) => {
              return (
                <p key={names.id}>
                  {names.name} <span>{names.exercises}</span>
                </p>
              );
            })}
            <strong>total of {totalExercises} exercises</strong>
          </>
        );
      })}
    </>
  );
};

export default Course;
