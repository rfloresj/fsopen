const Course = ({ course }) => {
  return (
    <>
      <h1>{course.name}</h1>

      {course.parts.map((part) => (
        <p key={part.id}>
          <strong>
            {part.name} <span>{part.exercises}</span>
          </strong>
        </p>
      ))}
    </>
  );
};

export default Course;
