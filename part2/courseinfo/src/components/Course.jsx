const Course = ({ course }) => {
  const totalExercises = course.parts.reduce((acc, val) => acc + val.exercises, 0);
  return (
    <>
      <h1>{course.name}</h1>

      {course.parts.map((part) => (
        <>
          <p key={part.id}>
              {part.name} <span>{part.exercises}</span>
          </p>
        </>
      ))}

      <h3>total of {totalExercises} exercises</h3>
    </>
  );
};

export default Course;
