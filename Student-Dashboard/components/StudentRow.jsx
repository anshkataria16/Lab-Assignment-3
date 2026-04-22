function StudentRow({ student, updateScore }) {
  const isPass = student.score >= 40;

  return (
    <tr className="row">
      <td className="name">{student.name}</td>

      <td className="score">{student.score}</td>

      <td>
        <span className={isPass ? "status pass" : "status fail"}>
          ● {isPass ? "PASS" : "FAIL"}
        </span>
      </td>

      <td className="update">
        <input
          type="number"
          defaultValue={student.score}
          onChange={(e) =>
            updateScore(student.id, Number(e.target.value))
          }
        />
        <button>SAVE</button>
      </td>
    </tr>
  );
}

export default StudentRow;